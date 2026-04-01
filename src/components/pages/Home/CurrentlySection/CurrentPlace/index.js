import './index.scss';

const CurrentPlace = ({ category, title }) => {
  return (
    <article className="current-place-container">
      <p className="current-place-category">{category}</p>
      <h3>{title}</h3>
    </article>
  );
};

export default CurrentPlace;
