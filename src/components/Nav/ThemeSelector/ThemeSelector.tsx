import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div>
      <h3>Theme</h3>
      <select onChange={(event) => setTheme(event.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="1337">1337</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
