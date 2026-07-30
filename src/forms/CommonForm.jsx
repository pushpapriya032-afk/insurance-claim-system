import { useState } from "react";

function CommonForm({
  formData,
  handleChange,
  nextStep,
  errors,
  setErrors,
}) {
  const validate = () => {
    let newErrors = {};

    if (!formData.policyNumber.trim()) {
      newErrors.policyNumber = "Policy Number is required";
    }

    if (!formData.claimType) {
      newErrors.claimType = "Please select a Claim Type";
    }

    if (!formData.estimatedAmount) {
      newErrors.estimatedAmount =
        "Estimated Claim Amount is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="common-form">
      <h2>📋 Common Details</h2>

      <div className="form-grid">

        {/* Policy Number */}
        <div className="form-group">
          <label>Policy Number *</label>

          <input
            type="text"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            className={errors.policyNumber ? "error-input" : ""}
          />

          {errors.policyNumber && (
            <p className="error">{errors.policyNumber}</p>
          )}
        </div>

        {/* Claim Type */}
        <div className="form-group">
          <label>Claim Type *</label>

          <select
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            className={errors.claimType ? "error-input" : ""}
          >
            <option value="">Select Claim Type</option>
            <option value="Vehicle">Vehicle Insurance</option>
            <option value="Health">Health Insurance</option>
            <option value="Home">Home Insurance</option>
            <option value="Travel">Travel Insurance</option>
            <option value="Life">Life Insurance</option>
          </select>

          {errors.claimType && (
            <p className="error">{errors.claimType}</p>
          )}
        </div>

        {/* Estimated Amount */}
        <div className="form-group">
          <label>Estimated Claim Amount *</label>

          <input
            type="number"
            name="estimatedAmount"
            value={formData.estimatedAmount}
            onChange={handleChange}
            className={errors.estimatedAmount ? "error-input" : ""}
          />

          {errors.estimatedAmount && (
            <p className="error">{errors.estimatedAmount}</p>
          )}
        </div>

        {/* Description */}
        <div className="form-group full-width">
          <label>Description *</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "error-input" : ""}
          />

          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

      </div>

      <button
        type="button"
        onClick={() => {
          if (validate()) {
            nextStep();
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default CommonForm;