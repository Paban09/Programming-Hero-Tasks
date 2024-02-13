// console.log('hell');


let firstButton=document.getElementById('first-section');

let button=document.createElement('button');
button.innerText="Dynamic button";


firstButton.appendChild(button);

firstButton.addEventListener('click',()=>{
    console.log('Someone Clicked Me');
    
});

