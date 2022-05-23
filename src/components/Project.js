import "./Project.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project, index }) => {
  // console.log(key);
  return (
    <div className={`project ${index % 2 === 1 && "project--right"}`}>
      <div className="project__card">
        <div className="project__infos">
          <h4 className="project__title">{project.title}</h4>
          <p className="project__description">{project.description}</p>
          {project.details.map((detail, index) => {
            return (
              <p className="project__detail" key={index}>
                {detail}
              </p>
            );
          })}
          <div className="project__badges">
            {project.badges.map((badge, index) => {
              return <img className="badge" key={index} src={badge} alt="" />;
            })}
          </div>
        </div>
        {/* <Link></Link> */}
        <div className="buttons-container">
          {project?.demo && (
            <a
              onMouseDown={(event) => event.preventDefault()}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="button button_card button_card--first"
            >
              <FontAwesomeIcon icon="arrow-up-right-from-square" /> <span>Démo</span>
            </a>
          )}
          {project?.code && (
            <a
              onMouseDown={(event) => event.preventDefault()}
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="button button_card"
            >
              <FontAwesomeIcon icon="code" /> <span>Code</span>
            </a>
          )}
        </div>
      </div>
      {/* <div className="project__img"> */}
      <img className="test" src={require(`../assets/img/screenshot/${project.images}`)} alt="" />
      {/* </div> */}
    </div>
  );
};

export default Project;
