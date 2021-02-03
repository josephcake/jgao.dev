import React from 'react';

const Project = ({displayModal, setModal}) =>{
  return (
    <div className={"section"}>
      <div className={"project__container"}>
        <div className={"project__inner"}>
          <div className={"project__title"}>
            {"Title"}
          </div>

        </div>
      </div>
      <div className={"project__modal"} >
        {/* display the projects then show on modal */}
      </div>
    </div>
  )
}

export default Project