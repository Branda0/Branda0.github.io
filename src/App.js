import "./App.scss";
import logo from "./assets/img/logo.png";
import logoGithub from "./assets/img/github.svg";

function App() {
  return (
    <div className="page">
      <section className="header">
        <div className="header__wrapper">
          {/* <div className="header_logo"> */}
          <img className="header__logo" src={logo} alt="" />

          <nav className="nav">
            <p>Salut</p>
            <img className="nav__github" src={logoGithub} alt="" />
            <button className="button nav__button">
              <span className="text"> Mon CV</span>
            </button>
          </nav>
        </div>
      </section>

      <section className="hero">
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
          <p className="about__text">
            Diplomé d'<strong>Ingénieur</strong> en <strong> calcul scientifique </strong> /
            <strong> mécanique numérique</strong> et désirant m'orienter vers une carrière dans le
            <strong> développement web</strong>, j'ai suivis une formation intensive auprès du centre
            <strong> Le Reacteur</strong>. J'utilise <strong>Javascript</strong>, <strong>HTML</strong>,
            <strong> CSS </strong>et plus particulièrement <strong>React</strong> et <strong>NodeJS</strong>{" "}
            avec la stack <strong>MERN</strong>.
          </p>
          <div className="about__mern">
            <img className="mern__mongodb" src="" alt="" />
            <img className="mern__express" src="" alt="" />
            <img className="mern__react" src="" alt="" />
            <img className="mern__nodejs" src="" alt="" />
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h4 className="projects__title"></h4>
        </div>
      </section>
    </div>
  );
}

export default App;
