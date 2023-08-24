import React, { useState } from "react";
import { useParams } from "react-router-dom";

import projectList from "../projects";
import Footer from "../Footer";
import "./index.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectDetails = (props) => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const project = projectList.find((project) => project.id === projectId);
  const {
    projectName,
    description,
    points,
    technologies,
    githubrepolink,
    sliderimages,
    demolink,
  } = project;
  const [index, setIndex] = useState(0);

  const onClickleftArrow = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const onClickrightArrow = () => {
    if (index < sliderimages.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className="about-project-main-container">
        <div className="product-indetail-container">
          <h1 className="product-indetail-name">{projectName}</h1>
          <hr className="line" />
          <p className="product-indetail-description">{description}</p>

          <div className="product-indetail-description-sliderimage">
            <div className="product-indetail-description-points">
              {points.map((eachpoint, index) => (
                <li key={index}>{eachpoint}</li>
              ))}

              <div className="project-technologies-container">
                {technologies.map((eachTechnology) => (
                  <div className="technologies-used-container">
                    {eachTechnology}
                  </div>
                ))}
              </div>
              <div className="project-code-demo-buttons">
                {githubrepolink && (
                  <button className="source-code-container">
                    <a
                      className="trying"
                      href={githubrepolink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See Source Code
                    </a>
                  </button>
                )}

                {demolink && (
                  <button className="demo-code-container">
                    <a
                      className="trying"
                      href={demolink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See Demo
                    </a>
                  </button>
                )}
              </div>
            </div>
            <div className="react-slider-images-container">
              <div className="react-slider-image-properties">
                <button onClick={onClickleftArrow} className="left-arrow">
                  {" "}
                  <AiOutlineArrowLeft className="slick-icon" />{" "}
                </button>
                <img
                  className="slider-image"
                  src={sliderimages[index]}
                  alt="Loading"
                />
                <button onClick={onClickrightArrow} className="right-arrow">
                  {" "}
                  <AiOutlineArrowRight className="slick-icon" />{" "}
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
