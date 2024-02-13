import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
