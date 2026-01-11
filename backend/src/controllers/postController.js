export const getPosts = async (req, res) => {
    try {
        const posts = [
            {
                id: '1',
                title: 'First Post',
                content: 'This is the first post content',
                author: 'John Doe',
                status: 'published',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '2',
                title: 'Second Post',
                content: 'This is the second post content',
                author: 'Jane Smith',
                status: 'draft',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        
        const newPost = {
            id: Date.now().toString(),
            title,
            content,
            author: 'Current User',
            status: 'draft',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        res.status(201).json({
            message: 'Post created successfully',
            post: newPost
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};