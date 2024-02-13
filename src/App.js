import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/login";
import RootLayout from "./components/home/rootLayout";
import { checkLogin,checkAuth } from "./token";
import SignUp from "./components/login/signUp";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login />,loader:checkLogin },
  {path:"/register-new",element:<SignUp />,loader:checkLogin},
  { path: "/admin", element: <RootLayout />, loader: checkAuth,children: [] },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
