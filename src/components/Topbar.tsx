interface TopbarProps {
  onLogoClick?: () => void
}

function Topbar({ onLogoClick }: TopbarProps) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={onLogoClick}>
        <img className="brand-logo" src="/logo.svg" alt="Zeronsoft N" />
        <span className="brand-text">
          ZERONSOFT<span className="brand-accent">N</span>
        </span>
      </button>
      <div className="topbar-right">
        <button className="user-dropdown" type="button">
          <span>관리자</span>
          <svg viewBox="0 0 10 6" aria-hidden="true">
            <path
              d="M1 1l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <div className="time-pill">
          <img className="time-icon" src="/clock-icon.svg" alt="" />
          <span className="time-text">09:45</span>
          <span className="time-label">연장</span>
        </div>
        <div className="topbar-icons">
          <button className="icon-button" type="button" aria-label="언어 변경">
            <img
              className="icon-img"
              src="/change-language-icon.svg"
              alt=""
            />
          </button>
          <button className="icon-button" type="button" aria-label="정보">
            <img
              className="icon-img"
              src="/information-icon.svg"
              alt=""
            />
          </button>
          <button className="icon-button" type="button" aria-label="설정">
            <img className="icon-img" src="/settings-icon.svg" alt="" />
          </button>
          <button className="icon-button" type="button" aria-label="알림">
            <img className="icon-img" src="/bell-icon.svg" alt="" />
          </button>
          <button className="icon-button" type="button" aria-label="로그아웃">
            <img className="icon-img" src="/exit-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar
