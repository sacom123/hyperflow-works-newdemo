const { describe, it, expect } = require('vitest');
const request = require('supertest');
const app = require('../server');

describe('Server', () => {
  it('should respond to health check', async () => {
    const response = await request(app.callback())
      .get('/health')
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'ok');
  });

  it('should return LLM models', async () => {
    const response = await request(app.callback())
      .get('/api/llm-models')
      .expect(200);
    
    expect(response.body).toHaveProperty('models');
    expect(Array.isArray(response.body.models)).toBe(true);
  });
});

