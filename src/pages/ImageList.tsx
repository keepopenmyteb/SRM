import { useState } from 'react'

const deployRows = [
  {
    id: 1,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '기업 표준 이미지 v3.2',
    uploaded: '2024-01-15 9:22',
    manager: '김관리',
    size: '18.4 GB',
  },
  {
    id: 2,
    os: 'Windows',
    name: 'Windows10 Enterprise',
    version: '22H2',
    title: '회계팀 전용 보안 이미지',
    uploaded: '2024-01-12 14:05',
    manager: '이담당',
    size: '22.1 GB',
  },
  {
    id: 3,
    os: 'Windows',
    name: 'Windows10 Pro',
    version: '22H2',
    title: '개발팀 기본 이미지 (Git, Docker 포함)',
    uploaded: '2024-01-08 11:30',
    manager: '박매니저',
    size: '19.7 GB',
  },
  {
    id: 4,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '영업팀 표준 이미지 v2.1',
    uploaded: '2024-01-05 16:45',
    manager: '김관리',
    size: '17.9 GB',
  },
  {
    id: 5,
    os: 'Windows',
    name: 'Windows10 Enterprise',
    version: '21H2',
    title: '레거시 호환 이미지 (구형 장비용)',
    uploaded: '2023-12-20 10:15',
    manager: '이담당',
    size: '15.3 GB',
  },
  {
    id: 6,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '인사팀 전용 이미지 v1.0',
    uploaded: '2023-12-15 13:30',
    manager: '박매니저',
    size: '18.0 GB',
  },
  {
    id: 7,
    os: 'Windows',
    name: 'Windows10 Pro',
    version: '21H2',
    title: '마케팅팀 크리에이티브 이미지',
    uploaded: '2023-12-10 09:00',
    manager: '김관리',
    size: '20.5 GB',
  },
]

const fileRows = [
  {
    id: 1,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '기업 표준 이미지 v3.2 (파일)',
    uploaded: '2024-01-18 10:02',
    manager: '김관리',
    size: '18.9 GB',
  },
  {
    id: 2,
    os: 'Windows',
    name: 'Windows10 Enterprise',
    version: '22H2',
    title: '보안 패치 포함 이미지 파일',
    uploaded: '2024-01-13 15:11',
    manager: '이담당',
    size: '21.6 GB',
  },
  {
    id: 3,
    os: 'Windows',
    name: 'Windows10 Pro',
    version: '22H2',
    title: '개발팀 빌드 파일 (Git, Docker 포함)',
    uploaded: '2024-01-09 12:40',
    manager: '박매니저',
    size: '19.2 GB',
  },
  {
    id: 4,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '영업팀 표준 이미지 파일 v2.1',
    uploaded: '2024-01-06 17:12',
    manager: '김관리',
    size: '18.1 GB',
  },
  {
    id: 5,
    os: 'Windows',
    name: 'Windows10 Enterprise',
    version: '21H2',
    title: '레거시 장비용 이미지 파일',
    uploaded: '2023-12-22 10:45',
    manager: '이담당',
    size: '15.1 GB',
  },
  {
    id: 6,
    os: 'Windows',
    name: 'Windows 11 Pro',
    version: '23H2',
    title: '인사팀 전용 이미지 파일 v1.0',
    uploaded: '2023-12-16 14:02',
    manager: '박매니저',
    size: '17.6 GB',
  },
  {
    id: 7,
    os: 'Windows',
    name: 'Windows10 Pro',
    version: '21H2',
    title: '마케팅팀 크리에이티브 이미지 파일',
    uploaded: '2023-12-11 09:34',
    manager: '김관리',
    size: '20.1 GB',
  },
]

function ImageList() {
  const [tab, setTab] = useState<'deploy' | 'files'>('deploy')
  const [page, setPage] = useState(1)
  const rows = tab === 'deploy' ? deployRows : fileRows
  const totalPages = 3

  const handlePrev = () => {
    setPage((prev) => (prev === 1 ? totalPages : prev - 1))
  }

  const handleNext = () => {
    setPage((prev) => (prev === totalPages ? 1 : prev + 1))
  }

  return (
    <div className="image-list-page">
      <div className="page-header image-list-header">
        <div>
          <h1 className="page-title">이미지 목록</h1>
          <div className="tabs">
            <button
              className={`tab ${tab === 'deploy' ? 'active' : ''}`}
              type="button"
              onClick={() => setTab('deploy')}
            >
              배포 구성
            </button>
            <button
              className={`tab ${tab === 'files' ? 'active' : ''}`}
              type="button"
              onClick={() => setTab('files')}
            >
              이미지 파일
            </button>
          </div>
        </div>
      </div>
      <div className="image-controls">
        <label className="search-field">
          <svg className="search-icon" viewBox="0 0 20 20" aria-hidden="true">
            <circle
              cx="9"
              cy="9"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M13.5 13.5L17 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="OS 이름, 이미지 제목, 버전명 검색..."
          />
        </label>
        <div className="filter-group">
          <button className="filter-select" type="button">
            전체 OS <span className="caret" aria-hidden="true" />
          </button>
          <button className="filter-select" type="button">
            전체 버전 <span className="caret" aria-hidden="true" />
          </button>
        </div>
        <button className="primary-button" type="button">
          + 배포 구성 등록
        </button>
      </div>

      <section className="image-list-panel">
        <div className="image-table-wrap">
          <table className="image-table">
            <thead>
              <tr>
                <th>NO.</th>
                <th>OS 종류</th>
                <th>OS 이름</th>
                <th>빌드 버전</th>
                <th>OS 이미지 제목</th>
                <th>업로드 일시</th>
                <th>매니저</th>
                <th>용량</th>
                <th>동작</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <span className="os-badge">{row.os}</span>
                  </td>
                  <td>{row.name}</td>
                  <td>{row.version}</td>
                  <td>{row.title}</td>
                  <td>{row.uploaded}</td>
                  <td>{row.manager}</td>
                  <td>{row.size}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn" type="button" aria-label="수정">
                        <img src="/edit-icon.svg" alt="" />
                      </button>
                      <button className="action-btn danger" type="button" aria-label="삭제">
                        <img src="/delete-icon.svg" alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="pagination">
        <button className="page-btn" type="button" aria-label="이전" onClick={handlePrev}>
          ‹
        </button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`page-btn ${page === num ? 'active' : ''}`}
            type="button"
            onClick={() => setPage(num)}
            aria-current={page === num ? 'page' : undefined}
          >
            {num}
          </button>
        ))}
        <button className="page-btn" type="button" aria-label="다음" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  )
}

export default ImageList
