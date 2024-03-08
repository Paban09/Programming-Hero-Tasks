import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Student.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
function App() {
  const actors=['Masud','Rana','Paban','Ayan'];
  const singers=[
    {'name':'Mikel','age':'45','song':'Crying Earth' },
    {'name':'Bruno Mars','age':'54','song':'When i Was your man' },
    {'name':'Adele','age':'52','song':'Hello' }
  ];
  return (
    <>
    <h1>Vite + React</h1>
    
    {
      singers.map(singer=>
        <Singer singer={singer}></Singer>
      )
    }
    <Actor name="Paban"></Actor>
    {
      actors.map((actor)=>
        <Actor name= {actor}></Actor>
      )
    }
      {/* <Todo 
        task='learn-react' 
        isDone={true} 
        >
      </Todo>
      <Todo 
        task='learn-python' 
        isDone={false} 
        >
      </Todo>
      <Todo 
        task='learn-php' 
        isDone={true} 
        >
      </Todo> */}


      {/* <h1>Vite + React</h1>
      <Person  name='Paban'/>
      <Student id='15321' name='Masud' age='20' profession='engineer'/> */}

    </>
  )
}

function Person(props){
  console.log(props);
  // giving style by import from another file
  const name='Paban';
  return <p className='student'>My Name is {name}</p>;
}

function Student({id,name,age,profession}){
  // giving style by creating obj 
  const studentStyle={
    'border': '20px solid green',
    'padding': '20px',
    'margin': '20px',
    'borderRadius': '100px'
  }
  return(
    <>
      <div style={studentStyle}>
        <h1>This is student</h1>
        <p>My id is {id}, and my name is {name}. My age is {age}. My profession is {profession}</p>
        <form action="index.html" method='get'>
          <input type="text" name='name' placeholder="Enter your name" />
          <input type='submit'></input>
        </form>
      </div>
    </>
    
  )
}


export default App
