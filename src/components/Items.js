import { useState } from "react";
import "./Items.css";

function Items() {

    const [count, setCount] =useState(0)
    
    function decreaseHandler () {
       setCount (count-1);
    }
    function increaseHandler () {
       setCount (count+1);
    }
    function resetHandler () {
       setCount(0);
    }

  return (
    <>
      <div className="main w-80 h-80 m-auto rounded-xl mt-28 bg-slate-300 text-2xl font-semibold p-2 flex flex-col items-center">
        <div className="heading mt-10 tracking-wide">
          <h1 className="text-2xl">Increment & Decrement</h1>
        </div>

        <div className="btns flex justify-center mt-10 gap-5">
          <button onClick={decreaseHandler} className="border rounded-lg px-8 py-2">-</button>

          <div className="center flex justify-center items-center">{count}</div>

          <button onClick={increaseHandler} className="border rounded-lg px-8 py-2">+</button>
        </div>

        <div className="end">
          <button onClick={resetHandler} className="border rounded-lg px-6 py-2 mt-8 tracking-wide">Reset</button>
        </div>
      </div>
    </>
  );
}

export default Items;
