import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Type Here!")
    return (<>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
    <h2>You typed {value.length} characters.</h2>

    <button onClick={()=>setCount(count+1)}>CLICK HERE ARAI LAI KRUNG</button> 
    <p>You clicked {count} times.</p>
    <button onClick={()=>setCount(0)}>RESET</button>
    </>)
}
