import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App className="h-full" />
		<Footer className="absolute bottom-0" />
	</React.StrictMode>
);

