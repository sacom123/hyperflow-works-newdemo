## HyperFlow Works (New_Hyper_flow)

Monorepo with React 19 (Vite) frontend and a Koa-based Node.js backend. The frontend is served via NGINX in production; the backend exposes health and demo APIs. Deploys to Google Cloud Run.

Reference: Documentation structure follows `HyperFlow-Works_demo`. [Link](https://github.com/sacom123/HyperFlow-Works_demo)

---

### Key Features
- Frontend: React 19, Ant Design 5, Vite, TypeScript, Vitest
- Backend: Koa 3, @koa/router, @koa/cors, koa-bodyparser
- APIs: `/health`, `/api/llm-models`
- Deploy: Cloud Run (Artifact Registry + Cloud Build)

### Structure
```
New_Hyper_flow/
├─ frontend/      # React (Vite)
├─ backend/       # Koa API
├─ scripts/       # deploy/tools
└─ figma-images/  # design assets
```

### Local Development
Requirements: Node.js 20+, pnpm, (optional) Docker
```bash
# Frontend
cd frontend && pnpm install && pnpm dev

# Backend
cd backend && pnpm install && pnpm dev
```
Default ports: Frontend 5173 / Backend 3000 (`FRONTEND_URL` default: http://localhost:5173)

### Scripts
```bash
# frontend
pnpm dev ; pnpm build ; pnpm preview ; pnpm test ; pnpm lint

# backend
pnpm dev ; pnpm start ; pnpm test
```

### API & Health
```bash
GET /health
GET /api/llm-models
```

### Environment Variables
- `frontend/.env`
  - `VITE_API_URL=http://localhost:3000/api`
- `backend/.env`
  - `PORT=3000`
  - `NODE_ENV=development`
  - `FRONTEND_URL=http://localhost:5173`
(Cloud Run injects `PORT` in production)

### Build
```bash
cd frontend && pnpm build
```
Docker (example)
```bash
cd frontend  && docker build -t <REG>/new-hyper-flow/frontend:latest .
cd ../backend && docker build -t <REG>/new-hyper-flow/backend:latest .
```

### Deploy (Cloud Run)
Recommended: Artifact Registry + Cloud Build + Cloud Run
```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com iamcredentials.googleapis.com
gcloud artifacts repositories create hyper-flow --repository-format=docker --location=asia-northeast3
```
Optional local deploy script
```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```
Recommended settings: Memory 512Mi / CPU 1 vCPU / Concurrency 80 / Timeout 300s / Min instances 0

### Security & Best Practices
- Prefer WIF over Service Account keys
- Restrict CORS to trusted domains in production
- Manage secrets via GitLab/GCP Secret Manager

### Troubleshooting
- Port conflicts: adjust Vite port / `PORT`
- Dependency/cache:
```bash
rm -rf node_modules frontend/node_modules backend/node_modules .pnpm-store
pnpm install && pnpm -C frontend build
```

### License
MIT


