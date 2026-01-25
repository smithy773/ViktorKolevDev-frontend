import TitleButton from "../TitleButton/TitleButton";
import NavLinkMenu from "./NavLinkMenu";

function NavBar() {
  return (
    <nav className="w-fill flex flex-col items-center">
      <div>
        <TitleButton />
      </div>
      <NavLinkMenu />
    </nav>
  );
}

export default NavBar;
