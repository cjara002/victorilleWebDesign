import React from "react";
import NavButton from "./NavButton";
import urls from "../Helper/Urls";
import Colors from "../../Colors";
// import { Link } from "react-router-dom";

const navItems = [
    //TODOCARLOS: Update URLs on the href
  { href: urls.github, title: "Facebook", iconClass: "fab fa-facebook", isExternal: true },
  { href: urls.linkedin, title: "Yelp", iconClass: "fab fa-yelp", isExternal: true },
  { href: urls.linkedin, title: "Instagram", iconClass: "fab fa-instagram", isExternal: true },
  { href: "/", title: "Home", iconClass: "fas fa-home", isExternal: false },
  { href: urls.about, title: "About Me", iconClass: "fas fa-laptop", isExternal: false },
  { href: urls.myProjects, title: "Web/Mobile App", iconClass: "fas fa-briefcase", isExternal: false },
  { href: urls.formBorder, title: "Let's Connect", iconClass: "fas fa-envelope-open-text", isExternal: false },
];




const NavBar = () => {
  return (
    <nav id="navOverEverything" style={{ backgroundColor: Colors.darkBlue }}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              {navItems.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <NavButton
                    href={item.href}
                    title={item.title}
                    textSize="textNav"
                    iconClass={item.iconClass}
                    isExternal={item.isExternal}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-9">
            <ul className="navButton">
              {navItems.slice(3).map((item) => (
                <li key={item.title}>
                  <NavButton
                    href={item.href}
                    textSize="textNav"
                    text={item.title}
                    iconClass={item.iconClass}
                    isExternal={item.isExternal}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;