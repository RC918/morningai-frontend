export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">☀️</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Morning AI</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">功能</a>
              <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">關於</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">聯絡</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              智能AI代理平台
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Morning AI 提供專業的AI智能助手服務，幫助您建構強大的Bot系統，
              實現智能化的用戶互動與業務自動化
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                開始使用
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">核心功能</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">智能Bot建構</h3>
                <p className="text-gray-600">快速建立和部署智能對話機器人，支援多種場景應用</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">用戶管理</h3>
                <p className="text-gray-600">完整的用戶認證與權限管理系統，確保安全可靠</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">智能分析</h3>
                <p className="text-gray-600">深度數據分析與洞察，優化AI助手表現</p>
              </div>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">系統狀態：正常運行</span>
            </div>
            <p className="text-sm text-gray-500">
              API 服務已就緒 • 前端部署完成 • 所有系統正常
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Morning AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
