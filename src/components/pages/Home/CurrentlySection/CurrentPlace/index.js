import './index.scss';

const CurrentPlace = ({ category, title, detail }) => {
  return (
    <article className="current-place-container">
      <div className="current-place-copy">
        <p className="current-place-category">{category}</p>
        <h3>{title}</h3>
      </div>
      {detail && <p className="current-place-detail">{detail}</p>}
    </article>
  );
};

export default CurrentPlace;
