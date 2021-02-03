import React, {useState} from 'react';
import './style/base.scss';
// import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'

function App() {
  const [twilightTheme, sTheme] = useState(true)

  return (
    <div className={twilightTheme?`App__bg_dark App`:`App__bg_light App`}>      
      <Landing theme={twilightTheme} setTheme={sTheme} />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default App;
