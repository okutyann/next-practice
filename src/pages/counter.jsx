import React from 'react'
import { useState } from 'react';

const counter = () => {
    const [count, setCount] = useState(0);
    let num = 9
    const addNum = () => setCount(count + 1);


    const subNum = () => {
        setCount(count - 1);
    }
    const dubleNum = () => {
        setCount(count * 2);
    }
    return (
        <div>
            <p>{count}</p>
            <p>{num}</p>
            {/* <button onClick={() => setCount(count + 1)}>追加</button> */}
            <button onClick={addNum}>+1</button>
            <button onClick={subNum}>-1</button>
            <button onClick={dubleNum}>×2</button>
            {/* <button onClick={() => { num = num + 1, console.log(num) }}>1</button>
            <button onClick={()=>setCount(num)}>nummmmm</button> */}
        </div>
    )
}

export default counter