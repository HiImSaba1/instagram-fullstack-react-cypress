import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import FirebaseContext  from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);

// reportWebVitals();
