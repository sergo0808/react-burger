import React from "react";
import ModalOverlayStyles from "./ModalOverlay.module.css";

const ModalOverlay = ({ children, isOpen }) => {
  return (
    <div className={`${ModalOverlayStyles.overlay} ${isOpen ? ModalOverlayStyles.opened : ""}`}>
      {children}
    </div>
  );
};

export default ModalOverlay;
