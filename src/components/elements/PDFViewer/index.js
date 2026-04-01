import './index.scss';

const PDFViewer = ({ title, fileUrl, fileName, label = 'PDF' }) => {
  return (
    <section className="pdf-viewer" aria-label={`${title} PDF viewer`}>
      <div className="pdf-viewer__header">
        <div className="pdf-viewer__meta">
          <p className="pdf-viewer__label">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="pdf-viewer__actions">
          <a href={fileUrl} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <a href={fileUrl} download={fileName}>
            Download PDF
          </a>
        </div>
      </div>

      <div className="pdf-viewer__frame">
        <iframe src={fileUrl} title={title} loading="lazy" />
      </div>
    </section>
  );
};

export default PDFViewer;
