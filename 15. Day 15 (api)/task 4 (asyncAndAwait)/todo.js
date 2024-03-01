
function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
}

// const loadComment2 = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await res.json();
//     console.log(data);
// }

const loadComment2 = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
    
}