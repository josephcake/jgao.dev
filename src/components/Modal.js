import React from "react";

const Modal = ({theme, displayModal, child, firstLoad}) => {
  const slider = displayModal?'slide-in':'slide-out'
  const mTheme = theme?'bg-dark':'bg-light' 

  return (
    <div
      id={"slider"}
      className={firstLoad?"":`modal ${mTheme} ${slider}`}
      // className={firstLoad?"":`modal ${mTheme} ${slider}`}
    >
      <div className={`modal__content ${mTheme}`}>{child}</div>
    </div>
  );
};

export default Modal