import React, {useEffect, useState} from "react";
import Loading from './Loading'

const Modal = ({theme, displayModal,toggleModal, child}) => {
  const slider = displayModal?'slide-in':'slide-out'
  const mTheme = theme?'bg-dark':'bg-light' 

  return (
    <div
      id={"slider"}
      className={`modal ${mTheme} ${slider}`}
    >
      <div className={`modal__content ${mTheme}`}>
        
        {/* {prj?prj:<Loading/>} */}
        {child}
        
      </div>
      
    </div>
  );
};

export default Modal