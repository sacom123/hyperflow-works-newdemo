## Backend Dockerfile - Koa API on Cloud Run
## 백엔드 도커파일 - Koa API (Cloud Run 배포용)
FROM node:20-alpine AS base
WORKDIR /app

# Faster installs
ENV NODE_ENV=production

# Copy only package manifests first for better caching
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Prefer pnpm if available, else fallback to npm
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile --prod; \
    elif [ -f yarn.lock ]; then corepack enable && corepack prepare yarn@stable --activate && yarn install --prod --frozen-lockfile; \
    else npm install --only=production; fi

# Copy source
COPY . .

# Cloud Run expects the app to listen on $PORT; our server reads process.env.PORT
ENV PORT=8080
EXPOSE 8080

# Start the Koa server
CMD ["node", "server.js"]

# Backend Dockerfile (Node.js + Koa)
# 백엔드 컨테이너 정의 (Cloud Run: PORT=8080)

FROM node:20-alpine AS base
WORKDIR /app

# Install pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies first (better layer caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy source
COPY . .

# Cloud Run listens on $PORT (default 8080)
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]

# Backend Dockerfile (Koa)
# 백엔드 Dockerfile (Koa)
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate
RUN pnpm install --frozen-lockfile --prod

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]


