import React from "react";

const ModalForm = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
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
