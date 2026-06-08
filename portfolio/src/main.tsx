import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/global.css";
import { applyTheme, getPreferredTheme } from "./utils/theme";

applyTheme(getPreferredTheme());

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
