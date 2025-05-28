// src/app.ts
import express, { Application } from 'express';
import cors from 'cors'
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

export { app };
