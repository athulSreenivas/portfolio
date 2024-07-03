import React from "react";
import { Link } from "react-router-dom";
import routes from "../../data/routes";
import SideToggle from "./SideToggle";

const Header = () => {
  return (
    <header id="header">
      <h1 className="index-link">
        <Link to="/">Athul Sreenivas</Link>
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <SideToggle />
    </header>
  );
};

export default Header;
