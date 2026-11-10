// import React,{useState} from 'react'
import React from 'react';
import {useState} from 'react'

import TodoHeader from './components/todoHeader/TodoHeader'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/todoAdd/TodoAdd'

const App = () => {
  const[todoData,setTodoData]=useState(
  [
    {title:'Learn new words',done:false,important:false,id:1},
    {title:'Do work out',done:false,important:true,id:2},
    {title:'Cook dinner',done:true,important:false,id:3},
  ]
)
const[filter,setFilter]=useState('All')
const [term, setTerm]=useState('')
const doneTodo=(id)=>{
   const index=todoData.findIndex(el=>el.id===id)
   const oldTodo=todoData[index]
   const updTodo={...oldTodo,done:!oldTodo.done}
   const before=todoData.slice(0,index)
   const after=todoData.slice(index+1)
setTodoData([...before,updTodo, ...after])
}
const impTodo=(id)=>{
    const index=todoData.findIndex(el=>el.id===id)
   const oldTodo=todoData[index]
   const updTodo={...oldTodo,important:!oldTodo.important}
   const before=todoData.slice(0,index)
   const after=todoData.slice(index+1)
setTodoData([...before,updTodo, ...after])
}
const delTodo=(id)=>{
  console.log(id);
  setTodoData(todoData.filter(el=>el.id!==id))
}
  const addTodo=(newTodo)=>{
    console.log(newTodo);
    const oldId=todoData.map(el=>el.id)
    console.log(oldId.at(-1));
    const todo={title:newTodo,important:false,done:false,id:oldId.at(-1) || +1}
    setTodoData([...todoData,todo])
  };
  const changeFilter=(todos, filter)=>{
    switch (filter){
      case 'All':
        return todos
        case 'Active':
          return todos.filter(el=>!el.done)
          case 'Done':
            return todos.filter(el=>el.done)
            default:
              return todos
    }
  }
  const search=(todos, term)=>{
    if(term.length===0){
      return todos
    }
    return todos.filter((todo)=>{
      return todo.title.toLowerCase().includes(term.toLowerCase())
    })
  }
  const onSearchChange=(text)=>{
    setTerm(text)
  }
  const done=todoData.filter(el=>el.done).length
  const active=todoData.filter(el=>!el.done).length

  const todos=changeFilter(search(todoData,term),filter)
  return (
    <div className='container'>
      <TodoHeader done={done}active={active}/>
      <TodoSearch filter={filter}setFilter={setFilter}onSearchChange={onSearchChange}/>
      <TodoList todo={todos} onDone={doneTodo} onImp={impTodo} onDel={delTodo}/>
      <TodoAdd onAddTodo={addTodo}/>

    </div>
  )
}

export default App