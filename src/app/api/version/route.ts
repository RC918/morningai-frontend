import fs from 'node:fs';
import path from 'node:path';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
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

    return NextResponse.json(versionInfo);
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to get version info',
        version: 'unknown',
        commit: 'unknown',
        buildTime: new Date().toISOString(),
        buildId: 'unknown',
      },
      { status: 500 },
    );
  }
}
