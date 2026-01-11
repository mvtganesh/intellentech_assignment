import express from 'express';
import { getDashboardData } from '../controllers/adminController.js';

const router = express.Router();

// Admin routes
router.get('/dashboard', getDashboardData);

export default router;