import React from "react";
import styles from "./ModalForm.module.css";

const ModalForm = ({ show, onClose, children }) => {
  const handleClose = (event) => {
    // Cerrar el modal solo si se hace clic en el fondo oscuro (el div modal)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {show && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
