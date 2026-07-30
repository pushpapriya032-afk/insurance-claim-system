import "../assets/styles/VehicleForm.css";

function VehicleForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="claim-form">

      <h2>🚗 Vehicle Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Vehicle Registration Number *</label>
         
            placeholder="Enter Registration Number"
          <input
  type="text"
  name="registrationNumber"
  value={formData.registrationNumber || ""}
  onChange={handleChange}
  placeholder="Enter Registration Number"
/>
        </div>

        <div className="form-group">
          <label>Vehicle Type *</label>
          <select
  name="vehicleType"
  value={formData.vehicleType || ""}
  onChange={handleChange}
>
            <option value="">Select Vehicle Type</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Bus</option>
            <option>Truck</option>
          </select>
        </div>

        <div className="form-group">
          <label>Manufacturer *</label>
         <input
  type="text"
  name="manufacturer"
  value={formData.manufacturer || ""}
  onChange={handleChange}
  placeholder="Enter Manufacturer"
/> 
        </div>

        <div className="form-group">
          <label>Model *</label>
          <input
  type="text"
  name="model"
  value={formData.model || ""}
  onChange={handleChange}
  placeholder="Enter Model"
/>
        </div>

        <div className="form-group">
          <label>Manufacturing Year *</label>
          <input
  type="number"
  name="manufacturingYear"
  value={formData.manufacturingYear || ""}
  onChange={handleChange}
  placeholder="Enter Year"
/>
        </div>

        <div className="form-group">
          <label>Driver Name *</label>
          <input
  type="text"
  name="driverName"
  value={formData.driverName || ""}
  onChange={handleChange}
  placeholder="Enter Driver Name"
/>
        </div>

        <div className="form-group">
          <label>Driving Licence Number *</label>
                      
         <input
  type="text"
  name="licenceNumber"
  value={formData.licenceNumber || ""}
  onChange={handleChange}
  placeholder="Enter Licence Number"
/> 
        </div>

        <div className="form-group">
          <label>Accident Date *</label>
          <input
  type="date"
  name="accidentDate"
  value={formData.accidentDate || ""}
  onChange={handleChange}
/>
        </div>

        <div className="form-group">
          <label>Accident Time *</label>
          <input
  type="time"
  name="accidentTime"
  value={formData.accidentTime || ""}
  onChange={handleChange}
/>
        </div>

        <div className="form-group">
          <label>Accident Location *</label>
          <input
            type="text"
            name="accidentLocation"
            value={formData.accidentLocation || ""}
            onChange={handleChange}
            placeholder="Enter Accident Location"
          />
        </div>

        <div className="form-group">
          <label>Police FIR Number</label>
        <input
  type="text"
  name="firNumber"
  value={formData.firNumber || ""}
  onChange={handleChange}
  placeholder="Optional"
/>
        </div>

        <div className="form-group">
          <label>Estimated Repair Cost *</label>
         <input
  type="number"
  name="repairCost"
  value={formData.repairCost || ""}
  onChange={handleChange}
  placeholder="Enter Repair Cost"
/>
        </div>

      </div>
      <div className="button-group">
        <button
          type="button"
          onClick={prevStep}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={nextStep}
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default VehicleForm;