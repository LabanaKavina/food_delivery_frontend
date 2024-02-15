import { useDispatch, useSelector } from "react-redux";

export const MenuTable = () => {
  const items = useSelector((state) => state.items.items);
  return (
    <>
      <div className="flex flex-col h-screen border border-solid border-black w-full">
        <div className="flex justify-end mr-16 mt-6">
          <button className="border border-solid border-yellow-500 h-12 w-24 ">
            Add Item
          </button>
        </div>
        <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead className="text-xl">
        <tr>
          <th className="px-6 py-3 bg-gray-50 ">
            Sr no.
          </th>
          <th className="px-6 py-3 bg-gray-50 ">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 ">
            Category
          </th>
          <th className="px-6 py-3 bg-gray-50 ">
            Price
          </th>
          <th className="px-6 py-3 bg-gray-50">Edit</th>
          <th className="px-6 py-3 bg-gray-50">Delete</th>
        </tr>
      </thead>
      <tbody className="bg-white text-lg text-gray-500">
        {items.map((item, index) => {
          return (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-16 py-4 ">
                {index + 1}
              </td>
              <td className="px-16 py-4 ">
                {item.name}
              </td>
              <td className="px-16 py-4 ">
                {item.category}
              </td>
              <td className="px-16 py-4 ">
                {item.price} ₹
              </td>
              <td className="px-16 py-4 ">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
              <td className="px-16 py-4 ">
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
      </div>
    </>
  );
};
