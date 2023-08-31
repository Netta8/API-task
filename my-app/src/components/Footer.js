import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>2nd Floor, Piramal Bamba,</p>{" "}
          <p>left side of the Corporate PN group</p>
          <p>Noodel Street 12, 11213 Berlin, Germany</p>
        </div>
        <div className="footer-section">
          <p>opening hours:</p>
          <p>Mo-Fri from 8:00 to 21:00</p>
          <p>costumers service:📞 5558920234</p>

          <p>Contact us: ✉️ max.mustermann@example.com</p>
        </div>

        <div className="footer-section">
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NB Special Needs Center Berlin</p>
      </div>
    </footer>
  );
};

export default Footer;
