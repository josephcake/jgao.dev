import React, {useState} from 'react';

const Modal = ({theme, displayModal,toggleModal}) => {
  const modalTheme = theme?'modal__bg-dark':'modal__bg-light'
  const slider = displayModal?'slide-in':'slide-out'
  const contentTheme = theme?'bg-dark':'bg-light'
  return (    
    <div
      id={"slider"}
      className={`modal ${modalTheme} ${slider}`}
    >
      <div className={`modal__content ${contentTheme}`}>"Some Image"</div>
      <div
        className={
          theme
            ? "modal__close bg-dark"
            : "modal__close bg-light"
        }
        onClick={toggleModal}
      >
        CLOSE
      </div>
    </div>
  );
};

export default Modal