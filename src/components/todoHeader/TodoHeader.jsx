import React from 'react'

const TodoHeader = ({active,done}) => {
  return (
    <div className='d-flex justify-content-between aline-items-center '>
      <h1>TodoList</h1>
      <h3>{active} more todo,{done} done</h3>
    </div>
  )
}

export default TodoHeader