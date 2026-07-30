
import HealthForm from "../../forms/HealthForm";
import HomeForm from "../../forms/HomeForm";
import TravelForm from "../../forms/TravelForm";
import LifeForm from "../../forms/LifeForm";
import UploadDocuments from "../../forms/UploadDocuments";
import ReviewClaim from "../../forms/ReviewClaim";
import CommonForm from "../../forms/CommonForm";
import VehicleForm from "../../forms/VehicleForm";
import Stepper from "../../components/Stepper";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import "../../assets/styles/NewClaim.css";

function NewClaim() {
  const [step, setStep] = useState(1);
 const [formData, setFormData] = useState({

  // Common
  policyNumber: "",
  claimType: "",
  estimatedAmount: "",
  description: "",

  // Vehicle
  registrationNumber: "",
  vehicleType: "",
  manufacturer: "",
  model: "",
  manufacturingYear: "",
  driverName: "",
  licenceNumber: "",
  accidentDate: "",
  accidentTime: "",
  accidentLocation: "",
  firNumber: "",
  repairCost: "",

  // Health
  patientName: "",
  hospitalName: "",
  hospitalAddress: "",
  disease: "",
  admissionDate: "",
  dischargeDate: "",
  doctorName: "",
  medicalCost: "",

  // Home
  ownerName: "",
  propertyAddress: "",
  propertyType: "",
  damageType: "",
  incidentDate: "",
  estimatedLoss: "",

  // Travel
  travellerName: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  travelReason: "",
  travelClaimAmount: "",

  // Life
  policyHolder: "",
  nomineeName: "",
  deathDate: "",
  causeOfDeath: "",
  lifeClaimAmount: "",
});
const [errors, setErrors] = useState({});
  const nextStep = () => {
  setStep(step + 1);
};

const prevStep = () => {
  setStep(step - 1);
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleFileChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.files[0],
  });
};
  return (
    <DashboardLayout>

      <div className="claim-container">

        <h1>Insurance Claim Request</h1>

<Stepper step={step} />

{step === 1 && (
  <CommonForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    errors={errors}
    setErrors={setErrors}
  />
)}

{step === 2 && formData.claimType === "Vehicle" && (
  <VehicleForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}

{step === 2 && formData.claimType === "Health" && (
  <HealthForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}

{step === 2 && formData.claimType === "Home" && (
  <HomeForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}

{step === 2 && formData.claimType === "Travel" && (
  <TravelForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}

{step === 2 && formData.claimType === "Life" && (
  <LifeForm
    formData={formData}
    handleChange={handleChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}
{step === 3 && (
  <UploadDocuments
    formData={formData}
    handleFileChange={handleFileChange}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}
{step === 4 && (
  <ReviewClaim
    formData={formData}
    prevStep={prevStep}
  />
)}
      </div>

    </DashboardLayout>
  );
}

export default NewClaim;