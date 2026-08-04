const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
// Register User
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        // Check if user exists
        const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existing.length > 0) {
            return res.status(400).json({ success: false, message: 'Email is already registered.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert user
        const userRole = role || 'customer';
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, userRole]
        );

        // Generate JWT token
        const token = jwt.sign(
            { id: result.insertId, role: userRole },
            process.env.JWT_SECRET || 'super_secret_key',
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            token,
            user: { id: result.insertId, name, email, role: userRole }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error during registration.', error: error.message });
    }
};

// Get policy number for logged-in customer
exports.getPolicy = async (req, res) => {
  try {
    const userId = req.user.id;
    // Look for existing claims to extract policy number
    const [rows] = await pool.query(
      "SELECT policy_number FROM claims WHERE claimant_id = ? ORDER BY id ASC LIMIT 1",
      [userId]
    );
    if (rows.length > 0 && rows[0].policy_number) {
      return res.json({ success: true, policyNumber: rows[0].policy_number });
    }
    // Generate deterministic policy from user id
    const policyNumber = `POL-${String(userId).padStart(6, "0")}`;
    res.json({ success: true, policyNumber });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide email and password.' });
        }

        // Check user
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ success: false, message: 'Invalid credentials.' });
        }

        const user = users[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'super_secret_key',
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'Logged in successfully!',
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error during login.', error: error.message });
    }
};