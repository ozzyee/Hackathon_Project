/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Main from "./routes";
import Logo from "../src/images/Hack-O-Lantern.png";

function App() {
   return (
      <div className="page-wrapper">
         <div className="logo-holder">
            <a href="/">
               <img className="logo" src={Logo} />
            </a>
         </div>
         <Main />
      </div>
   );
}

export default App;
