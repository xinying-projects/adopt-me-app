import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

var container = document.getElementById("root");
var root = createRoot(container);
root.render(<App />);
