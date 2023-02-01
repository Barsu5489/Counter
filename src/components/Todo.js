import React, { useState } from 'react'

function Todo() {
    const [input, setInput] = useState('')
    const [item, setItems] = useState([])
    
    console.log(input)
    function handleInput(e){
        setInput(e.target.value)
    }
    function addItem(e){
        if(!input){
            alert('input something')
            return
        }
        const li = {
            id: Math.floor(Math.random() * 1000),
            value:input
        }
        setItems(lastItem => [...lastItem,li])
        console.log(item)
        
    }
    function handelete(id){
        const itemList = item.filter(item=> item.id !== id)
        setItems(itemList)
    }
    const list = item.map((item,index)=>{
        return(
            <li key={item.id}>{item.value} <button className='btn bg-danger' onClick={()=>handelete(item.id)}>x</button></li> 
            
        )
    })
  return (
    <div className='container border mt-4  p-5'>
        <h1>To Do App</h1>
        <hr />
        <input type="text"
        placeholder='Add item...'
        value={input}
        onChange={handleInput}
        />
        <button className='btn bg-success m-2' onClick={addItem}>add</button>

        <ul>
            {list}
        </ul>
    </div>
  )
}

export default Todo