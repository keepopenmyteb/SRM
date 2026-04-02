import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import type { NavKey } from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import ImageList from './pages/ImageList'
import RemoteMigration from './pages/RemoteMigration'

function App() {
  const [page, setPage] = useState<NavKey>('dashboard')

  let content = <Dashboard />

  if (page === 'images') {
    content = <ImageList />
  }

  if (page === 'migration') {
    content = <RemoteMigration />
  }

  return (
    <Layout active={page} onNavigate={setPage}>
      {content}
    </Layout>
  )
}

export default App
