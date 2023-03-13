import React, { useState } from "react";

let name = "Parker";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const greeting = (name: string) => {
    if (name) {
      return <span>Welcome, {name}</span>;
    } else {
      return <span>Welcome</span>;
    }
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav>
      <div className="mobileBttnContainer">
        <button className="mobileMenuBttn" onClick={handleMobileMenu}>
          <span className="material-symbols-outlined mobileMenuIcon">menu</span>
        </button>
      </div>
      {mobileMenu ? (
        <div className="mobileMenu">
          <ul className="nav_tabs">
            <li>
              <a href="#">
                <h4>City Scores</h4>
              </a>
            </li>
            <li>{greeting(name)}</li>
            <li>
              <a href="#">Places</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Recent Searches</a>
            </li>
          </ul>
          <ul className="nav_welcome">
            <div className="language">
              <li>
                <button>EN</button>
              </li>
              <li>
                <button>FR</button>
              </li>
            </div>
          </ul>
        </div>
      ) : null}
      <div className="deskMenu">
        <ul className="nav_tabs">
          <li>
            <a href="#">
              <h4>City Scores</h4>
            </a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Recent Searches</a>
          </li>
        </ul>
        <ul className="nav_welcome">
          <li>{greeting(name)}</li>
          <div className="language">
            <li>
              <button>EN</button>
            </li>
            <li>
              <button>FR</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
