import React, {memo} from 'react'
// import Bar from './Bar'

const ProgressBar = ({scrollTop, scrollHeight}) => {

  const heightPercentage = Math.round((((scrollTop/scrollHeight)*100) + Number.EPSILON)*100)/100
  // console.log(heightPercentage)

  return (
    <div className={"progress-bar"} scrollTop={scrollTop} scrollHeight={scrollHeight} style={{height:`${heightPercentage}%`}}>
    </div>
    
)}

function compare(prevProp, nextProp) {
  if(prevProp.scrollTop < 0 || prevProp == undefined){
    return true
  }
  if (prevProp.scrollTop == nextProp.scrollTop) {
    console.log(prevProp.scrollTop, nextProp.scrollTop);
    return false;
  }
  return true;
}


// export default memo(ProgressBar, compare)
export default ProgressBar