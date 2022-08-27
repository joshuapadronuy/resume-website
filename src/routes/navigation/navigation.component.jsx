import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="NavigationContainer">
        <Link to="/">joshuapadron-uy</Link>
        <Link to="/my-projects">My Projects</Link>
        <Link to="/about-me">About Me</Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
