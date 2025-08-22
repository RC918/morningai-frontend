// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning AI - 智能AI代理平台</title>
        <meta name="description" content="Morning AI 官方網站 - 智能AI代理平台，讓每一天都充滿微笑的節奏" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
            Morning AI
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
            智能AI代理平台，讓每一天都充滿微笑的節奏
          </p>
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#888' }}>
              環境: {process.env.NODE_ENV || 'development'}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

