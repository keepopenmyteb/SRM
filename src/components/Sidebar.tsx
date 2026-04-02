export type NavKey = 'dashboard' | 'images' | 'migration'

interface SidebarProps {
  active: NavKey
  onNavigate: (next: NavKey) => void
}

function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar" aria-hidden="true">
          <img className="avatar-img" src="/profile-icon.svg" alt="" />
        </div>
        <div className="profile-meta">
          <div className="profile-name">관리자</div>
          <div className="profile-email">admin@gmail.com</div>
        </div>
      </div>

      <div className="menu-label">메뉴</div>
      <nav className="menu">
        <button
          className={`menu-item ${active === 'dashboard' ? 'active' : ''}`}
          type="button"
          onClick={() => onNavigate('dashboard')}
        >
          <span className="menu-icon" aria-hidden="true">
            <img className="menu-icon-img" src="/dashboard-icon.svg" alt="" />
          </span>
          <span>대시보드</span>
        </button>
        <button
          className={`menu-item ${active === 'images' ? 'active' : ''}`}
          type="button"
          onClick={() => onNavigate('images')}
        >
          <span className="menu-icon" aria-hidden="true">
            <img className="menu-icon-img" src="/image-list-icon.svg" alt="" />
          </span>
          <span>이미지 목록</span>
        </button>
        <button
          className={`menu-item ${active === 'migration' ? 'active' : ''}`}
          type="button"
          onClick={() => onNavigate('migration')}
        >
          <span className="menu-icon" aria-hidden="true">
            <img
              className="menu-icon-img"
              src="/remote-migration-icon.svg"
              alt=""
            />
          </span>
          <span>원격 마이그레이션</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
