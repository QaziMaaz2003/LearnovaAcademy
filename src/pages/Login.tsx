import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPages.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
    // Add login logic here
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login to your Learnova Academy account</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>

        <div className="auth-divider">OR</div>

        <div className="social-login">
          <button className="social-btn google">
            🔍 Login with Google
          </button>
          <button className="social-btn github">
            🐙 Login with GitHub
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/signup" className="auth-link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}
