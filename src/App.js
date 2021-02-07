import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Sidenav from './sidenav/Sidenav'
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'
import dtd_1 from './media/dtd/dtd_1.gif'
import dtd_2 from './media/dtd/dtd_2.gif'
import dtd_hero from './media/dtd/dtd_hero.gif'

function App() {
  const [twilightTheme, sTheme] = useState(true)
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
      <Sidenav theme={twilightTheme}/>
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
          hero={dtd_hero}
        />
        <Project toggleModal={toggleModal} prjNum={2} inView={inView.project} />
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