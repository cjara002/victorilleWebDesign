import React, { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner2 from "../HeroBanner/HeroBanner2";
import NavBar from "../NavBar/NavBar";
import Project from "../Projects/listOfProject";
import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import TechUsed from "../TechUsed/TechUsed";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavBar />

      <HeroBanner2 />

      <AboutMe />

     <TechUsed />
     
      <div
        className="myProjects"
        id="myProjects"
        style={{
          backgroundImage: `url(https://bit.ly/2yJf9Ba})`,
        }}
      >
        <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <p>Web</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Mobile
              </NavLink>
            </NavItem>
          </Nav>
          {/* container ends here */}
        {/* </div> */}
        {Project.map((project) => (
            <ProjectWithTabs
              project={project}
              activeTab={activeTab}
              key={project.id}
            />
        ))}
        </div>
      </div>
      <ContactForm />
      <footer className="bg-dark">
        <div className="py-4 border-top border-color-light-white">
          <div className="container">
            <div className="text-center">
              <p className="mb-0 text-white opacity9">
                &copy; 2022-
                CJ
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
