const express  = require("express");
const router   = express.Router();
const protect  = require("../middleware/authMiddleware");
const { register, login, getPolicy } = require("../controllers/authController");

router.post("/register", register);
router.post("/login",    login);
router.get("/policy",    protect, getPolicy);

module.exports = router;
