## 하이퍼플로우 워크스 (New_Hyper_flow)

이 저장소는 React 19(Vite) 프론트엔드와 Koa 기반 Node.js 백엔드로 구성된 모노레포입니다. 프론트엔드는 NGINX로 서빙되며, 백엔드는 헬스 체크와 데모 API를 제공합니다. 배포 대상은 Google Cloud Run입니다.

참고: 문서 구성은 `HyperFlow-Works_demo`를 따릅니다. [링크](https://github.com/sacom123/HyperFlow-Works_demo)

---

### 주요 기능
- 프론트엔드: React 19, Ant Design 5, Vite, TypeScript, Vitest
- 백엔드: Koa 3, @koa/router, @koa/cors, koa-bodyparser
- API: `/health`, `/api/llm-models`
- 배포: Cloud Run (Artifact Registry + Cloud Build)

### 디렉토리
```
New_Hyper_flow/
├─ frontend/      # React (Vite)
├─ backend/       # Koa API
├─ scripts/       # 배포/도구 스크립트
└─ figma-images/  # 디자인 산출물
```

### 로컬 개발
사전 요구: Node.js 20+, pnpm, (선택) Docker
```bash
# 프론트엔드
cd frontend && pnpm install && pnpm dev

# 백엔드
cd backend && pnpm install && pnpm dev
```
기본 포트: Frontend 5173 / Backend 3000 (`FRONTEND_URL` 기본: http://localhost:5173)

### 스크립트
```bash
# frontend
pnpm dev ; pnpm build ; pnpm preview ; pnpm test ; pnpm lint

# backend
pnpm dev ; pnpm start ; pnpm test
```

### API & 헬스 체크
```bash
GET /health
GET /api/llm-models
```

### 환경 변수
- `frontend/.env`
  - `VITE_API_URL=http://localhost:3000/api`
- `backend/.env`
  - `PORT=3000`
  - `NODE_ENV=development`
  - `FRONTEND_URL=http://localhost:5173`
(Cloud Run은 `PORT`를 자동 주입)

### 빌드
```bash
cd frontend && pnpm build
```
도커(예시)
```bash
cd frontend  && docker build -t <REG>/new-hyper-flow/frontend:latest .
cd ../backend && docker build -t <REG>/new-hyper-flow/backend:latest .
```

### 배포 (Cloud Run)
권장: Artifact Registry + Cloud Build + Cloud Run
```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com iamcredentials.googleapis.com
gcloud artifacts repositories create hyper-flow --repository-format=docker --location=asia-northeast3
```
로컬 배포 스크립트(옵션)
```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```
권장 설정: Memory 512Mi / CPU 1 vCPU / Concurrency 80 / Timeout 300s / Min instances 0

### 보안/모범사례
- 서비스 계정 키 대신 WIF 권장
- 프로덕션 CORS는 신뢰 도메인만 허용
- Secrets는 GitLab/GCP Secret Manager로 관리

### 문제 해결
- 포트 충돌: Vite/`PORT` 수정
- 의존성/캐시 문제:
```bash
rm -rf node_modules frontend/node_modules backend/node_modules .pnpm-store
pnpm install && pnpm -C frontend build
```

### 라이선스
MIT


