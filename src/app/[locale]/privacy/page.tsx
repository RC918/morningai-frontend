import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首頁
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">隱私政策</h1>
          <p className="text-gray-600 mt-2">最後更新：2025年9月4日</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 資料收集</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Morning AI 致力於保護您的隱私。我們收集的個人資料包括：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>姓名、電子郵件地址等聯繫資訊</li>
              <li>使用我們服務時的技術資訊</li>
              <li>Cookie 和類似技術收集的資訊</li>
              <li>您主動提供給我們的其他資訊</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. 資料使用</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們使用收集的資料來：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>提供、維護和改善我們的服務</li>
              <li>處理交易和發送相關資訊</li>
              <li>發送技術通知、更新和安全警報</li>
              <li>回應您的評論、問題和客戶服務請求</li>
              <li>進行研究和分析以改善我們的服務</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. 資料分享</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們不會出售、交易或租借您的個人資料給第三方。我們可能在以下情況下分享資訊：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>獲得您的明確同意</li>
              <li>為了提供您要求的服務</li>
              <li>遵守法律義務</li>
              <li>保護我們的權利和安全</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. 資料安全</h2>
            <p className="text-gray-700 leading-relaxed">
              我們採用適當的技術和組織措施來保護您的個人資料，防止未經授權的存取、使用、披露、修改或銷毀。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. 您的權利</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您對您的個人資料擁有以下權利：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>存取和獲得您個人資料的副本</li>
              <li>更正不準確或不完整的資料</li>
              <li>刪除您的個人資料</li>
              <li>限制處理您的個人資料</li>
              <li>資料可攜性</li>
              <li>反對處理您的個人資料</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookie 政策</h2>
            <p className="text-gray-700 leading-relaxed">
              我們使用 Cookie 和類似技術來改善您的體驗、分析網站使用情況並協助我們的行銷工作。您可以通過瀏覽器設定控制 Cookie 的使用。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. 聯繫我們</h2>
            <p className="text-gray-700 leading-relaxed">
              如果您對本隱私政策有任何問題或疑慮，請通過以下方式聯繫我們：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>Morning AI</strong><br />
                電子郵件：privacy@morningai.me<br />
                地址：台灣台北市信義區<br />
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. 政策更新</h2>
            <p className="text-gray-700 leading-relaxed">
              我們可能會不時更新本隱私政策。任何更改將在此頁面上發布，重大更改將通過電子郵件或我們服務上的通知告知您。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

