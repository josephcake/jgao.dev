import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Sidenav from './sidenav/Sidenav'
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'
import dtd_hero_light from './media/dtd/dtd_hero_light.gif'
import dtd_hero_dark from './media/dtd/dtd_hero_dark.gif'
import m_hero_light from './media/mewgrounds/m_hero_light.gif'
import m_hero_dark from './media/mewgrounds/m_hero_dark.gif'

function App() {
  const [twilightTheme, sTheme] = useState(false)
  const [displayModal, tModal]  = useState(false)
  const [firstLoad, checkFirst] = useState(true)
  const [inView, sInView]       = useState({top:0, project:0})
  

  const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
      if(timeoutID){
        clearTimeout(timeoutID)
      }
      timeoutID = setTimeout(()=>{
        fn(...args)
      }, delay)
    }
  }
  const toggleModal=()=>{
    tModal(!displayModal)
    checkFirst(false)
  }
  const handleScroll=(e)=>{
    // console.log(e.target.scrollTop)
    let scrollTop = e.target.scrollTop    
    let sectionHeight = e.target.scrollHeight/4
    let prevState = {...inView};
    if(scrollTop !== inView.top){      
      prevState.project = scrollTop/sectionHeight
      prevState.top = scrollTop      
    }
    sInView(prevState)    
  }

  return (
    <div id={"App"}>
      <Sidenav theme={twilightTheme} setTheme={sTheme}/>
      <div
        className={twilightTheme ? `bg-dark App` : `bg-light App`}
        onScroll={debounce(handleScroll, 200)}
      >
        <Landing theme={twilightTheme} setTheme={sTheme} />
        <Project
          toggleModal={toggleModal}
          prjNum={1}
          inView={inView.project}
          first
          theme={twilightTheme}
          heroLight={dtd_hero_light}
          heroDark={dtd_hero_dark}
          subtitle={"Algo Visualizer"}
          title={"Destroy The Duck"}
        />
        <Project
          toggleModal={toggleModal}
          prjNum={2}
          inView={inView.project}
          theme={twilightTheme}
          heroLight={m_hero_light}
          heroDark={m_hero_dark}
          subtitle={"Pokemon Database"}
          title={"Mewgrounds"}
        />
        <Project toggleModal={toggleModal} prjNum={3} inView={inView.project} />
        {firstLoad ? null : (
          <Modal
            theme={twilightTheme}
            displayModal={displayModal}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;