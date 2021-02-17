import React, {useState, useEffect, useRef} from 'react';
// import {toggleModal} from './utilities/Functions'
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Sidenav from './sidenav/Sidenav'
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'
import Mewgrounds from './project/poject-wrappers/Mewgrounds'
import Dtd from './project/poject-wrappers/Dtd'
import AboutMe from './project/poject-wrappers/AboutMe'

import dtd_hero_light from './media/dtd/dtd_hero_light.gif'
import dtd_hero_dark from './media/dtd/dtd_hero_dark.gif'
import m_hero_light from './media/mewgrounds/m5_hero_light.gif'
import m_hero_dark from './media/mewgrounds/m5_hero_dark.gif'


function App() {
  const appRef = useRef(null)
  const [twilightTheme, sTheme] = useState(false)
  const [displayModal, tModal]  = useState(false)
  const [firstLoad, checkFirst] = useState(true)
  // const [inView, sInView]       = useState({top:0, project:0})
  // const [scrollTop, sScrollTop] = useState(0)
  const [scrollHeight, sScrollHeight] = useState(0)
  const [project, setProject] = useState(null)

  useEffect(()=>{ //setting the scrollHeight once
    const app = appRef.current
    let height = app.scrollHeight
    height = height - (height/4)
    sScrollHeight(height)
    // console.log('app:',height)
  },[twilightTheme])

  const toggleModal = (e) => {
    console.log(e)
    switch(e){
      case 'mewgrounds':
        setProject(<Mewgrounds/>)
      break;
      case 'dtd':
        setProject(<Dtd/>)
      break;
      case 'aboutme':
        setProject(<AboutMe/>)
      break;
      default:
        setProject(null)      
    }

    tModal(!displayModal);
    if(firstLoad){
      checkFirst(false);
    }
  };
  // console.log('app')

  return (
    <div
      id={"App"}
      // onScroll={handleScroll}
    >
      <Sidenav
        theme={twilightTheme}
        setTheme={sTheme}
        // scrollTop={scrollTop}
        scrollHeight={scrollHeight}
        toggleModal={toggleModal}
        displayModal={displayModal}
      />
      <div
        className={twilightTheme ? `bg-dark App` : `bg-light App`}
        ref={appRef}
        // onScroll={handleScroll}
      >
        <Landing theme={twilightTheme} setTheme={sTheme} />
        <div className={"projects"}>
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={1}
            // inView={inView.project}
            first
            theme={twilightTheme}
            heroLight={dtd_hero_light}
            heroDark={dtd_hero_dark}
            subtitle={"Algo Visualizer"}
            title={"Destroy The Duck"}
            prj={'dtd'}
          />
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={2}
            // inView={inView.project}
            theme={twilightTheme}
            heroLight={m_hero_light}
            heroDark={m_hero_dark}
            subtitle={"Pokemon Database"}
            title={"Mewgrounds"}
            prj={'mewgrounds'}
          />
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={3}
            // inView={inView.project}
          />

          {firstLoad ? null : (
            <Modal
              theme={twilightTheme}
              displayModal={displayModal}
              toggleModal={toggleModal}
            >
              {project}
              {/* <Mewgrounds/> */}
            </Modal>
          )}
        </div>
      </div>

      {/* progress */}
      {/* <div className={inView.project>0 ? `scroll__indi__container` : 'hidden'}>{navItems}</div> */}
    </div>
  );
}

export default App;