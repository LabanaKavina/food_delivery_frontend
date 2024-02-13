import { useState } from "react";
import image from "../../UI/pizza.jpeg";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    password: "",
  });

  const validateUserData = () => {
    let properName = /^[a-zA-Z ]{2,30}$/;
    if (!properName.test(userName)) {
      return setError({ ...error, name: "Invalid Username" });
    }
    let properPassword = /^[a-zA-Z0-9]{6,10}$/;
    if (!properPassword.test(userPassword)) {
      return setError({
        ...error,
        password: "password should contain letters between 6 to 10",
      });
    }
    return true
  };

  const onLogin = (e) => {
    e.preventDefault();
    const isValidUserData = validateUserData()
    if (isValidUserData) {
        
    }
  };
  return (
    <>
      <div className=" h-screen bg-yellow-400">
        <div className="flex justify-center items-center p-20">
          <img src={image} alt="Pizza" className="h-96 w-auto" />
          <div className="h-80 w-auto bg-white relative right-16">
            <form className=" p-10 flex flex-col" onSubmit={(e) => onLogin(e)}>
              <div className="flex-col flex  ">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="pt-1 border-b-2 border-yellow-500"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setError({ ...error, name: "" });
                  }}
                />
              </div>
              {error && <span className="">{error.name}</span>}
              <div className="flex-col flex pt-10 ">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="pt-1 border-b-2 border-yellow-500"
                  value={userPassword}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError({ ...error, password: "" });
                  }}
                />
              </div>
              {error && <span className="w-80 text-sm">{error.password}</span>}
              <button
                type="submit"
                className="h-10 bg-red-600 mt-6 w-72 text-white text-xl"
              >
                Login
              </button>
            </form>
            <NavLink
              to="/register-new"
              className="text-sm left-28 bottom-5 text-blue-600 underline relative"
            >
              Sign up for register{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
