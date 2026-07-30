import "../assets/styles/VehicleForm.css";

function TravelForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="claim-form">

      <h2>✈️ Travel Insurance Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Traveller Name *</label>
          <input
            type="text"
            name="travellerName"
            value={formData.travellerName || ""}
            onChange={handleChange}
            placeholder="Enter Traveller Name"
          />
        </div>

        <div className="form-group">
          <label>Destination *</label>
          <input
            type="text"
            name="destination"
            value={formData.destination || ""}
            onChange={handleChange}
            placeholder="Enter Destination"
          />
        </div>

        <div className="form-group">
          <label>Departure Date *</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Return Date *</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Reason for Claim *</label>
          <input
            type="text"
            name="travelReason"
            value={formData.travelReason || ""}
            onChange={handleChange}
            placeholder="Lost Baggage / Delay / Medical"
          />
        </div>

        <div className="form-group">
          <label>Claim Amount *</label>
          <input
            type="number"
            name="travelClaimAmount"
            value={formData.travelClaimAmount || ""}
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

export default TravelForm;