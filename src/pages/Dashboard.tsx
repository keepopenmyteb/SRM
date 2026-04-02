import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h1 className="page-title">대시보드</h1>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
