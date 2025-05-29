import { PrismaClient } from '../../generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const checkRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      // Get user from the database to check their role
      const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { role: true }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if user's role is in the allowed roles array
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ 
          error: 'Forbidden: Insufficient permissions',
          message: 'You do not have permission to perform this action'
        });
      }

      next();
    } catch (error) {
      console.error('Role check error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}; 