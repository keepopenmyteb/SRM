import { useState } from 'react'

function RemoteMigration() {
  const groupItems = [
    { id: 1, label: '주식회사', count: 91, level: 0 },
    { id: 2, label: '경영지원부', count: 22, level: 1 },
    { id: 3, label: '영업부', count: 18, level: 1 },
    { id: 4, label: '개발부', count: 15, level: 1 },
    { id: 5, label: '부산연구소', count: 11, level: 1 },
    { id: 6, label: '시스템지원팀', count: 9, level: 1 },
    { id: 7, label: '기술지원팀', count: 9, level: 1 },
    { id: 8, label: '네트워크 구축팀', count: 7, level: 1 },
  ]

  const clientRows = [
    {
      id: 1,
      ip: '192.168.1.4',
      mac: 'AB-CD-EF-12-34-56',
      name: 'DESKTOP-AB12C3D',
      user: '박승기',
      status: '배포대기',
      progress: '18.4GB',
      checked: false,
    },
    {
      id: 2,
      ip: '192.168.1.5',
      mac: '3A-7F-1C-9B-42-E8',
      name: 'DESKTOP-AB12C3',
      user: '노우현',
      status: '배포중',
      progress: '18.4GB',
      checked: true,
    },
    {
      id: 3,
      ip: '192.168.1.6',
      mac: 'D2-4A-88-1F-6C-03',
      name: 'OFFICE-01',
      user: '김인택',
      status: '배포중',
      progress: '18.4GB',
      checked: true,
    },
    {
      id: 4,
      ip: '192.168.1.14',
      mac: '9E-B1-57-AC-2D-F4',
      name: 'DEV-KIM-01',
      user: '김관리',
      status: '배포 실패',
      progress: '18.4GB',
      checked: false,
    },
    {
      id: 5,
      ip: '192.168.1.45',
      mac: '6C-03-DA-7E-91-B2',
      name: 'HR-PC-03',
      user: '남궁혁',
      status: '배포 실패',
      progress: '18.4GB',
      checked: false,
    },
    {
      id: 6,
      ip: '192.168.1.167',
      mac: 'F8-2D-44-C9-0A-5E',
      name: 'SALES-LAPTOP-02',
      user: '김윤진',
      status: '재설치 대기',
      progress: '18.4GB',
      checked: false,
    },
    {
      id: 7,
      ip: '192.168.3.4',
      mac: 'A1-5B-73-E6-2F-19',
      name: 'SERVER-BACKUP-01',
      user: '이재현',
      status: '재설치중',
      progress: '18.4GB',
      checked: false,
    },
  ]

  const [selectedIds, setSelectedIds] = useState<number[]>(
    clientRows.filter((row) => row.checked).map((row) => row.id),
  )

  const toggleRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  return (
    <div className="remote-migration-page">
      <div className="page-header image-list-header">
        <div>
          <h1 className="page-title">원격 마이그레이션</h1>
        </div>
      </div>

      <div className="migration-layout">
        <aside className="migration-side">
          <div className="migration-filter-header">
            <button className="filter-select" type="button">
              그룹별 보기 <span className="caret" aria-hidden="true" />
            </button>
            <button className="filter-select" type="button">
              오름차순 <span className="caret" aria-hidden="true" />
            </button>
          </div>
          <label className="migration-search">
            <span className="search-dot" aria-hidden="true" />
            <input type="text" placeholder="검색" />
          </label>
          <div className="migration-groups">
            {groupItems.map((item) => (
              <button
                key={item.id}
                className="group-item"
                type="button"
                style={{ paddingLeft: `${12 + item.level * 10}px` }}
              >
                <span className="group-dot" aria-hidden="true" />
                <span className="group-label">{item.label}</span>
                <span className="group-count">{item.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="migration-main">
          <div className="info-card">
            <div className="info-header">
              <div>
                <h3>배포 이미지 정보</h3>
                <p>재설치 시 적용할 배포 구성 이미지</p>
              </div>
              <button className="info-button" type="button">
                이미지 변경
              </button>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span>OS 종류</span>
                <strong>Windows 11 Pro</strong>
              </div>
              <div className="info-item">
                <span>빌드 버전</span>
                <strong>23H2</strong>
              </div>
              <div className="info-item">
                <span>배포 제목</span>
                <strong>기업 표준 이미지 v3.2</strong>
              </div>
              <div className="info-item">
                <span>총 용량</span>
                <strong>18.4GB</strong>
              </div>
              <div className="info-item">
                <span>업로드 날짜</span>
                <strong>2023-08-14 14:38:44</strong>
              </div>
              <div className="info-item">
                <span>매니저</span>
                <strong>김창수</strong>
              </div>
            </div>
          </div>

          <div className="client-card">
            <div className="client-header">
              <h3>
                클라이언트 현황 <span>· 전체 (84대)</span>
              </h3>
            </div>

            <div className="client-toolbar">
              <div className="client-selected">3개 PC 선택됨</div>
              <div className="client-actions">
                <button className="ghost-button" type="button">
                  선택 해제
                </button>
                <button className="danger-button" type="button">
                  <img
                    className="danger-icon"
                    src="/remote-migration-icon.svg"
                    alt=""
                  />
                  재설치 시작
                </button>
              </div>
            </div>

            <div className="client-filters">
              <label className="client-search">
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
                <input type="text" placeholder="PC 이름, IP로 검색..." />
              </label>
              <button className="filter-select" type="button">
                전체 상태 <span className="caret" aria-hidden="true" />
              </button>
              <button className="filter-select" type="button">
                전체 OS <span className="caret" aria-hidden="true" />
              </button>
            </div>

            <div className="client-table-wrap">
              <table className="client-table">
                <thead>
                  <tr>
                    <th />
                    <th>NO.</th>
                    <th>IP 주소</th>
                    <th>MAC</th>
                    <th>컴퓨터 이름</th>
                    <th>사용자</th>
                    <th>상태</th>
                    <th>진행률</th>
                    <th>동작</th>
                  </tr>
                </thead>
                <tbody>
                  {clientRows.map((row) => {
                    const isChecked = selectedIds.includes(row.id)
                    return (
                      <tr key={row.id} className={isChecked ? 'is-checked' : ''}>
                      <td>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleRow(row.id)}
                        />
                      </td>
                      <td>{row.id}</td>
                      <td>{row.ip}</td>
                      <td>{row.mac}</td>
                      <td>{row.name}</td>
                      <td>{row.user}</td>
                      <td>
                        <span
                          className={`rm-status ${
                            row.status === '배포대기'
                              ? 'rm-status-wait'
                              : row.status === '배포중'
                                ? 'rm-status-progress'
                                : row.status === '재설치 대기'
                                  ? 'rm-status-wait'
                                  : row.status === '재설치중'
                                    ? 'rm-status-progress'
                                    : 'rm-status-fail'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td>{row.progress}</td>
                      <td>
                        <button className="download-button" type="button">
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M12 4v9m0 0l4-4m-4 4l-4-4M6 18h12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button className="page-btn" type="button" aria-label="이전">
                ‹
              </button>
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`page-btn ${num === 1 ? 'active' : ''}`}
                  type="button"
                  aria-current={num === 1 ? 'page' : undefined}
                >
                  {num}
                </button>
              ))}
              <button className="page-btn" type="button" aria-label="다음">
                ›
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RemoteMigration
