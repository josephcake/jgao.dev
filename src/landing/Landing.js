import React from 'react';
import {Canvas} from './Canvas'
// import {Canvas} from './Canvas_wave'

function Landing ({theme, themes}) {
  return(
    <>
      <div className={"landing"}>
        {/* <div className={"navigation"}>
          <section className={"navigation__section"}>Home</section>
          <section className={"navigation__section"}>Home</section>
          <section className={"navigation__section"}>Home</section>
        </div> */}
        <div className={"theme"}>
          <h3>text goes here</h3>
        </div>
        <div className={"about"}>
          <h3>text goes here</h3>
        </div>
      </div>
      <div className={"wrapper"}>
        <Canvas theme={theme} themes={themes}/>
      </div>
    </>
  )
}
export default Landing