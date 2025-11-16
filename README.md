## Language / 언어

- [한국어(KR)](#korean-version) | [English(EN)](#english-version)

---

## Korean Version

## HyperFlow Works - New_Hyper_flow

---

### 개요 (Overview)

React 19(Vite) 프론트엔드와 Koa(Node.js) 백엔드로 구성된 모노레포입니다.  
프론트엔드는 NGINX 컨테이너로 정적 빌드를 서빙하고, 백엔드는 헬스 체크 및 데모 API를 제공합니다.  
프로덕션 배포는 Google Cloud Run + Artifact Registry + Cloud Build를 사용합니다.

---

### 스택 (Stack)

- 프론트엔드: React 19, Ant Design 5, Vite, TypeScript, Vitest
- 백엔드: Node.js(Koa 3, @koa/router, @koa/cors, koa-bodyparser)
- 빌드: Vite(프론트), Docker(프론트/백)
- 배포: GCP Cloud Run (Artifact Registry, Cloud Build)
- 인증: 서비스 계정 키 또는 WIF(권장)
- CI/CD: GitHub(로컬 push) → GitLab(미러/푸시) → GitLab CI/CD(빌드·배포)

---

### 프로젝트 구조 (Structure)

```
New_Hyper_flow/
├── frontend/                        # React (Vite)
│   ├── src/
│   ├── public/
│   ├── Dockerfile                   # NGINX static hosting
│   ├── nginx.conf
│   └── package.json
├── backend/                         # Koa API
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
├── scripts/
│   ├── convert-images.js            # 이미지 AVIF 변환
│   └── deploy-cloudrun.sh           # Cloud Run 배포 스크립트
├── figma-images/                    # 디자인 산출물
└── README.md
```

---

### 스크립트 참조 (Scripts)

#### 루트 레벨 스크립트

```bash
# 개발
pnpm -C frontend dev
pnpm -C backend dev
```

#### 프론트엔드 스크립트

```bash
cd frontend

pnpm dev                    # Vite 개발 서버 시작
pnpm build                  # 프로덕션 빌드
pnpm preview                # 프로덕션 빌드 미리보기
pnpm test                   # 테스트 실행
pnpm test:ui                # UI와 함께 테스트 실행
pnpm test:coverage          # 커버리지와 함께 테스트 실행
pnpm lint                   # 코드 린트
pnpm convert-images         # 이미지를 AVIF 형식으로 변환 (scripts/convert-images.js)
```

#### 백엔드 스크립트

```bash
cd backend

pnpm dev                    # 개발 모드(watch)
pnpm start                  # 프로덕션 서버 실행
pnpm test                   # 테스트 실행 (Vitest)
pnpm test:coverage          # 커버리지 실행
pnpm lint                   # 코드 린트
```

#### 유틸리티 스크립트

```bash
# Cloud Run 배포 스크립트
bash scripts/deploy-cloudrun.sh
```

---

### Cloud Run 설정 (Settings)

권장 예시:

- 서비스 이름: hyperflow-frontend / hyperflow-backend
- 리전: asia-northeast3
- 플랫폼: managed
- 메모리: 512Mi
- CPU: 1 vCPU
- 포트: 프론트(컨테이너 8080), 백엔드(앱 3000)
- 최소 인스턴스: 0
- 동시성: 80
- 타임아웃: 300초
- 인증: 공개(필요 시 조정)

설정 수정(예시)

```bash
gcloud run services update <service-name> \
  --region asia-northeast3 \
  --memory 1Gi \
  --cpu 2 \
  --min-instances 1 \
  --max-instances 20
```

---

### 헬스 체크 (Health Check)

백엔드 앱은 `/health`에서 헬스 체크 엔드포인트를 제공합니다:

```bash
curl https://<backend-service-url>/health
```

응답:

```json
{ "status": "ok", "message": "Server is running" }
```

Cloud Run은 시작/라이브니스/준비 상태 프로브로 컨테이너 상태를 관리하며, Cloud Monitoring/Uptime과 통합할 수 있습니다.

---

### 환경 변수 (Environment Variables)

#### 프론트엔드

`frontend/.env`

```
VITE_API_URL=http://localhost:3000/api
```

#### 백엔드

`backend/.env`

```
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### 프로덕션 (Cloud Run)

- `NODE_ENV=production` (권장)
- `PORT`는 Cloud Run이 자동 설정

---

### 배포 (Deploy)

필수 API:

```bash
gcloud services enable run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  iamcredentials.googleapis.com
```

Artifact Registry 리포지토리(최초 1회):

```bash
gcloud artifacts repositories create hyper-flow \
  --repository-format=docker \
  --location=asia-northeast3
```

로컬 배포 스크립트(옵션):

```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```

---

### 에러 처리 (Error Handling)

중앙 에러 핸들러(Koa 미들웨어)로 일관된 JSON 에러 응답을 제공합니다.  
프로덕션에서는 Cloud Logging/Monitoring 연계를 권장합니다.

에러 응답 예시:

```json
{
  "error": { "message": "에러 메시지 설명", "status": 500 }
}
```

일반적인 에러 코드: 400/401/403/404/500

---

### 문제 해결 (Troubleshooting)

포트 충돌

```bash
# FE: vite.config.ts 수정 / BE: PORT 변경
```

의존성/캐시

```bash
rm -rf node_modules frontend/node_modules backend/node_modules .pnpm-store
pnpm install
pnpm -C frontend build
```

배포 이슈

- Artifact Registry 이미지 존재 확인
- Cloud Build/Run 권한 및 API 활성화 확인
- 리전/서비스명 일치 확인

---

### 기여 (Contributing)

- TypeScript 사용, ESLint 규칙 준수
- 의미 있는 커밋 메시지
- 변경 시 테스트/문서 업데이트

커밋 접두사 예: `Add:`, `Fix:`, `Update:`, `Refactor:`, `Docs:`

---

### 라이선스 (License)

MIT License

---

## English Version

This README mirrors the structure of HyperFlow-Works_demo and is filled with this project’s details (React 19 + Vite, Koa backend, GCP Cloud Run).

### Overview

Monorepo with a React 19 (Vite) frontend and a Koa(Node.js) backend.  
Frontend is served by an NGINX container; backend provides health and demo APIs.  
Production deploy uses Google Cloud Run + Artifact Registry + Cloud Build.

### Stack

- Frontend: React 19, Ant Design 5, Vite, TypeScript, Vitest
- Backend: Node.js (Koa 3, @koa/router, @koa/cors, koa-bodyparser)
- Build: Vite (frontend), Docker (both)
- Deploy: GCP Cloud Run (Artifact Registry, Cloud Build)
- Auth: Service Account key or WIF (recommended)
- CI/CD: GitHub (local push) → GitLab (mirror/push) → GitLab CI/CD

### Structure

```
New_Hyper_flow/
├── frontend/                        # React (Vite)
├── backend/                         # Koa API
├── scripts/                         # tools & deploy scripts
└── figma-images/                    # design assets
```

### Scripts

Root

```bash
pnpm -C frontend dev
pnpm -C backend dev
```

Frontend

```bash
cd frontend
pnpm dev
pnpm build
pnpm preview
pnpm test
pnpm test:ui
pnpm test:coverage
pnpm lint
pnpm convert-images
```

Backend

```bash
cd backend
pnpm dev
pnpm start
pnpm test
pnpm test:coverage
pnpm lint
```

Utility

```bash
bash scripts/deploy-cloudrun.sh
```

### Cloud Run Settings

- Services: hyperflow-frontend / hyperflow-backend
- Region: asia-northeast3
- Platform: managed
- Memory: 512Mi
- CPU: 1 vCPU
- Ports: FE container 8080, BE app 3000
- Min instances: 0, Concurrency: 80, Timeout: 300s
- Auth: unauthenticated (as needed)

Update example

```bash
gcloud run services update <service-name> \
  --region asia-northeast3 \
  --memory 1Gi \
  --cpu 2 \
  --min-instances 1 \
  --max-instances 20
```

### Health Check

```bash
curl https://<backend-service-url>/health
```

Response

```json
{ "status": "ok", "message": "Server is running" }
```

### Environment Variables

Frontend `frontend/.env`

```
VITE_API_URL=http://localhost:3000/api
```

Backend `backend/.env`

```
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Production (Cloud Run): `PORT` is injected by the platform.

### Deploy

Enable APIs

```bash
gcloud services enable run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  iamcredentials.googleapis.com
```

Artifact Registry repo (first time)

```bash
gcloud artifacts repositories create hyper-flow \
  --repository-format=docker \
  --location=asia-northeast3
```

Local deploy script (optional)

```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```

### Error Handling

Unified JSON error responses via a centralized Koa middleware.  
In production, integrate with Cloud Logging/Monitoring.

Example

```json
{
  "error": { "message": "Error message", "status": 500 }
}
```

### Troubleshooting

- Ports: adjust FE `vite.config.ts` or BE `PORT`
- Dependencies/cache

```bash
rm -rf node_modules frontend/node_modules backend/node_modules .pnpm-store
pnpm install
pnpm -C frontend build
```

- Deploy: verify images exist, permissions/APIs enabled, region/service names match

### License

MIT
