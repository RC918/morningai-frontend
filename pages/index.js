export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: '#f0f0f0'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          🌅 Morning AI
        </h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          Welcome to Morning AI
        </p>
        <p style={{ color: '#999', marginTop: '20px' }}>
          System Online ✅
        </p>
      </div>
    </div>
  )
}