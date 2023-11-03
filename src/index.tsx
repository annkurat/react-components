import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/styles/index.css";
import "src/assets/styles/globals.css";
import App from "src/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
