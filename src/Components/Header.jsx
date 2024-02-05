import React from "react";
import { Link } from "react-router-dom";

let HeaderRoute = [
  { label: "Home", path: "/", childRoute: [] },
  {
    label: "Register",
    path: "/register",
    childRoute: [{ label: "Child Register", path: " " }],
  },
  { label: "Table", path: "/table", childRoute: [] },
  { label: "Counter", path: "/counter", childRoute: [] },
  { label: "Carousel", path: "/carousel", childRoute: [] },
  { label: "Search", path: "/search", childRoute: [] },
];

const Header = () => {
  return (
    <div className="header-style">
      <ul>
        {HeaderRoute.map((navItem) => (
          
            <li key={navItem.label}>
              <Link to={navItem.path}>{navItem.label}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

