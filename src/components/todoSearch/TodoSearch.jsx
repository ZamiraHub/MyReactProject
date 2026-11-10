import React, { Component } from 'react'

export default class TodoSearch extends Component {
  buttons=[
    {name:'All'},
    {name:'Active'},
    {name:'Done'},
  ]
  onSearchChange=(e)=>{
    const term=e.target.value
    this.props.onSearchChange(term)
  }
  render() {
    const btns=this.buttons.map((el)=>{
      const isActive=this.props.filter===el.name
      const clazz=isActive ? 'btn-info' : 'btn-outline-secondary'
      return <button key={el.name}
      className={`btn ${clazz}`}
      onClick={()=>this.props.setFilter(el.name)}
      >{el.name}</button>
    })
    return (
      <div className='d-flex'>
        <input type="text" 
        className='form-control
        onChange={this.onSearchChange}
        'placeholder='Search todo'/>
        {/* <button className='btn btn-info'>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button> */}
        {btns}
      </div>
    )
  }
}
