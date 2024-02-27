import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

export default function App() {
    const[obj,setObj]=useState('')
    const[list,setList]=useState([])

    const set=(event)=>{
        setObj(event.target.value)
    }
    const add=()=>{
        // document.getElementById("input-box").value=''
        setList((oldlist)=>{
            return [...oldlist,obj]
        })
        setObj('')
    }

    const deleteitem=(id)=>{
      // console.log(index)
      setList((oldlist)=>{
        return oldlist.filter((arrElement,index)=>{
          return index!==id
        })
    })
  }
  return (
    <div>
      <div className="container">
        <h1 className="elements">To Do List</h1>
        <hr />
        <div id="inputelements">
          <input id="input-box" value={obj} type="text" onChange={set} placeholder="Enter your list" />
        <button className="btn btn-primary btn-add" onClick={add} >Add</button>
        </div>
        <br /><br />
        <div>
            <h4>
                <ol className="list" >
                    {
                        list.map((itemval,index)=>{
                            return (<ToDoList key={index}  itemval={itemval} onSelect={deleteitem} id={index}/>)
                        })
                    }
                </ol>
            </h4>
        </div>
      </div>
        <h6 id="owner">Balhara Creation.</h6>
    </div>
  );
}