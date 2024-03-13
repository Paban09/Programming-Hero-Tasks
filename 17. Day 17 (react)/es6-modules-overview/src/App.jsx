// import { useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect,useState } from 'react';

function App() {
 
  const [watches,setWatches]=useState([]);
  useEffect( () => {
    fetch('watches.json')
      .then(res=>res.json())
      .then(data=>setWatches(data))
  }, [])

  // const watches=[
  //   {'id':1,'name':'G-Shock','price':1200},
  //   {'id':2,'name':'Rolex','price':2500},
  //   {'id':3,'name':'Casio','price':1200}
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
