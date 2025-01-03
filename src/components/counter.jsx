// import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // Correct usage of useState
    const [show, setShow] = useState(0);
    return (
        <>
            <div>Counter</div>
            <button className='p-4' onClick={() => setCount(count - 1)}>-</button>
            <div className='display p-4'>Count: {count}</div>
            <button className='p-4' onClick={() => setCount(count + 1)}>+</button>
            <button className="btn" onClick={() => setCount(count * 0)}>Reset</button>
            <br />

            
            <button className="box block p-4" onClick={()=>setShow(!show)}>
                show/hide
                {show ? "Hide" : "show"}
            </button>
        </>
    );
}

export default Counter;
