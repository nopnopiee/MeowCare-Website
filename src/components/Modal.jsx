import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-end'>
          <button
            onClick={onRequestClose}
            className='text-gray-500 hover:text-gray-700'
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
