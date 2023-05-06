import ModalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = ({ isOpen, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`${ModalOverlayStyles.overlay} ${isOpen ? ModalOverlayStyles.opened : ""}`}></div>
  );
};

export default ModalOverlay;
