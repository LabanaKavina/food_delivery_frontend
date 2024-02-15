export const MenuForm = (props) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-75 flex justify-center items-center">
        <div className="flex flex-col bg-white  h-72  p-6 border border-white border-solid rounded-2xl py-10  text-gray-900 text-2xl">
          <form className="flex flex-col p-2" >
            <div className="text-center -mt-5" >Add Item</div>
            <div className="flex-col flex" >
              <label>
                Name : <input type="text" className="ml-10 pt-1 border-b-2 border-yellow-500"   placeholder="Enter Item Name" />
              </label>
            </div>
            <div className="flex-col flex" >
              <label>
                Category :
                <select className=" ml-2 mt-5 border-b-2 border-yellow-500" >
                  <option>select any one</option>
                  <option>Fast Food</option>
                  <option>South Indian</option>
                  <option>North Indian</option>
                  <option>Chinese</option>
                  <option>Sweet</option>
                  <option>Desert</option>
                </select>
              </label>
            </div>
            <div className="flex-col flex">
              <label>
                Price : <input type="number" className="ml-12 mt-3 border-b-2 border-yellow-500" />
              </label>
            </div>
            <div className="flex justify-around">
              <button type="submit"  className="ml-5 h-10 bg-red-600 mt-6 w-32 text-white text-xl">Submit</button>
              <button type="button" onClick={() => props.onCancel()}  className="ml-5 h-10 bg-red-600 mt-6 w-32 text-white text-xl">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
