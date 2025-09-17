import React, { useState } from 'react';
import styles from './Dashboard.module.css';

interface AdminDashboardProps {
    onLogout?: () => void;
}

function AdminDashboard({ onLogout }: AdminDashboardProps) {
    const [activeMenu, setActiveMenu] = useState('users');

    const menuItems = [
        { id: 'users', label: 'Gebruikers' },
        { id: 'events', label: 'Alle Evenementen' },
        { id: 'settings', label: 'Instellingen' }
    ];

    // Hardcoded admin data
    const adminData = {
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
    };

    // Hardcoded users data
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
    ];

    // Hardcoded events data
    const events = [
        { id: 1, title: 'Team Meeting', date: '2025-09-17', owner: 'John Doe' },
        { id: 2, title: 'Project Review', date: '2025-09-18', owner: 'Jane Smith' },
        { id: 3, title: 'Training', date: '2025-09-19', owner: 'Bob Johnson' }
    ];

    const getContentForMenu = (menuId: string) => {
        switch (menuId) {
            case 'users':
                return (
                    <div>
                        <h2>Gebruikersbeheer</h2>
                        <table className={styles['admin-table']}>
                            <thead>
                                <tr>
                                    <th>Naam</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Alle Evenementen</h2>
                        <table className={styles['admin-table']}>
                            <thead>
                                <tr>
                                    <th>Titel</th>
                                    <th>Datum</th>
                                    <th>Eigenaar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.title}</td>
                                        <td>{event.date}</td>
                                        <td>{event.owner}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <h2>Systeeminstellingen</h2>
                        <p>Admin: {adminData.name}</p>
                        <p>Email: {adminData.email}</p>
                    </div>
                );
            default:
                return 'Selecteer een menu item';
        }
    };

    return (
        <div className={styles['dashboard-container']}>
            <div className={styles.sidebar}>
                <h1>Admin Dashboard</h1>
                <p className={styles['user-info']}>{adminData.name}</p>
                <div className={styles['sidebar-menu']}>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`${styles['menu-item']} ${activeMenu === item.id ? styles.active : ''}`}
                            onClick={() => setActiveMenu(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <button className={styles['logout-btn']} onClick={onLogout || (() => alert('Uitloggen'))}>
                    Uitloggen
                </button>
            </div>

            <div className={styles['main-content']}>
                <div className={styles['content-area']}>
                    {getContentForMenu(activeMenu)}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;