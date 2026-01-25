import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div>
      <div className="flex flex-col items-left">
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
