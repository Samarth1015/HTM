import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseProvider } from "./context/Firebase.jsx";
import Footer from "./component/footer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <App />
    <Footer></Footer>
  </FirebaseProvider>
);
