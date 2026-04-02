import type { ReactNode } from 'react'
import Sidebar, { type NavKey } from './Sidebar'
import Topbar from './Topbar'

interface LayoutProps {
  active: NavKey
  onNavigate: (next: NavKey) => void
  onLogoClick?: () => void
  children: ReactNode
}

function Layout({ active, onNavigate, onLogoClick, children }: LayoutProps) {
  return (
    <div className="dashboard">
      <Topbar onLogoClick={onLogoClick} />
      <div className="layout">
        <Sidebar active={active} onNavigate={onNavigate} />
        <main className="content">
          <div className="content-inner">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Layout
