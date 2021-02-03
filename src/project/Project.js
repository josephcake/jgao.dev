import React from 'react';

const Project = ({toggleModal}) =>{
  return (
    <div className={"section"}>
      <div className={"project__container"}>
        <div className={"project__inner"} onClick={toggleModal}>
          <div className={"project__title"}>{"Title"}</div>
        </div>
      </div>      
    </div>
  );
}

export default Project