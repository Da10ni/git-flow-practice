import { execSync } from 'child_process';
import os from 'os';

console.log('🔧 Setting up Git hooks from git directory...');

try {
  execSync('git config core.hooksPath git', { stdio: 'inherit' });
  console.log('✅ Git hooks configured!');
} catch (error) {
  console.error('❌ Failed to configure Git hooks:', error.message);
  process.exit(1);
}