import { GetStaticProps } from 'next'

interface HomeProps {
  buildTime: string
  stage: string
  apiBase: string
}

export default function Home({ buildTime, stage, apiBase }: HomeProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          🌅 Morning AI
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Welcome to Morning AI - Your intelligent assistant for a productive day ahead.
        </p>
        
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '2rem'
        }}>
          <p style={{ margin: '10px 0', fontSize: '1.1rem' }}>
            🚀 System Status: <strong>Online</strong>
          </p>
          <p style={{ margin: '10px 0', fontSize: '1.1rem' }}>
            📅 {new Date().toLocaleDateString()}
          </p>
          <p style={{ margin: '10px 0', fontSize: '1.1rem' }}>
            ⏰ {new Date().toLocaleTimeString()}
          </p>
        </div>
        
        <div style={{
          background: 'rgba(0,0,0,0.2)',
          padding: '15px',
          borderRadius: '10px',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          <p style={{ margin: '5px 0' }}>Environment: {stage}</p>
          <p style={{ margin: '5px 0' }}>API Base: {apiBase}</p>
          <p style={{ margin: '5px 0' }}>Build: {buildTime}</p>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
      stage: process.env.NEXT_PUBLIC_STAGE || 'prod',
      apiBase: process.env.NEXT_PUBLIC_API_BASE || 'https://api.morningai.me'
    }
  }
}