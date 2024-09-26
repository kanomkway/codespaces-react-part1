// function Item({name, isPacked}){
//     if (isPacked) return (<li>{name} ✔</li>)
//     return (<li>{name}</li>)
// } 

// function Item({name, isPacked}){
//     return (<li>{isPacked ? name + '✔' : name}</li>)
// } 
import { useState, useEffect } from "react";
// import { createContext } from "./chat.jsx";

function Item({name, isPacked=false}){
    return (<li>{name} {isPacked && '✔'}</li>)
} 


export default function ItemList(){
    const items = [{name:"Beef",isPacked:true}, 
        {name:"Egg",isPacked:true}, 
        {name:"Flour",isPacked:false}, 
        {name:"Sugar",isPacked:true}]

    const [value, setValue] = useState("")
    useEffect(()=>{
        console.log("this component is loaded");
    })
    const filterList = items.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
    const ItemList = filterList.map(i=>
        <Item key={i.name} name={i.name} isPacked={i.isPacked}></Item>)
        return (<>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <ul>
            {ItemList}
        </ul>
        </>)

    // const ItemList = items.map(i=>
    // <Item key={i.name} name={i.name} isPacked={i.isPacked}></Item>)
    // return (<ul>
    //     {ItemList}
    // </ul>)
    
    {/* <Item name="Beef" isPacked={true}></Item>
        <Item name="Egg" isPacked={false}></Item>
        <Item name="Flour" isPacked={false}></Item>
        <Item name="Sugar" isPacked={true}></Item> */}
}