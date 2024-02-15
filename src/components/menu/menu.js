import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuForm } from "./menuForm";
import { addItem } from "../../items/itemsActions";
import MenuTable from "./menuTable";

const Menu = () => {
  const restaurant = useSelector((state) => state.user.restaurant);
  const items = useSelector((state) => state.items.items);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const dispatch = useDispatch();
  const hideForm = () => {
    setShowAddItemForm(!showAddItemForm);
  };

  const onSaveItem = (item) => {
    dispatch(addItem({ ...item, hotel_id: restaurant.id }));
  };

  return (
    <>
      <div className="flex flex-col h-screen border border-solid border-black w-full">
        <div className="flex justify-end mr-16 mt-6">
          <button
            onClick={() => setShowAddItemForm(!showAddItemForm)}
            className="border border-solid border-yellow-500 h-12 w-24 "
          >
            Add Item
          </button>
        </div>
        <div className="overflow-x-auto">
          <MenuTable items={items} />
        </div>
        {showAddItemForm && (
          <MenuForm onCancel={hideForm} onSaveItem={onSaveItem} />
        )}
      </div>
    </>
  );
};

export default Menu;
