import express, { json } from 'express';
import cors from 'cors';

// Correct paths based on your folder structure
import bioRouter from './routes/v1/userRoute/bio.js';
import techRouter from './routes/v1/userRoute/tech-profile.js';
import showcaseRouter from './routes/v1/userRoute/showcase.js';
import projectRouter from './routes/v1/userRoute/projects.js';
import collabRouter from './routes/v1/userRoute/coleb-setting.js'; // note: maybe rename to collab-setting.js
import visualsRouter from './routes/v1/userRoute/visuals.js';
import postRouter from './routes/v1/postRoute/post.js';
import connectionRouter from './routes/v1/connectionRoute/connect.js';
import authRouter from './routes/auth.routes.js'; // Import the auth route
import infoRouter from './routes/v1/userRoute/info.js'; // Import the basic info route
import filterRoute from './routes/v1/postfeed/feed.js'
import reqConnect from './routes/v1/connectionRoute/connect.js'
import postrouter from './routes/v1/postRoute/post.js';

const app = express();

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://coleb-connect-universe.vercel.app',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://192.168.0.106:8080',
       'http://192.168.0.102:3000',
       'http://192.168.0.104:8080',
       'http://192.168.0.102:8080'
    ];

    if (!origin) return callback(null, true); // Allow requests with no origin

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400
};


app.use(cors(corsOptions));

// Parse JSON bodies
app.use(json());

// Main routes
app.use('/collab/v1/bio', bioRouter);
app.use('/collab/v1/tech', techRouter);
app.use('/collab/v1/showcase', showcaseRouter);
app.use('/collab/v1/project', projectRouter);
app.use('/collab/v1/collab', collabRouter);
app.use('/collab/v1/visuals', visualsRouter);
app.use('/collab/v1/posts', postRouter);
app.use('/collab/v1/connections', connectionRouter);
app.use('/collab/v1/auth', authRouter); // Add the auth route
app.use('/collab/v1/info', infoRouter); // Add the basic info route
app.use('/collab/v1/filter', filterRoute); 
app.use('/collab/v1/connect', reqConnect); 
app.use('/collab/v1/posts', postrouter);

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  console.error('Stack:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

