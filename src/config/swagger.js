import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple CRUD API with Express and Swagger',
    },
    servers: [
      {
        url: 'http://localhost:https',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './src/routes/v1/userRoute/*.js',
    './src/routes/v1/postfeed/*.js',
    './src/routes/v1/connectionRoute/*.js',
    './src/routes/v1/postRoute/*.js',
    './src/routes/v1/auth.routes.js',
    './src/routes/**/*.js',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };



