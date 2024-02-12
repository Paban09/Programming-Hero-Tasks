//where to add
const placesList=document.getElementById('places-list');
// console.log(placesList);

//created element
const newLi=document.createElement('li');
newLi.innerText='pahartoli bon';

//add the child
placesList.appendChild(newLi);



const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText="Newly Created Element";
const ul=document.createElement('ul');

mainContainer.appendChild(section);
section.appendChild(h1);
section.appendChild(ul);

const newLi1=document.createElement('li');
newLi1.innerText='Birani';
const newLi2=document.createElement('li');
newLi2.innerText='Kacchi';
const newLi3=document.createElement('li');
newLi3.innerText='Tehari';
ul.appendChild(newLi1);
ul.appendChild(newLi2);
ul.appendChild(newLi3);