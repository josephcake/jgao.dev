import React, {useState} from 'react'
import ExperienceCard from '../../components/ExperienceCard'
import AboutMeTab from '../about-me-wrappers/AboutMeTab'
import ExpTab from '../about-me-wrappers/ExpTab'
import Tabs from '../about-me-wrappers/Tabs'


const AboutMe = () => {

  const [tab, setTab] = useState('jgao')
  const handleTab = (e)=>{
    setTab(e)
  } 
  return (
    <div className={"jgao"}>
      <div className={"profile-wrapper"}>
        <Tabs handleTab={handleTab} tab={tab}/>
        {tab === "jgao" ? (
          <AboutMeTab/>
        ) : tab === "exp" ? (
          <ExpTab/>
        ) : tab === "hello" ? (
          <div className={"profile-content"}>hello</div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutMe