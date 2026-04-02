import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import type { NavKey } from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import ImageList from './pages/ImageList'
import RemoteMigration from './pages/RemoteMigration'

const STORAGE_KEY = 'srm-active-page'

const isNavKey = (value: string | null): value is NavKey =>
  value === 'dashboard' || value === 'images' || value === 'migration'

function App() {
  const [page, setPage] = useState<NavKey>(() => {
    if (typeof window === 'undefined') {
      return 'dashboard'
    }
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isNavKey(stored) ? stored : 'dashboard'
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(STORAGE_KEY, page)
  }, [page])

  let content = <Dashboard />

  if (page === 'images') {
    content = <ImageList />
  }

  if (page === 'migration') {
    content = <RemoteMigration />
  }

  return (
    <Layout
      active={page}
      onNavigate={setPage}
      onLogoClick={() => setPage('dashboard')}
    >
      {content}
    </Layout>
  )
}

export default App
