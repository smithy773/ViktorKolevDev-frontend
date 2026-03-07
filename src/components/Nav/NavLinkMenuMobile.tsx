import { useState } from "react";
import { NavLink } from "react-router";

function NavLinkMenuMobile() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navLinkMenuMobile-container text-center">
      <button
        className="underline-hover cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "_____" : "Pages"}
      </button>
      {showMenu ? (
        <div className="">
          <div className="pagesMenuCont flex flex-col">
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
      ) : (
        ""
      )}
    </div>
  );
}

export default NavLinkMenuMobile;
