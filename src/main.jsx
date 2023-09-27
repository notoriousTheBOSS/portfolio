import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContextWrapper from "../src/context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContextWrapper>
        <App />
    </ThemeContextWrapper>
);
