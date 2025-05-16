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

const router = Router();

// All routes are protected and require authentication
router.use(verifyToken);

// POST: Send a connection request
router.post('/request', sendRquest);

// GET: List incoming connection requests
router.get('/incoming', getRequestList);

// GET: List outgoing/sent connection requests
router.get('/outgoing', getSendRequestList);

// POST: Accept a connection request
router.post('/accept', acceptReq);

// DELETE: Remove a connection
router.post('/decline',deleteConnection);

// DELETE: Remove a connection
router.post('/reject',rejectReq)


export default router;
