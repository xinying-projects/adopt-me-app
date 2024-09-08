import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

var container = document.getElementById("root");
var root = createRoot(container);
root.render(<App />);
