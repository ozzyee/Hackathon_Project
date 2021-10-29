import React from "react";
import "./style.css";

function Header({ title }) {
   console.log(title);
   return (
      <>
         <div className="header-wrapper">
            <h1>{title}</h1>
         </div>
      </>
   );
}

export default Header;
