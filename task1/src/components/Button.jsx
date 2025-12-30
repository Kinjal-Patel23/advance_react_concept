import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Button = () => {
  const { bgColor, setBgColor } = useContext(ThemeContext);

  const handleThemeBtn = () => {
    setBgColor(bgColor === "#124D83" ? "#108A4F" : "#124D83");
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center transition-colors duration-500"
        style={{ backgroundColor: bgColor }}
      >
        <div className="toggle-container">
          <div className="toggle-wrap">
            <input
              type="checkbox"
              onClick={handleThemeBtn}
              className="relative w-16 h-8 bg-gray-300 rounded-full appearance-none cursor-pointer 
                         transition-colors duration-300
                         checked:bg-green-500
                         before:content-[''] before:absolute before:top-1 before:left-1
                         before:w-6 before:h-6 before:bg-white before:rounded-full
                         before:transition-transform before:duration-300
                         checked:before:translate-x-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
