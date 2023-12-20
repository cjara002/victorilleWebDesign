import j from "../Helper/jPhoto.PNG";
import tennis from "../Helper/tennisHomePage.PNG";
import urls  from "../Helper/Urls";
import WIP from "../Helper/images/wip.png";

let Project = [
          {
            id: 0,
            name: "Car Wash & Detailing",
            image: j,
            imageLocation:"jPhoto.PNG",
            // imageForDetails: "https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Elevate your car wash and detailing business with our premier white label website solution! Tailored to showcase your unique services, this user-friendly and visually appealing platform is designed to captivate and engage your clientele.",
            // stack: "React, HTML, CSS, React Hooks",
            project: urls.jsMobileDeatiling,
            code: urls.jsMobileDeatilingGithub,
            video: null,
            type: "web",
            isActive: true
          },
          {
            id: 2,
            name: "..Work in progress",
            image: WIP,
            imageLocation:"jPhoto.PNG",
            imageForDetails: "https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "I want to make mobile first applications, come back later to see my work.",
            stack: "React, HTML, CSS, React Hooks",
            // project: urls.jsMobileDeatiling,
            code: urls.jsMobileDeatilingGithub,
            video: null,
            type: "mobile",
            isActive: false
          }
]

export default Project;