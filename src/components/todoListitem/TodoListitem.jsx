import React from 'react'
import './TodoListItem.css'

const TodoListitem = ({title,important,done,id,onDone,onImp,onDel}) => {

  let clazz=''
  if(important){
    clazz+=' imp'
  }
  if(done){
    clazz+=' done'
  }

  return (
    <span className='d-flex justify-content-between align-items-center'>
      <span
       className={`flex-grow-1 ${clazz}`}
       onClick={()=>onDone(id)}
       >{title}</span>
      <button className='btn btn-outline-danger'
      onClick={()=>onDel(id)}
      ><i className="bi bi-trash3-fill"></i></button>
      <button className='btn btn-outline-warning'
      onClick={()=>onImp(id)}
      ><i className="bi bi-exclamation"></i></button>
 </span>
  )
}

export default TodoListitem