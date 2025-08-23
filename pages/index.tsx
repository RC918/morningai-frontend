import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning AI</title>
        <meta name="description" content="Morning AI - Your AI Assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Morning AI</h1>
        <p>Your AI Assistant Platform</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/api/healthz" style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px',
            marginRight: '1rem'
          }}>
            Health Check
          </a>
          <a href="/api/version.json" style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px'
          }}>
            Version Info
          </a>
        </div>
      </main>
    </>
  )
}
