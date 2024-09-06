import { createRoot } from "react-dom";

import Pet from "./Pet";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="susu" animal="Cat" breed="mixed" />
      <Pet name="hunhun" animal="Cat" breed="mixed" />
      <Pet name="jiangjiang" animal="Cat" breed="mixed" />
    </div>
  );
}

var container = document.getElementById("root");
var root = createRoot(container);
root.render(<App />);
