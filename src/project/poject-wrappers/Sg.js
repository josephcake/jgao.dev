import React from "react";
import MidSection from "../../components/MidSection";

// import sg from "../../media/sg/dtd.jpg";
import dtd from "../../media/dtd/dtd.jpg";


const Sg = () => {
  return (
    <div className={"project-wrapper"}>
      <div className={"project-banner"}>
        <h1>Studio Ghibli</h1>
        <h3 className={"project-link"}>Goto Project -----></h3>
      </div>
      <div className={"project-hero project-item"}>
        <img className={"project-wrapper__img"} srcSet={dtd} alt={"sg"} />
      </div>
    </div>
  );
};

export default Sg;
