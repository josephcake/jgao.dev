import React from 'react'
// import ProgressBar from './ProgressBar'
import InnerSidenav from './InnerSidenav'

const Sidenav = ({theme, setTheme, scrollTop, scrollHeight, toggleModal, displayModal}) =>{
  // console.log(scrollHeight)
  return (
    <div
      className={
        theme
          ? `bg-dark fixed__sidenav__container`
          : `bg-light fixed__sidenav__container`
      }
    >
      {/* <ProgressBar scrollTop={scrollTop} scrollHeight={scrollHeight}/> */}

      <InnerSidenav
        theme={theme}
        setTheme={setTheme}
        toggleModal={toggleModal}
        displayModal={displayModal}
      />
    </div>
  );
}
export default Sidenav