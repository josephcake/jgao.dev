import React, {useRef, useEffect} from 'react'


export const Canvas = (props) => {
  const canvasRef = useRef(null)  

  useEffect(()=>{    
    const innerWidth  = window.innerWidth;    
    const innerHeight = window.innerHeight;
    const canvas      = canvasRef.current  ;
    const c           = canvas.getContext("2d"); //c === context;

    c.canvas.width  = innerWidth;
    c.canvas.height = innerHeight;      
    const stars = []
    let TWO_PI = Math.PI*2
    
    let radius = 0.5;
    let centerX = innerWidth / 2;
    let centerY = innerHeight / 2;
    let focalLength = 100;
    let starRadius = null;
    let starX = null;
    let starY = null;  
    let starX_dir = 0;
    let starY_dir = 0;    
    let mouse = {}
    let numStar = 2000;

    window.addEventListener('mousemove', function(e){
      mouse.x = e.x
      mouse.y = e.y
      if(mouse.x < centerX){
        starX_dir += 5
      }else{
        starX_dir += -5;
      }
      if (mouse.y < centerY) {
        starY_dir += 5;
      } else {
        starY_dir += -5;
      }
    })
    

    function Star(x,y,z){
      this.x=x;
      this.y=y;
      this.z=z;
      this.radius = radius;
      this.color = "white";            

      this.update = function(){
        starX = (this.x-centerX) * (focalLength / this.z)
        starX += centerX;
        starY = (this.y - centerY) * (focalLength / this.z);
        starY += centerY;
        starRadius = radius * (focalLength / this.z)
        starX += starX_dir;
        starY += starY_dir;
        this.z += -.5
        if(this.z <=0){
          this.z = parseInt(innerWidth)
        }

        this.draw()
      }
      this.draw = function(){
        c.beginPath()
        c.arc(starX, starY, starRadius, TWO_PI, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }
      
    }

    for (let i = 0; i < numStar; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let z = Math.random() * innerWidth;
      let s = new Star(x, y, z);
      stars.push(s)
    }

    function animate(){
      requestAnimationFrame(animate);
      c.fillStyle = "#000"
      c.fillRect(0,0,innerWidth, innerHeight)
      for(let i in stars){
        stars[i].update()
      }
    }
    animate()
    
  },[])
  
  return(    
      <canvas id="canvas" className={`canvas__`+props.theme} ref={canvasRef} {...props}/>      
  );
}

