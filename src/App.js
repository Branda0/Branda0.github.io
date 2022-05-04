import "./App.scss";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="container header__wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p>Salut</p>
          <nav></nav>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          {/* <p className="hero__hello">Bonjour, je m'appelle</p> */}
          <h2 className="hero__name">Gabriel Brandao</h2>
          <p className="hero__dev">Développeur FullStack</p>
          {/* </div> */}
        </div>
      </div>

      {/* <div className="container"> */}

      <div className="about">
        <div className="container">
          <p className="about__title">
            Diplomé d'Ingénieur en calcul scientifique / mécanique numérique et désirant m'orienter vers les
            métiers du web j'ai suivis une formation intensive auprès du centre Le Reacteur.
          </p>
        </div>
      </div>

      <div className="projects">
        <div className="container">
          <h4 className="projects__title"></h4>
        </div>
      </div>
    </div>
  );
}

export default App;
