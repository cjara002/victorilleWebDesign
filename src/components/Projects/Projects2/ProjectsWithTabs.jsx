import React from "react";
import Tab from "./Tab";
import { TabContent } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectsWithTabs.css";

const ProjectsWithTabs = (props) => {
  return (
    <>
      <TabContent activeTab={props.activeTab}>
      <Tab project={props.project}/>
      </TabContent>
    </>
  );
};

export default ProjectsWithTabs;
