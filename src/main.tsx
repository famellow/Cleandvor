import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Обработка редиректа из 404.html для GitHub Pages
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  sessionStorage.removeItem("redirect");
  const url = new URL(redirect);
  if (url.searchParams.has("/")) {
    const path = url.searchParams.get("/")?.replace(/~and~/g, "&");
    if (path) {
      window.history.replaceState(null, "", path + url.hash);
    }
  }
}

createRoot(document.getElementById("root")!).render(<App />);
