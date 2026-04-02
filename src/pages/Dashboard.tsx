import type { CSSProperties } from 'react'

const statCards = [
  {
    title: '전체 클라이언트',
    value: '248',
    sub: '등록된 PC 수',
    tone: 'neutral',
    dot: null,
  },
  {
    title: '재설치중',
    value: '12',
    sub: '진행률 avg 67%',
    tone: 'blue',
    dot: 'dot-blue',
  },
  {
    title: '재설치완료',
    value: '203',
    sub: '오늘 +18',
    tone: 'green',
    dot: 'dot-green',
  },
  {
    title: '재설치 실패',
    value: '7',
    sub: '오늘 +18',
    tone: 'red',
    dot: 'dot-red',
  },
]

const barSeries = [
  { success: 68, fail: 45 },
  { success: 82, fail: 28 },
  { success: 74, fail: 55 },
  { success: 60, fail: 38 },
  { success: 88, fail: 52 },
  { success: 70, fail: 40 },
  { success: 92, fail: 46 },
  { success: 76, fail: 62 },
  { success: 66, fail: 34 },
  { success: 84, fail: 58 },
  { success: 72, fail: 42 },
  { success: 58, fail: 30 },
]

const deployRatios = [
  { label: '23H2', value: '38%', color: 'ratio-blue' },
  { label: '22H2', value: '29%', color: 'ratio-green' },
  { label: '21H2', value: '21%', color: 'ratio-orange' },
  { label: '기타', value: '12%', color: 'ratio-gray' },
]

const windowsRows = [
  { label: 'Windows 11 Pro', value: 44, color: 'bar-blue' },
  { label: 'Windows 10 Enterprise', value: 32, color: 'bar-green' },
  { label: 'Windows 10 Pro', value: 24, color: 'bar-yellow' },
]

const deployLogs = [
  {
    name: 'PC-SALES-042',
    version: 'Win11-23H2 Enterprise v3.2',
    group: '영업팀',
    status: '진행 중',
    time: '14:32',
    owner: '김관리',
    tag: 'status-blue',
  },
  {
    name: 'PC-DEV-017',
    version: 'Win10-22H2-Pro 개발팀',
    group: '개발팀',
    status: '완료',
    time: '14:18',
    owner: '이담당',
    tag: 'status-green',
  },
  {
    name: 'PC-HR-008',
    version: 'Win11-23H2 Enterprise v3.2',
    group: '인사팀',
    status: '실패',
    time: '14:05',
    owner: '박매니저',
    tag: 'status-red',
  },
  {
    name: 'PC-MKT-031',
    version: 'Win10-22H2-Pro 기본',
    group: '마케팅',
    status: '완료',
    time: '13:50',
    owner: '김관리',
    tag: 'status-green',
  },
  {
    name: 'PC-FIN-022',
    version: 'Win11-23H2-Pro 회계',
    group: '회계팀',
    status: '진행 중',
    time: '13:44',
    owner: '이담당',
    tag: 'status-blue',
  },
  {
    name: 'PC-OPS-014',
    version: 'Win11-23H2 Enterprise v3.1',
    group: '운영팀',
    status: '완료',
    time: '13:32',
    owner: '정운영',
    tag: 'status-green',
  },
  {
    name: 'PC-SEC-003',
    version: 'Win10-22H2-Pro 보안',
    group: '보안팀',
    status: '진행 중',
    time: '13:20',
    owner: '최보안',
    tag: 'status-blue',
  },
  {
    name: 'PC-ADM-009',
    version: 'Win11-23H2 Pro 행정',
    group: '총무팀',
    status: '완료',
    time: '13:05',
    owner: '박총무',
    tag: 'status-green',
  },
  {
    name: 'PC-CS-027',
    version: 'Win10-22H2-Pro 고객지원',
    group: 'CS팀',
    status: '실패',
    time: '12:52',
    owner: '이지원',
    tag: 'status-red',
  },
  {
    name: 'PC-IT-011',
    version: 'Win11-23H2 Enterprise v3.2',
    group: 'IT지원',
    status: '진행 중',
    time: '12:40',
    owner: '오지원',
    tag: 'status-blue',
  },
]

