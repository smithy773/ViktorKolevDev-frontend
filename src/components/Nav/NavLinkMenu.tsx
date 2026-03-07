import { NavLink } from "react-router";

function NavLinkMenu() {
  return (
    <div className="navlinkmenu-container">
      <div className="navlinkmenu-links">
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
          🐻 About
        </NavLink>
      </div>
    </div>
  );
}

export default NavLinkMenu;
