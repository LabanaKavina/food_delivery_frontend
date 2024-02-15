import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuForm } from "./menuForm";
import { addItem, deleteItem } from "../../items/itemsActions";
import MenuTable from "./menuTable";
import Model from "../../UI/model";

const Menu = () => {
  const restaurant = useSelector((state) => state.user.restaurant);
  const items = useSelector((state) => state.items.items);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();

  const onCancel = () => {
    setShowAddItemForm(!showAddItemForm);
  };
  const onDelete = (itemId) => {
    setShowDeleteModel(!showDeleteModel);
    setDeleteItemId(itemId);
  };
  const onCancelDelete = () => {
    setShowDeleteModel(!showDeleteModel);
    setDeleteItemId(null);
  };

  const onConfirmDelete = () => {
    if (deleteItemId) {
      dispatch(deleteItem(deleteItemId))
      setShowDeleteModel(!showDeleteModel)
    }
  };

  const onSaveItem = (item) => {
    dispatch(addItem({ ...item, hotel_id: restaurant.id }));
    setShowAddItemForm(!showAddItemForm);
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
          <MenuTable items={items} onDelete={onDelete} />
        </div>
        {showDeleteModel && (
          <Model
            cancelText="Cancel"
            confirmText="Yes !"
            message="Are you sure you want to delete this Item?"
            onCancel={onCancelDelete}
            onConfirm={onConfirmDelete}
          />
        )}
        {showAddItemForm && (
          <MenuForm onCancel={onCancel} onSaveItem={onSaveItem} />
        )}
      </div>
    </>
  );
};

export default Menu;
