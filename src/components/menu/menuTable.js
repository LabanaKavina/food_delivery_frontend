import { useDispatch, useSelector } from "react-redux"

export const MenuTable = () => {
    const items = useSelector(state => state.user.items)
    return(<>
            <div className="flex flex-col">
            <button className="bg-slate-600">Add Item</button>
            <table>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    items.map((item,index) => {
                            return(

                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </table>
            </div>
    </>)
}

