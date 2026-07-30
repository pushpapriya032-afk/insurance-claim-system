import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Register.css";

function Register() {
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register button clicked");
    navigate("/dashboard");
  };


  return (
    <div className="register-container">

      {/* Left Section */}
      <div className="register-left">
        <h1>INSUREFLOW</h1>
        <h3>Insurance Claim Processing System</h3>
        <p>Fast • Secure • Transparent</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Insurance"
          width="250"
        />
      </div>

      {/* Right Section */}
      <div className="register-right">

        <h2>Create New Account</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Customer</option>
            <option>Claim Officer</option>
            <option>Surveyor</option>
            <option>Manager</option>
            <option>Finance Officer</option>
          </select>

          {role !== "Customer" && (
            <input
              type="text"
              placeholder="Employee ID"
            />
          )}

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/"> Sign In</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;