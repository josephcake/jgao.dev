import React, {memo} from 'react'

const InnerSidenav = memo(function InnerSidenav({theme, setTheme, toggleModal, displayModal}){
  // console.log('innerSidenav')
  return (
    <div className={`fixed__sidenav`}>
      <div className={"logo sidenav__item"}>
        <h3>高</h3>
      </div>

      <div className={"about sideText sidenav__item"} onClick={toggleModal}>
        {displayModal?
        <h3>Close</h3>:
        <h3>About Me</h3>
        }
        {/* <h3>résumé</h3> */}
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