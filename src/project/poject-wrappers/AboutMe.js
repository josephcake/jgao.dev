import React, {useState} from 'react'
import MidSection from '../../components/MidSection'
import jgao from '../../media/jgao/jgao.jpg'

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
          <div className={"profile-content"}>
            <img className={"profile-content__img"} src={jgao} />
            <div className={"profile-content__text"}>
              <h1>
                Hi, my name is Joseph Gao. I studied Psychology in college and
                somehow found my passion in tech.
              </h1>
              <h1>
                Some of my hobbies include tennis, video games, and occasional
                workout.
              </h1>
            </div>
          </div>
        ) : null}
        {tab === "exp" ? (
          <div className={"profile-content__column"}>
            <div className={"exp-container"}>
              <h1 className={"exp__header"}>Network Operation Engineer</h1>
              <h4 className={"exp__header"}>
                <a href={"https://rapidsos.com/"} target={"_blank"}>
                  RapidSOS
                </a>
              </h4>
              <h3 className={"exp__summary"}>
                Working with first responders to build the emergency response
                data platform
              </h3>
              <ul className={"exp__ul"}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
            <div className={"exp-container"}>
              <h1 className={"exp__header"}>Frontend Software Engineer</h1>
              <h4 className={"exp__header"}>
                <a href={"https://www.learningeconomy.io/"} target={"_blank"}>
                  Learning Economy
                </a>
              </h4>
              <h3 className={"exp__summary"}>
                A Steward of the Internet of Education
              </h3>
              <ul className={"exp__ul"}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        ) : null}
        {tab === "hello" ? (
          <div className={"profile-content"}>hello</div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutMe