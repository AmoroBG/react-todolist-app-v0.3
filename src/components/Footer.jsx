import React from "react";

const Footer = ({heading}) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>{heading} &copy; {year}</p>
    </footer>
  );
};

export default Footer;
