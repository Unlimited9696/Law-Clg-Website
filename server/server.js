require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const adminAuthRoutes = require('./routes/adminAuth.routes');
const announcementRoutes = require('./routes/announcements.routes');
const publicRouter = require('./src/route/public.route');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api', publicRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
