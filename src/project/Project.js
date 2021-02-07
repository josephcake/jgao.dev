import React from 'react';

const Project = ({toggleModal, first, hero, prjNum, inView, theme}) =>{
  const zoomed = prjNum === inView ? "zoomed" : ""
  // console.log(prjNum, inView)
  const invert = theme?"invert":""
  return (
    <div id={`${first ? "first" : null}`} className={`section`}>
      <div className={"project__container"}>
        {/* <div className={"project__title"}>{"Title"}</div> */}
        <div className={"project__outer"}>
          <div
            className={`project__inner ${zoomed} ${invert}`}
            onClick={toggleModal}
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
        </div>
      </div>
      <div className={`project__inner_info`}>
        <h6>Algo Visualizer</h6>
        <h1>Destroy The Duck</h1>
      </div>
    </div>
  );
}

export default Project