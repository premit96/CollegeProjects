import React from 'react';
import './TodoItem.css';

//functional stateless component
//no state involved

const TodoItem = ({name, completed, onDelete, onToggle}) => (
 
  <li className="task">
    <span
      style={{
        textDecoration: completed? 'line-through' : 'none'
      }}
      onClick={onToggle}
    >
      {name}
    </span>
    <span
      className="delete"
      onClick={onDelete}> X </span>
  </li>
  
);
  
export default TodoItem;

