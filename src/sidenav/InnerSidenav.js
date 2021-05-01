import React, {memo} from 'react'

const InnerSidenav = memo(function InnerSidenav({theme, setTheme, toggleModal, displayModal}){
  const handleToggle = () =>{
    if(displayModal){
      toggleModal(null)
    }else{
      toggleModal("aboutme")
    }
  }
  return (
    <div className={`fixed__sidenav`}>
      <div className={"logo sidenav__item"}>
        <h3>高</h3>
      </div>

      <div className={"about sideText sidenav__item"} onClick={handleToggle}>
        {displayModal?
        <h3>Close</h3>:
        <h3>About Me</h3>
        }
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
})

export default InnerSidenav