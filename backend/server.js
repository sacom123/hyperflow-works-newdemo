const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
require('dotenv').config();

const app = new Koa();
const router = new Router();

// Centralized error handler / 중앙 에러 핸들러
// Ensures consistent JSON error responses across the API
// API 전반에서 일관된 JSON 에러 응답을 보장합니다.
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const status = err.status || 500;
    ctx.status = status;
    ctx.body = {
      error: {
        message: err.message || 'Internal Server Error',
        status,
      },
    };
    // In production, integrate with Cloud Logging
    // 프로덕션에서는 Cloud Logging 연동을 권장합니다.
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
});

// CORS configuration / CORS 설정
// Restricts origins in production; defaults to local dev origin
// 프로덕션에서는 허용 도메인을 제한하세요. 로컬 개발 도메인을 기본값으로 합니다.
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// JSON body parsing / JSON 바디 파싱
app.use(bodyParser());

// Health check endpoint
router.get('/health', async (ctx) => {
  ctx.body = { status: 'ok', message: 'Server is running' };
});

// API routes
router.get('/api/llm-models', async (ctx) => {
  ctx.body = {
    models: [
      { id: 1, name: 'gemini', color: '#4285F4' },
      { id: 2, name: 'gpt', color: '#10A37F' },
      { id: 3, name: 'deepseek', color: '#1E1E1E' },
      { id: 4, name: 'claude-sonnet', color: '#D97757' },
      { id: 5, name: 'gpt-mini', color: '#10A37F' },
      { id: 6, name: 'gemini-Flash', color: '#4285F4' },
      { id: 7, name: 'gpt-nano', color: '#10A37F' },
    ],
  };
});

// Apply routes
app.use(router.routes());
app.use(router.allowedMethods());

// Server startup / 서버 시작
const PORT = Number(process.env.PORT) || 3000;
if (Number.isNaN(PORT)) {
  throw new Error('Invalid PORT environment variable');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

