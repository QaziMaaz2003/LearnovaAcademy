import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/">
            <img src="/logoweb-removebg-preview.png" alt="Learnova Nexus Logo" className="footer-logo" />
          </Link>
          <p>Your complete learning companion for success.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
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
            <li><a href="mailto:learnovatutoracademy@gmail.com">learnovatutoracademy@gmail.com</a></li>
            <li><a href="tel:+923113279075">+923113279075</a></li>
            <li><p>Karachi, Pakistan</p></li>
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
        <p>&copy; 2026 Learnova Nexus. All rights reserved.</p>
      </div>
    </footer>
  )
}
