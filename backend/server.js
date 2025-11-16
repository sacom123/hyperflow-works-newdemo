const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
require('dotenv').config();

const app = new Koa();
const router = new Router();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

