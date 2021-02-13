import React, { memo } from 'react'

const ProgressBar = ({scrollTop, scrollHeight}) => { 
  // console.log
  const heightPercentage =
    Math.round(((scrollTop / scrollHeight) * 100 + Number.EPSILON) * 100) / 100;  
  return (
    <div className={"progress-bar"} style={{ height: `${heightPercentage}%` }}>
      <div className={"progress-bar__inner"}></div>
      <div className={"progress-bar__fixed-background"}></div>
      <div className={"bars-container"}>
        <div className={"progress-bar__edge-1 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-1 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-2 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-2 progress-bar__edge"}></div>
        {/* <div className={"progress-bar__edge-3 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-3 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-4 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-4 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-4 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-4 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-3 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-3 progress-bar__edge"}></div> */}
        <div className={"progress-bar__edge-2 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-2 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-1 progress-bar__edge"}></div>
        <div className={"progress-bar__edge-1 progress-bar__edge"}></div>
      </div>
    </div>
  );}



export default memo(ProgressBar)
// export default ProgressBar