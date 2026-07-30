import "../assets/styles/Stepper.css";

function Stepper({ step }) {
  const steps = [
    "Common",
    "Details",
    "Upload",
    "Review",
  ];

  return (
    <div className="stepper">

      {steps.map((label, index) => (
        <div className="step-item" key={index}>

          <div
            className={`step-circle ${
              step >= index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </div>

          <p className={step >= index + 1 ? "active-label" : ""}>
  {label}
</p>

          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                step > index + 1 ? "active-line" : ""
              }`}
            ></div>
          )}

        </div>
      ))}

    </div>
  );
}

export default Stepper;