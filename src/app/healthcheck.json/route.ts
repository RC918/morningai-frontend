import { NextResponse } from 'next/server';

export async function GET() {
  const healthcheck = {
    service: "morningai-frontend",
    version: "v2.0.0-phase2-d3-i18n",
    commit: "d20e75a",
    buildId: "d20e75a",
    locales: ["zh-TW", "zh-CN", "en"],
    pages: 19,
    generatedAt: new Date().toISOString(),
    status: "healthy",
    features: {
      i18n: true,
      ssg: true,
      htmlLang: true,
      e2eTests: true,
      unitTests: true
    },
    tech: {
      nextVersion: "14.2.32",
      nextIntlVersion: "3.22.0",
      nodeVersion: "20.x"
    }
  };

  return NextResponse.json(healthcheck);
}

