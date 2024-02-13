function changeText(){
    const title=document.getElementById('title');
    title.innerText='dynamic text';
}

document.getElementById('addEvent').addEventListener('click',()=>{
    const title=document.getElementById('title');
    title.innerText='dynamic text change again';
});

document.getElementById('btn-update').addEventListener('click',()=>{
    const inputField=document.getElementById('input-field');
    const text=inputField.value;
    const title=document.getElementById('title');
    title.innerText=text;
    inputField.value='';
    
    
});