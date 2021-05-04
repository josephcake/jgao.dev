import React from "react";
import MidSection from "../../components/MidSection";

import sg from "../../media/sg/sg.jpg";
import sg_films from "../../media/sg/sg_films.jpg";
import sg_gallery from "../../media/sg/sg_gallery.jpg";
import sg_map from "../../media/sg/sg_map.png";
import sg_summary from "../../media/sg/sg_summary.jpg";
import sg_vid from "../../media/sg/sg_vid.gif";



const Sg = () => {
  return (
    <div className={"project-wrapper"}>
      <div className={"project-banner"}>
        <h1>Studio Ghibli</h1>
        <h3 className={"project-link"}>
          <a
            href={"http://s-ghibli.herokuapp.com/"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            Goto Project ----->
          </a>
        </h3>
      </div>
      <div className={"project-hero project-item"}>
        <img className={"project-wrapper__img"} srcSet={sg} alt={"sg"} />
      </div>
      <div className={"project-item mid-section_dual"}>
        <div className={"project-info-container"}>
          <label className={"project-label"}>
            A Studio Ghibli Contribution
          </label>
          <div className={"project-name"}>
            A Tribute to all the joy and happiness Studio Ghibli has brought me
            over the years
          </div>
          <label className={"project-label"}>Purpose</label>
          <div className={"project-purpose"}>
            Provide details of Studio Ghibli's events, films, and other works
          </div>
        </div>
      </div>
      <MidSection
        src={sg_films}
        p={["General info,", "Summary,", "Trailer,", "And watch options"]}
        dual={"_dual"}
      />
      <MidSection
        src={sg_summary}
        p={[
          "Inside the SUMMARY's page, you can LIKE, COMMENT, SHARE, and Watch Trailer of the selected film",
        ]}
      />
      <MidSection
        src={sg_gallery}
        p={[
          "Films are chronologically ordered by their release date",
          "Fans can appreciate and / or reminisce the still images of each film",
        ]}
      />
      <MidSection
        src={sg_map}
        p={["A glimps into one of Studio Ghibli's works:", "The Ghibli Museum"]}
        dual={"_dual"}
      />

      <MidSection src={sg_vid} p={["The World of Studio Ghibli"]} />
      <div className={"project-item project-footer-img__totoro"}></div>
    </div>
  );
};

export default Sg;
