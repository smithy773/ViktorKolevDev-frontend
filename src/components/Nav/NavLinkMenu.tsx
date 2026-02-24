import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-left gap-1 w-28">
        <NavLink className="underline-hover" to="/blog">
          📑 Blog
        </NavLink>
        <NavLink className="underline-hover" to="/projects">
          ⚙️ Projects
        </NavLink>
        <a
          className="underline-hover"
          href="https://js-portfolio-78b1a.web.app/"
          target="_blank"
        >
          🪪 Portfolio
        </a>
        <NavLink className="underline-hover" to="/about">
          🐻 About Me
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
