import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        if(count>0){
            const newCount=count-1;
            setCount(newCount);
        }else{
            alert('nothing to reduce');
        }
    }
    return(
        <div style={{'border':'2px solid red','padding':'20px', 'margin-top':'20px'}}>
           <h3>Counter : {count}</h3> 
           <button onClick={handleAdd}>Add Count</button>
           <button onClick={handleReduce}>Reduce Count</button>
        </div>
    )
}