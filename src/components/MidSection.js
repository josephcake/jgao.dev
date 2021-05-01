import React from 'react'

const MidSection = ({src,p,dual,expand, reverse}) =>{
  const pArray = p.map((t,i) => <p key={i} className={`project-p mid-text${dual}`}>{t}</p>);
  let left = (
    <div className={expand ? "expand" : ""}>
      <img className={"project-img"} srcSet={src} alt={"src"} />
    </div>
  );
  let right = <div className={"mid-section-text-container"}>{pArray}</div>;
  return (
    <div
      className={
        dual ? `project-item mid-section_dual` : `project-item mid-section`
      }
    >
      {reverse ? right : left}
      {reverse ? left : right}
    </div>
  );
}

export default MidSection