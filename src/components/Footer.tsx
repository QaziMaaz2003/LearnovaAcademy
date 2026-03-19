import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Learnova Academy</h3>
          <p>Your complete learning companion for success.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/tutors">Tutors</Link></li>
            <li><Link to="/notes">Notes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Online Learning</a></li>
            <li><a href="#services">Tutoring</a></li>
            <li><a href="#services">Study Materials</a></li>
            <li><a href="#services">Community Forum</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@learnova.com">info@learnova.com</a></li>
            <li><a href="tel:+92123456789">+92 (123) 456-789</a></li>
            <li><p>Your City, Country</p></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">•</span>
          <a href="#terms">Terms of Service</a>
          <span className="separator">•</span>
          <a href="#contact">Contact Us</a>
        </div>
        <p>&copy; 2026 Learnova Academy. All rights reserved.</p>
      </div>
    </footer>
  )
}
