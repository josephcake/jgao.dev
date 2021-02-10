import React from 'react'

const Sidenav = ({theme, setTheme, inView}) =>{
  const navItemColor = theme?"bg-light":"bg-dark"
  const projects = [0,1,2,3]
  const navItems = projects.map(p=>{
    if(p === inView){
      return <div className={`nav__scroll_indi grow ${navItemColor}`}></div>;
    }else{
      return <div className={`nav__scroll_indi ${navItemColor}`}></div>;
    }
    
  })
  return (
    <div
      className={theme ? `bg-dark fixed__sidenav` : `bg-light fixed__sidenav`}
    >
      <div className={"about sideText sidenav__item"}>
        <h3>JG</h3>
      </div>
      <div className={"sidenav__item scroll__indi__container"}>        
        {navItems}
      </div>

      <div
        className={
          theme
            ? `sideText__dark sideText sidenav__item`
            : `sideText__light sideText sidenav__item`
        }
        onClick={() => setTheme(!theme)}
      >
        {theme ? <h3>twilight</h3> : <h3>cookies & cream</h3>}
      </div>
    </div>
  );
}
export default Sidenav