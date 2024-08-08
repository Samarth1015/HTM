import "./App.css";

import Home from "./component/home/Home";

import { useFirebase } from "./context/Firebase";

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
