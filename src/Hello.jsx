// const Hello = function(props){
//     return (<div><h1>Hello World {props.name+" "+props.lname}</h1><hr /></div>)
// }
import "./Hello.css"

const Hello = function({name, lname="Yoyo", age=21}){
    return (<div><h1>Hello World {name} {lname} {age}</h1><hr /></div>)
}

export default Hello;