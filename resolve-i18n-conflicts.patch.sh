#!/usr/bin/env bash
set -euo pipefail

# === 你現在應該在 PR 分支上 ===
# 這支腳本會：
# 1) 對衝突檔採 "theirs"（PR 版本為準）
# 2) 跑 i18n:sync / i18n:lint（CI 模式）
# 3) 只要沒有錯誤就 commit 一次，訊息內含檢查摘要

# 可依實際路徑調整
EN_PATH="messages/en.json"
ZHTW_PATH="messages/zh-TW.json"

echo "👉 1/4 取用 PR 版本（theirs）覆蓋衝突檔案…"
git checkout --theirs "$EN_PATH" || true
git checkout --theirs "$ZHTW_PATH" || true
git add "$EN_PATH" "$ZHTW_PATH"

# 若還有其他衝突（非這兩個檔），先提示
if ! git diff --name-only --diff-filter=U --quiet; then
  echo "⚠️ 仍有其他檔案處於衝突狀態，請先手動處理："
  git diff --name-only --diff-filter=U
  exit 1
fi

echo "👉 2/4 安裝依賴（若已安裝會快速跳過）…"
if command -v pnpm >/dev/null 2>&1; then
  pnpm install --frozen-lockfile || pnpm install
elif command -v yarn >/dev/null 2>&1; then
  yarn install --frozen-lockfile || yarn install
else
  npm ci || npm i
fi

echo "👉 3/4 執行 i18n:sync（dry-run → 真正同步）與 i18n:lint（CI 模式）…"
# 先 dry-run 看有無變更建議
npx -y --yes --package=@antfu/ni -- ni run i18n:sync:dry || true

# 真正同步（可自動修復的會落地）
npm run i18n:sync || { echo '❌ i18n:sync 失敗'; exit 1; }

# Lint（CI 模式，會對 placeholders/HTML/結構做嚴格檢查）
npm run i18n:lint || { 
  echo '❌ i18n:lint 失敗，請先修正上面報告的問題再重跑'; 
  exit 1; 
}

echo "👉 4/4 若有修改，建立單一提交…"
if ! git diff --cached --quiet || ! git diff --quiet ; then
  git add -A
  COMMIT_MSG=$(
    cat <<'MSG'
i18n: resolve conflicts by taking PR version + sync & lint

- Take PR version for:
  - src/i18n/messages/en.json
  - src/i18n/messages/zh-TW.json
- Run i18n:sync (auto-fix), then i18n:lint (CI mode)
- Ensure no MISSING_MESSAGE risk for known keys:
  - common.title / common.description
  - features.*.{title,description}
  - cta.readyToStart.{title,description}
MSG
  )
  git commit -m "$COMMIT_MSG"
  echo "✅ 已建立提交。接著 push："
  echo
  echo "   git push"
  echo
else
  echo "✅ 無額外修改可提交（內容已是乾淨狀態）。直接 push："
  echo
  echo "   git push"
  echo
fi

echo "🎉 完成。合併後 Vercel 會自動重建。"

