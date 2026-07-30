import "../assets/styles/Sidebar.css";
import {
  FaHome,
  FaPlusCircle,
  FaHistory,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <h3 className="sidebar-title">
        Customer Panel
      </h3>

      <ul>

        <li>
          <FaHome />
          Dashboard
        </li>

        <li>
          <FaPlusCircle />
          New Claim
        </li>

        <li>
          <FaHistory />
          Claim History
        </li>

        <li>
          <FaUserCircle />
          Profile
        </li>

        <li>
          <FaSignOutAlt />
          Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;