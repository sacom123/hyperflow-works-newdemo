# HyperFlow AI - Landing Page

Figma 디자인을 완전히 동일하게 구현한 HyperFlow AI 랜딩 페이지 프로젝트입니다.

## 🚀 기술 스택

### Frontend
- **React 18** (Vite)
- **Ant Design**
- **react-responsive**

### Backend
- **Node.js**
- **Koa.js**, **@koa/router**, **@koa/cors**

### Testing
- **Vitest**, **@testing-library/react**

### CI/CD & Infra
- **GitHUb Actions**: CI (빌드/테스트)
- **GitLab CI/CD**: 빌드/배포 파이프라인
- **Google Cloud Run + Artifact Registry**: 컨테이너 배포/호스팅

## 📁 프로젝트 구조

```
New_Hyper_flow/
├── frontend/                # React 프론트엔드 (Vite)
│   ├── src/
│   ├── public/
│   ├── Dockerfile           # NGINX 정적 호스팅 컨테이너
│   ├── nginx.conf           # NGINX 설정
│   └── package.json
├── backend/                 # Node.js(Koa) 백엔드 API
│   ├── server.js
│   ├── Dockerfile           # Node 런타임 컨테이너
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions: Lint/Build/Test
├── .gitlab-ci.yml           # GitLab CI/CD 파이프라인 (Cloud Run 빌드/배포)
├── scripts/
│   └── convert-images.js
├── .dockerignore
└── README.md
```

## 🛠️ 로컬 실행

사전 설치: Node.js 18+, `corepack enable && corepack prepare pnpm@latest --activate`

### Frontend
```bash
cd frontend
pnpm i
pnpm dev
# http://localhost/5173
```

### Backend
```bash
cd backend
pnpm i
pnpm dev
# http://localhost:3000
```

## 🧪 테스트

### Frontend
```bash
cd frontend
pnpm test
```

### Backend
```bash
cd backend
pnpm test
```

## 📦 프로덕션 빌드
```bash
cd frontend && pnpm build
# 산출물: frontend/dist/
```

---

## 🔗 GitHub 업로드 & GitLab 미러 설정 (CI/CD)

### 1) GitHub 저장소 생성 및 푸시
```bash
git init
git add .
git commit -m "chore: initial import"
git branch -M main
git remote add origin https://github.com/<YOUR_ORG_OR_USER>/<YOUR_REPO>.git
git push -u origin main
```

### 2) GitLab에서 GitHub 미러(Pull) 구성
1. GitLab → 새 프로젝트 생성 (예: `your-group/new-hyper-flow`)
2. 프로젝트 → Settings → Repository → “Mirroring repositories”
3. New mirror:
   - Git repository URL: `https://github.com/<YOUR_ORG_OR_USER>/<YOUR_REPO>.git`
   - Mirror direction: `Pull from a remote repository`
   - Authentication: Personal Access Token 또는 Deploy Token
4. “Mirror repository” 저장 후 “Update now” 클릭 (연동 확인)

GitHub → `main` 브랜치로 푸시 시 GitLab이 자동 Pull 하고, `.gitlab-ci.yml` 파이프라인이 실행됩니다.

---

## ☁️ GCP 설정 (최초 1회)

### 1) 프로젝트/리전/레지스트리
- `GCP_PROJECT_ID`: GCP 프로젝트 ID
- `GCP_REGION`: 예) `asia-northeast3`(서울) 또는 사용 지역
- Artifact Registry 리포지토리 생성 (예: `GAR_REPO=hyperflow`, 포맷: Docker)

```bash
gcloud services enable run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com
```

### 2) 서비스 계정 및 권한
```bash
gcloud iam service-accounts create ci-cd-bot --display-name="CI/CD Bot"

gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
  --member="serviceAccount:ci-cd-bot@$GCP_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"
gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
  --member="serviceAccount:ci-cd-bot@$GCP_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
  --member="serviceAccount:ci-cd-bot@$GCP_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/artifactregistry.admin"
gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
  --member="serviceAccount:ci-cd-bot@$GCP_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/cloudbuild.builds.editor"

# 서비스 계정 키(JSON) 생성
gcloud iam service-accounts keys create sa-key.json \
  --iam-account=ci-cd-bot@$GCP_PROJECT_ID.iam.gserviceaccount.com
```

### 3) GitLab CI/CD 변수 등록
GitLab → Project → Settings → CI/CD → Variables:
- `GCP_PROJECT_ID` = your-project-id
- `GCP_REGION` = e.g. `asia-northeast3`
- `GAR_REPO` = e.g. `hyperflow`
- `BACKEND_SERVICE_NAME` = e.g. `hyperflow-backend`
- `FRONTEND_SERVICE_NAME` = e.g. `hyperflow-frontend`
- `GCP_SA_KEY` = 위에서 발급한 `sa-key.json` 내용(전체 JSON) **Base64 인코딩** 후 붙여넣기 (Masked, Protected 권장)
- `FRONTEND_URL` = (선택, 첫 배포 후 Cloud Run 프론트엔드 URL을 지정하여 CORS 허용)

> 최초 파이프라인은 `FRONTEND_URL` 없이 실행해도 됩니다. 프론트엔드가 배포된 뒤 Cloud Run 프런트엔드 URL을 확인하여 `FRONTEND_URL` 변수에 입력하고 다시 `deploy-backend` 잡을 재실행하면 CORS 헤더가 반영됩니다.

---

## 🔁 배포 흐름
1. 로컬에서 커밋 후 GitHub `main` 브랜치로 푸시
2. GitHub Actions(`.github/workflows/ci.yml`)에서 Lint/Build/Test
3. GitLab이 GitHub 리포지토리를 Pull → `.gitlab-ci.yml` 실행
4. Cloud Build로 `backend`, `frontend` 컨테이너 이미지 빌드/푸시(Artifact Registry)
5. `gcloud run deploy`로 각 서비스 배포 (포트 8080, 공개)

배포 결과 URL 확인:
```bash
gcloud run services describe $BACKEND_SERVICE_NAME --region $GCP_REGION --format='value(status.url)'
gcloud run services describe $FRONTEND_SERVICE_NAME --region $GCP_REGION --format='value(status.url)'
```

### 로컬 Docker 이미지 빌드 (선택)
```bash
# Backend
docker build -t $GAR_LOCATION-docker.pkg.dev/$GCP_PROJECT_ID/$GAR_REPO/backend:dev ./backend
# Frontend
docker build -t $GAR_LOCATION-docker.pkg.dev/$GCP_PROJECT_ID/$GAR_REPO/frontend:dev ./frontend
```

---

## 🔧 개발 가이드
- 반응형 기준: 모바일 ≤768px, 태블릿 769–1024px, 데스크톱 ≥1025px
- 백엔드 환경변수(로컬):  
  ```
  # backend/.env
  PORT=3000
  FRONTEND_URL=http://localhost:5173
  NODE_ENV=development
  ```

## 📝 주요 기능
- ✅ Figma 디자인 완전 동일 구현
- ✅ 반응형 웹/다국어 주석
- ✅ GitHub Actions CI (빌드/테스트)
- ✅ GitLab → GCP Cloud Run 자동 배포

## 🤝 기여
1. Fork
2. `git checkout -b feature/your-feature`
3. `git commit -m "feat: your feature"`
4. `git push origin feature/your-feature`
5. PR 생성

## 📞 문의
이슈 등록 또는 PR로 전달해주세요.

---
**HyperFlow AI** - 복잡한 코딩없이 AI 워크플로우를 완성하세요.


