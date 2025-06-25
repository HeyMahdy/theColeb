import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {profileFilter }from '../../../controllers/v1/feedController.js'
import { asyncHandler } from '../../../utils/asyncHandler.js';

const router = Router();

router.get('/filter', verifyToken, asyncHandler(profileFilter));




export default router;

