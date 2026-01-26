import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left gap-1">
        <NavLink to="/blog">📑 Blog</NavLink>
        <NavLink to="/projects">⚙️ Projects</NavLink>
        <NavLink to="/portfolio">🪪 Portfolio</NavLink>
        <NavLink to="/about">🐻 About Me</NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
