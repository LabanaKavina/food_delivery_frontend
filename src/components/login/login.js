import { useState } from "react";
import image from "../../UI/pizza.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  getUser } from "../../user/userActions";
import Model from "../../UI/model";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    password: "",
  });
  const [showSignUpOptionModel, setShowSignUpOptionModel] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateUserData = () => {
    let properName = /^[a-zA-Z ]{2,30}$/;
    if (!properName.test(userName) || userName.trim() === "") {
      return setError({ ...error, name: "Invalid Username" });
    }
    let properPassword = /^[a-zA-Z0-9]{6,10}$/;
    if (!properPassword.test(userPassword) || userPassword.trim() === "") {
      return setError({
        ...error,
        password: "password should contain letters between 6 to 10",
      });
    }
    return true;
  };

  const onCustomerLogin = ()=>{
    localStorage.setItem("role","customer")
    navigate("/register-new")
  }

  const onOwnerLogin = ()=>{
    localStorage.setItem("role","admin")
    navigate("/register-new")
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const isValidUserData = validateUserData();
    if (isValidUserData) {
      const isUserExist = await dispatch(
        getUser({ name: userName, password: userPassword })
      );
      if (!isUserExist) {
        return setError({
          ...error,
          password: "This entered Username or Password is incorrect",
        });
      }
      navigate("/admin");
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
              {error && <span className="text-red-600">{error.name}</span>}
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
              {error && (
                <span className="w-80 text-sm text-red-600">
                  {error.password}
                </span>
              )}
              <button
                type="submit"
                className="ml-5 h-10 bg-red-600 mt-6 w-72 text-white text-xl"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => setShowSignUpOptionModel(!showSignUpOptionModel)}
              className="text-sm left-44 bottom-5 text-blue-600 underline relative"
            >
              Sign Up
            </button>
            {showSignUpOptionModel && (
              <Model
                message="Do You want to sign Up as a.. "
                confirmText="Customer"
                cancelText='Owner'
                onConfirm={onCustomerLogin}
                onCancel={onOwnerLogin}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
