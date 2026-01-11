import express from 'express';

const router = express.Router();

// User routes
router.get('/', (req, res) => {
    res.json({ message: 'User routes' });
});

export default router;