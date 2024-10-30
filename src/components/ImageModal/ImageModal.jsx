import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modalContent}
    overlayClassName={css.modalOverlay}>
    <img className={css.img} src={image.urls.regular} alt={image.alt_description} />

    <p className={css.description}>{image.description}</p>

    <span className={css.author}>by {image.user.name}</span>
  </Modal>
);

export default ImageModal;
