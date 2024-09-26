export default function MouseEvent(){
    return (<h1 onClick={e => alert("EHE")}
    onMouseEnter={e => console.log("HE")}
    onMouseOver={e => console.log("HERE")}>CLICK SI</h1>)
}