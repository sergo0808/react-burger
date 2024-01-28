import React, { useEffect } from "react";
import ModalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { createPortal } from "react-dom";
import { PropTypes } from "prop-types";
import { ESCAPE_KEY } from "../../utils/data";

const modals = document.getElementById("modals");

const Modal = ({ children, title, onClose }) => {
  const handleListener = (e) => {
    if (e.keyCode === ESCAPE_KEY || e.target.id === "overlay") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleListener);
    document.addEventListener("click", handleListener);

    return () => {
      document.removeEventListener("keydown", handleListener);
      document.addEventListener("click", handleListener);
    };
  });

  return createPortal(
    <div className={ModalStyles.modal}>
      <ModalOverlay />
      <div className={ModalStyles.modal__container}>
        <p className={`text text_type_main-large ${ModalStyles.title}`}>{title}</p>
        <div className={ModalStyles.button} onClick={onClose}></div>
        {children}
      </div>
    </div>,
    modals
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
