import './App.css'

function App() {
  return (
    <div className="dashboard">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src="/logo.svg" alt="Zeronsoft N" />
          <span className="brand-text">
            ZERONSOFT<span className="brand-accent">N</span>
          </span>
        </div>
        <div className="topbar-right">
          <button className="user-dropdown" type="button">
            <span>관리자</span>
            <svg viewBox="0 0 10 6" aria-hidden="true">
              <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <div className="time-pill">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 5.8v4.4l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="time-text">09:45</span>
            <span className="time-label">현장</span>
          </div>
          <div className="topbar-icons">
            <button className="icon-button" type="button" aria-label="검색">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="15.5" cy="15.5" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M18.2 18.2l2.2 2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button className="icon-button" type="button" aria-label="정보">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M12 10.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="7.5" r="1" fill="currentColor" />
              </svg>
            </button>
            <button className="icon-button" type="button" aria-label="설정">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm9.3 4.8-1.8-.7.2-2.1-2.1-1.2-1.3 1.6-2-.6-.7-2-2.3.2-.7 2-2 .6-1.3-1.6-2.1 1.2.2 2.1-1.8.7v2.4l1.8.7-.2 2.1 2.1 1.2 1.3-1.6 2 .6.7 2 2.3-.2.7-2 2-.6 1.3 1.6 2.1-1.2-.2-2.1 1.8-.7v-2.4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
            <button className="icon-button" type="button" aria-label="알림">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.5 9.5a5.5 5.5 0 1 1 11 0v5.5l1.8 2H4.7l1.8-2V9.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button className="icon-button" type="button" aria-label="로그아웃">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.5 4.5h9v15h-9z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17.5 8.5 21 12l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="profile">
            <div className="avatar" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="18" r="9" />
                <path d="M10 40c2.5-7 9-11 14-11s11.5 4 14 11" />
              </svg>
            </div>
            <div className="profile-meta">
              <div className="profile-name">관리자</div>
              <div className="profile-email">admin@gmail.com</div>
            </div>
          </div>

          <div className="menu-label">메뉴</div>
          <nav className="menu">
            <button className="menu-item active" type="button">
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="7" height="7" fill="currentColor" />
                  <rect x="13" y="4" width="7" height="7" fill="currentColor" />
                  <rect x="4" y="13" width="7" height="7" fill="currentColor" />
                  <rect x="13" y="13" width="7" height="7" fill="currentColor" />
                </svg>
              </span>
              <span>대시보드</span>
            </button>
            <button className="menu-item" type="button">
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="7" y="7" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span>이미지 목록</span>
            </button>
            <button className="menu-item" type="button">
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3.5 9c2.2-3 5.1-4.5 8.6-4.5 2.6 0 4.8.8 6.9 2.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20.5 15c-2.2 3-5.1 4.5-8.6 4.5-2.6 0-4.8-.8-6.9-2.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M16.5 6.5h3v-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7.5 17.5h-3v3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span>원격 마이그레이션</span>
            </button>
          </nav>
        </aside>

        <main className="content">
          <h1 className="page-title">대시보드</h1>
        </main>
      </div>
    </div>
  )
}

export default App
