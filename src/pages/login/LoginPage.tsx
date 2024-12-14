import LoginForm from './components/LoginForm';

function LoginPage() {

  return (
    
    <div
      style={{
        height: '100vh',
        position: 'fixed',
        top: '0',
        left : '0',
        width : '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundImage: 'url(src/assets/shutterstock_401425492blur.png)',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h2 style={{
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: '1px',
        fontSize: '55px',
        margin: '0 0 32px 0',
      }}>Random Coffee</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
