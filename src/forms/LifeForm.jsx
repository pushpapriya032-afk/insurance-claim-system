import "../assets/styles/VehicleForm.css";

function LifeForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="claim-form">

      <h2>❤️ Life Insurance Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Policy Holder Name *</label>
          <input
            type="text"
            name="policyHolder"
            value={formData.policyHolder || ""}
            onChange={handleChange}
            placeholder="Enter Policy Holder Name"
          />
        </div>

        <div className="form-group">
          <label>Nominee Name *</label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName || ""}
            onChange={handleChange}
            placeholder="Enter Nominee Name"
          />
        </div>

        <div className="form-group">
          <label>Date of Death *</label>
          <input
            type="date"
            name="deathDate"
            value={formData.deathDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Cause of Death *</label>
          <input
            type="text"
            name="causeOfDeath"
            value={formData.causeOfDeath || ""}
            onChange={handleChange}
            placeholder="Enter Cause"
          />
        </div>

        <div className="form-group">
          <label>Claim Amount *</label>
          <input
            type="number"
            name="lifeClaimAmount"
            value={formData.lifeClaimAmount || ""}
            onChange={handleChange}
            placeholder="Enter Amount"
          />
        </div>

      </div>

      <div className="button-group">
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>

    </div>
  );
}

export default LifeForm;