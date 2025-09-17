import React, { useState } from 'react';
import './LoginPage.css';
import { testAccounts, checkCredentials } from './login/testAccounts';

interface LoginPageProps {
  onLogin: (user: { name: string; email: string; role: 'admin' | 'user' }) => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const result = checkCredentials(email, password);

    if (result.isAuthenticated && result.user) {
      onLogin({
        name: result.user.name,
        email: result.user.email,
        role: result.user.role as 'admin' | 'user'
      });
    } else {
      setError('Ongeldige email of wachtwoord');
    }
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Calendify</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>

        <div className="test-accounts-mini">
          <div className="test-title">test</div>
          <div className="test-line">admin@example.com / admin123</div>
          <div className="test-line">john@example.com / user123</div>
        </div>

        <p>
          Geen account? <button className="link">Registreer</button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
