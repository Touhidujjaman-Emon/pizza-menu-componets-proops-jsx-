import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>hello react 111</h1>;
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
