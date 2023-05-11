import { useEffect } from "react";
import ModalStyles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal");
  const ECK_KEYCODE = 27;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === ECK_KEYCODE) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay isOpen={isOpen} onClose={onClose} />
      <div className={isOpen ? ModalStyles.modal : `${ModalStyles.modal} ${ModalStyles.hidden}`}>
        <div className={ModalStyles.closeBtn} onClick={onClose}></div>
        {children}
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
