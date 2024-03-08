// export default function Todo({task,isDone}){
//     return(
//         <>
//          <li>{task}</li>
//          {/* <li>{isDone}</li> */}
//         </>
       
//     )
// }


// conditional rendering option one 

// export default function Todo({task,isDone}){

//     if(isDone){
//         return(
//             <>
//              <li>Finished : {task}</li>
//             </>
           
//         )
//     }else{
//         return(
//             <>
//              <li>Work on : {task}</li>
//             </>
           
//         )
//     }
    
// }


//conditional rendering optoin 2

// export default function Todo({task,isDone}){
//     return(
//         <>
//          <li>{isDone?'Finished':'Work on'}:
//             {task}</li>
         
//         </>
       
//     )
// }



//conditional rendering option 3

// export default function Todo({task,isDone}){
//     return(
//         <>
//          <li>{task} {isDone && '=> Done'}</li>
//         </>
       
//     )
// }



//conditional rendering option 4 
// export default function Todo({task,isDone}){
//     return(
//         <>
//          <li>{task} {isDone || '=> Do it'}</li>
//         </>
       
//     )
// }


// option 5 

export default function Todo({task,isDone}){
   let liItem;
    if(isDone){
        liItem= <li>Finish : {task}</li>;
    }else{
        liItem= <li>Work on :{task}</li>;
    }
    return liItem;
}
