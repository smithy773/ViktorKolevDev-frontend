import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-left gap-1 w-[6.352rem]">
        <NavLink className="underline-hover" to="/blog">
          📑 Blog
        </NavLink>
        <NavLink className="underline-hover" to="/projects">
          ⚙️ Projects
        </NavLink>
        <NavLink className="underline-hover" to="/portfolio">
          🪪 Portfolio
        </NavLink>
        <NavLink className="underline-hover" to="/about">
          🐻 About Me
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
