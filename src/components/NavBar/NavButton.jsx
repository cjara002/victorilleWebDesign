import React from "react";

  const NavButton = ({ href, text, iconClass, isExternal }) => {
  console.log("NavButton:", text)
  return (
    <a
      href={href}
      style={{ cursor: "pointer" }}
      data-toggle="tooltip"
      // title={text}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      <i className={iconClass}></i> {text}
      {/* <p className="d-none">{text}</p> */}

    </a>
  );
}

export default NavButton;
