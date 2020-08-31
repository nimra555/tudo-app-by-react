import React,{useState} from 'react';

function Tudo(){

    let [tudoItem,setTudo] = useState([]); // list
    let [tudoAdd,setAdd] = useState(""); // add item
    let [edit,setEdit] = useState(tudoItem);

    return(
        <div>
           <h1>Tudo App</h1>ulul
           <input type="text" placeholder="Enter Tudo" onChange={(e) => {setAdd(e.target.value )}} /> <br />
           <br />
           <ul>
               {tudoItem.map((tudoList,ind) =>  {return (<li key={ind}>{tudoList} </li>)})}
               <button onClick={()=>{setTudo(tudoItem.slice(0,tudoItem.length - 1) )}}>x</button>
        
           <button onClick={()=>{setEdit(()=>{console.log("edit")} )}}>edit</button>
           </ul>
           <button onClick={()=>{setTudo([...tudoItem,tudoAdd])}}>Add Tudo</button>
           {/* <button onClick={()=>{setTudo(tudoItem.slice(0,tudoItem.length - 1) )}}>x</button> */}
        </div>
    )
}
export default Tudo;