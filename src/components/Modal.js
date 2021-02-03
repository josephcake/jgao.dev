import React, {useState} from 'react';

const Modal = ({ displayModal,toggleModal, firstLoad}) => {
  

  return (
    <div id={"slider"} className={firstLoad?'modal':displayModal?`slide-in modal`:`slide-out modal`}>
      <div className={"modal__close"} onClick={toggleModal}>
        CLOSE
      </div>
      <div className={"modal__content"}>"Some Image"</div>
    </div>
  );
};

export default Modal