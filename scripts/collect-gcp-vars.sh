#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------------------------
# collect-gcp-vars.sh
# Helper to collect GCP/GitLab CI variables for WIF-based deployments.
# Prints a ready-to-copy dotenv block and basic environment diagnostics.
# ------------------------------------------------------------------------------
#
# Usage:
#   bash scripts/collect-gcp-vars.sh \
#     --project-id your-project-id \
#     --region asia-northeast3 \
#     --ar-repo hyper-repo \
#     --frontend-service hyper-frontend \
#     --backend-service hyper-backend \
#     --wif-pool-id gitlab-pool \
#     --wif-provider-id gitlab-oidc \
#     --gitlab-project-path namespace/repo \
#     --main-branch main
#
# Flags are optional; sensible defaults/auto-detection will be used if omitted.
#
# Requirements:
#   - gcloud CLI installed and authenticated for read-only discovery (optional)
#   - Permissions to run gcloud describe/list on the project
#
# Notes:
#   - This script DOES NOT modify any GCP resources. It only reads/prints info.
#   - If ~/.config/gcloud was reset, some lookups may be unavailable until you
#     re-auth. You can still pass explicit values via flags.
# ------------------------------------------------------------------------------

PROJECT_ID=""
REGION="${REGION:-}"                   # allow env to predefine
AR_REPO="${AR_REPO:-hyper-repo}"
FRONTEND_SERVICE="${FRONTEND_SERVICE:-hyper-frontend}"
BACKEND_SERVICE="${BACKEND_SERVICE:-hyper-backend}"
WIF_POOL_ID="${WIF_POOL_ID:-gitlab-pool}"
WIF_PROVIDER_ID="${WIF_PROVIDER_ID:-gitlab-oidc}"
GITLAB_PROJECT_PATH="${GITLAB_PROJECT_PATH:-}"  # e.g., namespace/repo
MAIN_BRANCH="${MAIN_BRANCH:-main}"

print_help() {
  cat <<'EOF'
Usage: collect-gcp-vars.sh [options]

Options:
  --project-id VALUE           GCP project ID (auto-detects from gcloud config if omitted)
  --region VALUE               GCP region (e.g., us-central1, asia-northeast3). Optional.
  --ar-repo VALUE              Artifact Registry repo name (default: hyper-repo)
  --frontend-service VALUE     Cloud Run frontend service name (default: hyper-frontend)
  --backend-service VALUE      Cloud Run backend service name (default: hyper-backend)
  --wif-pool-id VALUE          WIF pool ID (default: gitlab-pool)
  --wif-provider-id VALUE      WIF provider ID (default: gitlab-oidc)
  --gitlab-project-path VALUE  GitLab project path, e.g., namespace/repo (optional)
  --main-branch VALUE          Main branch name (default: main)
  -h, --help                   Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project-id) PROJECT_ID="${2:-}"; shift 2 ;;
    --region) REGION="${2:-}"; shift 2 ;;
    --ar-repo) AR_REPO="${2:-}"; shift 2 ;;
    --frontend-service) FRONTEND_SERVICE="${2:-}"; shift 2 ;;
    --backend-service) BACKEND_SERVICE="${2:-}"; shift 2 ;;
    --wif-pool-id) WIF_POOL_ID="${2:-}"; shift 2 ;;
    --wif-provider-id) WIF_PROVIDER_ID="${2:-}"; shift 2 ;;
    --gitlab-project-path) GITLAB_PROJECT_PATH="${2:-}"; shift 2 ;;
    --main-branch) MAIN_BRANCH="${2:-}"; shift 2 ;;
    -h|--help) print_help; exit 0 ;;
    *) echo "Unknown option: $1" >&2; print_help; exit 1 ;;
  esac
done

have_gcloud() {
  command -v gcloud >/dev/null 2>&1
}

get_project_from_gcloud() {
  gcloud config get-value project 2>/dev/null | tr -d '\r'
}

get_project_number() {
  local pid="$1"
  gcloud projects describe "$pid" --format='value(projectNumber)' 2>/dev/null | tr -d '\r'
}

list_enabled_services() {
  gcloud services list --enabled --format='value(config.name)' 2>/dev/null || true
}

list_run_services() {
  gcloud run services list --platform=managed --format='table(name,region,url)' 2>/dev/null || true
}

list_artifact_repos() {
  gcloud artifacts repositories list --format='table(name,format,location)' 2>/dev/null || true
}

echo "==> Collecting GCP context..."
if [[ -z "$PROJECT_ID" ]]; then
  if have_gcloud; then
    PROJECT_ID="$(get_project_from_gcloud || true)"
  fi
fi

if [[ -z "$PROJECT_ID" ]]; then
  echo "!! PROJECT_ID not provided and could not auto-detect via gcloud."
  echo "   Re-run with: --project-id YOUR_PROJECT_ID"
  exit 1
