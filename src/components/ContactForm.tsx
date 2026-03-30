import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    studentName: '',
    gradeClass: '',
    course: '',
    message: '',
    agreeContact: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const subjects = [
    'Admissions',
    'Courses',
    'Fees',
    'Technical Support',
    'General Inquiry'
  ]

  const grades = [
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10 (O Level)',
    'Grade 11',
    'Grade 12 (A Level)',
    'Undergraduate',
    'Other'
  ]

  const courses = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Computer Science',
    'English',
    'Accounting',
    'Business Studies',
    'Biology',
    'Other'
  ]

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      // In production, you would send this to your backend
      console.log('Form Data:', formData)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.')
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        studentName: '',
        gradeClass: '',
        course: '',
        message: '',
        agreeContact: false
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject / Topic
              </label>
              <select
                id="subject"
                name="subject"
                className="form-select"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled>Select a Topic</option>
                {subjects.map((subj, index) => (
                  <option key={index} value={subj}>{subj}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gradeClass" className="form-label">
                Grade / Class
              </label>
              <select
                id="gradeClass"
                name="gradeClass"
                className="form-select"
                value={formData.gradeClass}
                onChange={handleChange}
              >
                <option value="" disabled>Select Grade / Class</option>
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="course" className="form-label">
                Course
              </label>
              <select
                id="course"
                name="course"
                className="form-select"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="" disabled>Select Course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="studentName" className="form-label">
                Student's Name (if applicable)
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                className="form-input"
                placeholder="Student's Name"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="agreeContact"
              name="agreeContact"
              className="form-checkbox"
              checked={formData.agreeContact}
              onChange={handleChange}
            />
            <label htmlFor="agreeContact" className="checkbox-label">
              I agree to be contacted regarding my inquiry
            </label>
          </div>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('error') || submitMessage.includes('Please') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <p className="privacy-notice">
            We respect your privacy. Your information will not be shared.
          </p>
        </form>
      </div>
    </section>
  )
}
