import React from 'react';


const Tabs = ({tab,handleTab}) =>{
  return (
    <div className={"tab-container"}>
      <div
        className={`tab ${tab === "jgao" ? "selected" : ""}`}
        onClick={() => handleTab("jgao")}
      >
        About me
      </div>
      <div
        className={`tab ${tab === "exp" ? "selected" : ""}`}
        onClick={() => handleTab("exp")}
      >
        Experience
      </div>
      <div
        className={`tab ${tab === "hello" ? "selected" : ""}`}
        onClick={() => handleTab("hello")}
      >
        Say hi
      </div>
    </div>
  );
}

export default Tabs