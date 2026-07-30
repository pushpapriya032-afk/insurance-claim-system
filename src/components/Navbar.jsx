import "../assets/styles/Navbar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <h2>INSUREFLOW</h2>
      </div>

      <div className="navbar-right">

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <FaUserCircle />
          <span>Customer</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;