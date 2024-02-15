import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser } from "../../user/userActions";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const role = localStorage.getItem("role");
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    mobileno: "",
    res_name: "",
    address: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if (!role) {
      navigate("/login")
    }
  },[])
  const validateUserData = () => {
    let properName = /^[a-zA-Z ]{2,30}$/;
    if (!properName.test(userData.name) || userData.name.trim() === "") {
      return setError({ ...error, name: "Invalid Username" });
    }
    let properPassword = /^[a-zA-Z0-9]{6,10}$/;
    if (
      !properPassword.test(userData.password) ||
      userData.password.trim() === ""
    ) {
      return setError({
        ...error,
        password: "password should contain letters between 6 to 10",
      });
    }
    let properNumber = /^[0-9]{10}$/;
    if (
      !properNumber.test(userData.mobileno) ||
      userData.mobileno.trim() === ""
    ) {
      return setError({
        ...error,
        mobileno: "mobile number should contain 10 numbers",
      });
    }
    let properRestName = /^[a-zA-Z0-9]/;
    if (
      !properRestName.test(userData.res_name) ||
      userData.res_name.trim() === ""
    ) {
      console.log(userData.res_name);
      return setError({
        ...error,
        res_name: "restaurant name should not be blank",
      });
    }
    let properAddress = /^[a-zA-Z0-9]/;
    if (
      !properAddress.test(userData.address) ||
      userData.address.trim() === ""
    ) {
      return setError({
        ...error,
        address: "address shouldnot be Empty or Blank",
      });
    }
    return true;
  };

  const onUserDataChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const onSignUP = async (e) => {
    e.preventDefault();
    const isValidUserData = validateUserData();
    if (isValidUserData) {
      const isUserAdded = await dispatch(addUser(userData));
      if (isUserAdded) {
        navigate("/login");
      }
    }
  };

  const onCancel = () => {
    localStorage.removeItem("role")
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-yellow-400">
        <div className="bg-white h-auto w-1/2 p-6 rounded-lg shadow-lg">
          <h1 className="text-center text-2xl">Signup...</h1>
          <form className="flex flex-col p-2" onSubmit={(e) => onSignUP(e)}>
            <div className="flex-col flex  ">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="pt-1 border-b-2 border-yellow-500"
                name="name"
                onChange={(e) => onUserDataChange(e)}
              />
            </div>
            {error && <span className="text-red-600">{error.name}</span>}
            <div className="flex-col flex pt-3 ">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="pt-1 border-b-2 border-yellow-500"
                name="password"
                onChange={(e) => onUserDataChange(e)}
              />
            </div>
            {error && <span className="text-red-600">{error.password}</span>}
            <div className="flex-col flex pt-3 ">
              <label>Contact No.</label>
              <input
                type="number"
                placeholder="Enter your Contact Number"
                className="pt-1 border-b-2 border-yellow-500"
                name="mobileno"
                onChange={(e) => onUserDataChange(e)}
              />
            </div>
            {error && <span className="text-red-600">{error.mobileno}</span>}
            {role && role === "admin" && (
              <div className="flex-col flex pt-3 ">
                <label>Restaurant Name</label>
                <input
                  type="text"
                  placeholder="Enter your Restaurant Name"
                  className="pt-1 border-b-2 border-yellow-500"
                  name="res_name"
                  onChange={(e) => onUserDataChange(e)}
                />
              </div>
            )}
            {error && <span className="text-red-600">{error.res_name}</span>}

            {role && role === "admin" && (
              <div className="flex-col flex pt-3 ">
                <label>Address</label>
                <textarea
                  placeholder="Enter Your Restaurant Address"
                  className="pt-1 border-b-2 border-yellow-500"
                  name="address"
                  onChange={(e) => onUserDataChange(e)}
                />
              </div>
            )}
            {error && <span className="text-red-600">{error.address}</span>}

            <div className="flex">
              <button
                type="submit"
                className="ml-5 h-10 bg-red-600 mt-6 w-72 text-white text-xl"
              >
                Submit
              </button>
              <button
                type="button"
                className="ml-5 h-10 bg-red-600 mt-6 w-72 text-white text-xl"
                onClick={() => {
                  onCancel();
                }}
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
