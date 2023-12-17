import React from "react";

const NavButton = ({ href, title, textSize, iconClass, isExternal }) => {
  return (
    <a
      href={href}
      style={{ cursor: "pointer" }}
      data-toggle="tooltip"
      title={title}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={textSize}
    >
      {/* <i className={iconClass}></i> {title} */}
      <i className={iconClass}></i>
    </a>
  );
}

export default NavButton;
