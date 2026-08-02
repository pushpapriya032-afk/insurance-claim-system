const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const claimRoutes = require("./routes/claimRoutes");
const pool = require("./config/db");

pool.getConnection()
    .then(connection => {
        console.log("✅ MySQL Connected Successfully");
        connection.release();
    })
    .catch(err => {
        console.error("❌ MySQL Connection Failed:");
        console.error(err.message);
    });
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/claims", claimRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});