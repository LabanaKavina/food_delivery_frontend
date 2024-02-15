import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

  const[userData,setUserData]=useState({
    name:'',
    password:'',
    mobileno:'',
    res_name:'',
    address:''
})
const [error , setError] = useState('')
const validateUserData = () => {
  let properName = /^[a-zA-Z ]{2,30}$/;
  if (!properName.test(userData.name)) {
    return setError({ ...error, name: "Invalid Username" });
  }
  let properPassword = /^[a-zA-Z0-9]{6,10}$/;
  if (!properPassword.test(userData.password)) {
    return setError({
      ...error,
      password: "password should contain letters between 6 to 10",
    });
  }
  let properNumber = /^[0-9]{10}$/;
  if (!properNumber.test(userData.mobileno)) {
    return setError({
      ...error,
      mobileno: "mobile number should contain 10 numbers",
    });
  }
  let properRestName = /^[a-zA-Z0-9]{4,10}$/;
  if (!properRestName.test(userData.res_name)) {
    return setError({
      ...error,
      res_name : "restaurant name should contain letters between 4 to 10",
    });
  }
  let properAddress = /^[a-zA-Z0-9]{4,10}$/;
  if (!properAddress.test(userData.address)) {
    return setError({
      ...error,
      address : "address should contain letters between 4 to 10",
    });
  }
  return true
};
    const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-yellow-400">
        <div className="bg-white h-auto w-1/2 p-6 rounded-lg shadow-lg">
          <h1 className="text-center text-2xl">Signup...</h1>
          <form className="flex flex-col p-2" >
            <div className="flex-col flex  ">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="pt-1 border-b-2 border-yellow-500"
              />
            </div>
            <div className="flex-col flex pt-3 ">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="pt-1 border-b-2 border-yellow-500"
              />
            </div>
            <div className="flex-col flex pt-3 ">
              <label>Contact No.</label>
              <input
                type="number"
                placeholder="Enter your Contact Number"
                className="pt-1 border-b-2 border-yellow-500"
              />
            </div>
            <div className="flex-col flex pt-3 ">
              <label>Restaurant Name</label>
              <input
                type="text"
                placeholder="Enter your Restaurant Name"
                className="pt-1 border-b-2 border-yellow-500"
              />
            </div>
            <div className="flex-col flex pt-3 ">
              <label>Address</label>
              <textarea
                placeholder="Enter Your Restaurant Address"
                className="pt-1 border-b-2 border-yellow-500"
              />
              
            </div>
            <div className="flex">
                <button type="submit"  className="ml-5 h-10 bg-red-600 mt-6 w-72 text-white text-xl" >Submit</button>
                <button type="button"  className="ml-5 h-10 bg-red-600 mt-6 w-72 text-white text-xl" onClick={()=>{navigate('/login')}} >Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
