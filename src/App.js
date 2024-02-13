import { Navigate, createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/login/login";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  {path: "/login", element: <Login />}
]);

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
};
export default App;
