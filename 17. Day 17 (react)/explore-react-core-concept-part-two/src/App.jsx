import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
  function handleClick(){
    alert('hello one');
  }
 let handleClick2=()=>{
    alert('hello two');
  }

  const addToFive=(number)=>{
    alert(5+number);
  };

  return (
    <>
      
      <h1>React Core Concepts - Two</h1>
      <Users></Users>
    
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{
        alert('hello three');
      }}>Click 3</button>

      {/* to pass data using perameter */}
      <button onClick={()=>{addToFive(52)}}>Click 4</button>
      <Counter></Counter>
    </>
  )
}

export default App
