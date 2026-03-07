import { NavLink } from "react-router";
import NavLinkMenu from "./NavLinkMenu";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import NavLinkMenuMobile from "./NavLinkMenuMobile";

function NavBar() {
  return (
    <section className="navbar-section">
      <nav className="navbar-container nav-border items-center my-2">
        <div>
          <NavLink className="title-link transition-all" to="/">
            <p className="title">Viktor Kolev</p>
            <p className="mobile-title">VK</p>
          </NavLink>
        </div>
        <NavLinkMenuMobile />
        <NavLinkMenu />
        <div className="text-center">
          <NavLink className="underline-hover" to="/contact">
            💬 Contact
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
