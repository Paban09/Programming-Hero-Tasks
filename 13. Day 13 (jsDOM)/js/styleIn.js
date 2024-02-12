const sections=document.querySelectorAll('section');
// console.log(sections);
// sections.style.backgroundColor='black';
for(const section of sections){
    section.style.border='2px solid black';
    section.style.marginTop='20px';
    section.style.borderRadius='20px';
    section.style.padding='20px';
    section.style.backgroundColor='lightgray';
}

// const places=document.getElementById("places-title");
// console.log(places);

// const importantPlaces=document.getElementsByClassName('important-places');
// console.log(importantPlaces); 

const placesContainer=document.getElementById("places-container");
placesContainer.classList.add("text-center");
console.log(placesContainer.innerHTML);
console.log(placesContainer.childNodes);
console.log(placesContainer.childNodes[3]);
console.log(placesContainer.childNodes[3].innerHTML);
console.log(placesContainer.childNodes[3].childNodes);
console.log(placesContainer.childNodes[3].childNodes[3]);
console.log(placesContainer.childNodes[3].childNodes[3].nextSibling.nextSibling);
console.log(placesContainer.childNodes[3].childNodes[3].previousSibling.previousSibling);
console.log(placesContainer.firstChild);


const li = document.createElement('li');
const li2 = document.createElement('li');
console.log(li);

li.innerText="new li";
li2.innerText="new li created";
console.log(li);

const placesUl=placesContainer.childNodes[3];
console.log(placesUl);
placesUl.appendChild(li);
placesUl.appendChild(li2);

