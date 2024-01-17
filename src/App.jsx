import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import reactLogo from "./assets/react.svg";

import "./App.css";

function Homepage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loginStatus");
  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" id="react">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {count > 0 && <p id="clickedTip">button has been clicked</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => localStorage.setItem("loginStatus", true)}>
          mock login
        </button>
        <Link to="home">Go to Home</Link>
      </div>
    ),
  },
  {
    path: "home",
    element: <Homepage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
