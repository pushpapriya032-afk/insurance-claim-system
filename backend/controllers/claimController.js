const pool = require("../config/db");

// Create a new claim
exports.createClaim = async (req, res) => {
    try {
        const { policy_number, claim_type, amount, description } = req.body;
        const claimant_id = req.user.id;

        if (!policy_number || !claim_type || !amount) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields."
            });
        }

        const claim_number = `CLM-${Math.floor(100000 + Math.random() * 900000)}`;

        const [result] = await pool.query(
            "INSERT INTO claims (claim_number, policy_number, claimant_id, claim_type, amount, description) VALUES (?, ?, ?, ?, ?, ?)",
            [claim_number, policy_number, claimant_id, claim_type, amount, description]
        );

        res.status(201).json({
            success: true,
            message: "Claim submitted successfully!",
            claimId: result.insertId,
            claimNumber: claim_number
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to submit claim.",
            error: error.message
        });
    }
};

// Get claims
exports.getClaims = async (req, res) => {
  try {
    const { id: userId, role } = req.user;
    const baseQuery = `
      SELECT
        claims.id,
        claims.claim_number,
        claims.policy_number,
        claims.claim_type,
        claims.amount,
        claims.status,
        claims.payment_date AS paymentDate,
        claims.description,
        claims.surveyor_name,
        claims.surveyor_id,
        claims.created_at,
        users.name AS customer,
        claims.claimant_id
      FROM claims
      JOIN users
      ON claims.claimant_id = users.id
    `;

    let query = baseQuery + " ORDER BY claims.created_at DESC";
    let params = [];

    // Customers should only see their own claims.
    if (role === "customer") {
      query = baseQuery + " WHERE claims.claimant_id = ? ORDER BY claims.created_at DESC";
      params = [userId];
    }

    const [claims] = await pool.query(query, params);

    res.json({
      success: true,
      data: claims,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.updateClaimStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentDate } = req.body;
    const normalizedStatus = String(status || "").trim().toLowerCase();

    if (!normalizedStatus) {
      return res.status(400).json({
        success: false,
        message: "Status is required.",
      });
    }

    const updates = [normalizedStatus];
    let query = "UPDATE claims SET status = ?";

    if (paymentDate) {
      const parsedDate = new Date(paymentDate);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Invalid paymentDate format.",
        });
      }
      const mysqlPaymentDate = parsedDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      query += ", payment_date = ?";
      updates.push(mysqlPaymentDate);
    }

    query += " WHERE id = ?";
    updates.push(id);

    await pool.query(query, updates);

    res.json({
      success: true,
      message: "Status Updated Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.verifyClaim = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "UPDATE claims SET status = ? WHERE id = ?",
      ["under_review", id]
    );

    console.log(result);

    res.json({
      success: true,
      message: "Claim moved to Under Review",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getVerifiedClaims = async (req, res) => {
  try {
    const [claims] = await pool.query(`
      SELECT
        claims.id,
        claims.claim_number,
        claims.policy_number,
        claims.claim_type,
        claims.status,
        users.name AS customer
      FROM claims
      JOIN users
      ON claims.claimant_id = users.id
      WHERE claims.status='under_review'
    `);

    res.json({
      success: true,
      data: claims,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.assignSurveyor = async (req, res) => {
  try {
    const { id } = req.params;
    const { surveyor_name, surveyor_id } = req.body;
    const assignedName = surveyor_name || "John David";
    const assignedId = surveyor_id || "SUR001";

    await pool.query(
      "UPDATE claims SET status=?, surveyor_name=?, surveyor_id=? WHERE id=?",
      ["surveyed", assignedName, assignedId, id]
    );

    res.json({
      success: true,
      message: "Surveyor Assigned Successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getSurveyorClaims = async (req, res) => {
  try {
    const [claims] = await pool.query(`
      SELECT
        claims.id,
        claims.claim_number,
        claims.policy_number,
        claims.claim_type,
        claims.amount,
        claims.status,
        claims.description,
        claims.surveyor_name,
        claims.surveyor_id,
        users.name AS customer
      FROM claims
      LEFT JOIN users ON users.id = claims.claimant_id
      WHERE claims.surveyor_name IS NOT NULL
        OR claims.status IN ('surveyed', 'submitted')
      ORDER BY claims.created_at DESC
    `);

    res.json({
      success: true,
      data: claims,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.submitSurveyReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks, surveyRemarks } = req.body;
    const reportText = (remarks || surveyRemarks || "").trim();

    if (!reportText) {
      return res.status(400).json({
        success: false,
        message: "Survey remarks are required.",
      });
    }

    await pool.query(
      `UPDATE claims
       SET status = ?, description = ?
       WHERE id = ?`,
      ["submitted", reportText, id]
    );

    res.json({
      success: true,
      message: "Survey Report Submitted Successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};