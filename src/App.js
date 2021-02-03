import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'

function App() {
  const [twilightTheme, sTheme] = useState(true)
  const [displayModal, sModal] = useState(false)

  return (
    <div className={twilightTheme?`App__bg_dark App`:`App__bg_light App`}>      
      <Landing theme={twilightTheme} setTheme={sTheme} />
      <Project displayModal={displayModal} setModal={sModal}/>
      <Project displayModal={displayModal} setModal={sModal}/>
      <Project displayModal={displayModal} setModal={sModal}/>
      <Modal />
    </div>
  );
}

export default App;
