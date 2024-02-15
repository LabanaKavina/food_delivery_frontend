import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/login";
import RootLayout from "./components/home/rootLayout";
import { checkLogin,checkAuth } from "./token";
import SignUp from "./components/login/signUp";
import Menu from "./components/menu/menu";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login />,loader:checkLogin },
  {path:"/register-new",element:<SignUp />,loader:checkLogin},
  { path: "/admin", element: <RootLayout />,loader: checkAuth,children: [
    {path : '/admin/menu' , element : <Menu /> }
  ] },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
