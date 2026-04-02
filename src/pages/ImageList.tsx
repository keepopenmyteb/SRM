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
    imageType: 'OS',
    osType: 'Windows',
    osName: 'Windows 11 Pro',
    build: '23H2',
    description: '기업 표준 이미지 v3.2',
    signedAt: '2024-01-15 9:22',
    signer: '김관리',
    size: '18.4GB',
    uploadedAt: '2024-01-15 9:22',
  },
  {
    id: 2,
    imageType: 'DATA',
    osType: 'Windows',
    osName: 'Windows10 Enterprise',
    build: '22H2',
    description: '회계팀 전용 보안 이미지',
    signedAt: '2024-01-12 14:05',
    signer: '이담당',
    size: '22.1GB',
    uploadedAt: '2024-01-12 14:05',
  },
  {
    id: 3,
    imageType: 'CUSTOM',
    osType: 'Windows',
    osName: 'Windows10 Pro',
    build: '22H2',
    description: '개발팀 기본 이미지 (Git, Docker 포함)',
    signedAt: '2024-01-08 11:30',
    signer: '박매니저',
    size: '19.7 GB',
    uploadedAt: '2024-01-08 11:30',
  },
  {
    id: 4,
    imageType: 'OS',
    osType: 'Windows',
    osName: 'Windows 11 Pro',
    build: '23H2',
    description: '영업팀 표준 이미지 v2.1',
    signedAt: '2024-01-05 16:45',
    signer: '김관리',
    size: '17.9 GB',
    uploadedAt: '2024-01-05 16:45',
  },
  {
    id: 5,
    imageType: 'OS',
    osType: 'Windows',
    osName: 'Windows10 Enterprise',
    build: '21H2',
    description: '레거시 호환 이미지 (구형 장비용)',
    signedAt: '2023-12-20 10:15',
    signer: '이담당',
    size: '15.3 GB',
    uploadedAt: '2023-12-20 10:15',
  },
]

const existingRows = [
  {
    id: 1,
    osType: 'Windows',
    osName: 'Windows 11 Pro',
    build: '23H2',
    title: '기업 표준 이미지 v3.2',
    size: '18.4GB',
    manager: '김관리',
  },
  {
    id: 2,
    osType: 'Windows',
    osName: 'Windows10 Enterprise',
    build: '22H2',
    title: '회계팀 전용 설치 이미지',
    size: '22.14GB',
    manager: '이담당',
  },
  {
    id: 3,
    osType: 'Windows',
    osName: 'Windows 10 Pro',
    build: '22H2',
    title: '개발팀 기본 이미지',
    size: '19.7GB',
    manager: '박매니저',
  },
  {
    id: 4,
    osType: 'Windows',
    osName: 'Windows 11 Pro',
    build: '23H2',
    title: '영업팀 표준 이미지 v2.1',
    size: '17.9GB',
    manager: '김관리',
  },
  {
    id: 5,
    osType: 'Windows',
    osName: 'Windows10 Enterprise',
    build: '21H2',
    title: '레거시 호환 이미지',
    size: '15.3GB',
    manager: '김관리',
  },
]

