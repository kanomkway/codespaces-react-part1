import { useRef, useState } from "react";

const BMItext=({bmi})=>{
    if(bmi<18.5) return (<h3>You are UNDERWEIGHT.</h3>)
    if(25<=bmi && bmi<30) return (<h3>You are OVERWEIGHT.</h3>)
    if(30<=bmi && bmi<35) return (<h3>You are OBESITY CLASS I.</h3>)
    if(35<=bmi && bmi<40) return (<h3>You are OBESITY CLASS II.</h3>)
    if(bmi>=40) return (<h3>You are OBESITY CLASS III.</h3>)
    return (<h3>You are NORMAL WEIGHT.</h3>)
}

export default function BMI(){
    const inputWeight = useRef(null)
    const inputHeight = useRef(null)
    const [BMI, setBMI] = useState(0)

    const handleClick=()=>{
        let w = inputWeight.current.value;
        let h = inputHeight.current.value/100;
        setBMI(w/Math.pow(h,2))
    }

    return (<>
    <h2>BMI CALCULATOR</h2>
    <label for="weight">Weight </label>
    <input id="weight" ref={inputWeight}></input>
    <label for="weight">kg.</label>
    <br />
    <label for="height">Height </label>
    <input id="height" ref={inputHeight}></input>
    <label for="height">cm.</label>
    <br />
    <button onClick={handleClick}>Enter</button>
    <br />
    <h3>BMI value: {BMI.toFixed(2)}</h3>
    <BMItext bmi={BMI}></BMItext>
    </>)
}