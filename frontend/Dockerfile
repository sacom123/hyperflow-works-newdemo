# Frontend Dockerfile - Vite build + Nginx static hosting (Cloud Run)
# 프론트엔드 도커파일 - Vite 빌드 + Nginx 정적 호스팅 (Cloud Run)

### Builder stage: build Vite app
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack enable && corepack prepare yarn@stable --activate && yarn install --frozen-lockfile; \
    else npm install; fi
COPY . .
RUN npm run build

### Runtime stage: Nginx serving built assets
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
# Provide SPA fallback to index.html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# Frontend Dockerfile (Vite build → NGINX static)
# 프론트엔드 정적 빌드 후 NGINX로 제공 (Cloud Run: 8080)

########## Builder ##########
FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

########## Runtime ##########
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built assets
COPY --from=build /app/dist/ ./

# Replace default nginx config to listen on :8080 and serve SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# Build stage for frontend (Vite React)
# 프론트엔드 빌드 스테이지 (Vite React)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./ 
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Runtime stage using nginx to serve static files
# 정적 파일 제공을 위한 nginx 런타임 스테이지
FROM nginx:1.27-alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf 2>/dev/null || true
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


