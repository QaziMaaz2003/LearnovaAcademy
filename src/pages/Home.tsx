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
    'English',
    'Accounting',
    'Business',
    'Biology'
  ]

  const whyChooseUs = [
    { title: 'Expert Tutors', description: 'Learn from highly qualified and experienced tutors dedicated to your success.' },
    { title: 'Exam-Focused Content', description: 'Curriculum designed specifically to help you ace your exams and achieve top grades.' },
    { title: 'Flexible Learning', description: 'Study at your own pace with courses and sessions available 24/7 on any device.' },
    { title: 'Affordable Pricing', description: 'High-quality education without breaking the bank with competitive prices.' },
    { title: 'Personalized Support', description: 'Get one-on-one guidance and personalized learning plans tailored to your needs.' }
  ]

  const steps = [
    { number: '1', title: 'Sign Up', description: 'Create your free account in seconds' },
    { number: '2', title: 'Choose Course or Tutor', description: 'Pick from our diverse learning options' },
    { number: '3', title: 'Start Learning', description: 'Begin your personalized learning journey' },
    { number: '4', title: 'Achieve Your Goals', description: 'Track progress and reach your targets' }
  ]

  const testimonials = [
    {
      quote: 'Learnova Nexus has transformed my learning experience with exceptional tutors and a supportive environment.',
      author: 'Sarah Khan',
      school: 'Army Public School'
    },
    {
      quote: 'The tutors at Learnova Nexus are incredibly knowledgeable and always ready to help. Best academy ever!',
      author: 'Ahmed Ali',
      school: 'The City School'
    },
    {
      quote: 'Amazing experience with Learnova Nexus. The tutors genuinely care about student success and progress.',
      author: 'Fatima Ahmed',
      school: 'Cedar College'
    },
    {
      quote: 'Learnova Nexus offers professional tutoring with personalized attention. Highly recommended!',
      author: 'Ali Hassan',
      school: 'Highbrow College'
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
          <h1>Learnova Nexus</h1>
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
            <div key={index} className="module-card-wrapper">
              <div className="module-card">
                <div className="module-card-front">
                  <div className="module-icon">{module.icon}</div>
                </div>
                <div className="module-card-back">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
              </div>
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
        <div className="why-choose-container">
          <div className="why-choose-content">
            <h2>Why Students Choose Us</h2>
            <div className="points-grid">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="point-card">
                  <div className="point-number">{index + 1}</div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="why-choose-image">
            <img src="/choose-us.png" alt="Why choose us" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-container">
          <div className="how-it-works-image">
            <img src="/works.png" alt="How it works" />
          </div>
          <div className="how-it-works-content">
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-circle">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index === 0 && <div className="step-arrow step-arrow-right">→</div>}
                  {index === 2 && <div className="step-arrow step-arrow-left">←</div>}
                  {index !== 0 && index !== 2 && index < steps.length - 1 && <div className="step-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonials-belt">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">- {testimonial.author}</p>
                <p className="school">{testimonial.school}</p>
              </div>
            ))}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">- {testimonial.author}</p>
                <p className="school">{testimonial.school}</p>
              </div>
            ))}
          </div>
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
