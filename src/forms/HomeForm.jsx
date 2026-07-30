import "../assets/styles/VehicleForm.css";

function HomeForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="claim-form">

      <h2>🏠 Home Insurance Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Property Owner Name *</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName || ""}
            onChange={handleChange}
            placeholder="Enter Owner Name"
          />
        </div>

        <div className="form-group">
          <label>Property Address *</label>
          <input
            type="text"
            name="propertyAddress"
            value={formData.propertyAddress || ""}
            onChange={handleChange}
            placeholder="Enter Property Address"
          />
        </div>

        <div className="form-group">
          <label>Property Type *</label>
          <select
            name="propertyType"
            value={formData.propertyType || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Damage Type *</label>
          <input
            type="text"
            name="damageType"
            value={formData.damageType || ""}
            onChange={handleChange}
            placeholder="Fire / Flood / Theft"
          />
        </div>

        <div className="form-group">
          <label>Incident Date *</label>
          <input
            type="date"
            name="incidentDate"
            value={formData.incidentDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estimated Loss *</label>
          <input
            type="number"
            name="estimatedLoss"
            value={formData.estimatedLoss || ""}
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

export default HomeForm;