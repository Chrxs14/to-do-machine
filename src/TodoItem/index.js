import React from "react";
import './TodoItem.css'

function TodoItem(props){
  const onTodoComplete = () => {
    props.settodoCompleteIco(prevState => !prevState)
  }

  return(
    <li className="TodoItem">
      <span 
        className= {`complete ${props.completed && 'complete-check'}`}
        onClick={ props.onCompleted }
        // onClick={ onTodoComplete }
      ></span>
      <p className={`${props.completed && 'todoComplete'}`}>
        {props.text}
      </p>
      <span 
        className="close"
        onClick={ props.onDeleted }
      >X</span>
    </li>
  )
}

export { TodoItem }