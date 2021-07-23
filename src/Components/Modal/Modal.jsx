import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function Modal({ src, alt, onClose }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.addEventListener("keydown", handleKeyDown);
      isFirstRender.current = false;
      return;
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className='Overlay' onClick={handleBackdropClick}>
      <div className='Modal'>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
