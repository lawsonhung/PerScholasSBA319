// Imports
import express from "express";
import dotenv from "dotenv";
import { globalErr, logReq } from "./middleware/middleware.js";
import userRoutes from "./routes/userRoutes.js";
import journalEntryRoutes from "./routes/journalEntryRoutes.js";
import monthlyCalendarRoutes from "./routes/monthlyCalendarRoutes.js";
import connectDB from "./db/conn.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/entries", journalEntryRoutes);
app.use("/api/calendars", monthlyCalendarRoutes);

// Global middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));