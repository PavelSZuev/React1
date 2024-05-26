import { useState } from "react";
export const Comp =()=> {
    const [count, setCount] = useState(1)
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <p>{count}</p>
        </div>
    )
}
