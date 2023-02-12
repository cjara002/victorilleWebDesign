import j from "../Helper/jPhoto.PNG";
import tennis from "../Helper/tennisHomePage.PNG";
import urls  from "../Helper/Urls";
import images from "../Helper/Images";

let Project = [
          {
            id: 0,
            name: " J's Mobile Detailing",
            image: j,
            description:
              "Get detailing services for your car at your finger tips.",
            stack: "React, HTML, CSS, React Hooks",
            project: urls.jsMobileDeatiling,
            code: urls.jsMobileDeatilingGithub,
            video: null,
            type: "web",
          },
          // {
          //   id: 1,
          //   name: "Cleaning.Unique",
          //   image: "https://bit.ly/2VOgVbG",
          //   description:
          //     "A website were an AirBnB host can find  a reliable, local cleaner.",
          //   stack: "React, Redux, HTML, CSS, C#, SQL",
          //   project: null,
          //   code: "https://github.com/cjara002/AirBnB.Unique",
          //   video: null,
          //   type: "web",
          // },
          {
            id: 1,
            name: "Task Tracker",
            image: images.taskTracker,
            description:
              "Keep track of your tasks for the day. You're one task away from greatness.",
            stack: "React, HTML, CSS",
            project: urls.taskTracker,
            code: urls.taskTrackerGithub,
            video: urls.taskTrackerVideoPlaylist,
            type: "web",
          },
          // {
          //   id: 3,
          //   name: "Imperio",
          //   image: "https://bit.ly/3amXZpW",
          //   description:
          //     "A LMS that helps entrepreneurs with advice, insight and prowerful guidance.",
          //   stack: "React, HTML, CSS, C#, SQL",
          //   project: null,
          //   code: null,
          //   video:
          //     "https://www.youtube.com/watch?v=nuJpoidFZRg&list=PLvzQZBo6Tz-s0wj61cuZW_ijhAAl--ir4",
          //   type: "web",
          // },
          {
            id: 3,
            name: "Topsin Maxed",
            image: tennis,
            description:
              "Enable tennis players to keep track of important stats such as matches won, lost, hours played, etc.",
            stack: "React Native, CSS, AWS",
            project: urls.topspinMaxed,
            code: urls.topspinMaxedGithub,
            video:
              null,
            type: "mobile",
          },

]

export default Project;