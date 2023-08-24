import Navbar from "../Navbar";
import projectList from "../projects";
import Project from "../ProjectItem";
import Footer from "../Footer";
import "./index.css";

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "SQLite",
  "HTML",
  "CSS",
  "BootStrap",
];

const Main = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "JayanthJalagari_Resume.pdf";
    link.download = "JayanthJalagari_Resume.pdf";
    link.click()
  };
  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <div className="intro_container">
          <h1 className="role">Web developer</h1>
          <p className="about">
            Passionate about learning new technologies and solving challenging
            problems. Self-motivated, willing to put in the time and energy to
            achieve my goals.
          </p>
        </div>

        <div className="bottom_container">
          <p className="projects-heading">My Projects</p>
          <div id="projects" className="projects-list-container">
            {projectList.map((eachProject) => (
              <Project projectDetails={eachProject} key={eachProject.id} />
            ))}
          </div>
          <p className="skills-heading">My Skills</p>
          <div id="skills" className="skills-container">
            {skills.map((each) => (
              <div className="skill-container">{each}</div>
            ))}
          </div>
          <div id="resume" className="btn-container">
            <button className="download-btn" onClick={handleDownload}>
              Download my resume
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Main;
