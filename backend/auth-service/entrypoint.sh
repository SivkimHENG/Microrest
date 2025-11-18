#!/bin/bash
set -e

echo "⏳ Waiting for database (5 seconds)..."
sleep 5

echo "🔄 Generating Prisma client..."
npx prisma generate

echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy

echo "✅ Setup complete. Starting application..."
exec npm run dev
