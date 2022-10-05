import { ThemeConsumer } from "../contexts/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "light" ? <MdOutlineDarkMode /> : <BsSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
};

export default ToggleTheme;
