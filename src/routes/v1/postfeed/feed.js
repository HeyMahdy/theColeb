import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {profileFilter }from '../../../controllers/v1/feedController.js'

const router = Router();

router.get('/filter', verifyToken, profileFilter);

export default router;

