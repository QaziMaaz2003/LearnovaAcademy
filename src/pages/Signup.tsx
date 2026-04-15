import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import './AuthPages.css'

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup attempt:', formData)
    // Add signup logic here
  }

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google signup successful:', credentialResponse)
    // Send the token to your backend for verification and user creation
    const token = credentialResponse.credential
    // Add your backend call here to handle authentication
  }

  const handleGoogleError = () => {
    console.log('Google signup failed')
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Join Learnova Nexus</h1>
        <p>Create your account and start learning today</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">I am a</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-agree">
            <label>
              <input type="checkbox" required />
              I agree to the{' '}
              <a href="#terms">Terms of Service</a> and{' '}
              <a href="#privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            Create Account
          </button>
        </form>

        <div className="auth-divider">OR</div>

        <div className="social-login">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            text="signup_with"
          />
        </div>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
