import React from 'react'
import MidSection from '../../components/MidSection'
import board from '../../media/dtd/dtd_main.jpg'
import action from '../../media/dtd/dtd_action.jpg'
import selfbuild from '../../media/dtd/dtd_selfbuild.gif'

import dtd from '../../media/dtd/dtd.jpg'

const Dtd = () => {
  return (
    <div className={"project-wrapper"}>
      <div className={"project-banner"}>
        <h1>Destroy The Duck</h1>
        <h3 className={"project-link"}>Goto Project -----></h3>
      </div>
      <div className={"project-hero project-item"}>
        <img className={"project-wrapper__img"} srcSet={dtd} alt={"dtd"} />
      </div>
      <div className={"project-item mid-section_dual"}>
        <div className={"project-info-container"}>
          <label className={"project-label"}>An Algorithm Game</label>
          <div className={"project-name"}>
            Fun visual representation of some of the most popular Searching
            Algorithm
          </div>
          <label className={"project-label"}>Purpose</label>
          <div className={"project-purpose"}>
            A graphical user interfase (GUI) that allows a programmer to see how
            one Algorithm differs from the other
          </div>
        </div>
      </div>
      <MidSection
        src={action}
        p={[
          "ALGORITHM: Select your weapon",
          "MAZE: Select your map",
          "CLEAR BOARD: Start a new game",
          "CLEAR WALL: Change map",
          "CLEAR PATH: Change weapon",
        ]}
        dual={"_dual"}
      />
      <MidSection
        src={board}
        p={["ARROW: You", "DUCK: Your food", "GOAL: Destroy the DUCK!"]}
      />
      <MidSection
        src={selfbuild}
        p={["Unhappy with the map?", "Create your own!"]}
        dual={"_dual"}
        reverse
      />
      <div className={"project-item project-footer-img__ducks"}></div>
    </div>
  );
}

export default Dtd