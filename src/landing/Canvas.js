import React, {useRef, useEffect} from 'react'

export const Canvas = (props) => {
  const canvasRef = useRef(null)  
  let dotColor  
  if(props.theme){
    dotColor = 'white'
  }else{
    dotColor = 'black'
  }

  useEffect(()=>{
    const innerWidth  = window.innerWidth;
    const innerHeight = window.innerHeight;
    const canvas      = canvasRef.current  ;
    const c           = canvas.getContext("2d"); //c === context;

    c.canvas.width  = innerWidth;
    c.canvas.height = innerHeight;    

    function Dot(x,y, dx, dy, radius){
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);        
        c.strokeStyle = dotColor;
        c.stroke();        
      }
      this.update = function(){
        if(this.x + this.radius >innerWidth || this.x - this.radius <0){
          this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw()
      }
    }
    
    const dotArray = [];    
    for(let i=0; i<200; i++){
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let dx = (Math.random() - 0.5) * 2;
      let dy = (Math.random() - 0.5) * 2;
      let radius = Math.random() * 2;
      let dot = new Dot(x, y, dx, dy, radius);
      dotArray.push(dot)
    }

    function animate(){
      requestAnimationFrame(animate)
      c.clearRect(0,0,innerWidth, innerHeight)      
      for(let i=0; i<dotArray.length; i++){
        dotArray[i].update()
      }
    }
    animate()
  },[props.theme, dotColor])
  
  return(    
      <canvas id="canvas" className={props.theme?`bg-dark`:`bg-light`} ref={canvasRef} {...props}/>      
  );
}

