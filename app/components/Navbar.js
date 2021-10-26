import React from "react";
import { FaDna } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item-not-bootstrap">
          <a
            href="#"
            className="nav-link-not-bootstrap"
          >
            <FaDna className="fa-primary" />
            <span className="link-text fa-secondary">
              DNA
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
