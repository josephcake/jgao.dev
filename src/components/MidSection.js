import React from 'react'

const MidSection = ({src,p,expand}) =>{
  const pArray = p.map(t => <p className={"project-p"}>{t}</p>);
  return (
    <div className={"project-item mid-section"}>
      <div className={expand?'expand':''}>
        <img
          className={"project-img"}
          srcSet={src}
          alt={"src"}
        />
      </div>

      <div className={"project-text-container"}>
        {pArray}
      </div>
    </div>
  );
}

export default MidSection