import { Router } from 'express';
import verifyToken from '../../../middlewares/authenticateToken.js';
import { 
    sendRquest, 
    getRequestList, 
    getSendRequestList, 
    acceptReq,
    deleteConnection,
    rejectReq
} from '../../../controllers/v1/ReqConnnection.js';
import { asyncHandler } from '../../../utils/asyncHandler.js';

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// POST: Send a connection request
router.post('/request', asyncHandler(sendRquest));

// GET: List incoming connection requests
router.get('/incoming', asyncHandler(getRequestList));

// GET: List outgoing/sent connection requests
router.get('/outgoing', asyncHandler(getSendRequestList));

// POST: Accept a connection request
router.post('/accept', asyncHandler(acceptReq));

// DELETE: Remove a connection
router.post('/decline',asyncHandler(deleteConnection));

// DELETE: Remove a connection
router.post('/reject',asyncHandler(rejectReq));


export default router;
