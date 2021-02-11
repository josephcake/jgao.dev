import React from 'react'

const Sidenav = ({theme, setTheme}) =>{
  
  return (
    <div
      className={theme ? `bg-dark fixed__sidenav` : `bg-light fixed__sidenav`}
    >
      <div className={"about sideText sidenav__item"}> <h3></h3> </div>

      <div className={"about sideText sidenav__item"}>
        <h3>JG</h3>
      </div>      

      <div
        className={
          theme
            ? `sideText__dark sideText sidenav__item`
            : `sideText__light sideText sidenav__item`
        }
        onClick={() => setTheme(!theme)}
      >
        {theme ? <h3>twilight</h3> : <h3>creamy</h3>}
      </div>
    </div>
  );
}
export default Sidenav