export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🌅 Morning AI
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Welcome to Morning AI - Your intelligent assistant for a productive day ahead.
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <p>🚀 System Status: Online</p>
        <p>📅 {new Date().toLocaleDateString()}</p>
        <p>⏰ {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  )
}