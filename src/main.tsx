import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import { AuthContext } from "./contexts/AuthContext.tsx";
import { ListingContext } from "./contexts/ListingContext.tsx";


// Ponto de partida da aplicação.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContext>
      <ListingContext>
        <App />
      </ListingContext>
    </AuthContext>
  </StrictMode>
);
