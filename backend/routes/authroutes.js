import express from 'express';
import AuthController from '../controllers/authcontroller.js';

const router = express.Router();

router.post('/signup', AuthController.Signup);

// router.post('/login');

export default router;
