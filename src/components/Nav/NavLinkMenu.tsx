import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-left gap-1 w-[6.352rem]">
        <NavLink className="navbar-link" to="/blog">
          📑 Blog
        </NavLink>
        <NavLink className="navbar-link" to="/projects">
          ⚙️ Projects
        </NavLink>
        <NavLink className="navbar-link" to="/portfolio">
          🪪 Portfolio
        </NavLink>
        <NavLink className="navbar-link" to="/about">
          🐻 About Me
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
