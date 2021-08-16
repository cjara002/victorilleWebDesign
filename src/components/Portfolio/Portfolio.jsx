import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner from "../HeroBanner/HeroBanner";
// import TechUsed from "../TechUsed/TechUsed.jsx";
import React, { useState } from "react";
// import Projects from "../Projects/Projects.jsx";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import { Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import Project from "../Projects/listOfProject";

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
      <React.Fragment>
        <nav id="navOverEverything">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <ul>
                  <li>
                    {/* <a
                      href="https://www.carlosjaraportfolio.com/"
                      className="largeTextNav"
                    >
                      {" "}
                      Carlos Jara{" "}
                    </a>
                    <a
                      href="https://www.carlosjaraportfolio.com/"
                      className="smallTextNav"
                    >
                      {" "}
                      CJ{" "}
                    </a> */}
                    <span className="fName text-muted">Carlos</span>
                    <span className="slashBar text-muted">/</span>
                    <span className="lName">Jara</span>
                  </li>
                </ul>
              </div>

              <div className="col-9">
                <ul className="navButton">
                  <li>
                    {" "}
                    <a
                      href="https://www.carlosjaraportfolio.com/"
                      className="largeTextNav"
                    >
                      Home
                    </a>
                    <a
                      href="https://www.carlosjaraportfolio.com/"
                      className="smallTextNav"
                    >
                      <em
                        className="fa-1x mr-2 fas fa-home"
                        style={{ cursor: "pointer" }}
                        data-toggle="tooltip"
                        title="Home"
                      ></em>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#about" className="largeTextNav">
                      About
                    </a>
                    <a href="#about" className="smallTextNav">
                      <em
                        className="fa-1x mr-2 fas fa-laptop"
                        style={{ cursor: "pointer" }}
                        data-toggle="tooltip"
                        title="About Me"
                      ></em>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#techUsed" className="largeTextNav">
                      Technology
                    </a>
                    <a href="#techUsed" className="smallTextNav">
                      <em
                        className="fa-1x mr-2 fas fa-cog"
                        style={{ cursor: "pointer" }}
                        data-toggle="tooltip"
                        title="Technology"
                      ></em>
                    </a>
                  </li> */}
                  <li>
                    <a href="#myProjects" className="largeTextNav">
                      Recent Work
                    </a>
                    <a href="#myProjects" className="smallTextNav">
                      <em
                        className="fa-1x mr-2 fas fa-briefcase"
                        style={{ cursor: "pointer" }}
                        data-toggle="tooltip"
                        title="Recent Work"
                      ></em>
                    </a>
                  </li>
                  <li>
                    <a href="#formBorder" className="largeTextNav">
                      Contact
                    </a>
                    <a href="#formBorder" className="smallTextNav">
                      <em
                        className="fa-1x mr-2 fas fa-envelope-open-text"
                        style={{ cursor: "pointer" }}
                        data-toggle="tooltip"
                        title="Contact Me"
                      ></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <HeroBanner />

        <AboutMe />

        <div
          className="myProjects"
          id="myProjects"
          style={{
            backgroundImage: `url(https://bit.ly/2yJf9Ba})`,
          }}
        >

           <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Web Apps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Mobile First Apps
            </NavLink>
          </NavItem>
        </Nav>
          {Project.map((project) => (
            <ProjectWithTabs project={project} activeTab={activeTab} key={project.id}/>
          ))}
        </div>
        <ContactForm />
      </React.Fragment>
    );
  }
// }

export default Portfolio;

