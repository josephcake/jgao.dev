import React from 'react';

const Project = ({
    toggleModal, 
    displayModal,
    first, 
    heroLight, 
    heroDark, 
    prjNum, 
    inView, 
    theme, 
    subtitle, 
    title
  }) =>{
  const zoomed = prjNum === inView ? "zoomed" : ""    
  const hero = theme ? heroDark : heroLight
  const direction = displayModal ? "__left" : "__right"
  return (
    <div id={`${first ? "first" : null}`} className={`section`}>
      <div className={"project__container"}>
        <div className={"project__outer"}>
          <div
            className={`project__inner ${zoomed}`}
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
        </div>
      </div>
      <div className={`project_overlay_container`}>
        <div className={""}>
          <h6>{subtitle}</h6>
          <h1>{title}</h1>
        </div>
        <div
          className={`modal_arrow${direction} modal_arrow`}
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Project