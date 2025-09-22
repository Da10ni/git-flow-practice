#!/bin/sh

echo "🔧 Setting up Git hooks from .githooks directory..."
git config core.hooksPath .githooks
echo "✅ Git hooks configured!"
