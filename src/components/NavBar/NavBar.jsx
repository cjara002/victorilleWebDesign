import {React, useState, useEffect} from "react";
import NavButton from "./NavButton";
import Colors from "../../Colors";
import Logo from "../Helper/images/victorvilleWebInnovationsLogo.png"
import navItems from "../Helper/navigationItems";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  return (
    <nav id="navOverEverything" style={{ backgroundColor: Colors.darkBlue }}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            {/* <ul>
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
            </ul> */}
             <div
                      className="navbar-header navbar-header-custom"
                    >
                      <a
                        href="/"
                        className="navbar-brand xs-width-145px d-inline-block mr-lg-0"
                      >
                        <img
                          src={Logo}
                          alt="Victorville Web Innovations Logo"
                          style={{ maxHeight: "100%", height: "50px", borderRadius: "20px" }}
                        />
                      </a>
                    </div>
          </div>
          <div className="col-9">
            <ul className="navButton">
              {navItems.slice(3).map((item) => (
                <li key={item.id}>
                  <NavButton
                    href={item.href}
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