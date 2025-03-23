import { useNavigate } from 'react-router-dom';
import './index.scss';

const TitleImageText = ({ children, image, imageAlt, link, title, date }) => {
  const navigate = useNavigate();

  return (
    <div className="title-image-text-container" onClick={() => navigate(link)}>
      <div id="layer" className="title-date-container">
        <div className="title-container">
          <div className="text-mask">
            <h3 className="text-overlay">{title}</h3>
          </div>
          <h3 className="text-visible">{title}</h3>
        </div>
        <div className="date-container">
          <h4>{date}</h4>
        </div>
      </div>
      <div className="body-container">
        <img src={image} alt={imageAlt} />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default TitleImageText;
