import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/logoweb-removebg-preview.png" alt="Learnova Nexus Logo" className="navbar-logo-image" />
        </Link>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tutors" className="nav-link" onClick={() => setIsOpen(false)}>
              Tutors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notes" className="nav-link" onClick={() => setIsOpen(false)}>
              Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/forum" className="nav-link" onClick={() => setIsOpen(false)}>
              Forum
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <Link to="/login" className="btn-login">
            Login
          </Link>
          <Link to="/signup" className="btn-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
