import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { SidebarProvider } from "./context/SidebarContext.jsx";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
);
