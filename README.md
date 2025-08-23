# Morning AI Frontend

Morning AI 官方網站前端專案，基於 Next.js 開發。

## 🚀 技術棧

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node Version**: 18 LTS

## 📦 開發環境設置

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 建置專案
```bash
npm run build
```

### 啟動生產環境
```bash
npm run start
```

### 程式碼檢查
```bash
npm run lint
```

## 🌿 分支策略

- **main**: 生產環境 (Production)
- **develop**: 測試環境 (Staging)

## 📁 專案結構

```
morningai-frontend/
├── src/
│   ├── app/           # App Router 頁面
│   ├── components/    # 可重用組件
│   └── lib/          # 工具函數
├── public/           # 靜態資源
├── next.config.ts    # Next.js 配置
└── package.json      # 專案依賴
```

## 🔒 安全配置

專案已配置以下安全標頭：
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🚀 部署

專案支援部署到 Vercel、Netlify 等平台。

## 👥 協作者

- Manushelp
- RyanChen

## 📄 授權

© 2025 Morning AI. All rights reserved.

<!-- Deploy trigger: 2025-08-23 13:31:32 -->
<!-- Environment variables applied: 2025-08-23 14:03:51 -->