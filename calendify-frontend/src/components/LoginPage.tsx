import React from 'react';
import './LoginPage.css';

function LoginPage() {
  function handleLogin(e: any) {
    e.preventDefault();
    alert('Login gelukt!');
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Calendify</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Wachtwoord" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Geen account? <button className="link">Registreer</button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
