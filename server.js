const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const claimRoutes = require('./routes/claimRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/claims', claimRoutes);

// Health Check Route
app.get('/api/health', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        res.status(200).json({
            success: true,
            message: "Insurance Claim API & Database are up and running!",
            dbConnected: rows[0].result === 2
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server is running, but Database failed to connect.",
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`\n=============================================`);
    console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
    console.log(`🏥 Health check at http://localhost:${PORT}/api/health`);
    console.log(`=============================================\n`);
});