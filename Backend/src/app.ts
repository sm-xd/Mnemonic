// src/app.ts
import express, { Application } from 'express';
import cors from 'cors'
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';
import { connectDB } from './db';

const app: Application = express();

// Global Middlewares
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// routes
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

export { app };
