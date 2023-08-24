import { Link } from "react-router-dom";

import "./index.css";

const Project = (props) => {
  const { projectDetails } = props;
  const { projectName, image, id } = projectDetails;

  const projectStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    minWidth: "320px",
    height: "300px",
  };

  return (
    <Link to={`/projects/${id}`} className="none-textdecoration">
      <div className="project-bg-container" style={projectStyle}>
        <div className="border">
          <h1 className="projectname">{projectName}</h1>
        </div>
      </div>
    </Link>
  );
};
export default Project;
