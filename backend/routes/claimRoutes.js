const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createClaim,
  getClaims,
  updateClaimStatus,
  verifyClaim,
  getVerifiedClaims,
  assignSurveyor,
  getSurveyorClaims,
  submitSurveyReport,
} = require("../controllers/claimController");

// Create Claim
router.post("/", protect, createClaim);

// Get All Claims
router.get("/", protect, getClaims);

// Verify Claim
router.put("/verify/:id", protect, verifyClaim);

// Claims waiting for Surveyor Assignment
router.get("/verified", protect, getVerifiedClaims);

// Assign Surveyor
router.put("/assign/:id", protect, assignSurveyor);

// Surveyor Dashboard Claims
router.get("/surveyor", protect, getSurveyorClaims);
router.put("/survey/:id", protect, submitSurveyReport);
router.put("/submit-survey/:id", protect, submitSurveyReport);

// Status updates from officer/manager
router.put("/status/:id", protect, updateClaimStatus);

module.exports = router;