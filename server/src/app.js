const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const publicRouter = require("./route/public.route");

dotenv.config();

const app = express();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
});

app.use(
    cors({
        origin: process.env.FRONTEND_URI,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// Public routes - accessible without authentication
app.use("/api", publicRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.get("/", (req, res) => {
    res.send("Law College Website API is running");
});

module.exports = app;