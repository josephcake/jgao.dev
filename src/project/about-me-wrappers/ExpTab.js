import React from 'react';
import ExperienceCard from '../../components/ExperienceCard'

const ExpTab = () =>{
  return (
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
  );
}

export default ExpTab