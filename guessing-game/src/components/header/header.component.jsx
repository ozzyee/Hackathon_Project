import React from "react";
import "./header.style.css";

function Header({ title }) {
   return (
      <>
         <div className="header-wrapper">
            <h1 className="title">{title}</h1>
         </div>
      </>
   );
}

export default Header;
