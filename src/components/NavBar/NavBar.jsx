import React from "react";
import NavButton from "./NavButton";
import urls from "../Helper/Urls";

const NavBar = () => {
  return (
    <nav id="navOverEverything">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <NavButton
                  href={urls.github}
                  title="GitHub"
                  textSize="largeTextNav"
                  iconClass="fab fa-github"
                />
                <NavButton
                  href={urls.github}
                  title="GitHub"
                  textSize="smallTextNav"
                  iconClass="fab fa-github"
                />
              </li>
              <li>
                <NavButton
                  href={urls.linkedin}
                  title="LinkedIn"
                  textSize="largeTextNav"
                  iconClass="fab fa-linkedin"
                />
                <NavButton
                  href={urls.linkedin}
                  title="LinkedIn"
                  textSize="smallTextNav"
                  iconClass="fab fa-linkedin"
                />
              </li>
            </ul>
          </div>

          <div className="col-9">
            <ul className="navButton">
              <li>
                {" "}
                <NavButton
                  href={urls.portfolio}
                  textSize="largeTextNav"
                  text="Home"
                />
                <NavButton
                  href={urls.portfolio}
                  title="Home"
                  textSize="smallTextNav"
                  iconClass= "fa-1x mr-2 fas fa-home"
                />
              </li>
              <li>
                {" "}
                <NavButton
                  href={urls.about}
                  textSize="largeTextNav"
                  text="About Me"
                />
                <NavButton
                  href={urls.about}
                  title="About Me"
                  textSize="smallTextNav"
                  iconClass= "fa-1x mr-2 fas fa-laptop"
                />
              </li>
              <li>
                <NavButton
                  href={urls.myProjects}
                  textSize="largeTextNav"
                  text="Web/Mobile App"
                />
                <NavButton
                  href={urls.myProjects}
                  title="Web/Mobile App"
                  textSize="smallTextNav"
                  iconClass= "fa-1x mr-2 fas fa-briefcase"
                />
              </li>
              <li>
                <NavButton
                  href={urls.formBorder}
                  textSize="largeTextNav"
                  text="Let's Connect"
                />
                <NavButton
                  href={urls.formBorder}
                  title="Let's Connect"
                  textSize="smallTextNav"
                  iconClass= "fa-1x mr-2 fas fa-envelope-open-text"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
