import React from 'react'
import TodoListItem from '../todoListitem/TodoListitem.jsx'

const TodoList = (props) => {
  const elements=props.todo.map((item)=>{
    return(
        <li className='list-group-item' key={item.id}>
          {/* <TodoListItem title={item.title}imp={item.important}/> */}
          <TodoListItem title {...item} {...props}/>
        </li>
        
    )
  })

  return (
      <ul className='list-group'>
        {elements}
      </ul>
  )
}

export default TodoList