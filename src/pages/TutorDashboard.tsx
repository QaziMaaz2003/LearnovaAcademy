import { useState, useRef } from 'react'
import './TutorDashboard.css'

interface LectureItem {
  id: number
  title: string
  subject: string
  level: string
  duration: string
  uploadedAgo: string
  status: 'Published' | 'Draft'
  thumbnail: string
  type: 'lecture' | 'note'
}

const SAMPLE_LECTURES: LectureItem[] = [
  {
    id: 1,
    title: 'Algebra Basics',
    subject: 'Mathematics',
    level: 'O Level',
    duration: '20 min',
    uploadedAgo: '1d',
    status: 'Published',
    thumbnail: '',
    type: 'lecture',
  },
  {
    id: 2,
    title: 'Photosynthesis Overview',
    subject: 'Biology',
    level: 'A Level',
    duration: '28 min',
    uploadedAgo: '29 days ago',
    status: 'Draft',
    thumbnail: '',
    type: 'lecture',
  },
  {
    id: 3,
    title: 'The Solar System',
    subject: 'Physics',
    level: 'O Level',
    duration: '22 min',
    uploadedAgo: 'Last week',
    status: 'Published',
    thumbnail: '',
    type: 'lecture',
  },
  {
    id: 4,
    title: 'Organic Chemistry Notes',
    subject: 'Chemistry',
    level: 'A Level',
    duration: '15 pages',
    uploadedAgo: '3 days ago',
    status: 'Published',
    thumbnail: '',
    type: 'note',
  },
]

const SUBJECTS = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History', 'Geography', 'Economics', 'Business Studies', 'Psychology', 'Sociology']
const LEVELS = ['All', 'Grade 8', 'Grade 9', 'O Level', 'A Level', 'IGCSE']
const STATUSES = ['All', 'Published', 'Draft']

