import React, {memo} from 'react'

const Bar = memo(function Bar({key, scrollTop, scrollHeight}) {
  console.log(key)
  console.log('bar')
  return (
    <div className={`bar`} ></div>
  )  
})

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

export default memo(Bar, compare)