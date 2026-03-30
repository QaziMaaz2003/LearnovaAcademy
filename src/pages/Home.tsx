import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const modules = [
    {
      icon: '🎥',
      title: 'Recorded Lectures',
      description: 'Comprehensive, subject-wise and topic-wise organized video lectures designed to align with O & A Level curriculum.',
      details: [
        'Covers core concepts in a structured and easy-to-follow manner for effective understanding',
        'Includes detailed video solutions of past papers to enhance exam preparation',
        'Enables students to learn at their own pace with unlimited access to content',
        'Regularly updated material to stay aligned with syllabus requirements'
      ]
    },
    {
      icon: '👨‍🏫',
      title: 'Hire a Tutor',
      description: 'Access to a network of qualified and experienced tutors for both online and in-person sessions.',
      details: [
        'Covers a wide range of academic levels including O/A Levels, Matric, Inter, Entry Tests (MCAT, ECAT), University courses, and IELTS preparation',
        'Personalized tutor matching based on student needs, subject requirements, and preferred learning style',
        'Flexible scheduling options to accommodate student availability',
        'Focused academic guidance aimed at improving performance and achieving learning goals'
      ]
    },
    {
      icon: '⏱️',
      title: 'Hourly Tutor',
      description: 'On-demand, one-on-one online tutoring sessions for immediate academic support.',
      details: [
        'Specifically designed for short-term preparation, especially before exams (1–2 days prior)',
        'Targeted guidance on specific topics, concepts, or problem areas',
        'Intensive and personalized sessions to maximize learning in limited time',
        'Dedicated tutor support to help students revise efficiently and build confidence'
      ]
    },
    {
      icon: '📝',
      title: 'Notes',
      description: 'Well-organized, subject-wise and topic-wise study materials for O & A Level students.',
      details: [
        'Availability of both free and premium notes to suit different learning needs',
        'Includes concise revision notes designed for quick review before exams',
        'Content prepared to simplify complex concepts and enhance understanding',
        'Reliable and exam-focused material to support independent study'
      ]
    },
    {
      icon: '💬',
      title: 'Forum',
      description: 'Interactive online discussion platform designed to promote collaborative learning.',
      details: [
        'Allows students to ask questions, share knowledge, and discuss academic topics',
        'Encourages peer-to-peer support and exchange of study resources',
        'Provides a space for resolving queries related to subjects, exams, and preparation strategies',
        'Builds a learning community where students can actively engage and support each other'
      ]
    },
    {
      icon: '🏫',
      title: 'School Portal',
      description: 'Dedicated, customized platform for each school.',
      details: [
        'Teachers can upload lectures, materials, and updates',
        'Provides students with centralized access to all their learning materials',
        'Facilitates effective communication between teachers and students',
        'Supports schools in creating their own structured and independent online learning environment'
      ]
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

  const faqs = [
    {
      question: 'What are your recorded lectures and how can they help me?',
      answer: 'Our recorded lectures are comprehensive, subject-wise and topic-wise organized videos designed to align with O & A Level curriculum and other academic standards. They cover core concepts in a structured and easy-to-follow manner, include detailed video solutions of past papers, and enable you to learn at your own pace with unlimited access to the content.'
    },
    {
      question: 'What is the difference between hiring a tutor and hourly sessions?',
      answer: 'Hire a Tutor service offers access to a network of qualified tutors for ongoing one-on-one sessions (online or in-person) with flexible scheduling and personalized learning plans. Hourly Tutor provides on-demand, short-term preparation specifically for exams. Choose Hire a Tutor for long-term support and Hourly Tutor for last-minute exam prep.'
    },
    {
      question: 'What subjects and academic levels do you cover?',
      answer: 'We cover a wide range of subjects including Mathematics, Physics, Chemistry, Computer Science, English, Accounting, Business, and Biology across multiple academic levels: O/A Levels, Matric, Inter, University courses, Entry Tests (MCAT, ECAT), and IELTS preparation.'
    },
    {
      question: 'What kind of study materials and notes are available?',
      answer: 'We provide well-organized, subject-wise and topic-wise study materials available as both free and premium notes. Our notes include concise revision materials designed for quick exam review, simplified explanations of complex concepts, and exam-focused content to support independent study.'
    },
    {
      question: 'How does the interactive forum benefit my learning?',
      answer: 'Our Forum is an interactive online discussion platform where you can ask questions, share knowledge, and discuss academic topics with peers. It encourages peer-to-peer support, allows exchange of study resources, and builds a learning community where students actively engage and support each other.'
    },
    {
      question: 'What is the School Portal and how does it work?',
      answer: 'The School Portal is a dedicated, customized platform for each school. Teachers can upload lectures and materials, students get centralized access to all learning materials, it facilitates effective communication between teachers and students, and supports schools in creating their own structured online learning environment.'
    },
    {
      question: 'How do your tutors match my learning needs?',
      answer: 'We provide personalized tutor matching based on your subject requirements, academic level, learning style preferences, and specific goals. Our tutors are highly qualified and experienced professionals who provide focused academic guidance aimed at improving your performance and achieving your learning objectives.'
    },
    {
      question: 'Can I access all modules and materials on any device?',
      answer: 'Yes, Learnova Nexus is designed to be fully responsive and accessible on all devices including desktop, tablet, and smartphone. You can access video lectures, interactive modules, study notes, communicate with tutors, and use the forum anytime, anywhere with reliable internet connectivity.'
    }
  ]

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

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

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {modules.map((module, index) => (
            <div key={index} className={`service-item ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
              <div className="service-media">
                {index === 0 ? (
                  <img src="/record.png" alt="Recorded Lectures" className="service-image" />
                ) : index === 1 ? (
                  <img src="/tutor.png" alt="Hire a Tutor" className="service-image" />
                ) : index === 2 ? (
                  <img src="/hour.png" alt="Hourly Tutor" className="service-image" />
                ) : index === 3 ? (
                  <img src="/notes.jpeg" alt="Notes" className="service-image" />
                ) : index === 4 ? (
                  <img src="/forum.png" alt="Forum" className="service-image" />
                ) : index === 5 ? (
                  <img src="/school portal.png" alt="School Portal" className="service-image" />
                ) : (
                  <div className="service-placeholder">
                    <span className="service-icon">{module.icon}</span>
                  </div>
                )}
              </div>
              <div className="service-content">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <ul className="service-features">
                  {module.details && module.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-container">
          <div className="how-it-works-image">
            <video 
              className="how-it-works-video" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/media/reading.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

      {/* FAQs Section */}
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-card"
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
            >
              <div className="faq-header">
                <h3>{faq.question}</h3>
                <span className={`faq-toggle ${expandedFAQ === index ? 'open' : ''}`}>
                  {expandedFAQ === index ? '−' : '+'}
                </span>
              </div>
              {expandedFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
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
