export const MenuForm = (props) => {
    return(<>
 <div className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-75 flex justify-center items-center">
      <div className="flex flex-col bg-white h-72  p-6 border border-white border-solid rounded-2xl py-10  text-gray-900 text-3xl">
                <form>
                    <label>Name : <input type="text"/></label>
                    <p>Category : 
                        <select>
                            <option>select any one</option>
                        <option>South Indian</option>
                        <option>North Indian</option>
                        <option>Chinese</option>
                        <option>Sweet</option>
                        <option>Desert</option>
                        </select></p>
                        <label>Price : <input type="number"/></label>
                </form>
                <button >Submit</button>
                <button onClick={() => props.onCancel()}>Cancel</button>
            </div>
        </div>
    </>)
}