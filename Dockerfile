# ExciseMate Production Dockerfile
# Multi-stage build for optimal production image size

# Base stage - shared dependencies
# Using Debian-based image for better native module compatibility
FROM node:20-slim AS base
WORKDIR /app

# Install system dependencies needed for SQLite and other native packages
RUN apt-get update && apt-get install -y \
    sqlite3 \
    python3 \
    make \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Dependencies stage - install all dependencies
FROM base AS deps
# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Development dependencies for build
FROM base AS build-deps
RUN npm ci

# Build stage - compile the application
FROM build-deps AS build
WORKDIR /app

# Copy source code
COPY . .

# Generate Drizzle schema (if needed)
RUN npm run db:generate || echo "Skipping DB generation"

# Build the Next.js application
# Skip database connections during build (Turso remote DB only needed at runtime)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV SKIP_ENV_VALIDATION=1
ENV SKIP_DB_INIT=true
RUN npm run build

# Production stage - final runtime image
FROM base AS production
WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application from build stage
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || exit 1

# Start the application
CMD ["node", "server.js"]

# Labels for metadata
LABEL maintainer="Venin Client Systems"
LABEL version="1.0.0"
LABEL description="ExciseMate - Professional Spirit Production Records Management"
LABEL org.opencontainers.image.title="ExciseMate"
LABEL org.opencontainers.image.description="Enterprise-grade distillery management system"
LABEL org.opencontainers.image.vendor="Venin Client Systems"
LABEL org.opencontainers.image.version="1.0.0"