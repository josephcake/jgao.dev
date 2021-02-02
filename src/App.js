import React, {useState} from 'react';
import './style/base.scss';
import {themes} from './constant/AppConstant';
import Landing from './landing/Landing';

function App() {
  const [theme, sTheme] = useState(themes[1])
  const setTheme = () =>{
    if(theme === themes[0]){
      sTheme(themes[1])
    }else{
      sTheme(themes[0])
    }
  }

  return (
    <div className="App">
      <Landing theme={theme} themes={themes}/>
    </div>
  );
}

export default App;