const alerts = [
  {
    tone: 'alert-gold',
    text: 'PC-FIN-019 재설치 실패 - 네트워크 연결 오류',
  },
  {
    tone: 'alert-gold',
    text: 'PC-FIN-019 재설치 실패 - 서명 파일 불일치',
  },
  {
    tone: 'alert-red',
    text: 'PC-ACCT-011 장치 응답 없음 - 점검필요',
  },
]

function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">대시보드</h1>
        </div>
        <div className="page-update">
          마지막 업데이트 : 5분전 <span className="badge">실시간</span>
        </div>
      </div>

      <section className="stats-grid">
        {statCards.map((card) => (
          <div key={card.title} className={`panel stat-card ${card.tone}`}>
            <div className="panel-title">{card.title}</div>
            <div className={`stat-value ${card.tone}`}>{card.value}</div>
            {card.dot ? (
              <div className="stat-detail">
                <span className={`stat-dot ${card.dot}`} />
                <span>{card.sub}</span>
              </div>
            ) : (
              <div className="stat-sub">{card.sub}</div>
            )}
          </div>
        ))}
      </section>

      <section className="charts-grid">
        <div className="panel chart-panel">
          <div className="panel-title">시간별 배포현황 (오늘)</div>
          <div className="chart-legend">
            <span className="legend-item">
              <span className="legend-dot dot-green" /> 완료
            </span>
            <span className="legend-item">
              <span className="legend-dot dot-red" /> 실패
            </span>
          </div>
          <div className="bar-chart">
            {barSeries.map((bar, index) => (
              <div
                key={`bar-${index}`}
                className="bar-group"
                style={
                  {
                    '--success': `${bar.success}%`,
                    '--fail': `${bar.fail}%`,
                  } as CSSProperties
                }
              >
                <span className="bar bar-success" />
                <span className="bar bar-fail" />
              </div>
            ))}
          </div>
          <div className="chart-axis">
            {['09시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시'].map(
              (label) => (
                <span key={label}>{label}</span>
              ),
            )}
          </div>
        </div>

        <div className="panel chart-panel">
          <div className="panel-title">빌드 버전 현황</div>
          <div className="donut-wrap">
            <div className="donut" />
            <div className="donut-legend">
              {deployRatios.map((item) => (
                <div key={item.label} className="donut-item">
                  <span className={`ratio-dot ${item.color}`} />
                  <span className="ratio-label">{item.label}</span>
                  <span className="ratio-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel chart-panel">
          <div className="panel-title">Windows 버전 현황</div>
          <div className="progress-list">
            {windowsRows.map((row) => (
              <div key={row.label} className="progress-row">
                <div className="progress-meta">
                  <span className="progress-label">{row.label}</span>
                  <span className="progress-value">{row.value}%</span>
                </div>
                <div className="progress-bar">
                  <span
                    className={`progress-fill ${row.color}`}
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="progress-total">
            <span className="progress-total-label">이번주 목표 달성률</span>
            <span className="progress-total-value">87.3%</span>
          </div>
        </div>
      </section>

      <section className="lower-grid">
        <div className="panel table-panel">
          <div className="panel-title">최근 배포 로그</div>
          <div className="log-table-wrap">
            <table className="log-table">
              <thead>
                <tr>
                  <th>PC 이름</th>
                  <th>배포 이미지</th>
                  <th>그룹</th>
                  <th>시작 시간</th>
                  <th>그룹</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {deployLogs.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.version}</td>
                    <td>{row.group}</td>
                    <td>{row.time}</td>
                    <td>{row.owner}</td>
                    <td>
                      <span className={`status-pill ${row.tag}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel alert-panel">
          <div className="panel-title">알림 및 조치 필요</div>
          <div className="alert-list">
            {alerts.map((alert, index) => (
              <div
                key={`alert-${index}`}
                className={`alert-item ${alert.tone}`}
              >
                <span className="alert-icon" aria-hidden="true" />
                <span>{alert.text}</span>
              </div>
            ))}
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <div className="metric-label">알림 및 조치 필요</div>
              <div className="metric-value">14</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">총 스토리지 사용</div>
              <div className="metric-value">847 GB</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
