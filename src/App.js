import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense, lazy, useEffect, useState, useRef } from "react";

//Header Icons
import logoGB from "./assets/img/logo.png";

//PDF CV import
import cv from "./assets/pdf/CV_Brandao-Gabriel.pdf";

//MERN LOGOS
import { ReactComponent as LogoMongoDB } from "./assets/img/mongodb.svg";
import { ReactComponent as LogoExpress } from "./assets/img/express.svg";
import { ReactComponent as LogoReact } from "./assets/img/react.svg";
import { ReactComponent as LogoNode } from "./assets/img/nodedotjs.svg";

//TOOL LOGOS
import { ReactComponent as LogoNetlify } from "./assets/img/netlify.svg";
import { ReactComponent as LogoHeroku } from "./assets/img/heroku.svg";
import { ReactComponent as LogoSass } from "./assets/img/sass.svg";
import { ReactComponent as LogoPostman } from "./assets/img/postman.svg";
import { ReactComponent as LogoGit } from "./assets/img/git.svg";
import { ReactComponent as LogoVisualStudioCode } from "./assets/img/visualstudiocode.svg";

//Projects details
import projectData from "./assets/data/projects.json";

//Font Awesome icons imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faCode, faArrowUpRightFromSquare, faGithub, faEnvelope);

//Components
// import Project from "./components/Project";
const Project = React.lazy(() => import("./components/Project"));

function App() {
  const heroRef = useRef();
  const heroOberverOptions = { root: null, rootMargin: "-50px" };

  const [isSticked, setIsSticked] = useState(false);

  // Watch leaving of hero section to stick header nav bar
  useEffect(() => {
    const heroObserver = new IntersectionObserver((entries, heroObserver) => {
      entries.forEach((entry, index) => {
        setIsSticked(!entry.isIntersecting);
      });
    }, heroOberverOptions);

    heroObserver.observe(heroRef.current);
  }, [heroRef]);

  return (
    <div className="page">
      <section className={`header ${isSticked && "sticked"}`}>
        <div className="header__wrapper">
          <img className="header__logo" src={logoGB} alt="site logo" />
          <nav className="nav">
            <a
              className="nav__icon nav__icon--contact"
              href="mailto:g.brandao.da.cunha@gmail.com"
              onMouseDown={(event) => event.preventDefault()}
            >
              {/* <LogoContact className="logo" /> */}
              <FontAwesomeIcon icon="envelope" className="logo" />
            </a>
            <a
              className="nav__icon nav__icon--github"
              href="https://github.com/Branda0"
              target="_blank"
              rel="noreferrer"
              onMouseDown={(event) => event.preventDefault()}
            >
              {/* <LogoGithub className="logo" /> */}

              <FontAwesomeIcon icon="fa-brands fa-github" className="logo" />
            </a>
            <a
              className="button nav__button"
              href={cv}
              target="_blank"
              rel="noreferrer"
              onMouseDown={(event) => event.preventDefault()}
            >
              <span className="text">Mon CV</span>
            </a>
          </nav>
        </div>
      </section>

      <section className="hero" ref={heroRef}>
        <div className="container">
          <h2 className="hero__name">Gabriel Brandao</h2>
          <p className="hero__dev">Développeur FullStack</p>
        </div>
      </section>

      <section className="about">
        <div className="container about__wrapper">
          <h3>01. À propos</h3>
          <p className="about__text">
            Diplômé d'<strong>Ingénieur</strong> en <strong> calcul scientifique </strong> /
            <strong> mécanique numérique</strong> et désirant m'orienter vers le
            <strong> développement web</strong>, j'ai alors suivi une formation intensive de développement de
            <strong> site Web</strong> et d'<strong>application Mobile </strong> auprès du centre
            <strong> Le Reacteur</strong>.
          </p>
          <p className="about__text">
            Je travaille avec <strong>JavaScript</strong>, <strong>HTML</strong>,<strong> CSS </strong>et plus
            particulièrement <strong>React</strong> et <strong>NodeJS</strong> avec la stack
            <strong> MERN</strong>
          </p>

          <div className="about__technologies">
            <div className="mern">
              <LogoMongoDB className="mern__logo mern__logo--mongodb" />
              <span>MongoDB</span>
            </div>

            <div className="mern">
              <LogoExpress className="mern__logo mern__logo--express" />
              <span>Express</span>
            </div>

            <div className="mern">
              <LogoReact className="mern__logo mern__logo--react" />
              <span>React</span>
            </div>

            <div className="mern">
              <LogoNode className="mern__logo mern__logo--node" />
              <span>NodeJs</span>
            </div>
          </div>
          <p className="about__text">et utilise les outils suivants :</p>
          <div className="about__technologies">
            <div className="tools">
              <LogoGit className="tools__logo tools__logo--git" />
              <span>Git</span>
            </div>

            <div className="tools">
              <LogoVisualStudioCode className="tools__logo tools__logo--visual" />
              <span>Visual Studio Code</span>
            </div>

            <div className="tools">
              <LogoSass className="tools__logo tools__logo--sass" />
              <span>Sass</span>
            </div>

            <div className="tools">
              <LogoPostman className="tools__logo tools__logo--postman" />
              <span>Postman</span>
            </div>

            <div className="tools">
              <LogoHeroku className="tools__logo tools__logo--heroku" />
              <span>Heroku</span>
            </div>

            <div className="tools">
              <LogoNetlify className="tools__logo tools__logo--netlify" />
              <span>Netlify</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container projects__wrapper">
          <h3 className="projects__title">02. Portfolio</h3>
          {projectData.map((project, index) => {
            return (
              // <Suspense fallback={<div>Loading ...</div>}>
              <Project key={index} project={project} index={index} />
              // </Suspense>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
