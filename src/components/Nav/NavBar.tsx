import { NavLink } from "react-router";
import NavLinkMenu from "./NavLinkMenu";

function NavBar() {
  return (
    <nav className="w-36 h-full flex flex-col items-center nav-border">
      <div>
        <NavLink to="/">
          <h3 className="text-2xl">Viktor Kolev</h3>
        </NavLink>
      </div>
      <NavLinkMenu />
      <div className="mt-auto text-center">
        <NavLink to="/contact">💬 Contact me</NavLink>
      </div>
      <div className="text-center">
        <h1>THEME</h1>
      </div>
    </nav>
  );
}

export default NavBar;
