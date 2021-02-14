import React from 'react'
import mewgrounds from '../../media/mewgrounds/mewgrounds_rotated.jpg'

const Mewgrounds = () =>{
  return (
    <div className={"project-wrapper"}>
      <div className={"project-hero project-item"}>
        <img
          className={"project-wrapper__img"}
          srcSet={mewgrounds}
          alt={"mewgrounds"}
        />
      </div>
      <div className={"project-item mid-section"}>
        <div className={"project-info-container project-info-container__left"}>
          <label>Title</label>
          <div className={"project-name"}>Forever I shall Rise</div>
          <label>Purpose</label>

          <div className={"project-purpose"}>
            To showcase some skills, or improve a service.
          </div>
        </div>
        <div className={"project-info-container project-info-container__right"}>
          <label>Details</label>

          <div className={"project-details"}>
            Lorem ipsum bacon fish burger tomatoes and everything nice.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mewgrounds