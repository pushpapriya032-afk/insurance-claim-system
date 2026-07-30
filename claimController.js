const pool = require('../config/db');

// Create a new claim
exports.createClaim = async (req, res) => {
    try {
        const { policy_number, claim_type, amount, description } = req.body;
        const claimant_id = req.user.id;

        if (!policy_number || !claim_type || !amount) {
            return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
        }

        const claim_number = `CLM-${Math.floor(100000 + Math.random() * 900000)}`;

        const [result] = await pool.query(
            'INSERT INTO claims (claim_number, policy_number, claimant_id, claim_type, amount, description) VALUES (?, ?, ?, ?, ?, ?)',
            [claim_number, policy_number, claimant_id, claim_type, amount, description]
        );

        res.status(201).json({
            success: true,
            message: 'Claim submitted successfully!',
            claimId: result.insertId,
            claimNumber: claim_number
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to submit claim.', error: error.message });
    }
};

// Get all claims for logged-in user (or all claims if insurer/adjuster)
exports.getClaims = async (req, res) => {
    try {
        let query = 'SELECT * FROM claims';
        let params = [];

        if (req.user.role === 'claimant') {
            query += ' WHERE claimant_id = ?';
            params.push(req.user.id);
        }

        const [claims] = await pool.query(query, params);
        res.status(200).json({ success: true, count: claims.length, data: claims });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve claims.', error: error.message });
    }
};