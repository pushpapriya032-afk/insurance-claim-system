import "../assets/styles/VehicleForm.css";

function ReviewClaim({ formData, prevStep }) {
  return (
    <div className="claim-form">

      <h2>📋 Review Your Claim</h2>

      <div className="review-section">

        <h3>Common Details</h3>

        <p><strong>Policy Number:</strong> {formData.policyNumber}</p>
        <p><strong>Claim Type:</strong> {formData.claimType}</p>
        <p><strong>Estimated Amount:</strong> ₹{formData.estimatedAmount}</p>
        <p><strong>Description:</strong> {formData.description}</p>

        <hr />

        <h3>Insurance Details</h3>

        {formData.claimType === "Vehicle" && (
          <>
            <p><strong>Registration No:</strong> {formData.registrationNumber}</p>
            <p><strong>Vehicle Type:</strong> {formData.vehicleType}</p>
            <p><strong>Manufacturer:</strong> {formData.manufacturer}</p>
            <p><strong>Model:</strong> {formData.model}</p>
            <p><strong>Driver:</strong> {formData.driverName}</p>
            <p><strong>Repair Cost:</strong> ₹{formData.repairCost}</p>
          </>
        )}

        {formData.claimType === "Health" && (
          <>
            <p><strong>Patient Name:</strong> {formData.patientName}</p>
            <p><strong>Hospital:</strong> {formData.hospitalName}</p>
            <p><strong>Disease:</strong> {formData.disease}</p>
            <p><strong>Medical Cost:</strong> ₹{formData.medicalCost}</p>
          </>
        )}

        {formData.claimType === "Home" && (
          <>
            <p><strong>Owner:</strong> {formData.ownerName}</p>
            <p><strong>Property:</strong> {formData.propertyAddress}</p>
            <p><strong>Damage:</strong> {formData.damageType}</p>
            <p><strong>Estimated Loss:</strong> ₹{formData.estimatedLoss}</p>
          </>
        )}

        {formData.claimType === "Travel" && (
          <>
            <p><strong>Traveller:</strong> {formData.travellerName}</p>
            <p><strong>Destination:</strong> {formData.destination}</p>
            <p><strong>Reason:</strong> {formData.travelReason}</p>
            <p><strong>Claim Amount:</strong> ₹{formData.travelClaimAmount}</p>
          </>
        )}

        {formData.claimType === "Life" && (
          <>
            <p><strong>Policy Holder:</strong> {formData.policyHolder}</p>
            <p><strong>Nominee:</strong> {formData.nomineeName}</p>
            <p><strong>Cause:</strong> {formData.causeOfDeath}</p>
            <p><strong>Claim Amount:</strong> ₹{formData.lifeClaimAmount}</p>
          </>
        )}

      </div>

      <div className="button-group">

        <button type="button" onClick={prevStep}>
          Previous
        </button>

        <button
          type="submit"
          className="submit-btn"
        >
          Submit Claim
        </button>

      </div>

    </div>
  );
}

export default ReviewClaim;