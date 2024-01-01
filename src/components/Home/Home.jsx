import React, { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner2 from "../HeroBanner/HeroBanner2";
import projects from "../Projects/listOfProject";
import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import TechUsed from "../TechUsed/TechUsed";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import businessBackground from "../Helper/images/laptop.jpg";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

   
  const HeroBannerText = (
    <div className="col" id="heroBanner">
    <h1>TRANSFORM</h1>
    <div id="heroValuesContainer">
      <h2 className="heroValues"> your Ideas Into Exceptional Web Experiences</h2>
    </div>
    <button className="butn">
    Get In Touch to Learn More{" "}
                    </button>
  </div>
  )

  return (
    <>
      <HeroBanner2 image={businessBackground} heroBannerText={HeroBannerText}/>

      <AboutMe />

      <TechUsed />

      <div
        className="myProjects"
        id="myProjects"
      >
        <div className="container">
          <h1>White Label Websites</h1>
          <Nav tabs className="mb-3">
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
                <p>Mobile-First</p>
              </NavLink>
            </NavItem>
          </Nav>
          {projects.map((project) => (
            <ProjectWithTabs
              project={project}
              activeTab={activeTab}
              key={project.id}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
