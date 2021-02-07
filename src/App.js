import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'
import dtd_1 from './media/dtd/dtd_1.gif'
import dtd_2 from './media/dtd/dtd_2.gif'

function App() {
  const [twilightTheme, sTheme]     = useState(true)
  const [displayModal, tModal]      = useState(false)
  const [firstLoad, checkFirst]     = useState(true)
  const [inView, sInView]   = useState({top:0, project:0})
  

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
    let prevState = inView;
    if(scrollTop > inView.top){      
      prevState.top = scrollTop
      prevState.project ++
    }else if(scrollTop < inView.top){      
      prevState.top = scrollTop;
      prevState.project--;
    }
    sInView(prevState)
    // console.log(inView)
    // console.log(e.target.scrollHeight)  overall scrollable height
  }
  return (
    <div className={twilightTheme ? `bg-dark App` : `bg-light App`} onScroll={debounce(handleScroll,500)}>
      <Landing theme={twilightTheme} setTheme={sTheme} />      
      <Project toggleModal={toggleModal} first/>      
      <Project toggleModal={toggleModal} />
      <Project toggleModal={toggleModal} />
      {firstLoad?null:
        <Modal theme={twilightTheme} displayModal={displayModal} toggleModal={toggleModal}/>
      }
    </div>
  );
}

export default App;