fi

PROJECT_NUMBER=""
if have_gcloud; then
  PROJECT_NUMBER="$(get_project_number "$PROJECT_ID" || true)"
fi

if [[ -z "$PROJECT_NUMBER" ]]; then
  echo "!! Could not resolve PROJECT_NUMBER for project: $PROJECT_ID"
  echo "   Ensure gcloud is installed and you have permission to 'gcloud projects describe $PROJECT_ID'"
  exit 1
fi

WIF_PROVIDER_RESOURCE="projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${WIF_POOL_ID}/providers/${WIF_PROVIDER_ID}"

echo ""
echo "==> Basic project info"
echo "Project ID:       $PROJECT_ID"
echo "Project Number:   $PROJECT_NUMBER"
echo "Region:           ${REGION:-<not set>}"
echo "Artifact Repo:    $AR_REPO"
echo "Frontend Service: $FRONTEND_SERVICE"
echo "Backend Service:  $BACKEND_SERVICE"
echo "WIF Pool ID:      $WIF_POOL_ID"
echo "WIF Provider ID:  $WIF_PROVIDER_ID"
echo "WIF Resource:     $WIF_PROVIDER_RESOURCE"
echo "GitLab Path:      ${GITLAB_PROJECT_PATH:-<not set>}"
echo "Main Branch:      $MAIN_BRANCH"

echo ""
echo "==> Enabled services (subset)"
ENABLED_SERVICES="$(list_enabled_services)"
if [[ -n "$ENABLED_SERVICES" ]]; then
  echo "$ENABLED_SERVICES" | grep -E 'run.googleapis.com|artifactregistry.googleapis.com|iamcredentials.googleapis.com|iam.googleapis.com' || true
else
  echo "<unavailable - gcloud not configured or no access>"
fi

echo ""
echo "==> Cloud Run services (if any)"
RUN_SVCS="$(list_run_services)"
if [[ -n "$RUN_SVCS" ]]; then
  echo "$RUN_SVCS"
else
  echo "<none or unavailable>"
fi

echo ""
echo "==> Artifact Registry repositories (if any)"
AR_REPOS="$(list_artifact_repos)"
if [[ -n "$AR_REPOS" ]]; then
  echo "$AR_REPOS"
else
  echo "<none or unavailable>"
fi

echo ""
echo "==> Suggested GitLab CI variables (dotenv block)"
cat <<EOF
GCP_PROJECT_ID=$PROJECT_ID
GCP_PROJECT_NUMBER=$PROJECT_NUMBER
GCP_REGION=${REGION}
AR_REPO=$AR_REPO
WIF_POOL_ID=$WIF_POOL_ID
WIF_PROVIDER_ID=$WIF_PROVIDER_ID
WIF_PROVIDER_RESOURCE=$WIF_PROVIDER_RESOURCE
WIF_SERVICE_ACCOUNT=gitlab-deployer@${PROJECT_ID}.iam.gserviceaccount.com
FRONTEND_SERVICE=$FRONTEND_SERVICE
BACKEND_SERVICE=$BACKEND_SERVICE
MAIN_BRANCH=$MAIN_BRANCH
EOF

echo ""
echo "==> Next steps"
echo "- If REGION is empty above, choose one (e.g., us-central1, asia-northeast3) and set GCP_REGION."
echo "- If you do not have an Artifact Registry repo yet, create one:"
echo "    gcloud artifacts repositories create ${AR_REPO} --repository-format=docker --location=\$GCP_REGION --description=\"GitLab builds\""
echo "- Ensure required APIs are enabled:"
echo "    gcloud services enable run.googleapis.com artifactregistry.googleapis.com iamcredentials.googleapis.com iam.googleapis.com"
echo "- Create the deployer service account (if not created yet):"
echo "    gcloud iam service-accounts create gitlab-deployer --display-name=\"GitLab CI deployer\""
echo "- Assign roles:"
echo "    gcloud projects add-iam-policy-binding ${PROJECT_ID} --member=\"serviceAccount:gitlab-deployer@${PROJECT_ID}.iam.gserviceaccount.com\" --role=\"roles/run.admin\""
echo "    gcloud projects add-iam-policy-binding ${PROJECT_ID} --member=\"serviceAccount:gitlab-deployer@${PROJECT_ID}.iam.gserviceaccount.com\" --role=\"roles/artifactregistry.writer\""
echo "    gcloud projects add-iam-policy-binding ${PROJECT_ID} --member=\"serviceAccount:gitlab-deployer@${PROJECT_ID}.iam.gserviceaccount.com\" --role=\"roles/iam.serviceAccountUser\""
echo "- Prepare to create WIF pool/provider and bind principalSet with your GitLab project path when ready."

echo ""
echo "Done."


