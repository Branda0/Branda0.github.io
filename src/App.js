import "./App.scss";
import { useEffect, useState, useRef } from "react";

//Font Awesome icons imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

//Header Icons
import logoGB from "./assets/img/logo.png";
import { ReactComponent as LogoSite } from "./assets/img/logo.png";
import { ReactComponent as LogoContact } from "./assets/img/envelope.svg";
import { ReactComponent as LogoGithub } from "./assets/img/github.svg";

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

import Project from "./components/Project";

library.add(faCode, faArrowUpRightFromSquare);

function App() {
  const heroRef = useRef();
  const heroOberverOptions = { root: null, rootMargin: "-50px" };

  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    console.log("TEST");
    const heroObserver = new IntersectionObserver((entries, heroObserver) => {
      entries.forEach((entry, index) => {
        console.log(entry.isIntersecting);
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
            <a className="nav__icon nav__icon--contact" href="mailto:g.brandao.da.cunha@gmail.com">
              <LogoContact className="logo" />
            </a>
            <a className="nav__icon nav__icon--github" href="https://github.com/Branda0" target="_blank">
              <LogoGithub className="logo" />
            </a>

            {/* <LogoMongoDB /> */}
            {/* <img className="contact_" src={logoContact} alt="email link" /> */}

            <button className="button nav__button">
              {/* Mon CV */}
              <span className="text">Mon CV</span>
            </button>
          </nav>
        </div>
      </section>

      <section className="hero" ref={heroRef}>
        <div className="container">
          <h2 className="hero__name">Gabriel Brandao</h2>
          <p className="hero__dev">Développeur FullStack</p>
          {/* <p className="hero__text">
            Diplomé d'<strong>Ingénieur</strong> en <strong> calcul scientifique </strong> /
            <strong> mécanique numérique</strong> et désirant m'orienter vers une carrière dans le
            <strong> développement web</strong>, j'ai suivis une formation intensive auprès du centre
            <strong> Le Reacteur</strong>.
          </p> */}
        </div>
      </section>

      <section className="about">
        <div className="container about__wrapper">
          <h4>01. À propos</h4>
          <p className="about__text">
            Diplomé d'<strong>Ingénieur</strong> en <strong> calcul scientifique </strong> /
            <strong> mécanique numérique</strong> et désirant m'orienter vers le
            <strong> développement web</strong>, j'ai alors suivis une formation intensive de développement de
            <strong> site Web</strong> et d'<strong>application Mobile </strong> auprès du centre
            <strong> Le Reacteur</strong>.
          </p>
          <p className="about__text">
            Je travaille avec <strong>Javascript</strong>, <strong>HTML</strong>,<strong> CSS </strong>et plus
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

            <div className="mern mern--react">
              <LogoReact className="mern__logo mern__logo--react" />
              <span>React</span>
            </div>

            <div className="mern mern--node">
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

            <div className="tools tools--sass">
              <LogoSass className="tools__logo tools__logo--sass" />
              <span>Sass</span>
            </div>

            <div className="tools tools--heroku">
              <LogoHeroku className="tools__logo tools__logo--heroku" />
              <span>Heroku</span>
            </div>

            <div className="tools tools--netlify">
              <LogoNetlify className="tools__logo tools__logo--netlify" />
              <span>Netlify</span>
            </div>

            <div className="tools tools--postman">
              <LogoPostman className="tools__logo tools__logo--postman" />
              <span>Postman</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container projects__wrapper">
          <h4 className="projects__title">02. Portfolio</h4>
          <Project />
          <Project />
        </div>
      </section>
    </div>
  );
}

export default App;
