import React , {useState}from 'react'

const Hook = () => {
    // const [x,SetX]=useState(0);
    const [todos,SetTodos] =useState(['todo1','todo2']);
  return (
    <div>
       {/* count : if {x} is {(x %2 ==0) ? "even" :"odd"}
      <button onClick={()=>{SetX(x+1) }}>Inc</button>
      <button onClick={()=>{SetX(x-1) }}>Dec</button> */}
      {todos.map((todo)=><li>{todo}</li>)}
      <button onClick={()=>SetTodos([1,2,3])}>click</button>

    </div>
  )
}

export default Hook
