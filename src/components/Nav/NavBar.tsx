import { NavLink } from "react-router";
import NavLinkMenu from "./NavLinkMenu";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

function NavBar() {
  return (
    <nav className="">
      <div className="w-36 h-full flex flex-col items-center nav-border">
        <div>
          <NavLink
            className="hover:text-highlight font-medium transition-all text-2xl"
            to="/"
          >
            Viktor Kolev
          </NavLink>
        </div>
        <NavLinkMenu />
        <div className="text-center">
          <NavLink className="navbar-link" to="/contact">
            💬 Contact me
          </NavLink>
        </div>
        <div className="mt-auto text-center">
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
