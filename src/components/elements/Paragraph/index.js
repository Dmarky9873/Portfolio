import './index.scss';

const Paragraph = ({ children, textAlign, width }) => {
  return (
    <div className={`paragraph-container ${textAlign}`} style={{ width }}>
      <p>{children}</p>
    </div>
  );
};

export default Paragraph;