export default function TutorDashboard() {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'lectures' | 'notes'>('lectures')
  const [activeUploadType, setActiveUploadType] = useState<'lecture' | 'note'>('lecture')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterSubject, setFilterSubject] = useState('All')
  const [filterLevel, setFilterLevel] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  // Upload form state
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadLevel, setUploadLevel] = useState('O Level')
  const [uploadSubject, setUploadSubject] = useState('Mathematics')
  const [uploadDescription, setUploadDescription] = useState('')
  const [uploadVisibility, setUploadVisibility] = useState<'Draft' | 'Published'>('Draft')
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [noteFile, setNoteFile] = useState<File | null>(null)

  const [items, setItems] = useState<LectureItem[]>(SAMPLE_LECTURES)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const [showUploadPanel, setShowUploadPanel] = useState(false)
  const [showViewOverlay, setShowViewOverlay] = useState(false)
  const [selectedItem, setSelectedItem] = useState<LectureItem | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)
  const [showProfileSettings, setShowProfileSettings] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [profileEmail, setProfileEmail] = useState('')
  const [profilePhone, setProfilePhone] = useState('')
  const [profileBio, setProfileBio] = useState('')
  const [profileSubjects, setProfileSubjects] = useState('')
  const [profileQualification, setProfileQualification] = useState('')
  const [profileAvailability, setProfileAvailability] = useState('')
  const [profilePicture, setProfilePicture] = useState<string>('')
  const profilePictureRef = useRef<HTMLInputElement>(null)
  const profileNameRef = useRef<HTMLInputElement>(null)
  const profileEmailRef = useRef<HTMLInputElement>(null)
  const profilePhoneRef = useRef<HTMLInputElement>(null)
  const profileSubjectsRef = useRef<HTMLInputElement>(null)
  const profileQualificationRef = useRef<HTMLInputElement>(null)
  const profileAvailabilityRef = useRef<HTMLInputElement>(null)
  const profileBioRef = useRef<HTMLTextAreaElement>(null)

  const videoInputRef = useRef<HTMLInputElement>(null)
  const noteInputRef = useRef<HTMLInputElement>(null)

  const handleProfileFieldKeyPress = (nextRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>) => {
    return (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        nextRef.current?.focus()
      }
    }
  }

  const handleEmailKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (validateEmail(profileEmail)) {
        profilePhoneRef.current?.focus()
      }
    }
  }

  const handlePhoneKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (validatePhone(profilePhone)) {
        profileSubjectsRef.current?.focus()
      }
    }
  }

  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError('')
      return true
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address (e.g., user@example.com)')
      return false
    }
    setEmailError('')
    return true
  }

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, '')
    if (!phone) {
      setPhoneError('')
      return true
    }
    if (digitsOnly.length !== 11) {
      setPhoneError('Please enter a valid 11-digit phone number')
      return false
    }
    setPhoneError('')
    return true
  }

  const filteredItems = items.filter((item) => {
    const matchesSection = activeSection === 'dashboard' || item.type === (activeSection === 'lectures' ? 'lecture' : 'note')
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSubject = filterSubject === 'All' || item.subject === filterSubject
    const matchesLevel = filterLevel === 'All' || item.level === filterLevel
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus
    return matchesSection && matchesSearch && matchesSubject && matchesLevel && matchesStatus
  })

  const handleUpload = () => {
    if (!uploadTitle.trim()) return

    const newItem: LectureItem = {
      id: Date.now(),
      title: uploadTitle,
      subject: uploadSubject,
      level: uploadLevel,
      duration: activeUploadType === 'lecture' ? (videoFile ? '-- min' : '0 min') : (noteFile ? '-- pages' : '0 pages'),
      uploadedAgo: 'Just now',
      status: uploadVisibility,
      thumbnail: '',
      type: activeUploadType,
    }

    setItems((prev) => [newItem, ...prev])
    resetUploadForm()
  }

  const handleSaveAsDraft = () => {
    if (!uploadTitle.trim()) return

    const newItem: LectureItem = {
      id: Date.now(),
      title: uploadTitle,
      subject: uploadSubject,
      level: uploadLevel,
      duration: activeUploadType === 'lecture' ? '-- min' : '-- pages',
      uploadedAgo: 'Just now',
      status: 'Draft',
      thumbnail: '',
      type: activeUploadType,
    }

    setItems((prev) => [newItem, ...prev])
    resetUploadForm()
  }

  const resetUploadForm = () => {
    setUploadTitle('')
    setUploadLevel('O Level')
    setUploadSubject('Mathematics')
    setUploadDescription('')
    setUploadVisibility('Draft')
    setVideoFile(null)
    setNoteFile(null)
    setShowUploadPanel(false)
  }

  const handleDelete = (id: number) => {
    setItemToDelete(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      setItems((prev) => prev.filter((item) => item.id !== itemToDelete))
    }
    setShowDeleteConfirm(false)
    setItemToDelete(null)
  }

  const cancelDelete = () => {
    setShowDeleteConfirm(false)
    setItemToDelete(null)
  }

  const handleEdit = (item: LectureItem) => {
    setUploadTitle(item.title)
    setUploadLevel(item.level)
    setUploadSubject(item.subject)
    setUploadDescription('')
    setUploadVisibility(item.status as 'Draft' | 'Published')
    setActiveUploadType(item.type)
    setShowUploadPanel(true)
  }

  const handleView = (item: LectureItem) => {
    setSelectedItem(item)
    setShowViewOverlay(true)
  }

  const sectionTitle = activeSection === 'dashboard' ? 'Dashboard' : activeSection === 'lectures' ? 'My Lectures' : 'My Notes'

  const stats = {
    totalLectures: items.filter((i) => i.type === 'lecture').length,
    totalNotes: items.filter((i) => i.type === 'note').length,
    published: items.filter((i) => i.status === 'Published').length,
    drafts: items.filter((i) => i.status === 'Draft').length,
  }

  return (
    <div className="td-page">
      {/* Top Navbar */}
      <header className="td-topnav">
        <div className="td-topnav-left">
          <span className="td-topnav-logo-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="white"/></svg></span>
          <span className="td-topnav-brand">Tutor Portal</span>
        </div>
        <nav className="td-topnav-links">
          <button
            className={`td-topnav-link ${activeSection === 'dashboard' ? 'td-topnav-link--active' : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`td-topnav-link ${activeSection === 'lectures' ? 'td-topnav-link--active' : ''}`}
            onClick={() => setActiveSection('lectures')}
          >
            Lectures
          </button>
          <button
            className={`td-topnav-link ${activeSection === 'notes' ? 'td-topnav-link--active' : ''}`}
            onClick={() => setActiveSection('notes')}
          >
            Notes
          </button>
        </nav>
        <div className="td-topnav-right">
          <button className="td-topnav-icon-btn" title="Home" onClick={() => window.location.href = '/'}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="white"/></svg></button>
          <button className="td-topnav-avatar" title="Profile Settings" onClick={() => setShowProfileSettings(true)}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/></svg></button>
        </div>
        {/* Mobile hamburger */}
        <button className="td-topnav-hamburger" onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      {/* Sidebar Overlay */}
      {showMobileSidebar && <div className="td-overlay" onClick={() => setShowMobileSidebar(false)}></div>}

      {/* Sidebar */}
      <aside className={`td-sidebar ${showMobileSidebar ? 'td-sidebar--open' : ''}`}>
        <nav className="td-nav">
          <button
            className={`td-nav-item ${activeSection === 'dashboard' ? 'td-nav-item--active' : ''}`}
            onClick={() => { setActiveSection('dashboard'); setShowMobileSidebar(false) }}
          >
            <span className="td-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/></svg></span>
            <span>Dashboard</span>
          </button>
          <button
            className={`td-nav-item ${activeSection === 'lectures' ? 'td-nav-item--active' : ''}`}
            onClick={() => { setActiveSection('lectures'); setShowMobileSidebar(false) }}
          >
            <span className="td-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 14.5V5.5L18 10L12 14.5Z"/></svg></span>
            <span>Lectures</span>
          </button>
          <button
            className={`td-nav-item ${activeSection === 'notes' ? 'td-nav-item--active' : ''}`}
            onClick={() => { setActiveSection('notes'); setShowMobileSidebar(false) }}
          >
            <span className="td-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/></svg></span>
            <span>Notes</span>
          </button>
        </nav>
        <button className="td-upload-sidebar-btn" onClick={() => { setShowUploadPanel(true); setShowMobileSidebar(false) }}>
          + Upload {activeSection === 'notes' ? 'Note' : 'Lecture'}
        </button>
      </aside>

      {/* Main Content */}
      <main className="td-main">
        {activeSection === 'dashboard' ? (
          <div className="td-dashboard-view">
            <h1 className="td-section-title">Dashboard</h1>
            <div className="td-stats-grid">
              <div className="td-stat-card">
                <div className="td-stat-icon td-stat-icon--lectures"><svg width="24" height="24" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 14.5V5.5L18 10L12 14.5Z"/></svg></div>
                <div className="td-stat-info">
                  <span className="td-stat-number">{stats.totalLectures}</span>
                  <span className="td-stat-label">Total Lectures</span>
                </div>
              </div>
              <div className="td-stat-card">
                <div className="td-stat-icon td-stat-icon--notes"><svg width="24" height="24" viewBox="0 0 24 24" fill="#d97706" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/></svg></div>
                <div className="td-stat-info">
                  <span className="td-stat-number">{stats.totalNotes}</span>
                  <span className="td-stat-label">Total Notes</span>
                </div>
              </div>
              <div className="td-stat-card">
                <div className="td-stat-icon td-stat-icon--published"><svg width="24" height="24" viewBox="0 0 24 24" fill="#059669" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/></svg></div>
                <div className="td-stat-info">
                  <span className="td-stat-number">{stats.published}</span>
                  <span className="td-stat-label">Published</span>
                </div>
              </div>
              <div className="td-stat-card">
                <div className="td-stat-icon td-stat-icon--drafts"><svg width="24" height="24" viewBox="0 0 24 24" fill="#dc2626" xmlns="http://www.w3.org/2000/svg"><path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"/></svg></div>
                <div className="td-stat-info">
                  <span className="td-stat-number">{stats.drafts}</span>
                  <span className="td-stat-label">Drafts</span>
                </div>
              </div>
            </div>

            <h2 className="td-recent-title">Recent Uploads</h2>
            <div className="td-items-list">
              {items.slice(0, 4).map((item) => (
                <div className="td-item-card" key={item.id}>
                  <div className="td-item-thumbnail">
                    <div className="td-item-thumb-placeholder">
                      {item.type === 'lecture' ? '▶' : <svg width="28" height="28" viewBox="0 0 24 24" fill="#8892a4" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/></svg>}
                    </div>
                  </div>
                  <div className="td-item-info">
                    <div className="td-item-title-row">
                      <h3>{item.title}</h3>
                      <span className={`td-item-badge ${item.status === 'Published' ? 'td-item-badge--published' : 'td-item-badge--draft'}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="td-item-meta">
                      {item.level} · {item.subject} · {item.duration}
                    </p>
                    <p className="td-item-date"><svg width="14" height="14" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '4px'}}><path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/></svg>{item.uploadedAgo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="td-list-view">
            <h1 className="td-section-title">{sectionTitle}</h1>

            {/* Search & Filters */}
            <div className="td-toolbar">
              <div className="td-search-box">
                <span className="td-search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8892a4" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"/></svg></span>
                <input
                  type="text"
                  placeholder={`Search ${activeSection}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="td-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '6px', verticalAlign: 'middle'}}><path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"/></svg>Filters
              </button>
            </div>

            {showFilters && (
              <div className="td-filters-row">
                <div className="td-filter-group">
                  <label>Subject</label>
                  <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="td-filter-group">
                  <label>Level</label>
                  <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
                    {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div className="td-filter-group">
                  <label>Status</label>
                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* Items List */}
            <div className="td-items-list">
              {filteredItems.length === 0 ? (
                <div className="td-empty-state">
                  <p>No {activeSection} found. Upload your first {activeSection === 'lectures' ? 'lecture' : 'note'}!</p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div className="td-item-card" key={item.id}>
                    <div className="td-item-thumbnail">
                      <div className="td-item-thumb-placeholder">
                        {item.type === 'lecture' ? '▶' : <svg width="28" height="28" viewBox="0 0 24 24" fill="#8892a4" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/></svg>}
                      </div>
                    </div>
                    <div className="td-item-info">
                      <div className="td-item-title-row">
                        <h3>{item.title}</h3>
                        <span className={`td-item-badge ${item.status === 'Published' ? 'td-item-badge--published' : 'td-item-badge--draft'}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="td-item-meta">
                        {item.level} · {item.subject} · {item.duration}
                      </p>
                      <div className="td-item-bottom">
                        <p className="td-item-date"><svg width="14" height="14" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '4px'}}><path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/></svg>{item.uploadedAgo}</p>
                        <div className="td-item-actions">
                          <button className="td-action-btn" onClick={() => handleEdit(item)}>Edit</button>
                          <button className="td-action-btn td-action-btn--danger" onClick={() => handleDelete(item.id)}>Delete</button>
                          <button className="td-action-btn" onClick={() => handleView(item)}>View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* Upload Panel Modal */}
      <div className={`td-upload-overlay ${showUploadPanel ? 'td-upload-overlay--visible' : ''}`} onClick={() => setShowUploadPanel(false)}></div>
      <aside className={`td-upload-panel ${showUploadPanel ? 'td-upload-panel--open' : ''}`}>
        <div className="td-upload-panel-header">
          <h2>Upload {activeUploadType === 'lecture' ? 'Lecture' : 'Note'}</h2>
          <button className="td-upload-close" onClick={() => setShowUploadPanel(false)}><svg width="18" height="18" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg></button>
        </div>

        <div className="td-upload-type-tabs">
          <button
            className={`td-upload-tab ${activeUploadType === 'lecture' ? 'td-upload-tab--active' : ''}`}
            onClick={() => setActiveUploadType('lecture')}
          >
            Lecture
          </button>
          <button
            className={`td-upload-tab ${activeUploadType === 'note' ? 'td-upload-tab--active' : ''}`}
            onClick={() => setActiveUploadType('note')}
          >
            Note
          </button>
        </div>

        <div className="td-upload-form">
          <div className="td-form-group">
            <label>{activeUploadType === 'lecture' ? 'Lecture' : 'Note'} Title *</label>
            <input
              type="text"
              placeholder={`Enter ${activeUploadType} title`}
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
            />
          </div>

          <div className="td-form-group">
            <label>Level</label>
            <select value={uploadLevel} onChange={(e) => setUploadLevel(e.target.value)}>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="O Level">O Level</option>
              <option value="A Level">A Level</option>
              <option value="IGCSE">IGCSE</option>
            </select>
          </div>

          <div className="td-form-group">
            <label>Subject</label>
            <select value={uploadSubject} onChange={(e) => setUploadSubject(e.target.value)}>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
              <option value="Economics">Economics</option>
              <option value="Business Studies">Business Studies</option>
              <option value="Psychology">Psychology</option>
              <option value="Sociology">Sociology</option>
            </select>
          </div>

          <div className="td-form-group">
            <label>Description</label>
            <textarea
              placeholder={`Describe your ${activeUploadType}`}
              value={uploadDescription}
              onChange={(e) => setUploadDescription(e.target.value)}
              rows={3}
            />
          </div>

          {activeUploadType === 'lecture' ? (
            <div className="td-form-group">
              <label>Upload Video</label>
              <div
                className="td-file-drop"
                onClick={() => videoInputRef.current?.click()}
              >
                {videoFile ? (
                  <span className="td-file-name">{videoFile.name}</span>
                ) : (
                  <span>Drag & Drop or <strong>choose file</strong></span>
                )}
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  style={{ display: 'none' }}
                  onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>
          ) : (
            <div className="td-form-group">
              <label>Upload Note File</label>
              <div
                className="td-file-drop"
                onClick={() => noteInputRef.current?.click()}
              >
                {noteFile ? (
                  <span className="td-file-name">{noteFile.name}</span>
                ) : (
                  <span>Drag & Drop or <strong>choose file</strong></span>
                )}
                <input
                  ref={noteInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  style={{ display: 'none' }}
                  onChange={(e) => setNoteFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>
          )}

          <div className="td-form-group">
            <label>Visibility</label>
            <div className="td-radio-group">
              <label className="td-radio-label">
                <input
                  type="radio"
                  name="visibility"
                  checked={uploadVisibility === 'Draft'}
                  onChange={() => setUploadVisibility('Draft')}
                />
                <span>Draft</span>
              </label>
              <label className="td-radio-label">
                <input
                  type="radio"
                  name="visibility"
                  checked={uploadVisibility === 'Published'}
                  onChange={() => setUploadVisibility('Published')}
                />
                <span>Publish</span>
              </label>
            </div>
          </div>

          <div className="td-form-actions">
            <button className="td-btn td-btn--secondary" onClick={handleSaveAsDraft}>Save as Draft</button>
            <button className="td-btn td-btn--primary" onClick={handleUpload}>
              Upload {activeUploadType === 'lecture' ? 'Lecture' : 'Note'}
            </button>
          </div>
        </div>
      </aside>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <>
          <div className="td-modal-overlay" onClick={cancelDelete}></div>
          <div className="td-confirmation-modal">
            <div className="td-confirmation-modal-content">
              <h3>Delete Item</h3>
              <p>Are you sure you want to delete <strong>{items.find(item => item.id === itemToDelete)?.title}</strong>?</p>
              <p className="td-confirmation-text-secondary">This action cannot be undone.</p>
              <div className="td-confirmation-buttons">
                <button className="td-btn td-btn--secondary" onClick={cancelDelete}>Cancel</button>
                <button className="td-btn td-btn--danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* View Details Overlay */}
      {showViewOverlay && selectedItem && (
        <>
          <div className="td-modal-overlay" onClick={() => setShowViewOverlay(false)}></div>
          <div className="td-view-overlay">
            <div className="td-view-overlay-header">
              <h3>Lecture Details</h3>
              <button className="td-view-overlay-close" onClick={() => setShowViewOverlay(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a6cf7" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
              </button>
            </div>
            <div className="td-view-overlay-content">
              <div className="td-view-item">
                <label>Title</label>
                <p>{selectedItem.title}</p>
              </div>
              <div className="td-view-item">
                <label>Level</label>
                <p>{selectedItem.level}</p>
              </div>
              <div className="td-view-item">
                <label>Subject</label>
                <p>{selectedItem.subject}</p>
              </div>
              <div className="td-view-item">
                <label>Duration</label>
                <p>{selectedItem.duration}</p>
              </div>
              <div className="td-view-item">
                <label>Status</label>
                <p>
                  <span className={`td-status-badge td-status-${selectedItem.status.toLowerCase()}`}>
                    {selectedItem.status}
                  </span>
                </p>
              </div>
              <div className="td-view-item">
                <label>Uploaded</label>
                <p>{selectedItem.uploadedAgo}</p>
              </div>
              <div className="td-view-item">
                <label>Description</label>
                <p>{selectedItem.description || 'No description provided'}</p>
              </div>
            </div>
            <div className="td-view-overlay-footer">
              <button className="td-btn td-btn--primary" onClick={() => setShowViewOverlay(false)}>Close</button>
            </div>
          </div>
        </>
      )}

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <>
          <div className="td-modal-overlay" onClick={() => setShowProfileSettings(false)}></div>
          <div className="td-profile-modal">
            <div className="td-profile-modal-header">
              <h3>Profile Settings</h3>
              <button className="td-profile-modal-close" onClick={() => setShowProfileSettings(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8892a4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
              </button>
            </div>
            <div className="td-profile-modal-content">
              <div className="td-profile-picture-section">
                <div className="td-profile-picture-container">
                  {profilePicture ? (
                    <>
                      <img src={profilePicture} alt="Profile" className="td-profile-picture-img" />
                      <div className="td-picture-overlay">
                        <button 
                          type="button"
                          className="td-picture-action-btn td-picture-edit-btn"
                          onClick={() => profilePictureRef.current?.click()}
                          title="Edit Picture"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z"/>
                            <path d="m20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                          </svg>
                        </button>
                        <button 
                          type="button"
                          className="td-picture-action-btn td-picture-delete-btn"
                          onClick={() => setProfilePicture('')}
                          title="Delete Picture"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="td-profile-picture-placeholder">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="#d0d5dd" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <button 
                  type="button"
                  className="td-profile-picture-btn"
                  onClick={() => profilePictureRef.current?.click()}
                >
                  {profilePicture ? 'Change Picture' : 'Upload Picture'}
                </button>
                <input 
                  ref={profilePictureRef}
                  type="file" 
                  accept="image/*" 
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (event) => {
                        setProfilePicture(event.target?.result as string)
                      }
                      reader.readAsDataURL(file)
                    }
                  }}
                />
              </div>
              <div className="td-profile-field">
                <label>Full Name</label>
                <input 
                  ref={profileNameRef}
                  type="text" 
                  value={profileName} 
                  onChange={(e) => setProfileName(e.target.value)} 
                  onKeyPress={handleProfileFieldKeyPress(profileEmailRef)}
                  placeholder="John Tutor" 
                />
              </div>
              <div className="td-profile-field">
                <label>Email</label>
                <input 
                  ref={profileEmailRef}
                  type="email" 
                  value={profileEmail} 
                  onChange={(e) => {
                    setProfileEmail(e.target.value)
                    validateEmail(e.target.value)
                  }}
                  onBlur={() => validateEmail(profileEmail)}
                  onKeyPress={handleEmailKeyPress}
                  placeholder="tutor@example.com"
                  className={emailError ? 'td-profile-field-invalid' : ''}
                />
                {emailError && <span className="td-field-error">{emailError}</span>}
              </div>
              <div className="td-profile-field">
                <label>Phone Number</label>
                <input 
                  ref={profilePhoneRef}
                  type="tel" 
                  value={profilePhone} 
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 11)
                    setProfilePhone(digitsOnly)
                    validatePhone(digitsOnly)
                  }}
                  onBlur={() => validatePhone(profilePhone)}
                  onKeyPress={handlePhoneKeyPress}
                  placeholder="12345678900"
                  maxLength={11}
                  className={phoneError ? 'td-profile-field-invalid' : ''}
                />
                {phoneError && <span className="td-field-error">{phoneError}</span>}
              </div>
              <div className="td-profile-field">
                <label>Specialization Subjects</label>
                <input 
                  ref={profileSubjectsRef}
                  type="text" 
                  value={profileSubjects} 
                  onChange={(e) => setProfileSubjects(e.target.value)} 
                  onKeyPress={handleProfileFieldKeyPress(profileQualificationRef)}
                  placeholder="Mathematics, Physics" 
                />
              </div>
              <div className="td-profile-field">
                <label>Qualification</label>
                <input 
                  ref={profileQualificationRef}
                  type="text" 
                  value={profileQualification} 
                  onChange={(e) => setProfileQualification(e.target.value)} 
                  onKeyPress={handleProfileFieldKeyPress(profileAvailabilityRef)}
                  placeholder="Master's Degree" 
                />
              </div>
              <div className="td-profile-field">
                <label>Availability</label>
                <input 
                  ref={profileAvailabilityRef}
                  type="text" 
                  value={profileAvailability} 
                  onChange={(e) => setProfileAvailability(e.target.value)} 
                  onKeyPress={handleProfileFieldKeyPress(profileBioRef)}
                  placeholder="Weekdays 3PM-7PM" 
                />
              </div>
              <div className="td-profile-field">
                <label>Bio / About Me</label>
                <textarea 
                  ref={profileBioRef}
                  value={profileBio} 
                  onChange={(e) => setProfileBio(e.target.value)} 
                  placeholder="Experienced educator with passion for teaching"
                ></textarea>
              </div>
            </div>
            <div className="td-profile-modal-footer">
              <button className="td-btn td-btn--secondary" onClick={() => setShowProfileSettings(false)}>Cancel</button>
              <button className="td-btn td-btn--primary" onClick={() => setShowProfileSettings(false)}>Save Changes</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
