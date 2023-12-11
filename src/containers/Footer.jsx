import React from "react";

const Footer = (maxWidth) => {
  return (
    <footer
      className={`bg-color-blackSpace py-5 text-center text-l text-color-secondary ${maxWidth}`}
    >
      <span>Copyright © 2023</span>
      <p>Hecho por Franklin Huichi</p>
    </footer>
  );
};

export default Footer;
