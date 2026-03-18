import { useState } from 'react'
import './PageStyles.css'

export default function Tutors() {
  const [activeTab, setActiveTab] = useState('monthly')

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Find Your Tutor</h1>
        <p>Choose between long-term or hourly tutoring</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'monthly' ? 'active' : ''}`}
          onClick={() => setActiveTab('monthly')}
        >
          📅 Monthly Tutors
        </button>
        <button
          className={`tab ${activeTab === 'hourly' ? 'active' : ''}`}
          onClick={() => setActiveTab('hourly')}
        >
          ⏱️ Hourly Tutors
        </button>
      </div>

      <div className="content-placeholder">
        {activeTab === 'monthly' ? (
          <>
            <h2>Monthly Tutoring</h2>
            <p>Find expert tutors for long-term, structured learning.</p>
            <p>Coming soon: Tutor profiles, ratings, availability calendar, and booking system.</p>
          </>
        ) : (
          <>
            <h2>Hourly Tutoring</h2>
            <p>Get instant help with specific topics or exam preparation.</p>
            <p>Coming soon: Quick booking, availability filter, and session scheduling.</p>
          </>
        )}
      </div>
    </div>
  )
}
