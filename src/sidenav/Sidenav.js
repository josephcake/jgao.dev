import React from 'react'

const Sidenav = ({theme}) =>{
  return (
    <div
      className={
        theme ? `bg-dark fixed__sidenav` : `bg-light fixed__sidenav`
      }
    >
      {/* <div className={"logo"}>
        <h1>高</h1>
      </div> */}
      <div className={"about sideText"}>
        <h3>JG</h3>
      </div>
    </div>
  );
}
export default Sidenav