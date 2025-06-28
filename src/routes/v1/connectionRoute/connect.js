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

/**
 * @swagger
 *  /collab/v1/connections/request:
 *   post:
 *     summary: Send a connection request
 *     tags: [Connections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - receiverId
 *             properties:
 *               senderId:
 *                 type: integer
 *               receiverId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Request sent successfully
 *       400:
 *         description: Invalid input
 */
/**
 * @swagger
 *   /collab/v1/connections/incoming:
 *   get:
 *     summary: Get incoming connection requests
 *     tags: [Connections]
 *     responses:
 *       200:
 *         description: List of incoming requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IncomingConnection'
 */
/**
 * @swagger
 *   /collab/v1/connections/outgoing:
 *   get:
 *     summary: Get outgoing connection requests
 *     tags: [Connections]
 *     responses:
 *       200:
 *         description: List of outgoing requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OutgoingConnection'
 */
/**
 * @swagger
 *  /collab/v1/connections/accept:
 *   post:
 *     summary: Accept a connection request
 *     tags: [Connections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - receiverId
 *             properties:
 *               senderId:
 *                 type: integer
 *               receiverId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Connection accepted
 */
/**
 * @swagger
 *   /collab/v1/connections/decline:
 *   post:
 *     summary: Decline a connection request
 *     tags: [Connections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - receiverId
 *             properties:
 *               senderId:
 *                 type: integer
 *               receiverId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Connection declined
 */
/**
 * @swagger
 *   /collab/v1/connections/reject:
 *   post:
 *     summary: Reject a connection request
 *     tags: [Connections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - receiverId
 *             properties:
 *               senderId:
 *                 type: integer
 *               receiverId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Connection rejected
 */



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
