import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const modules = [
    {
      icon: '🎥',
      title: 'Recorded Lectures',
      description: 'Topic-wise lectures and past paper solutions.'
    },
    {
      icon: '👨‍🏫',
      title: 'Hire a Tutor',
      description: 'Find expert tutors for long-term learning.'
    },
    {
      icon: '⏱️',
      title: 'Hourly Tutor',
      description: 'Get instant help for exams and quick revision.'
    },
    {
      icon: '📝',
      title: 'Notes',
      description: 'Access free and premium study notes.'
    },
    {
      icon: '💬',
      title: 'Forum',
      description: 'Ask questions and learn with other students.'
    },
    {
      icon: '🏫',
      title: 'School Portal',
      description: 'Dedicated platform for schools and teachers.'
    }
  ]

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Computer Science',
    'English'
  ]

  const whyChooseUs = [
    'Expert Tutors',
    'Exam-Focused Content',
    'Flexible Learning',
    'Affordable Pricing',
    'Personalized Support'
  ]

  const steps = [
    { number: '1', title: 'Sign Up', description: 'Create your free account in seconds' },
    { number: '2', title: 'Choose Course or Tutor', description: 'Pick from our diverse learning options' },
    { number: '3', title: 'Start Learning', description: 'Begin your personalized learning journey' },
    { number: '4', title: 'Achieve Your Goals', description: 'Track progress and reach your targets' }
  ]

  const testimonials = [
    {
      quote: 'This platform helped me improve my grades significantly.',
      author: 'Sarah Khan',
      school: 'XYZ High School'
    },
    {
      quote: 'The tutors are incredibly helpful and patient with me.',
      author: 'Ahmed Ali',
      school: 'ABC Academy'
    },
    {
      quote: 'Great notes and excellent community support!',
      author: 'Fatima Ahmed',
      school: 'DEF College'
    }
  ]

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/media/hero-sec.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Learnova Nexus Academy</h1>
          <h2 className="hero-subtitle">All-in-one platform for lectures, tutors, notes, and exam preparation. Where you learn smarter and achieve more</h2>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/tutors" className="btn btn-secondary">
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="modules">
        <h2>Everything You Need to Succeed</h2>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className="module-card">
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Subjects Section */}
      <section className="subjects">
        <h2>Explore Popular Subjects</h2>
        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card">
              <span>{subject}</span>
            </div>
          ))}
        </div>
        <p className="subjects-more">Many more subjects available</p>
        <Link to="/courses" className="btn btn-outline">
          👉 View All Subjects
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Students Choose Us</h2>
        <div className="points-grid">
          {whyChooseUs.map((point, index) => (
            <div key={index} className="point-card">
              <div className="point-number">{index + 1}</div>
              <h3>{point}</h3>
              <p>Experience quality education at its finest.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-circle">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">- {testimonial.author}</p>
              <p className="school">{testimonial.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free Demo Section */}
      <section className="free-demo">
        <h2>Try a Free Demo Class</h2>
        <p>Experience our teaching before you commit.</p>
        <Link to="/tutors" className="btn btn-primary">
          👉 Book Free Demo
        </Link>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <h2>Start Your Learning Journey Today</h2>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Join Now
          </Link>
        </div>
      </section>
    </main>
  )
}
