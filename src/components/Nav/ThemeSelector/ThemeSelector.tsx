import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);

  const themeSelect = (theme: string) => {
    setTheme(theme);
    setShowMenu(false);
    console.log(theme);
  };

  return (
    <div className="w-full">
      {showMenu ? (
        <menu className="mb-4 flex flex-col gap-2 transition-all w-20 mx-auto">
          <li
            className="bg-lines border projectItem-link hover:cursor-pointer"
            onClick={() => themeSelect("light")}
          >
            Light
          </li>
          <li
            className="bg-stone border text-lines projectItem-link hover:cursor-pointer"
            onClick={() => themeSelect("dark")}
          >
            Dark
          </li>
          <li
            className="bg-black border text-green-500 projectItem-link hover:cursor-pointer"
            onClick={() => themeSelect("1337")}
          >
            1337
          </li>
        </menu>
      ) : (
        ""
      )}
      <button
        className="cursor-pointer navbar-link"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "Close" : "Theme"}
      </button>
    </div>
  );
}

export default ThemeSelector;
