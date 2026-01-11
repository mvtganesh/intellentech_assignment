export const getDashboardData = async (req, res) => {
    try {
        res.json({
            stats: {
                totalUsers: 10,
                totalPosts: 25,
                activeUsers: 8,
                inactiveUsers: 2
            },
            recentActivities: [
                { id: 1, action: 'User login', user: 'John Doe', time: '2 hours ago' },
                { id: 2, action: 'Post created', user: 'Jane Smith', time: '4 hours ago' }
            ],
            externalData: [
                { id: '1', name: 'External Item 1', data: 'Sample data 1' },
                { id: '2', name: 'External Item 2', data: 'Sample data 2' }
            ]
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};