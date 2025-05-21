import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import {createBasicInfo,getBasicInfo,updateBasicInfo,deleteBasicInfo} from '../../../controllers/v1/BasicInfoController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', createBasicInfo);

// Get basic info
router.get('/', getBasicInfo);

// Update basic info
router.put('/', updateBasicInfo);

// Delete basic info
router.delete('/', deleteBasicInfo);

export default router;
