import "../assets/styles/VehicleForm.css";

function HealthForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="claim-form">

      <h2>🏥 Health Insurance Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Patient Name *</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName || ""}
            onChange={handleChange}
            placeholder="Enter Patient Name"
          />
        </div>

        <div className="form-group">
          <label>Hospital Name *</label>
          <input
            type="text"
            name="hospitalName"
            value={formData.hospitalName || ""}
            onChange={handleChange}
            placeholder="Enter Hospital Name"
          />
        </div>

        <div className="form-group">
          <label>Hospital Address *</label>
          <input
            type="text"
            name="hospitalAddress"
            value={formData.hospitalAddress || ""}
            onChange={handleChange}
            placeholder="Enter Hospital Address"
          />
        </div>

        <div className="form-group">
          <label>Disease / Diagnosis *</label>
          <input
            type="text"
            name="disease"
            value={formData.disease || ""}
            onChange={handleChange}
            placeholder="Enter Disease"
          />
        </div>

        <div className="form-group">
          <label>Admission Date *</label>
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Discharge Date *</label>
          <input
            type="date"
            name="dischargeDate"
            value={formData.dischargeDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Doctor Name *</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName || ""}
            onChange={handleChange}
            placeholder="Enter Doctor Name"
          />
        </div>

        <div className="form-group">
          <label>Estimated Medical Cost *</label>
          <input
            type="number"
            name="medicalCost"
            value={formData.medicalCost || ""}
            onChange={handleChange}
            placeholder="Enter Amount"
          />
        </div>

      </div>

      <div className="button-group">
        <button type="button" onClick={prevStep}>
          Previous
        </button>

        <button type="button" onClick={nextStep}>
          Next
        </button>
      </div>

    </div>
  );
}

export default HealthForm;