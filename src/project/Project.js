import React from 'react';

const Project = ({toggleModal, first, hero, prjNum, inView}) =>{
  const zoomed = prjNum === inView ? "zoomed" : ""
  console.log(prjNum, inView)
  return (
    <div id={`${first?'first':null}`}className={`section`}>
      <div className={"project__container"}>
        {/* <div className={"project__title"}>{"Title"}</div> */}
        <div className={"project__outer"}>

        <div className={`project__inner ${zoomed}`} onClick={toggleModal} style={{backgroundImage:`url(${hero})`}}>
        </div>
          {/* <img className={"project__hero"} alt={'dtd'} srcSet={hero}/> */}
        </div>
      </div>      
    </div>
  );
}

export default Project