import "./App.css";

import Home from "./home/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useFirebase } from "./context/Firebase";
import Neetpage from "./NeetPage/neetPage";
import Jeepage from "./jeePage/jeePage";
import News from "./newspage/newsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/neet",
    element: <Neetpage></Neetpage>,
  },
  {
    path: "/jee",
    element: <Jeepage></Jeepage>,
  },
  {
    path: "/explore",
    element: <News></News>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
