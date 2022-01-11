import express from 'express';

// Functionality
import { createUser, loginUser, delUser, updateUser } from '../controllers/user';

const router = express.Router();

// API Endpoints
router.post('/user', createUser);
router.get('/user', loginUser);
router.delete('/user', delUser);
router.put('/user', updateUser);