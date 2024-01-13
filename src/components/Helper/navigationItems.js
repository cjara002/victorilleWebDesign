import urls from "../Helper/Urls";

const navItems = [
    //TODOCARLOS: Update URLs on the href
  { id: 0,
     href: urls.github,
     title: "Facebook",
     iconClass: "fab fa-facebook",
     isExternal: true },
  { id: 1,
     href: urls.linkedin,
     title: "Yelp",
     iconClass: "fab fa-yelp",
     isExternal: true },
  { id: 2,
     href: urls.linkedin,
     title: "Instagram",
     iconClass: "fab fa-instagram",
     isExternal: true },
  { id: 3,
     href: "/",
     title: "Home",
     iconClass: "fas fa-home",
  },
  { id: 4,
     href: urls.about,
     title: "Work With Us",
     iconClass: "fas fa-laptop",
  },
  { id: 5,
     href: urls.myProjects,
     title: "Services",
     iconClass: "fas fa-briefcase",
  },
];

export default navItems;