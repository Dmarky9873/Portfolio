import './index.scss';

const CurrentPlace = ({ category, title, index }) => {
  return (
    <article
      className="current-place-container"
      style={{ '--current-place-delay': `${2.42 + index * 0.12}s` }}
    >
      <p className="current-place-category">{category}</p>
      <h3>{title}</h3>
    </article>
  );
};

export default CurrentPlace;
