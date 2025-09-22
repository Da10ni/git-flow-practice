#!/bin/sh

echo "🔧 Setting up Git hooks from .githooks directory..."
git config core.hooksPath .git
echo "✅ Git hooks configured!"
