import fs from 'node:fs';
import path from 'node:path';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 嘗試讀取版本資訊
    let versionInfo = {
      version: 'unknown',
      commit: 'unknown',
      buildTime: new Date().toISOString(),
      buildId: 'unknown',
    };

    try {
      const versionPath = path.join(process.cwd(), 'public', 'version.json');
      if (fs.existsSync(versionPath)) {
        const versionData = fs.readFileSync(versionPath, 'utf8');
        versionInfo = { ...versionInfo, ...JSON.parse(versionData) };
      }
    } catch {
      console.warn('Failed to read version.json');
    }

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Morning AI Phase 2 Final',
      ...versionInfo,
    });
  } catch {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        service: 'Morning AI Phase 2 Final',
        error: 'Health check failed',
      },
      { status: 500 },
    );
  }
}
