import React, {useState} from 'react'
import MidSection from '../../components/MidSection'
import jgao from '../../media/jgao/jgao.jpg'
import ExperienceCard from '../../components/ExperienceCard'

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
            <ExperienceCard
              title={"Network Operation Engineer"}
              companyLink={"https://rapidsos.com/"}
              company={"RapidSOS"}
              timeEmployed={"(Apr 2020 - Present)"}
              summary={
                "Working with first responders to build the emergency response data platform"
              }
              tasks={[
                "Monitor, maintain and improve the architectures of current cloud services",
                "Assist the engineering team to design and build new services with deployment, availability, and scalability in mind",
                "Integrate and centralize multiple monitoring tools to rapidly identify the root of cause and reduce redundancy",
              ]}
            />
            <ExperienceCard
              title={"Frontend Software Engineer"}
              companyLink={"https://www.learningeconomy.io/"}
              company={"Learning Economy"}
              timeEmployed={"(Aug 2019 - Apr 2020)"}
              summary={"A Steward of the Internet of Education"}
              tasks={[
                "Conversion of legacy JavaScript layout over to modern React structure",
                "Developing interactive UI and reusable components with React while maintaining brand consistency throughout the design",
                "Work closely with the design team to create mockups, prototypes, and final-build",
              ]}
            />            
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