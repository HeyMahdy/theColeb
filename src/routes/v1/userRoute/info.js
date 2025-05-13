import { Router } from 'express';
import logger from '../../../logger.js';
import verifyToken from '../../../middlewares/authenticateToken.js';
import * as basicInfoController from '../../../controllers/v1/BasicInfoController.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// Create basic info
router.post('/', basicInfoController.createBasicInfo);

// Get basic info
router.get('/', basicInfoController.getBasicInfo);

// Update basic info
router.put('/', basicInfoController.updateBasicInfo);

// Delete basic info
router.delete('/', basicInfoController.deleteBasicInfo);

export default router;
