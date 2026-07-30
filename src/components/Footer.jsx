import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>INSUREFLOW</h3>
          <p>
            Smart Insurance Claim Processing System for Customers,
            Surveyors, Finance Team and Managers.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>New Claim</li>
            <li>Claim History</li>
            <li>Profile</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@insureflow.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 INSUREFLOW. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;