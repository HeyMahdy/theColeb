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

// Add CORS configuration before other middleware
const allowedOrigins = [
  'http://localhost:5173',
  'https://thecoleb.onrender.com',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean); // Remove any undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.indexOf(origin) === -1) {
      console.log('Blocked by CORS:', origin);
      console.log('Allowed origins:', allowedOrigins);
      return callback(new Error('Not allowed by CORS'));
    }

    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400 // 24 hours
}));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

