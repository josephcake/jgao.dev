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

const Mewgrounds = ({twilightTheme}) =>{
  console.log({twilightTheme});
  return (
    <div className={"project-wrapper"}>
      <div className={`project-banner ${twilightTheme ? "bg-dark":"bg-light"}`}>
        <h1>Mewgrounds</h1>
        <h3 className={"project-link"}>Goto Project -----></h3>
      </div>
      <div className={"project-hero project-item"}>
        <img
          className={"project-wrapper__img"}
          srcSet={mewgrounds}
          alt={"mewgrounds"}
        />
      </div>

      <div className={"project-item mid-section_dual"}>
        <div className={"project-info-container"}>
          <label className={"project-label"}>A Pokemon Database</label>
          <div className={"project-name"}>
            Meant for all Pokemon enthusiast!
          </div>
          <label className={"project-label"}>Purpose</label>
          <div className={"project-purpose"}>
            A graphical interfase that allows a trainer to check on stats,
            items, and all Pokemon related info.
          </div>
        </div>
      </div>

      <MidSection
        src={pokemon_group}
        p={[
          "Pokemons are chronologically ordered by their Pokedex Number",
          "A trainer can also filter and search by NAME or TYPES",
        ]}
      />
      <MidSection
        src={charizard}
        p={[
          "Each card shows:",
          "Pokemon's NAME",
          "Pokedex Number",
          "Primary & Secondary Types",
          "and the Pokemon itself",
          "With the Primary Types' color wrapping the border",
        ]}
        dual={"_dual"}
      />

      <MidSection
        src={pokemon_detail}
        p={[
          "Once you're inside a Pokemon card, you'll get to see much more infomation",
          "Such as the Front and Back appearances, as well as its SHINY form",
          "But most noticeably of all, its BASE STATS",
        ]}
        expand
      />
      <MidSection
        src={pokemon_level_up}
        p={[
          "As you scroll down you'll see this section of the page shows the Pokemon's Level-Up Moveset",
        ]}
        // expand
      />
      <MidSection
        src={pokemon_stat_overall}
        p={[
          "The STATS page gives you a brief overview of the BASE STATS of each Pokemon",
          "Trainers can use this page to quickly find the Pokemons with desired BASE STATS",
        ]}
        // expand
      />
      <MidSection
        src={pokemon_team}
        p={[
          "The TEAMS page shows the average BASE STATS of a party",
          "Traditional Pokemon rule: Max of 6 Pokemons per party",
          "Trainers can mix & match to build their dream team",
        ]}
        dual={"_dual"}
        reverse
      />

      <div className={"project-item project-footer-img__pokeball"}></div>
    </div>
  );
}

export default Mewgrounds