# .github/pull_request_template.md

## ✨ Summary
<!-- 用 1–3 句说明这次 PR 的目的（修复 zh-CN 缺失、三语结构对齐、移除生产环境 MISSING_MESSAGE 等） -->

## 🔗 Related Issues
<!-- e.g. Closes #123, Relates to #456 -->

## 🧪 What's changed
- [ ] zh-CN：补齐缺失键值（目标：0 缺失）
- [ ] en：校对与 zh-TW/zh-CN 结构一致
- [ ] i18n 结构：确保三语 key 树完全一致（无孤儿键、无冗余）

---

## ✅ Pre-merge Checklist (run locally or CI)
> 这三步对应你们的三支脚本：**diff / lint / sync**。请在勾选前执行，并将输出贴到下方 `Details`。

- [ ] 1) `i18n:diff` —— 侦测各语系缺失/多余键  
  ```bash
  # 示例命令（可按你们实际脚本名微调）
  pnpm i18n:diff
  # 或
  npm run i18n:diff
  ```
  <details>
  <summary>diff 输出</summary>

  <!-- 粘贴关键摘要：缺失数、页面分布（Features / Pricing / FAQ / Contact / Demo / Privacy / Terms） -->

  </details>

- [ ] 2) `i18n:lint` —— 校验占位符/变量、HTML 片段与格式
  ```bash
  pnpm i18n:lint
  ```
  <details>
  <summary>lint 输出</summary>

  <!-- 粘贴命令输出的警告/错误摘要（例如：变量不一致、HTML 标签不闭合、换行/空白差异） -->

  </details>

- [ ] 3) `i18n:sync` —— 同步 key 结构并修复可自动修复项
  ```bash
  pnpm i18n:sync
  ```
  <details>
  <summary>sync 输出</summary>

  <!-- 粘贴自动修复统计：新增/删除/迁移的键值数量 -->

  </details>

- [ ] 4) `build:test` —— 预防生产 MISSING_MESSAGE
  ```bash
  pnpm build && pnpm test
  # 或 npm run build && npm test
  ```
  <details>
  <summary>build / test 输出</summary>

  <!-- 粘贴关键断言（无 Missing message log、无 next-intl 警告） -->

  </details>

## 🔍 Manual Verification
请至少在 en / zh-TW / zh-CN 各打开一次以下页面，确认无 MISSING_MESSAGE、无英文 fallback：

- [ ] `/features`（功能介绍区块完整）
- [ ] `/pricing`（方案描述与功能列表齐全）
- [ ] `/faq`（问答与搜索可用）
- [ ] `/contact`（表单字段与联络信息）
- [ ] `/demo`（互动示范文案与按钮）
- [ ] `/privacy`（隐私条款）
- [ ] `/terms`（服务条款）

<details>
<summary>截图 / 录屏证据（建议：每语系每页面 1 张）</summary>

<!-- 拖拽图片到这里，或贴上录屏链接 -->

</details>

## 🔁 i18n Consistency Gate
- [ ] 三语 JSON/TS 结构完全一致（key 路径相同，顺序可忽略）
- [ ] 占位符/变量在三语中一一对应（例如 {name}、{count}）
- [ ] 富文本片段（如 `<strong>…</strong>`）在三语中结构等价
- [ ] 不包含硬编码文案；动态内容均由翻译键值驱动
- [ ] 移除了未使用键（以 i18n:diff 结果为准）

## 🔒 Risk / Rollback
- **风险**：i18n key 误删导致页面缺文
- **观察**：合并后首个发布时间窗进行全站冒烟（3 语言）
- **回滚**：`git revert <commit>` + 重新执行 `i18n:sync`

## 🚀 Deployment Notes
- [ ] 已在 Staging 验证 3 语言无 MISSING_MESSAGE
- [ ] 打开 `NEXT_INTL_DEBUG=error`（或保留默认生产日志）确认无报错
- [ ] 若使用 Edge/runtime，请确认 next-intl 加载策略无回退到默认语言

## 👀 Reviewers
- **i18n 负责人**：@…
- **前端负责人**：@…
- **QA**：@…

