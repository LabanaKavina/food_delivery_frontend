import { Outlet, useNavigate } from "react-router-dom"

const RootLayout = ()=>{
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }
    return (<>
    <header className="bg-slate-600 h-16 flex justify-end">
        <button onClick={() => onLogout()} className="bg-black mt-3 text-white mr-20 rounded-2xl h-10 w-32">Log out</button>
    </header>
    <aside className="h-96 w-52 bg-black flex gap-10 flex-col">
        <button className="bg-white h-10 w-full mt-10 border border-black border-solid">Menu</button>
        <button className="bg-white h-10 w-full mt-10 border border-black border-solid">Orders</button>
    </aside>
    <Outlet />
    </>)
}
export default RootLayout