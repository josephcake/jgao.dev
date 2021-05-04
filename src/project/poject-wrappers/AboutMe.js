import React, {useState} from 'react'
import ExperienceCard from '../../components/ExperienceCard'
import AboutMeTab from '../about-me-wrappers/AboutMeTab'
import ExpTab from '../about-me-wrappers/ExpTab'

const AboutMe = () => {

  const [tab, setTab] = useState('jgao')
  const handleTab = (e)=>{
    setTab(e)
  } 
  return (
    <div className={"jgao"}>
      <div className={"profile-wrapper"}>
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
        {tab === "jgao" ? (
          <AboutMeTab/>
        ) : null}
        {tab === "exp" ? (
          <ExpTab/>
        ) : null}
        {tab === "hello" ? (
          <div className={"profile-content"}>hello</div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutMe