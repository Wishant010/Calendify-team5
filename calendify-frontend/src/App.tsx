import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/dashboard/user/UserDashboard';
import AdminDashboard from './components/dashboard/admin/AdminDashboard';
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
