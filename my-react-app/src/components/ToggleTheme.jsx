import { useState } from "react";
import "../App.css";

function ToggleTheme() {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };

    return (
        <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
            <h1>Theme Toggle App</h1>
            <p>{isDarkTheme ? "Dark Mode" : "Light Mode"}</p>
            <button onClick={toggleTheme}>
                {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );
}

export default ToggleTheme;
