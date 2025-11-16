## HyperFlow Works (New_Hyper_flow)

이 저장소는 React(Vite) 프론트엔드와 Koa 기반 Node.js 백엔드로 구성된 단일 레포지토리입니다. 프론트엔드는 NGINX로 서빙되며, 백엔드는 REST API(헬스체크, 데모 LLM 모델 목록)를 제공합니다. 빌드 및 배포는 Docker를 사용하며, 프로덕션 배포는 GCP Cloud Run을 대상으로 합니다.

참고한 문서 구조: `HyperFlow-Works_demo` README  
원문: [HyperFlow-Works_demo](https://github.com/sacom123/HyperFlow-Works_demo)

---

### 주요 기능
- 프론트엔드: React 19, Ant Design 5, Vite, TypeScript, Vitest
- 백엔드: Koa 3, Router, CORS, Body Parser
- API: `/health` 헬스체크, `/api/llm-models` 데모 모델 목록
- 배포: Cloud Run (Artifact Registry, Cloud Build)
- 이미지/정적자원: 최적화(AVIF 변환 스크립트 제공)

### 디렉토리 구조
```
New_Hyper_flow/
├── frontend/                  # React (Vite) + NGINX Dockerfile
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── backend/                   # Koa API 서버
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
├── scripts/
│   ├── convert-images.js      # 정적 이미지 AVIF 변환
│   └── deploy-cloudrun.sh     # Cloud Run 배포 스크립트
├── figma-images/              # 디자인 산출물
├── README.md
└── package.json
```

---

### 로컬 개발
사전 요구: Node.js 20+, pnpm, (선택) Docker

프론트엔드:
```bash
cd frontend
pnpm install
pnpm dev
```

백엔드:
```bash
cd backend
pnpm install
pnpm dev
```

기본 포트
- 프론트엔드: 5173 (Vite)
- 백엔드: 3000 (Koa, `FRONTEND_URL` CORS 기본값: http://localhost:5173)

---

### 사용 가능한 스크립트

루트:
```bash
# (루트에는 통합 스크립트가 최소화되어 있습니다)
pnpm -C frontend dev
pnpm -C backend dev
```

프론트엔드(frontend/package.json):
```bash
pnpm dev                 # Vite 개발 서버
pnpm build               # 프로덕션 빌드
pnpm preview             # 로컬 프리뷰
pnpm test                # 단위 테스트
pnpm test:ui             # Vitest UI
pnpm test:coverage       # 커버리지
pnpm lint                # ESLint
pnpm convert-images      # 정적이미지 AVIF 변환
```

백엔드(backend/package.json):
```bash
pnpm dev                 # watch 모드 실행
pnpm start               # 프로덕션 실행
pnpm test                # 테스트
pnpm test:coverage       # 커버리지
```

---

### API 및 헬스 체크
헬스 체크:
```bash
GET /health
```
응답 예:
```json
{ "status": "ok", "message": "Server is running" }
```

데모 API:
```bash
GET /api/llm-models
```
응답 예:
```json
{
  "models": [
    { "id": 1, "name": "gemini", "color": "#4285F4" },
    { "id": 2, "name": "gpt", "color": "#10A37F" }
  ]
}
```

---

### 환경 변수
- 프론트엔드(`frontend/.env`)
```env
VITE_API_URL=http://localhost:3000/api
```
- 백엔드(`backend/.env`)
```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```
프로덕션(Cloud Run)은 `PORT`를 컨테이너에 주입합니다.

---

### 빌드
프론트엔드:
```bash
cd frontend && pnpm build
```

도커 이미지(예시):
```bash
cd frontend  && docker build -t <REG>/new-hyper-flow/frontend:latest .
cd ../backend && docker build -t <REG>/new-hyper-flow/backend:latest  .
```

---

### 배포(Cloud Run)
권장: Artifact Registry + Cloud Build + Cloud Run

필수 API 활성화:
```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com iamcredentials.googleapis.com
```

선행 설정(최초 1회):
```bash
gcloud artifacts repositories create hyper-flow \
  --repository-format=docker \
  --location=asia-northeast3
```

로컬 스크립트 배포(옵션):
```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="asia-northeast3"
export GAR_REPO="hyper-flow"
export FRONTEND_SERVICE="hyper-frontend"
export BACKEND_SERVICE="hyper-backend"
export IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
bash scripts/deploy-cloudrun.sh
```

Cloud Run 권장 설정(예시)
- 메모리: 512Mi
- CPU: 1 vCPU
- 동시성: 80
- 타임아웃: 300초
- 최소 인스턴스: 0
- 인증: 공개 액세스(필요 시)

---

### 에러 처리
백엔드는 Koa 미들웨어 기반으로 에러를 처리합니다. 현재 공통 에러 미들웨어 파일은 별도 분리되어 있지 않지만, 프로덕션 배포 시 중앙 에러 핸들러를 추가해 일관된 JSON 응답과 로그(Cloud Logging)를 권장합니다.

에러 응답 형식(권장):
```json
{
  "error": {
    "message": "에러 메시지",
    "status": 500
  }
}
```

---

### 문제 해결
- 포트 충돌
  - 프론트: `vite.config.ts` 포트 변경 또는 프록시 설정
  - 백엔드: `PORT` 환경 변수 변경
- 의존성 문제
```bash
rm -rf node_modules frontend/node_modules backend/node_modules
pnpm install
```
- 빌드 문제
```bash
rm -rf .pnpm-store
pnpm install
pnpm build -C frontend
```
- 배포 문제
  - Artifact Registry 이미지 유무 확인
  - Cloud Build/Run 권한 및 API 활성화 확인
  - 리전 일치 여부 확인

---

### 기여
- TypeScript(프론트), ESLint 규칙 준수
- 의미 있는 커밋 메시지
- 변경 시 테스트/문서 업데이트

커밋 메시지 권장 접두사:
- Add: 새 기능
- Fix: 버그 수정
- Update/Refactor/Docs 등

---

### 라이선스
MIT

---

### 참고
- 저장소 구조 및 문서 구성은 다음 문서를 참고했습니다:  
  `HyperFlow-Works_demo` ([링크](https://github.com/sacom123/HyperFlow-Works_demo))
