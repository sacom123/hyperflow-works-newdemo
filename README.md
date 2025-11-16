## English

Modern web stack with React frontend and Koa backend, built by Vite and deployed to Google Cloud Run. CI/CD is handled by GitLab and triggered by GitHub pull mirroring. This README follows the style of the HyperFlow Works demo README for clarity and operational detail.  
Reference: [HyperFlow-Works_demo](https://github.com/sacom123/HyperFlow-Works_demo)

### Stack
- Frontend: React 19, Ant Design 5, Vite, TypeScript, Vitest
- Backend: Node.js (Koa.js)
- Build: Vite (frontend), Docker (both)
- Deployment: GCP Cloud Run (Artifact Registry, Cloud Build)
- Auth: Workload Identity Federation (keyless) or Service Account key
- CI/CD: GitLab pipelines triggered by GitHub Pull Mirroring

### Structure
```
New_Hyper_flow/
├── frontend/                  # React (Vite)
│   ├── src/
│   ├── public/
│   ├── Dockerfile             # NGINX static hosting container
│   ├── nginx.conf             # NGINX config
│   └── package.json
├── backend/                   # Node.js(Koa) API
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
├── scripts/
│   └── deploy-cloudrun.sh     # Cloud Run deploy helper
├── .gitlab-ci.yml             # GitLab CI (Cloud Build + Cloud Run, WIF-ready)
└── README.md
```

### Local Development
Requirements: Node.js 20.x, pnpm, Docker (optional)
```bash
# Frontend
cd frontend && pnpm install && pnpm dev

# Backend
cd backend && pnpm install && node server.js
# PORT=3000 by default, CORS allows http://localhost:5173
```

### Build & Test
```bash
# Frontend build
cd frontend && pnpm build

# Frontend tests
cd frontend && pnpm test
```

### Docker Images
```bash
# Frontend
cd frontend
docker build -t <your-registry>/new-hyper-flow/frontend:latest .

# Backend
cd ../backend
docker build -t <your-registry>/new-hyper-flow/backend:latest .
```

### Deployment (GCP Cloud Run, WIF)
Flow: GitHub push (main) → GitLab Pull Mirroring → GitLab CI (Cloud Build) → Cloud Run
1) Enable APIs
```bash
gcloud config set project new-hyperflow
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com iamcredentials.googleapis.com
```
2) Create Artifact Registry (first time)
```bash
gcloud artifacts repositories create hyper-flow --repository-format=docker --location=asia-northeast3
```
3) Configure Workload Identity Federation (keyless) or use SA key
4) GitLab CI variables
  - GCP_PROJECT_ID=new-hyperflow
  - GCP_REGION=asia-northeast3
  - GAR_REPO=hyper-flow
  - FRONTEND_SERVICE=hyper-frontend
  - BACKEND_SERVICE=hyper-backend
  - IMAGE_TAG (optional)
  - For WIF: WIF_PROVIDER, WIF_SERVICE_ACCOUNT
5) Trigger: push to GitHub main → pipeline runs build-frontend, build-backend, deploy-cloud-run
6) Optional local deploy
```bash
cd /Users/seonho/Desktop/code/New_Hyper_flow
export GCP_PROJECT_ID="new-hyperflow"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```

### CI/CD (GitHub → GitLab)
- GitHub push → GitLab Pull Mirroring → GitLab CI executes `.gitlab-ci.yml`
- Pipeline: Cloud Build builds/pushes images, then Cloud Run deploys (WIF or SA key)

### Health Check
```bash
curl "$(gcloud run services describe hyper-backend --region=asia-northeast3 --format='value(status.url)')/health"
```

### Environment Variables
- Frontend (`frontend/.env`)
```
VITE_API_URL=http://localhost:3000/api
```
- Backend (`backend/.env`)
```
PORT=3000
NODE_ENV=development
```
(Cloud Run sets PORT in production.)

### Troubleshooting
- WIF failure: verify WIF provider, service account roles, pool/provider existence
- Cloud Build failure: APIs/permissions, Dockerfile syntax
- Cloud Run failure: image availability, region match, service names
- Dependencies:
```bash
rm -rf node_modules frontend/node_modules backend/node_modules && pnpm install
```

