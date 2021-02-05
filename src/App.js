import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'
import Modal from './components/Modal'
import dtd_1 from './media/dtd/dtd_1.gif'

function App() {
  const [twilightTheme, sTheme] = useState(true)
  const [displayModal, tModal] = useState(false)
  const [firstLoad, checkFirst] = useState(true);
  const toggleModal=()=>{
    tModal(!displayModal)
    checkFirst(false)
  }
  return (
    <div className={twilightTheme ? `bg-dark App` : `bg-light App`}>
      <Landing theme={twilightTheme} setTheme={sTheme} />      
      <Project hero={dtd_1} toggleModal={toggleModal} first/>      
      <Project toggleModal={toggleModal} />
      <Project toggleModal={toggleModal} />
      {firstLoad?null:
        <Modal theme={twilightTheme} displayModal={displayModal} toggleModal={toggleModal}/>
      }
    </div>
  );
}

export default App;
