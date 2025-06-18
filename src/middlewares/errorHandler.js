import logger from '../logger.js';
import { Prisma } from '../../generated/prisma/index.js'; // 

export function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // 🔍 Prisma-specific error handling
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = 400;
    message = `Prisma Known Error: ${err.message}`;
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 422;
    message = 'Validation failed for the Prisma query.';
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 500;
    message = 'Failed to initialize Prisma Client.';
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    statusCode = 500;
    message = 'Prisma Client crashed. Restart required.';
  }

  // 📦 Log error details with Winston
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    statusCode,
    user: req.user ? req.user.userId : undefined,
  });

  // 🔁 Send error response
  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}

