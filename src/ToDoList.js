import React from 'react'
import './App.css'

export default function ToDoList(props) {
  return (
    <>
        <div>
            <button id="delete-btn" onClick={()=>{
                props.onSelect(props.id)
            }} className="btn btn-danger ">X</button>
            <li key={props.id}>  {props.itemval}      </li>
        </div>
    </>
  )
}
