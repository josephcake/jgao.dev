import React from 'react';

const WordWrapper = ({theme, str}) => {
  let bg = theme ? 'bg-light':'bg-dark'
  let strArray = str.split("")
  let wordWrapped = strArray.map((s,i)=>{
    return (
      
        <div key={i} className={"title__container"}>
          <h3>{s}</h3>
          <p className={`name__char ${bg}`}></p>
        </div>
      
    );
  })  
  return(
    <>{wordWrapped}</>    
  )
}
export default WordWrapper