import React from 'react';

const Project = ({
    toggleModal, 
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
  const invert = theme ? "invert" : ""
  const hero = theme ? heroDark : heroLight
  return (
    <div id={`${first ? "first" : null}`} className={`section`}>
      <div className={"project__container"}>        
        <div className={"project__outer"}>
          <div
            className={`project__inner ${zoomed} ${invert}`}
            onClick={toggleModal}
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
        </div>
      </div>
      <div className={`project__inner_info`}>
        <h6>{subtitle}</h6>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Project