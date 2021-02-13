import React from 'react'

const Loading = () =>{
  return (
    <div className="spinner-container">
      <div className="revolver">
        <section className="revolver__part"></section>
        <section className="revolver__part"></section>
        <section className="revolver__part"></section>
        <section className="revolver__part"></section>
        <section className="revolver__part"></section>
        <section className="revolver__part"></section>
      </div>
    </div>
  );
}

export default Loading