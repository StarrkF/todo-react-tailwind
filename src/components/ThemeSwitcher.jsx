import { useEffect, useRef, useState } from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark');
  const htmlTag = useRef(document.documentElement);

  useEffect(() => {
    theme ?  htmlTag.current.classList.add('dark') : htmlTag.current.classList.remove('dark');
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ToggleSwitch modelValue={theme} onUpdate={setTheme} color="theme" label="Change Theme" onChange={changeTheme} />
  );
}

export default ThemeSwitcher;
