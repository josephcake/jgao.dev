import React, {useState} from 'react';
import './style/base.scss';
import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';

function App() {
  const [twilightTheme, sTheme] = useState(true)

  return (
    <div className="App">
      <Landing theme={twilightTheme} setTheme={sTheme}/>
    </div>
  );
}

export default App;
