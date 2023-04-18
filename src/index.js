import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.min.css";
import App from "./App";
import AutoScrollTop from "./components/AutoScrollTop";
import { FavouritesProvider } from "./contexts/FavouritesContext";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <FavouritesProvider>
      <Router>
        <AutoScrollTop />
        <App />
      </Router>
    </FavouritesProvider>
  </AuthProvider>
);
