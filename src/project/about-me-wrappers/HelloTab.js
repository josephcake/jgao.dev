import React,{useState} from 'react';
import copy from '../../media/jgao/clipboard.svg'

const HelloTab = () =>{
  const [flash, setFlash] = useState(null)
  const copyText = () =>{
    navigator.clipboard.writeText("joseph8p@gmail.com");
    setFlash(1)
    setTimeout(()=>{
      setFlash(null)
    },1000)
  }
  return (
    <div className={"profile-content"}>
      <div className={"hello-container"}>
        <h1 className={"hello__header"}>Hello</h1>
        <h2>Come say hi via</h2>
        <div className={"hello__contacts"}>
          <h2>
            <a
              href={"https://www.linkedin.com/in/jocake/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              LinkedIn
            </a>
          </h2>
          <h2 onClick={copyText}>
            e-mail
            <img
              className={`copy_clipboard ${flash ? "flash" : ""}`}
              src={copy}
              alt={"copy!"}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HelloTab