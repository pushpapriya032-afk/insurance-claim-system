const express = require('express');
const router = express.Router();
const { createClaim, getClaims } = require('../controllers/claimController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, createClaim);
router.get('/', protect, getClaims);

module.exports = router;