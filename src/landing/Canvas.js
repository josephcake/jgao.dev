import React, {useRef, useEffect} from 'react'

export const Canvas = (props) => {
  const canvasRef = useRef(null)
  useEffect(()=>{
    const canvas = canvasRef.current
    const c = canvas.getContext("2d") //c === context
    c.fillStyle = '#000000'
    c.fillRect(0,0,c.canvas.width, c.canvas.height)
  },[])
  
  return(    
      <canvas id="canvas" ref={canvasRef} {...props}/>      
  );
}

