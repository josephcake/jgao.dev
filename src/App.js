import React, {useState} from 'react';
import './style/base.scss';
import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';
import Project from './project/Project'

function App() {
  const [twilightTheme, sTheme] = useState(true)

  return (
    <div className="App">
      <Landing theme={twilightTheme} setTheme={sTheme}/>
      <Project/>
    </div>
  );
}

export default App;
