#!/usr/bin/env bash
set -euo pipefail

# Reusable deployment script for Cloud Run
# Cloud Run 배포 재사용 스크립트
#
# Required env vars / 필요한 환경 변수:
# - GCP_PROJECT_ID
# - GCP_REGION
# - GAR_REPO
# - FRONTEND_SERVICE
# - BACKEND_SERVICE
# - IMAGE_TAG (default: latest)

IMAGE_TAG="${IMAGE_TAG:-latest}"

if [[ -z "${GCP_PROJECT_ID:-}" || -z "${GCP_REGION:-}" || -z "${GAR_REPO:-}" || -z "${FRONTEND_SERVICE:-}" || -z "${BACKEND_SERVICE:-}" ]]; then
  echo "Missing required environment variables. See script header."
  exit 1
fi

echo "Deploying frontend image tag: ${IMAGE_TAG}"
gcloud run deploy "${FRONTEND_SERVICE}" \
  --image "${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT_ID}/${GAR_REPO}/frontend:${IMAGE_TAG}" \
  --region "${GCP_REGION}" \
  --platform managed \
  --allow-unauthenticated \
  --port 80

FRONTEND_URL=$(gcloud run services describe "${FRONTEND_SERVICE}" --platform managed --region "${GCP_REGION}" --format='value(status.url)')
echo "Frontend URL: ${FRONTEND_URL}"

echo "Deploying backend image tag: ${IMAGE_TAG}"
gcloud run deploy "${BACKEND_SERVICE}" \
  --image "${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT_ID}/${GAR_REPO}/backend:${IMAGE_TAG}" \
  --region "${GCP_REGION}" \
  --platform managed \
  --allow-unauthenticated \
  --port 3000 \
  --set-env-vars "FRONTEND_URL=${FRONTEND_URL}"

echo "Deployment completed."


