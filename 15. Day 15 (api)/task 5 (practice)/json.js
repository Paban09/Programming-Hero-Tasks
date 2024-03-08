const getAllData = async()=>{
    const res=await fetch("./data.json");
    const data=await res.json();
    console.log(data);
    toggleLoadingSpinner(false);
    showAllData(data);
}

// spinner 
const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner= document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');
    }
}

const showAllData=(data)=>{
    const ul=document.getElementById('data');
    for (const key in data){
        const li=document.createElement('li');
        li.innerText=`name = ${data[key].name}, age= ${data[key].age}, education= ${data[key].education}`;
        ul.appendChild(li);     
    }

}

document.getElementById('header').addEventListener('mouseenter',()=>{
    const header=document.getElementById('header');
    header?.classList?.remove('text-green-500');
    header?.classList?.add('text-red-500');
});

document.getElementById('header').addEventListener('mouseleave',()=>{
    const header=document.getElementById('header');
    header?.classList?.remove('text-red-500');
    header?.classList?.add('text-green-500');
});



toggleLoadingSpinner(true);
// getAllData()
setTimeout(getAllData,5000);