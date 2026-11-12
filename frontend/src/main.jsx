import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import JobContext from "./context/JobContext.jsx";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </JobContext>
  </StrictMode>
);
