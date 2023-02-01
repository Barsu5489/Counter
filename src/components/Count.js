import React, { useState } from 'react'

function Count() {
    const [number, setNumber] = useState(0)

    function minus(){
        setNumber(number - 1)
    }
    function reset(){
        setNumber(0)
    }
    function plus(){
        setNumber(number + 1)
    }
  return (
    <div className='container border p-5'>
       
        <h2>Counter App</h2>
        <hr />
        <h1>{number}</h1>
        <div>
            <button className='btn btn-sm bg-success text-light m-2' onClick={minus}>Minus -</button>
            <button className='btn btn-sm bg-warning text-light m-2' onClick={reset}>Reset</button>
            <button className='btn btn-sm bg-danger text-light m-2' onClick={plus}>Plus+</button>
        </div>
    </div>
  )
}

export default Count