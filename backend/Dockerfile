FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies with best-effort lockfile detection
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@9 --activate && pnpm i --frozen-lockfile --prod; \
    elif [ -f yarn.lock ]; then corepack enable && corepack prepare yarn@stable --activate && yarn install --prod --frozen-lockfile; \
    else npm install --only=production; fi

# Copy application source
COPY . .

# Align with app default (server.js defaults to 3000) and CI deploy
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
