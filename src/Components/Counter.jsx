import React,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
    <div className='counter-container'>
      <div className='counter-style'>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>

      </div>
    </div>
  )
}

export default Counter
