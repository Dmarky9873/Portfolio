import './index.scss';

const Paragraph = ({ children, textAlign, width }) => {
  const customWidth = width ? { '--paragraph-max-width': width } : undefined;

  return (
    <div className={`paragraph-container ${textAlign}`} style={customWidth}>
      <p>{children}</p>
    </div>
  );
};

export default Paragraph;
