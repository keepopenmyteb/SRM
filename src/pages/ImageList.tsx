function ImageList() {
  return (
    <div className="image-list">
      <div className="page-header image-list-header">
        <div>
          <h1 className="page-title">이미지 목록</h1>
          <div className="tabs">
            <button className="tab active" type="button">
              배포 구성
            </button>
            <button className="tab" type="button">
              이미지 파일
            </button>
          </div>
        </div>
      </div>
      <div className="page-divider" />
    </div>
  )
}

export default ImageList
