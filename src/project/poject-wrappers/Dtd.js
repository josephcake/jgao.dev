import React from 'react'
import MidSection from '../../components/MidSection'

import dtd from '../../media/dtd/dtd.jpg'

const Dtd = () => {
  return (
    <div className={"project-wrapper"}>
      <div className={"project-banner"}>
        <h1>Destroy The Duck</h1>
        <h3 className={"project-link"}>Goto Project -----></h3>
      </div>
      <div className={"project-hero project-item"}>
        <img
          className={"project-wrapper__img"}
          srcSet={dtd}
          alt={"dtd"}
        />
      </div>
    </div>
  );
}

export default Dtd