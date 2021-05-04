import React from 'react';
import jgao from "../../media/jgao/jgao.jpg";


const AboutMeTab = () =>{
  return (
    <div className={"profile-content"}>
      <img className={"profile-content__img"} src={jgao} />
      <div className={"profile-content__text"}>
        <h1>
          Hi, my name is Joseph Gao. I studied Psychology in college and somehow
          found my passion in tech.
        </h1>
        <h1>
          Some of my hobbies include tennis, video games, and occasional
          workout.
        </h1>
      </div>
    </div>
  );
}

export AboutMeTab