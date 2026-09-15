import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* Decorative Shapes */}
      <div className="footer-shape footer-shape-left"></div>
      <div className="footer-shape footer-shape-top"></div>
      <div className="footer-shape footer-shape-right"></div>
      <div className="footer-shape footer-shape-bottom"></div>

      <div className="footer-container">

        {/* ==================== BRAND ==================== */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img
              src="/logo_isandbox.png"
              alt="iSANDBOX"
            />
          </Link>

          <p className="footer-tagline">
            Fun things
            <br />
            for brighter
            <br />
            tomorrows ♡
          </p>

        </div>


        {/* ==================== QUICK LINKS ==================== */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/all">New In</Link>

          <Link to="/bestseller">Bestseller</Link>

          <Link to="/gift-cards">Gift Cards</Link>

          <Link to="/all">All</Link>

          <Link to="/contact">Contact Us</Link>

        </div>


        {/* ==================== POLICIES ==================== */}
        <div className="footer-column">

          <h3>Policies</h3>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/return-policy">
            Return Policy
          </Link>

          <Link to="/terms-of-service">
            Terms of Service
          </Link>

          <Link to="/shipping-policy">
            Shipping Policy
          </Link>

        </div>


        {/* ==================== CONTACT ==================== */}
        <div className="footer-column footer-contact">

          <h3>Get in Touch</h3>

          {/* Address */}
          <div className="footer-contact-item">

            <MapPin size={16} />

            <span>
              3970 Mercantile Dr Suite 150
              <br />
              Lake Oswego, OR 97035
            </span>

          </div>


          {/* Phone */}
          <a
            href="tel:+19718252600"
            className="footer-contact-item"
          >

            <Phone size={16} />

            <span>
              (971) 825-2600
            </span>

          </a>


          {/* Email */}
          <a
            href="mailto:info@isandboxfactory.com"
            className="footer-contact-item"
          >

            <Mail size={16} />

            <span>
              info@isandboxfactory.com
            </span>

          </a>

        </div>


        {/* ==================== SOCIAL ==================== */}
        <div className="footer-column footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>


            {/* X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

      </div>


      {/* ==================== BOTTOM ==================== */}
      <div className="footer-bottom">

        <p>
          © 2026 iSANDBOX. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;