import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'

function App() {
  const [twilightTheme, sTheme] = useState(true)
  const [displayModal, tModal] = useState(false)
  const [firstLoad, checkFirst] = useState(true);
  const toggleModal=()=>{
    tModal(!displayModal)
    checkFirst(false)
  }
  return (
    <div className={twilightTheme ? `App__bg_dark App` : `App__bg_light App`}>
      <Landing theme={twilightTheme} setTheme={sTheme} />
      <Project toggleModal={toggleModal} />
      <Project toggleModal={toggleModal} />
      <Project toggleModal={toggleModal} />
      <Modal displayModal={displayModal} toggleModal={toggleModal} firstLoad={firstLoad}/>      
    </div>
  );
}

export default App;
