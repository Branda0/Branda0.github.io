import "./Project.scss";
import img from "../assets/img/deliveroo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  return (
    <div className="project">
      <div className="project__card">
        <div className="project__details">
          <h4 className="project__title">Titre Project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt sint earum, esse, quia
            digniss
          </p>
        </div>
        <div className="buttons-container">
          <button className="button button_card button_card--first">
            <FontAwesomeIcon icon="arrow-up-right-from-square" /> <span>Démo</span>
          </button>
          <button className="button button_card">
            <FontAwesomeIcon icon="code" /> <span>Code</span>
          </button>
        </div>
      </div>
      <div className="project__img">
        <img src={require("../assets/img/deliveroo2.png")} alt="" />
      </div>
    </div>
  );
};

export default Project;
