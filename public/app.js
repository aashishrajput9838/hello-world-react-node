// React component for Hello World app
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '3rem',
        margin: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Hello World!
      </h1>
      <p style={{
        color: 'white',
        fontSize: '1.5rem',
        margin: '10px'
      }}>
        Welcome to React + Node.js
      </p>
      <div style={{
        color: 'white',
        fontSize: '1rem',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '10px'
      }}>
        Built with ❤️ using React 18 and Express
      </div>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
