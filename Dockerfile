# Build stage
FROM node:22-alpine AS builder

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
FROM node:22-alpine

WORKDIR /app

# Copy built files and server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/server.js ./
COPY --from=builder /app/lib/leadValidation.js /app/lib/leadProxy.js ./lib/
COPY --from=builder /app/robots.txt ./dist/
COPY --from=builder /app/sitemap.xml ./dist/

# Cloud Run sets PORT environment variable
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
