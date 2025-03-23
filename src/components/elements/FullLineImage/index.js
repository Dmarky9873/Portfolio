import './index.scss';

const FullLineImage = ({ imageSource, imageAlt, width }) => {
  return (
    <>
      <div className="full-line-image-container">
        <img src={imageSource} alt={imageAlt} width={width} />
      </div>
    </>
  );
};

export default FullLineImage;
