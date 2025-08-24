import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [apiStatus, setApiStatus] = useState('檢查中...')
  const [buildId, setBuildId] = useState('載入中...')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentDate(now.toLocaleDateString('zh-TW'))
      setCurrentTime(now.toLocaleTimeString('zh-TW'))
    }

    const loadVersionInfo = async () => {
      try {
        const response = await fetch('/version.json?t=' + Date.now())
        const versionData = await response.json()
        setBuildId(`Build: ${versionData.build_id}`)
      } catch (error) {
        setBuildId('Build: 載入失敗')
      }
    }

    const checkApiStatus = async () => {
      try {
        const response = await fetch('https://api.morningai.me/healthz')
        const data = await response.json()
        setApiStatus('正常連接')
      } catch (error) {
        setApiStatus('連接異常')
      }
    }

    updateDateTime()
    setInterval(updateDateTime, 1000)
    loadVersionInfo()
    checkApiStatus()
  }, [])

  return (
    <>
      <Head>
        <title>Morning AI - 您的智能助手</title>
        <meta name="description" content="Morning AI - 為您開啟高效的一天" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <main style={{
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '800px'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌅</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Morning AI</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            歡迎來到 Morning AI - 您的智能助手，為您開啟高效的一天。
          </p>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              🚀 系統狀態: <span style={{ color: '#4ade80' }}>線上運行</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              📅 今日日期: {currentDate}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              ⏰ 當前時間: {currentTime}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              🔒 SSL 狀態: <span style={{ color: '#4ade80' }}>安全連接</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              🌐 API 連接: <span style={{ color: apiStatus === '正常連接' ? '#4ade80' : '#f87171' }}>{apiStatus}</span>
            </div>
          </div>
        </main>
        
        <footer style={{
          marginTop: 'auto',
          padding: '1rem',
          textAlign: 'center',
          opacity: 0.8,
          fontSize: '0.9rem'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Morning AI</strong> | 環境: Production
          </div>
          <div style={{ 
            fontFamily: 'monospace',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '0.5rem'
          }}>
            {buildId}
          </div>
          <div>
            © 2025 Morning AI. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}
