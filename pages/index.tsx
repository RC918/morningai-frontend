import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [buildInfo, setBuildInfo] = useState(null)
  
  useEffect(() => {
    fetch('/api/version.json')
      .then(res => res.json())
      .then(data => setBuildInfo(data))
      .catch(err => console.error('Failed to load build info:', err))
  }, [])
  
  return (
    <>
      <Head>
        <title>Morning AI</title>
        <meta name="description" content="Morning AI - Your AI Assistant Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{ 
        padding: '2rem', 
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#0070f3', marginBottom: '1rem' }}>
          Welcome to Morning AI
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          Your AI Assistant Platform
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <a 
            href="/api/healthz" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#0070f3', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            Health Check
          </a>
          <a 
            href="/api/version.json" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#0070f3', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            Version Info
          </a>
        </div>
        
        {buildInfo && (
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '6px',
            textAlign: 'left',
            fontSize: '0.9rem'
          }}>
            <h3>Build Information</h3>
            <p><strong>Version:</strong> {buildInfo.version}</p>
            <p><strong>Environment:</strong> {buildInfo.environment}</p>
            <p><strong>Build ID:</strong> {buildInfo.build_id}</p>
            <p><strong>Commit:</strong> {buildInfo.commit?.substring(0, 8)}</p>
            <p><strong>Built At:</strong> {new Date(buildInfo.built_at).toLocaleString()}</p>
          </div>
        )}
        
        <footer style={{ 
          marginTop: '3rem', 
          padding: '1rem', 
          borderTop: '1px solid #eee',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>Morning AI Platform - Powered by Next.js & Vercel</p>
          {buildInfo && (
            <p>Build: {buildInfo.build_id} | {buildInfo.commit?.substring(0, 8)}</p>
          )}
        </footer>
      </main>
    </>
  )
}
