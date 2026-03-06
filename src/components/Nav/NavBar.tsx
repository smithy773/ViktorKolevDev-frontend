import { NavLink } from "react-router";
import NavLinkMenu from "./NavLinkMenu";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

function NavBar() {
  return (
    <section className="navbar-section">
      <nav className="navbar-container nav-border items-center my-2">
        <div className="">
          <NavLink className="title-link transition-all" to="/">
            Viktor Kolev
          </NavLink>
        </div>
        <NavLinkMenu />
        <div className="text-center">
          <NavLink className="underline-hover" to="/contact">
            💬 Contact me
          </NavLink>
        </div>
        <div className="themecont lg:mt-auto ml-auto text-center">
          <ThemeSelector />
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
