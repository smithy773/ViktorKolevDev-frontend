import { useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) {
      document.documentElement.setAttribute("data-theme", localStorage.theme);
      return localStorage.theme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
      return "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.theme = "light";
      return "light";
    }
  });

  const [showMenu, setShowMenu] = useState(false);

  const themeSelect = (selectedTheme: string) => {
    if (selectedTheme !== theme) {
      setTheme(selectedTheme);
      localStorage.theme = selectedTheme;
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
    setShowMenu(false);

    console.log(
      `Current data-theme: ${document.documentElement.getAttribute(
        "data-theme",
      )}`,
    );
  };

  return (
    <div className="w-full">
      {showMenu ? (
        <menu className="mb-4 flex flex-col gap-2 transition-all w-20 mx-auto">
          <li
            className="bg-[#eee0bb] text-stone border .underline-hover hover:cursor-pointer"
            onClick={() => themeSelect("light")}
          >
            Light
          </li>
          <li
            className="bg-stone border text-[#eee0bb] underline-hover hover:cursor-pointer"
            onClick={() => themeSelect("dark")}
          >
            Dark
          </li>
          <li
            className="bg-black border text-green-500 underline-hover hover:cursor-pointer"
            onClick={() => themeSelect("leet")}
          >
            1337
          </li>
        </menu>
      ) : (
        ""
      )}
      <button
        className="cursor-pointer underline-hover"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "Close" : `Theme`}
      </button>
    </div>
  );
}

export default ThemeSelector;
