import React, {useState} from 'react';
import useWindowDimensions from "./hooks/useWindowDimensions";
import OrientationOverlay from './components/OrientationOverlay'
import './style/base.scss';
import Sidenav    from './sidenav/Sidenav'
import Landing    from './landing/Landing';
import Project    from './project/Project'
import Modal      from './components/Modal'
import Mewgrounds from './project/poject-wrappers/Mewgrounds'
import Dtd        from './project/poject-wrappers/Dtd'
import AboutMe    from './project/poject-wrappers/AboutMe'
import Sg    from './project/poject-wrappers/Sg'

import dtd_hero_light from './media/dtd/dtd_hero_light.gif'
import dtd_hero_dark  from './media/dtd/dtd_hero_dark.gif'
import m_hero_light   from './media/mewgrounds/m5_hero_light.gif'
import m_hero_dark    from './media/mewgrounds/m5_hero_dark.gif'
import sg_hero_light   from './media/sg/sg_hero.png'
import sg_hero_dark    from './media/sg/sg_hero.png'


function App() {
  const [twilightTheme, sTheme] = useState(false);
  const [displayModal, tModal] = useState(false);
  const [project, setProject] = useState(null);
  const { height, width } = useWindowDimensions();

  // useEffect(() => {    
  //   if(height>width){
  //     setDisplayOrientationOverlay(true)
  //   }
  // }, []);
  const toggleModal = (e) => {
    // console.log(e);
    switch (e) {
      case "mewgrounds":
        setProject(<Mewgrounds twilightTheme={twilightTheme} />);
        break;
      case "dtd":
        setProject(<Dtd />);
        break;
      case "aboutme":
        setProject(<AboutMe />);
        break;
      case "sg":
        setProject(<Sg />);
        break;
      default:
        setTimeout(() => {
          setProject(null);
        }, 700);
    }
    tModal(!displayModal);
  };

  return (
    <div id={"App"} on>
      { height > width?
        <OrientationOverlay/>
        :null
      }
      <Sidenav
        theme={twilightTheme}
        setTheme={sTheme}
        toggleModal={toggleModal}
        displayModal={displayModal}
      />
      <div className={twilightTheme ? `bg-dark App` : `bg-light App`}>
        <Landing theme={twilightTheme} setTheme={sTheme} />
        <div className={"projects"}>
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={1}
            // inView={inView.project}
            first
            theme={twilightTheme}
            heroLight={dtd_hero_light}
            heroDark={dtd_hero_dark}
            subtitle={"Algo Visualizer"}
            title={"Destroy The Duck"}
            prj={"dtd"}
          />
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={2}
            // inView={inView.project}
            theme={twilightTheme}
            heroLight={m_hero_light}
            heroDark={m_hero_dark}
            subtitle={"Pokemon Database"}
            title={"Mewgrounds"}
            prj={"mewgrounds"}
          />
          <Project
            toggleModal={toggleModal}
            displayModal={displayModal}
            prjNum={3}
            // inView={inView.project}
            theme={twilightTheme}
            heroLight={sg_hero_light}
            heroDark={sg_hero_dark}
            subtitle={"SG Fan Page"}
            title={"Studio Ghibli"}
            prj={"sg"}
          />
          <Modal
            theme={twilightTheme}
            displayModal={displayModal}
            toggleModal={toggleModal}
            child={project}
          ></Modal>
        </div>
      </div>
    </div>
  );
}

export default App;