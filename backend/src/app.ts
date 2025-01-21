import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoutes from "./routes/example.routes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/examples", exampleRoutes);

export default app;
