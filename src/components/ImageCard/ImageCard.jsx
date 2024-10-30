import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <img
    className={css.galleryImg}
    src={image.urls.small}
    alt={image.alt_description}
    onClick={() => onClick(image)}
  />
);

export default ImageCard;
