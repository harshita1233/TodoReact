import React from "react"


function TodoItem(props){
    const myStyle={
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
      
        <div className="todo-items">
        <input type="checkbox"  checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
        <p style={props.item.completed?myStyle:null}>{ props.item.text}</p>
        </div>
    )
}
export default TodoItem