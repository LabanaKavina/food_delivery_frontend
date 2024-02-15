import { Outlet, useNavigate } from "react-router-dom"

const RootLayout = ()=>{
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }
    return (<>
    <header className="bg-yellow-400 h-20 flex justify-end">
        <button onClick={() => onLogout()} className="bg-red-600 mt-4 text-xl text-white mr-20 rounded-xl h-12 w-32">Log out</button>
    </header>
 <div className="flex">
    <aside className="h-96 w-52 flex gap-10 flex-col shadow-lg shadow-gray-400 p-12 text-2xl">
        <button onClick={() => navigate('/admin/menu')} className="h-10 w-20 mt-10 border-b-2 border-yellow-500">Menu</button>
        <button className="h-10 w-20 mt-10 border-b-2 border-yellow-500">Orders</button>
    </aside>
    
    <Outlet />
    
 </div>
    </>)
}
export default RootLayout