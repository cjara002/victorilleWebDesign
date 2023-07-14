import React from "react";
import HeroBanner2 from "../../HeroBanner/HeroBanner2";
import { useParams } from 'react-router-dom';
import Project from "../listOfProject";
import ProblemAndApproach from "./ProblemAndApproach";
import ButtonGroup from "./ButtonGroup"

const ProjectDetails = ({props}) => {
    const { id } = useParams();
    const project = Project.find((p) => p.id === parseInt(id));

    const projectName = project?.name;
    const projectNames = Array(4).fill(projectName);

        const HeroBannerText2 = (
            <div className="col" id="heroBanner">
            <h1 className="projectBannerTitle">
          {projectNames.map((name, index) => (
            <span key={index} className="projectBannerTitle">
              {name}
            </span>
          ))}
        </h1>
          </div>
          )

    return(
        <>
        <HeroBanner2 image={project.imageForDetails} heroBannerText={HeroBannerText2}/>
        <ProblemAndApproach goal={project?.goal} problem={ project?.problem} approach={project?.approach}/>
        <ButtonGroup project={project.project} code={project.code} video={project.video}/>
        </>
    )
}

export default ProjectDetails;