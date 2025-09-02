# Morning AI Frontend - Design System &# Morning AI Frontend

## 🌐 i18n Known Issue 結案說明

**✅ 已解決** - Phase 2 D+3 國際化功能已完成並上線 Production

### 技術方案
- **主線採用**: Next.js 14.2.32 + next-intl v3.22.0 (穩定驗證版本)
- **暫緩版本**: Next.js 15 + next-intl v4 (標記為暫緩，存在兼容性問題)
- **支援語言**: 繁體中文 (zh-TW)、簡體中文 (zh-CN)、英文 (en)
- **部署狀態**: ✅ Production Ready - https://morningai-frontend-ten.vercel.app

### 實驗分支
- `i18n-lab` 分支保留作未來升版實驗用途
- **嚴禁直接合併到 main**，需走 RFC + 回歸驗證流程
- 升版需完成「三語 LANG_CHECK + html[lang] + SSG 差異」測試

---

Morning AI SaaS MVP Phase 2 前端專案，包含完整的設計系統、響應式元件庫和國際化功能。

## 🚀 快速開始

### 系統需求

- Node.js 18.0 或更高版本
- npm 9.0 或更高版本

### 安裝與啟動

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置專案
npm run build

# 啟動生產伺服器
npm run start

# 類型檢查
npm run type-check

# 程式碼檢查
npm run lint
```

### 開發伺服器

啟動後訪問 [http://localhost:3000](http://localhost:3000) 查看應用程式。

## 📁 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── components/        # 元件展示頁面
├── components/            # React 元件
│   ├── ui/               # 基礎 UI 元件
│   │   ├── Button.tsx    # 按鈕元件
│   │   └── Input.tsx     # 輸入框元件
│   ├── navigation/       # 導航元件
│   └── theme/           # 主題相關元件
├── lib/                  # 工具函數
│   └── utils.ts         # 通用工具函數
└── styles/              # 樣式檔案
    └── globals.css      # 全域樣式
```

## 🎨 設計系統

### 色彩系統

- **Primary**: 主要品牌色彩 (#0ea5e9)
- **Secondary**: 次要色彩 (#64748b)
- **Success**: 成功狀態 (#10b981)
- **Warning**: 警告狀態 (#f59e0b)
- **Error**: 錯誤狀態 (#ef4444)

### 字體階層

- **H1**: 2.5rem (40px) - 頁面主標題
- **H2**: 2rem (32px) - 區塊標題
- **H3**: 1.5rem (24px) - 子標題
- **H4**: 1.25rem (20px) - 小標題
- **Body**: 1rem (16px) - 內文
- **Caption**: 0.875rem (14px) - 說明文字

### 間距系統

基於 4px 網格系統，使用 Tailwind CSS 預設間距。

### 響應式斷點

- **Mobile**: 375px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🧩 元件庫

### 已完成元件 (3/16)

#### Button 元件
- **變體**: Primary, Secondary, Outline, Ghost, Success, Warning, Error, Link
- **尺寸**: Small, Medium, Large, Extra Large, Icon
- **狀態**: Normal, Hover, Active, Focus, Disabled, Loading
- **功能**: 左右圖示、全寬模式

#### Input 元件
- **變體**: Default, Error, Success
- **尺寸**: Small, Medium, Large
- **狀態**: Normal, Focus, Error, Success, Disabled, Loading
- **功能**: 標籤、說明文字、錯誤訊息、左右圖示

#### TopNavigation 元件
- **功能**: 響應式設計、主題切換、行動版選單
- **狀態**: 活動狀態指示、停用狀態
- **無障礙**: 鍵盤導航、ARIA 標籤

### 規劃中元件 (13/16)

- Select - 下拉選單
- Textarea - 多行文字框
- Checkbox - 核取方塊
- Radio - 單選按鈕
- Switch - 開關切換
- Modal - 對話框
- Toast - 通知訊息
- Loading - 載入狀態
- Tooltip - 提示框
- Breadcrumb - 麵包屑導航
- Pagination - 分頁導航
- Slider - 滑桿控制
- FloatingActionButton - 浮動操作按鈕

## 🌙 主題系統

支援 Light/Dark/System 三種主題模式：

- **Light**: 淺色主題
- **Dark**: 深色主題  
- **System**: 跟隨系統偏好設定

主題切換器位於頁面右上角，設定會自動保存到 localStorage。

## ♿ 無障礙設計

- 符合 WCAG 2.1 AA 標準
- 支援鍵盤導航 (Tab, Enter, Space, Arrow keys)
- 適當的 ARIA 標籤和角色
- 色彩對比度 ≥ 4.5:1
- 焦點指示器清晰可見

## 📱 響應式設計

所有元件都支援響應式設計：

- **Mobile First**: 優先考慮行動裝置體驗
- **Touch Friendly**: 觸控友善的互動區域
- **Flexible Layout**: 彈性佈局適應不同螢幕尺寸

## 🛠️ 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **元件**: React 19
- **工具**: ESLint, PostCSS
- **部署**: Vercel

## 📊 效能指標

- **First Load JS**: ~117KB (優秀)
- **建置時間**: ~8.8s (良好)
- **TypeScript**: 100% 類型安全
- **Tree Shaking**: 支援按需載入

## 🔗 相關連結

- **元件展示**: [/components](/components)
- **GitHub Repository**: [RC918/morningai-frontend](https://github.com/RC918/morningai-frontend)
- **設計規範**: 參考 D2_DAILY_UPDATE.md

## 📝 開發指南

### 新增元件

1. 在 `src/components/ui/` 建立元件檔案
2. 使用 `class-variance-authority` 定義變體
3. 實作 `forwardRef` 支援 ref 傳遞
4. 加入 TypeScript 類型定義
5. 在展示頁面加入範例

### 樣式規範

- 使用 Tailwind CSS 類別
- 遵循設計系統色彩和間距
- 支援 Dark Mode (使用 CSS Variables)
- 確保響應式設計

### 程式碼規範

- 使用 TypeScript 嚴格模式
- 遵循 ESLint 規則
- 元件名稱使用 PascalCase
- 檔案名稱使用 kebab-case

## 📄 授權

MIT License - 詳見 LICENSE 檔案

---

**🎯 Morning AI Design System - 企業級 React 元件庫**

