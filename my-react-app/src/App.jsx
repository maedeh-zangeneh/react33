import Counter from "./components/Counter";
import ToggleTheme from "./components/ToggleTheme";
import LikeDislike from "./components/LikeDislike";
import "./App.css";

function App() {
    return (
        <div className="app">
            <ToggleTheme />
            <Counter />
            <LikeDislike />
        </div>
    );
}

export default App;
