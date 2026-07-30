import "../assets/styles/VehicleForm.css";

function UploadDocuments({
  formData,
  handleFileChange,
  nextStep,
  prevStep,
}) {

  const renderUploadFields = () => {

    switch (formData.claimType) {

      case "Vehicle":
        return (
          <>
            <FileUpload label="RC Book" name="rcBook" />
            <FileUpload label="Driving Licence" name="licence" />
            <FileUpload label="Insurance Policy" name="policy" />
            <FileUpload label="Vehicle Photo" name="vehiclePhoto" />
            <FileUpload label="Accident Photo" name="accidentPhoto" />
            <FileUpload label="FIR Copy" name="fir" />
            <FileUpload label="Repair Estimate" name="repairEstimate" />
          </>
        );

      case "Health":
        return (
          <>
            <FileUpload label="Hospital Bills" name="hospitalBills" />
            <FileUpload label="Medical Reports" name="medicalReports" />
            <FileUpload label="Doctor Prescription" name="prescription" />
            <FileUpload label="Discharge Summary" name="dischargeSummary" />
          </>
        );

      case "Home":
        return (
          <>
            <FileUpload label="Property Proof" name="propertyProof" />
            <FileUpload label="Damage Photos" name="damagePhotos" />
            <FileUpload label="Repair Estimate" name="homeRepairEstimate" />
            <FileUpload label="FIR Copy" name="homeFir" />
          </>
        );

      case "Travel":
        return (
          <>
            <FileUpload label="Passport" name="passport" />
            <FileUpload label="Flight Ticket" name="ticket" />
            <FileUpload label="Boarding Pass" name="boardingPass" />
            <FileUpload label="Travel Policy" name="travelPolicy" />
          </>
        );

      case "Life":
        return (
          <>
            <FileUpload label="Death Certificate" name="deathCertificate" />
            <FileUpload label="Medical Certificate" name="medicalCertificate" />
            <FileUpload label="Nominee ID Proof" name="nomineeId" />
            <FileUpload label="Policy Document" name="lifePolicy" />
          </>
        );

      default:
        return <p>Select a claim type first.</p>;
    }
  };

  return (
    <div className="claim-form">

      <h2>📂 Upload Supporting Documents</h2>

      <div className="form-grid">

        {renderUploadFields()}

      </div>

      <div className="button-group">

        <button onClick={prevStep}>
          Previous
        </button>

        <button onClick={nextStep}>
          Next
        </button>

      </div>

    </div>
  );
}

function FileUpload({ label, name }) {

  return (
    <div className="form-group">

      <label>{label}</label>

      <input
        type="file"
        name={name}
        accept=".pdf,.png,.jpg,.jpeg"
      />

    </div>
  );
}

export default UploadDocuments;