import React from 'react'
import mewgrounds from '../../media/mewgrounds/mewgrounds_rotated.jpg'
import charizard from '../../media/mewgrounds/charizard.png'
import pokemon_stat_overall from '../../media/mewgrounds/pokemon_stat_overall.png'
import pokemon_level_up from '../../media/mewgrounds/pokemon_level_up.jpg'

const Mewgrounds = () =>{
  return (
    <div className={"project-wrapper"}>
      <div className={"project-hero project-item"}>
        <img
          className={"project-wrapper__img"}
          srcSet={mewgrounds}
          alt={"mewgrounds"}
        />
      </div>

      <div className={"project-item mid-section_dual"}>
        <div className={"project-info-container"}>
          <label className={"project-label"}>Title</label>
          <div className={"project-name"}>Forever I shall Rise</div>
          <label className={"project-label"}>Purpose</label>

          <div className={"project-purpose"}>
            To showcase some skills, or improve a service.
          </div>
        </div>
        <div className={"project-info-container"}>
          <label className={"project-label"}>Details</label>

          <div className={"project-details"}>
            Lorem ipsum bacon fish burger tomatoes and everything nice.
          </div>
        </div>
      </div>

      <div className={"project-item mid-section_dual"}>
        <div className={""}>
          <img className={"project-img"} srcSet={charizard} alt={"charizard"} />
        </div>
        <div className={"project-text-container"}>
          <p className={"project-p"}>Pokemon Name</p>
          <p className={"project-p"}>Image</p>
          <p className={"project-p"}>Pokedex number</p>
          <p className={"project-p"}>Primary & Secondary types</p>
        </div>
      </div>

      <div className={"project-item mid-section expand"}>
        <div className={""}>
          <img
            className={""}
            srcSet={pokemon_level_up}
            alt={"pokemon_level_up"}
          />
        </div>
        <div className={"project-text-container"}>
          <p className={"project-p"}>Some details about the above image</p>
        </div>
      </div>
      <div className={"project-item mid-section expand"}>
        <div className={""}>
          <img
            className={""}
            srcSet={pokemon_stat_overall}
            alt={"pokemon_stat_overall"}
          />
        </div>
        <div className={"project-text-container"}>
          <p className={"project-p"}>Some details about the above image</p>
        </div>
      </div>
    </div>
  );
}

export default Mewgrounds