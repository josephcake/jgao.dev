import React from 'react';
import {Canvas} from './Canvas';
// import {Canvas} from './Canvas_wave'

function Landing ({theme,setTheme}) {
  
  return (
    <div className={"section"}>
      <div className={"logo"}>
        <h1>高</h1>
      </div>
      <div
        className={theme ? `landing__dark landing` : `landing__light landing`}
      >
        <div className={"landing__section"}>
          <div
            className={
              theme ? `sideText__dark sideText` : `sideText__light sideText`
            }
          >
            <h3>about me</h3>
          </div>
          <div className={"centerText"}>
            <h1 className={"centerText__text title"}>Joseph Gao</h1>
            <h6 className={"centerText__text subtitle"}>SOFTWARE ENGINEER</h6>
          </div>
          <div
            className={
              theme ? `sideText__dark sideText` : `sideText__light sideText`
            }
            onClick={() => setTheme(!theme)}
          >
            {theme ? <h3>twilight</h3> : <h3>cookies & cream</h3>}
          </div>
        </div>
        <div
          className={
            theme
              ? `landing__end landing__end__dark`
              : `landing__end landing__end__light`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={"wrapper"}>
        <Canvas theme={theme} />
      </div>
    </div>
  );
}
export default Landing