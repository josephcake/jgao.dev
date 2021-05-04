import React from 'react';

const ExperienceCard = ({title, companyLink, company, timeEmployed, summary, tasks}) =>{
  const allTasks = tasks.map(t=>(
    <li>{t}</li>
  ))
  return (
    <div className={"exp-container"}>
      <h1 className={"exp__header"}>{title}</h1>
      <h4 className={"exp__subheader"}>
        <a href={companyLink} target={"_blank"} rel={"noreferrer"}>
          {company}
        </a>
        <span className={"exp__subheader__year"}>{timeEmployed}</span>
      </h4>
      <h3 className={"exp__summary"}>{summary}</h3>
      <ul className={"exp__ul"}>{allTasks}</ul>
    </div>
  );
}
export default ExperienceCard