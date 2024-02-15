const Model = (props) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-75 flex justify-center items-center">
        <div className=" bg-white h-72  p-6 border border-white border-solid rounded-2xl py-10  text-gray-900 text-3xl">
          <p>{props.message}</p>
          <div className="mt-6 flex justify-center gap-28 pt-20">
            <button onClick={props.onConfirm}>{props.confirmText}</button>
            <button onClick={props.onCancel}>{props.cancelText}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Model;