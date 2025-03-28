import express from 'express';
import saveData from '../controllers/SignUp_db.js';

const router = express.Router();

router.post('/api/Signup', saveData);

export default router;