### License
MIT

---

## 한국어 (Korean)

React 프론트엔드와 Koa 백엔드로 구성된 모던 웹 스택입니다. Vite로 빌드하고 GCP Cloud Run에 배포하며, GitHub→GitLab 미러링으로 CI/CD가 동작합니다. 본 문서는 HyperFlow Works 데모 README 스타일을 참고해 구성했습니다.  
참고: [HyperFlow-Works_demo](https://github.com/sacom123/HyperFlow-Works_demo)

### 스택
- 프론트엔드: React 19, Ant Design 5, Vite, TypeScript, Vitest
- 백엔드: Node.js (Koa.js)
- 빌드: Vite(프론트), Docker(프론트/백)
- 배포: GCP Cloud Run(Artifact Registry, Cloud Build)
- 인증: WIF(키 없는 인증) 또는 서비스 계정 키
- CI/CD: GitHub Pull Mirroring 기반 GitLab 파이프라인

### 구조
```
New_Hyper_flow/
├── frontend/                  # React (Vite)
├── backend/                   # Node.js(Koa)
├── scripts/                   # Cloud Run 배포 스크립트 등
├── .gitlab-ci.yml             # GitLab CI (Cloud Build + Cloud Run, WIF)
└── README.md
```

### 로컬 개발
사전 요구: Node.js 20.x, pnpm, Docker(선택)
```bash
# 프론트엔드
cd frontend && pnpm install && pnpm dev

# 백엔드
cd backend && pnpm install && node server.js
```

### 빌드 & 테스트
```bash
cd frontend && pnpm build
cd frontend && pnpm test
```

### 도커 이미지
```bash
cd frontend && docker build -t <reg>/new-hyper-flow/frontend:latest .
cd backend  && docker build -t <reg>/new-hyper-flow/backend:latest  .
```

### 배포 (GCP Cloud Run, WIF)
흐름: GitHub main 푸시 → GitLab Pull Mirroring → GitLab CI(Cloud Build) → Cloud Run
1) API 활성화
```bash
gcloud config set project new-hyperflow
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com iamcredentials.googleapis.com
```
2) Artifact Registry 생성(최초 1회)
```bash
gcloud artifacts repositories create hyper-flow --repository-format=docker --location=asia-northeast3
```
3) WIF 설정(또는 SA 키)
4) GitLab 변수
  - GCP_PROJECT_ID, GCP_REGION, GAR_REPO, FRONTEND_SERVICE, BACKEND_SERVICE, (선택)IMAGE_TAG
  - WIF_PROVIDER, WIF_SERVICE_ACCOUNT (또는 GCP_SA_KEY 파일)
5) 트리거: GitHub main 푸시 → 파이프라인(build-frontend, build-backend, deploy-cloud-run)
6) 수동 배포(선택)
```bash
export GCP_PROJECT_ID="new-hyperflow"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```

### CI/CD (GitHub → GitLab)
- GitLab: Settings → Repository → Mirroring repositories → GitHub Pull 미러 추가
- “Trigger pipelines on new commits” 활성화
- 파이프라인: Cloud Build 빌드/푸시 → Cloud Run 배포 (WIF 또는 SA 키)

### 헬스 체크
```bash
curl "$(gcloud run services describe hyper-backend --region=asia-northeast3 --format='value(status.url)')/health"
```

### 환경 변수
- 프론트(`frontend/.env`)
```
VITE_API_URL=http://localhost:3000/api
```
- 백엔드(`backend/.env`)
```
PORT=3000
NODE_ENV=development
```
(프로덕션은 Cloud Run이 PORT 지정)

### 문제 해결
- WIF 실패: WIF 프로바이더/SA 권한/풀/프로바이더 생성 여부 확인
- Cloud Build 실패: API/권한, Dockerfile 문법 확인
- Cloud Run 실패: 이미지 존재 여부, 리전/서비스명 확인
- 의존성:
```bash
rm -rf node_modules frontend/node_modules backend/node_modules && pnpm install
```

### 라이선스
MIT
