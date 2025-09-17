import React, { useState } from 'react';
import '../shared/Dashboard.css';

interface UserDashboardProps {
    onLogout?: () => void;
}

function UserDashboard({ onLogout }: UserDashboardProps) {
    const [activeMenu, setActiveMenu] = useState('calendar');

    const menuItems = [
        { id: 'calendar', label: 'Kalender' },
        { id: 'events', label: 'Mijn Evenementen' },
        { id: 'schedule', label: 'Planning' },
        { id: 'profile', label: 'Profiel' }
    ];

    // Hardcoded user data
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user'
    };

    const getContentForMenu = (menuId: string) => {
        switch (menuId) {
            case 'calendar':
                return 'Hier komt de Kalender';
            case 'events':
                return (
                    <div>
                        <h2>Mijn Evenementen</h2>
                        <ul>
                            <li>Team Meeting - 10:00</li>
                            <li>Lunch - 12:30</li>
                            <li>Project Review - 14:00</li>
                        </ul>
                    </div>
                );
            case 'schedule':
                return 'Mijn Planning';
            case 'profile':
                return (
                    <div>
                        <h2>Mijn Profiel</h2>
                        <p>Naam: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Rol: {userData.role}</p>
                    </div>
                );
            default:
                return 'Selecteer een menu item';
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h1>User Dashboard</h1>
                <p className="user-info">{userData.name}</p>
                <div className="sidebar-menu">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                            onClick={() => setActiveMenu(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <button className="logout-btn" onClick={onLogout || (() => alert('Uitloggen'))}>
                    Uitloggen
                </button>
            </div>

            <div className="main-content">
                <div className="content-area">
                    {getContentForMenu(activeMenu)}
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;