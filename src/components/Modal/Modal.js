import React from "react";
import { useEffect, useRef } from "react";
import ModalStyles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        props.onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay isOpen={props.isOpen}>
        <div className={ModalStyles.modal}>
          <div className={ModalStyles.closeBtn} onClick={props.onClose}></div>
          {props.children}
        </div>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

export default Modal;
