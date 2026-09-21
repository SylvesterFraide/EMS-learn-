import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from './Context/useContext.jsx';
import { SidebarProvider } from './Context/SidebarContext.jsx'; // <-- add this

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </UserContextProvider>
  </StrictMode>
);