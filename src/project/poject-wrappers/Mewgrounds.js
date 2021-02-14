import React from 'react'
import MidSection from '../../components/MidSection'

import mewgrounds from '../../media/mewgrounds/mewgrounds_rotated.jpg'
import charizard from '../../media/mewgrounds/charizard.png'
import pokemon_stat_overall from '../../media/mewgrounds/pokemon_stat_overall.png'
import pokemon_detail from '../../media/mewgrounds/pokemon_detail.jpg'
import pokemon_group from '../../media/mewgrounds/pokemon_group.png'
import pokeball from '../../media/mewgrounds/pokeball.png'
import pokemon_level_up from '../../media/mewgrounds/pokemon_level_up.jpg'
import pokemon_team from '../../media/mewgrounds/pokemon_team.jpg'

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
      <MidSection
        src={pokemon_group}
        p={[
          "Pokemon Name",
          "Image",
          "Pokedex Number",
          "Primary & Secondary types",
        ]}
      />
      <MidSection
        src={charizard}
        p={[
          "Pokemon Name",
          "Image",
          "Pokedex Number",
          "Primary & Secondary types",
        ]}
        dual={'_dual'}
      />

      <MidSection
        src={pokemon_detail}
        p={["Some details about the above image"]}
        expand
      />
      <MidSection
        src={pokemon_level_up}
        p={["Some details about the above image"]}
        // expand
      />
      <MidSection
        src={pokemon_stat_overall}
        p={["Some details about the above image"]}
        // expand
      />
      <MidSection
        src={pokemon_team}
        p={[
          "Details about the side pic",
          "Max of 6",          
        ]}
        dual={'_dual'}
        reverse
      />
      
      <div className={"project-item"}>
        <img className={"project-img"} srcSet={pokeball} alt={"pokeball"} />
        <img className={"project-img"} srcSet={pokeball} alt={"pokeball"} />
      </div>
    </div>
  );
}

export default Mewgrounds