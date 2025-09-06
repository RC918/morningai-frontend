import Link from 'next/link';

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-gray-900">服務條款</h1>
          <p className="text-gray-600 mt-2">最後更新：2025年9月4日</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 服務條款接受</h2>
            <p className="text-gray-700 leading-relaxed">
              歡迎使用 Morning AI 的服務。通過存取或使用我們的服務，您同意受這些服務條款的約束。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. 服務描述</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Morning AI 提供 AI 驅動的設計系統平台和相關服務。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. 聯繫資訊</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Morning AI</strong><br />
                電子郵件：legal@morningai.me<br />
                地址：台灣台北市信義區<br />
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
