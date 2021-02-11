import React, {memo} from 'react';
import {Canvas} from './Canvas';
// import {Canvas} from './Canvas_wave'
import WordWrapper from './WordWrapper'

const Landing = memo(function Landing ({theme,setTheme}) {
  const scrollToNext = () =>{     
    let first = document.getElementById("first")    
    first.scrollIntoView({behavior: "smooth"})
  }
  // console.log('landing page') 
  return (
    <div className={"section main_land"}>
      
      <div
        className={theme ? `landing__dark landing` : `landing__light landing`}
      >
        <div className={"landing__section"}>
          {/* <div></div> */}
          <div className={"centerText"}>
            <h1 className={"centerText__text title"}>
              <WordWrapper theme={theme} str={"Joseph.Gao"}/>
            </h1>

            <h6 className={"centerText__text subtitle"}>SOFTWARE ENGINEER</h6>
          </div>
          {/* <div></div> */}
          
        </div>
        <div
          className={`landing__end `}
          onClick={scrollToNext}
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
        <Canvas theme={theme}/>
      </div>
    </div>
  );
})
export default Landing