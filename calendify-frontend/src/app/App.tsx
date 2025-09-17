import React, { useState } from 'react';
import LoginPage from '../pages/login/LoginPage';
import UserDashboard from '../pages/dashboard/UserDashboard';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import './App.css';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className="App">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="App">
      {user.role === 'admin' ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <UserDashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
