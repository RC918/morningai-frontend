#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function generateVersion() {
  try {
    // Get current commit hash
    const commit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    const shortCommit = commit.substring(0, 7);
    
    // Get current timestamp
    const buildTime = new Date().toISOString();
    
    // Generate build ID (timestamp + short commit)
    const buildId = `${Date.now()}-${shortCommit}`;
    
    // Version info object
    const versionInfo = {
      commit: commit,
      shortCommit: shortCommit,
      buildId: buildId,
      buildTime: buildTime,
      version: process.env.npm_package_version || '2.2.0',
      environment: process.env.NODE_ENV || 'production'
    };
    
    // Write to public/version.json
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const versionPath = path.join(publicDir, 'version.json');
    fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2));
    
    console.log('✅ Version info generated:', versionPath);
    console.log('📦 Build ID:', buildId);
    console.log('🔗 Commit:', shortCommit);
    
  } catch (error) {
    console.error('❌ Error generating version info:', error.message);
    
    // Fallback version info
    const fallbackInfo = {
      commit: 'unknown',
      shortCommit: 'unknown',
      buildId: `${Date.now()}-unknown`,
      buildTime: new Date().toISOString(),
      version: process.env.npm_package_version || '2.2.0',
      environment: process.env.NODE_ENV || 'production',
      error: 'Git info unavailable'
    };
    
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const versionPath = path.join(publicDir, 'version.json');
    fs.writeFileSync(versionPath, JSON.stringify(fallbackInfo, null, 2));
    
    console.log('⚠️  Fallback version info generated');
  }
}

generateVersion();

