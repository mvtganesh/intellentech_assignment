export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Temporary hardcoded response
        res.json({
            message: 'Login successful',
            user: {
                id: '1',
                name: 'Test User',
                email: email,
                role: 'viewer',
                permissions: {
                    posts: { view: true, create: false, update: false, delete: false },
                    dashboard: { view: true }
                }
            },
            tokens: {
                accessToken: 'mock-token',
                refreshToken: 'mock-refresh-token'
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        res.status(201).json({
            message: 'User registered successfully',
            user: { id: '1', name, email, role: 'viewer' }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        
        res.json({
            message: 'Password reset link sent to email'
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};