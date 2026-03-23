#!/bin/bash
# Root build script for Render
echo "🚀 Initializing Render Build Protocol..."

# Install client dependencies and build
echo "📦 Installing Client Dependencies..."
cd client && npm install
echo "🏗️ Executing Vite Build..."
npm run build
cd ..

# Install server dependencies
echo "📦 Installing Server Dependencies..."
cd server && npm install
cd ..

echo "✅ Build Complete!"
