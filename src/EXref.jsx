import { useRef } from "react";

export default function Form(){
    const inputRef = useRef(null)

    function handleClick(){
        inputRef.current.focus();
        alert("You type " + inputRef.current.value);
    }

    return (<>
    <input ref={inputRef}></input>
    <button onClick={handleClick}>Focus</button>
    </>)
}