import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className={css.btn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
