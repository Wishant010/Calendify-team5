// Hardcoded accounts for testing/development purposes
export const testAccounts = {
    admin: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123', // In a real app, never store passwords in plain text
        role: 'admin' as const
    },
    users: [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            password: 'user123', // In a real app, never store passwords in plain text
            role: 'user'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            password: 'user123',
            role: 'user'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            password: 'user123',
            role: 'user'
        }
    ]
};

// Helper function to check login credentials
export const checkCredentials = (email: string, password: string) => {
    // Check admin account
    if (email === testAccounts.admin.email && password === testAccounts.admin.password) {
        return {
            isAuthenticated: true,
            user: testAccounts.admin
        };
    }

    // Check user accounts
    const user = testAccounts.users.find(u => u.email === email && u.password === password);
    if (user) {
        return {
            isAuthenticated: true,
            user
        };
    }

    return {
        isAuthenticated: false,
        user: null
    };
};

// Get user information by email
export const getUserByEmail = (email: string) => {
    if (email === testAccounts.admin.email) {
        return testAccounts.admin;
    }
    return testAccounts.users.find(u => u.email === email) || null;
};