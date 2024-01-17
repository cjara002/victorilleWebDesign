import {React, useState, useEffect} from "react";
import NavButton from "./NavButton";
import Colors from "../../Colors";
import Logo from "../Helper/images/victorvilleWebInnovationsLogo.png"
import navItems from "../Helper/navigationItems";
import { HashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import Hamburger from "../Helper/images/hamburgerWhite.png"
import Close from "../Helper/images/close.png";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkMobile);
  
    // Initialize isMobile on mount
    checkMobile();
  
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    console.log("onUpdateActiveLink:", value)
    setActiveLink(value);
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '15px',
      top: '15px',
      backgroundImage: `url(${menuOpen ? Close : Hamburger})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 100
    }
  }

  return (
    <nav id="navOverEverything" style={{ backgroundColor: Colors.darkBlue }} className={scrolled ? "scrolled" : ""}>
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
            <ul className={isMobile? "d-none" : "navButton"}>
              {navItems.slice(3).map((item) => (
                <li key={item.id}>
                  <NavButton
                    href={item.href}
                    text={item.title}
                    iconClass={item.iconClass}
                    activeLink={activeLink === item.title ? 'active navbar-link' : 'navbar-link'}
                    onUpdateActiveLink={onUpdateActiveLink}
                  />
                </li>
              ))}
                <HashLink to='#contactBorder'>
                <button className="butn vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </ul>
          {isMobile && (
            <Menu styles={styles}  onStateChange={handleStateChange}>
              {navItems.slice(3).map((item) => (
                <a  className="menu-item" href={item.href} id={item.id}>{item.title}</a>

               ))}
            <HashLink to='#contactBorder'>
                <button className="butn vvd"><span>Let’s Connect</span></button>
            </HashLink>
            </Menu>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;