#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

function generateVersion() {
  try {
    // 獲取 Git commit hash
    let commit = 'unknown';
    try {
      commit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      console.warn('Failed to get git commit:', error.message);
    }

    // 獲取短 commit hash (前7位)
    const shortCommit = commit.length >= 7 ? commit.substring(0, 7) : commit;

    // 生成 build ID
    const buildId = `${Date.now()}-${shortCommit}`;

    // 獲取版本號 (從 package.json)
    let version = 'unknown';
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      version = packageJson.version || 'unknown';
    } catch (error) {
      console.warn('Failed to read package.json version:', error.message);
    }

    const versionInfo = {
      version,
      commit,
      shortCommit,
      buildId,
      buildTime: new Date().toISOString(),
    };

    // 確保 public 目錄存在
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // 寫入版本資訊
    const versionPath = path.join(publicDir, 'version.json');
    fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2));

    console.log('✅ Version info generated:', versionPath);
    console.log('📦 Build ID:', buildId);
    console.log('🔗 Commit:', shortCommit);

    return versionInfo;
  } catch (error) {
    console.error('❌ Failed to generate version info:', error);
    process.exit(1);
  }
}

// 如果直接執行此腳本
if (require.main === module) {
  generateVersion();
}

module.exports = generateVersion;
