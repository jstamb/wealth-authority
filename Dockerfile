# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built files and server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/robots.txt ./dist/
COPY --from=builder /app/sitemap.xml ./dist/

# Cloud Run sets PORT environment variable
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