function ImageList() {
  const [tab, setTab] = useState<'deploy' | 'files'>('deploy')
  const [page, setPage] = useState(1)
  const [activeModal, setActiveModal] = useState<'deploy' | 'upload' | null>(
    null,
  )
  const [uploadTab, setUploadTab] = useState<'upload' | 'existing'>('upload')
  const [uploadStep, setUploadStep] = useState<'select' | 'confirm'>('select')
  const [selectedExistingId, setSelectedExistingId] = useState(1)
  const totalPages = 3

  const closeModal = () => {
    setActiveModal(null)
    setUploadTab('upload')
    setUploadStep('select')
  }

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
            placeholder={
              tab === 'deploy'
                ? 'OS 이름, 이미지 제목, 버전명 검색...'
                : '이미지 파일명, OS이름으로 검색...'
            }
          />
        </label>
        <div className="filter-group">
          {tab === 'deploy' ? (
            <>
              <button className="filter-select" type="button">
                전체 OS <span className="caret" aria-hidden="true" />
              </button>
              <button className="filter-select" type="button">
                전체 버전 <span className="caret" aria-hidden="true" />
              </button>
            </>
          ) : (
            <button className="filter-select" type="button">
              전체 종류 <span className="caret" aria-hidden="true" />
            </button>
          )}
        </div>
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            if (tab === 'deploy') {
              setActiveModal('deploy')
            } else {
              setActiveModal('upload')
              setUploadTab('upload')
              setUploadStep('select')
            }
          }}
        >
          {tab === 'deploy' ? '+ 배포 구성 등록' : '+ 이미지 업로드'}
        </button>
      </div>

      <section className="image-list-panel">
        <div className="image-table-wrap">
          {tab === 'deploy' ? (
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
                {deployRows.map((row) => (
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
                        <button
                          className="action-btn"
                          type="button"
                          aria-label="수정"
                        >
                          <img src="/edit-icon.svg" alt="" />
                        </button>
                        <button
                          className="action-btn danger"
                          type="button"
                          aria-label="삭제"
                        >
                          <img src="/delete-icon.svg" alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="image-table image-file-table">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>이미지 종류</th>
                  <th>OS 종류</th>
                  <th>OS 이름</th>
                  <th>빌드버전</th>
                  <th>이미지 파일 설명</th>
                  <th>서명일시</th>
                  <th>서명인</th>
                  <th>용량</th>
                  <th>업로드 일시</th>
                  <th>동작</th>
                </tr>
              </thead>
              <tbody>
                {fileRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      <span
                        className={`type-badge ${row.imageType.toLowerCase()}`}
                      >
                        {row.imageType}
                      </span>
                    </td>
                    <td>
                      <span className="os-badge">{row.osType}</span>
                    </td>
                    <td>{row.osName}</td>
                    <td>{row.build}</td>
                    <td>{row.description}</td>
                    <td>{row.signedAt}</td>
                    <td>{row.signer}</td>
                    <td>{row.size}</td>
                    <td>{row.uploadedAt}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn"
                          type="button"
                          aria-label="수정"
                        >
                          <img src="/edit-icon.svg" alt="" />
                        </button>
                        <button
                          className="action-btn danger"
                          type="button"
                          aria-label="삭제"
                        >
                          <img src="/delete-icon.svg" alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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

      {activeModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          {activeModal === 'deploy' ? (
            <div className="modal" onClick={(event) => event.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">배포 구성 등록</h2>
                <button
                  className="modal-close"
                  type="button"
                  aria-label="닫기"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

              <div className="modal-alert">
                <span className="modal-alert-icon" aria-hidden="true" />
                이미지는 채널사가 서명한 파일만 업로드 하수 있습니다.
              </div>

              <div className="modal-grid">
                <div className="field">
                  <div className="field-label">OS 종류 *</div>
                  <div className="field-input">Windows</div>
                </div>
                <div className="field">
                  <div className="field-label">OS 이름 *</div>
                  <div className="field-input">Windows 11 Pro</div>
                </div>
                <div className="field">
                  <div className="field-label">빌드 버전</div>
                  <div className="field-input">23H2</div>
                </div>
                <div className="field">
                  <div className="field-label">이미지 제목</div>
                  <div className="field-input">기본 표준 이미지 v3.2</div>
                </div>
              </div>

              <div className="file-section">
                <div className="file-title">OS 이미지 파일 *</div>
                <div className="file-box">
                  <div className="file-row">
                    <button className="file-button" type="button">
                      이미지 선택
                    </button>
                    <span className="file-name">Win11Pro_23H2_base.img</span>
                    <button className="file-button" type="button">
                      서명 파일 선택
                    </button>
                    <span className="file-name">Win11Pro_23H2_base.sig</span>
                  </div>
                  <div className="file-meta">
                    기본 표준 이미지 v3.2 • Windows 11 Pro • 23H2 18.4 GB •
                    서명인: 김관리 • 서명일:2024-01-14
                  </div>
                </div>
              </div>

              <div className="file-section">
                <div className="file-title data">DATA 이미지 파일</div>
                <div className="file-box">
                  <div className="file-row">
                    <button className="file-button" type="button">
                      이미지 선택
                    </button>
                    <span className="file-name muted">미선택</span>
                    <button className="file-button" type="button">
                      서명 파일 선택
                    </button>
                    <span className="file-name muted">미선택</span>
                  </div>
                </div>
              </div>

              <div className="file-section">
                <div className="file-title custom">CUSTOM 이미지 파일</div>
                <div className="file-box">
                  <div className="file-row">
                    <button className="file-button" type="button">
                      이미지 선택
                    </button>
                    <span className="file-name muted">미선택</span>
                    <button className="file-button" type="button">
                      서명 파일 선택
                    </button>
                    <span className="file-name muted">미선택</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-btn ghost"
                  type="button"
                  onClick={() => setActiveModal(null)}
                >
                  취소
                </button>
                <button
                  className="modal-btn primary"
                  type="button"
                  onClick={() => setActiveModal(null)}
                >
                  등록
                </button>
              </div>
            </div>
          ) : (
            <div
              className="modal upload-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <h2 className="modal-title">
                  {uploadStep === 'confirm' ? '이미지 업로드' : '이미지 파일 선택'}
                </h2>
                <button
                  className="modal-close"
                  type="button"
                  aria-label="닫기"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>

              {uploadStep === 'select' ? (
                <>
                  <div className="upload-tabs">
                    <button
                      className={`upload-tab ${uploadTab === 'upload' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setUploadTab('upload')}
                    >
                      이미지 업로드
                    </button>
                    <button
                      className={`upload-tab ${uploadTab === 'existing' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setUploadTab('existing')}
                    >
                      기존 이미지 선택
                    </button>
                  </div>

                  {uploadTab === 'upload' ? (
                    <>
                      <div className="upload-drop">
                        <img className="upload-icon" src="/upload-icon.svg" alt="" />
                        <p className="upload-title">파일을 여기에 드래그하거나</p>
                        <p className="upload-sub">
                          지원 형식: img, iso, wim · 최대 50 GB
                        </p>
                        <button className="upload-button" type="button">
                          파일 선택
                        </button>
                      </div>

                      <div className="upload-progress">
                        <div className="upload-file">
                          <span>Win11Pro_23H2_base.img</span>
                          <span className="upload-percent">73%</span>
                        </div>
                        <div className="upload-bar">
                          <span style={{ width: '73%' }} />
                        </div>
                        <div className="upload-meta">
                          <span>18.4 GB 중 13.4 GB 업로드됨</span>
                          <span>남은 시간 약 2분 15초</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <label className="upload-search">
                        <svg
                          className="search-icon"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
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
                          className="upload-search-input"
                          type="text"
                          placeholder="이미지 제목, OS 이름으로 검색..."
                        />
                      </label>

                      <div className="upload-table-wrap">
                        <table className="upload-table">
                          <thead>
                            <tr>
                              <th>NO.</th>
                              <th>OS 종류</th>
                              <th>OS 이름</th>
                              <th>빌드 버전</th>
                              <th>이미지 제목</th>
                              <th>용량</th>
                              <th>매니저</th>
                            </tr>
                          </thead>
                          <tbody>
                            {existingRows.map((row) => (
                              <tr
                                key={row.id}
                                className={
                                  selectedExistingId === row.id ? 'active' : ''
                                }
                                onClick={() => setSelectedExistingId(row.id)}
                              >
                                <td>
                                  <span
                                    className={`select-dot ${
                                      selectedExistingId === row.id ? 'active' : ''
                                    }`}
                                    aria-hidden="true"
                                  />
                                  {row.id}
                                </td>
                                <td>
                                  <span className="os-badge">{row.osType}</span>
                                </td>
                                <td>{row.osName}</td>
                                <td>{row.build}</td>
                                <td>{row.title}</td>
                                <td>{row.size}</td>
                                <td>{row.manager}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}

                  <div className="modal-actions">
                    <button className="modal-btn ghost" type="button" onClick={closeModal}>
                      취소
                    </button>
                    <button
                      className="modal-btn primary"
                      type="button"
                      onClick={() => setUploadStep('confirm')}
                    >
                      선택 완료
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="upload-confirm-desc">
                    단일 이미지 파일을 업로드합니다. 메타데이터는 자동으로
                    읽어옵니다.
                  </div>
                  <div className="modal-alert">
                    <span className="modal-alert-icon" aria-hidden="true" />
                    이미지는 채널사가 서명한 파일만 업로드 하수 있습니다.
                  </div>

                  <div className="confirm-field">
                    <div className="confirm-label">이미지 파일</div>
                    <div className="confirm-input">
                      <button className="confirm-button" type="button">
                        파일 선택
                      </button>
                      <span className="confirm-file">Win11Pro_23H2_base.img</span>
                    </div>
                  </div>

                  <div className="confirm-field">
                    <div className="confirm-label">서명 파일</div>
                    <div className="confirm-input">
                      <button className="confirm-button" type="button">
                        파일 선택
                      </button>
                      <span className="confirm-file">Win11Pro_23H2_base.sig</span>
                    </div>
                  </div>

                  <div className="confirm-meta">
                    <div className="confirm-meta-title">자동 입력된 메타데이터</div>
                    <div className="confirm-meta-grid">
                      <div className="meta-item">
                        <span className="meta-label">이미지 종류</span>
                        <span className="type-badge os">OS</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">OS 종류</span>
                        <span className="os-badge">Windows</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">OS 이름</span>
                        <span className="meta-value">Windows 11 Pro</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">빌드 버전</span>
                        <span className="meta-value">23H2</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">서명 일시</span>
                        <span className="meta-value">2024-01-14 09:00</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">서명인</span>
                        <span className="meta-value">김관리</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">용량</span>
                        <span className="meta-value">18.4 GB</span>
                      </div>
                    </div>
                    <div className="confirm-note">
                      기본 표준 이미지 v3.2 · Windows 11 Pro 23H2 기반 표준 설치
                      이미지 · 기본 보안 패치 및 드라이버 포함
                    </div>
                  </div>

                  <div className="modal-actions">
                    <button className="modal-btn ghost" type="button" onClick={closeModal}>
                      취소
                    </button>
                    <button className="modal-btn primary" type="button" onClick={closeModal}>
                      등록
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ImageList
