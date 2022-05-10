import "./Project.scss";
import img from "../assets/img/deliveroo.png";

const Project = () => {
  return (
    <div className="project">
      <div className="card">
        <div className="card__details">
          <h4 className="card__title">Titre Project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt sint earum, esse, quia
            digniss
          </p>
        </div>
        <div className="card__img">
          <img src={require("../assets/img/deliveroo2.png")} alt="" />
          {/* <img src={img} alt="" /> */}
        </div>
      </div>
      <button className="button button_card">Démo</button>
      <button className="button button_card">&lt; Code /&gt;</button>
      <span>CARD</span>
    </div>
  );
};

export default Project;
