import { useState } from "react";

export const MenuForm = (props) => {
  const [itemData, setItemData] = useState({
    name: "",
    category: "",
    price: 0,
  });

  const onChangeItems = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    props.onSaveItem(itemData);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-75 flex justify-center items-center">
        <div className="flex flex-col bg-white  h-72  p-6 border border-white border-solid rounded-2xl py-10  text-gray-900 text-2xl">
          <form className="flex flex-col p-2" onSubmit={(e) => addItem(e)}>
            <div className="text-center -mt-5">Add Item</div>
            <div className="flex-col flex">
              <label>
                Name :{" "}
                <input
                  type="text"
                  className="ml-10 pt-1 border-b-2 border-yellow-500"
                  placeholder="Enter Item Name"
                  value={itemData.name}
                  name="name"
                  onChange={(e) => onChangeItems(e)}
                />
              </label>
            </div>
            <div className="flex-col flex">
              <label>
                Category :
                <select
                  className=" ml-2 mt-5 border-b-2 border-yellow-500"
                  onChange={(e) => onChangeItems(e)}
                  name="category"
                  value={itemData.category}
                >
                  <option value="">Select--</option>
                  <option value="Fast Food">Fast Food</option>
                  <option value="South Indian">South Indian</option>
                  <option value="North Indian">North Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Sweet">Sweet</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </label>
            </div>
            <div className="flex-col flex">
              <label>
                Price :{" "}
                <input
                  type="number"
                  className="ml-12 mt-3 border-b-2 border-yellow-500"
                  placeholder="Enter item Price"
                  value={itemData.price}
                  min={0}
                  name="price"
                  onChange={(e) => onChangeItems(e)}
                />
              </label>
            </div>
            <div className="flex justify-around">
              <button
                type="submit"
                className="ml-5 h-10 bg-red-600 mt-6 w-32 text-white text-xl"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => props.onCancel()}
                className="ml-5 h-10 bg-red-600 mt-6 w-32 text-white text-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
