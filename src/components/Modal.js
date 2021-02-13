import React, {useEffect, useState} from "react";
import Loading from './Loading'



const Modal = ({theme, displayModal,toggleModal, children}) => {
  const modalTheme = theme?'modal__bg-dark':'modal__bg-light'
  const slider = displayModal?'slide-in':'slide-out'
  const contentTheme = theme?'bg-dark':'bg-light' 

  return (
    <div
      id={"slider"}
      className={`modal ${modalTheme} ${slider}`}
    >
      <div className={`modal__content ${contentTheme}`}>
        
        {/* {prj?prj:<Loading/>} */}
        {children}
      </div>
      
    </div>
  );
};

export default Modal