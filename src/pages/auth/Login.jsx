import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Login.css";


function Login() {
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  navigate("/dashboard");
};
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <h1>INSUREFLOW</h1>
        <h3>Insurance Claim Processing System</h3>

        <p>
          Secure • Transparent • Reliable
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Insurance"
          width="250"
        />
      </div>

      {/* Right Section */}
      <div className="login-right">

        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;