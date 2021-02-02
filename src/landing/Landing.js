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
        <div className={"landing__section"}>
          <div className={"theme"}>
            <h3>theme selection</h3>
          </div>
          <div className={"name"}>
            <h1>Joseph Gao</h1>
            <h6>SOFTWARE ENGINEER</h6>
          </div>
          <div className={"about"}>
            <h3>about me</h3>
          </div>
        </div>
      </div>
      <div className={"wrapper"}>
        <Canvas theme={theme} themes={themes}/>
      </div>
    </>
  )
}
export default Landing