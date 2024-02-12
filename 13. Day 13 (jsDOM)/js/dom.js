// console.log("Hello from js");

// const student={
//     'name':"paban",
//     'id':11,
//     'study':function(time){
//         console.log(time,"Study Kortese");
//     }

// }
// student.study('25');

// const liCollection=document.getElementsByTagName('li');
// for (const li of liCollection){
//     console.log(li.innerText="menu");
// }

const allHeading=document.getElementsByTagName('h1');
// console.log(allHeading[0].innerHTML);
allHeading[1].innerText="Thigns goiing to change";

// const teamMembers=document.getElementById("team");
// console.log(teamMembers);
const teamMembers=document.querySelectorAll("#team li");
console.log(teamMembers);

for(const someLi of teamMembers){
    someLi.style.color='green';
    someLi.style.backgroundColor='red';
    someLi.style.marginTop='10px';
    console.log(someLi.getAttribute('class'));
    someLi.setAttribute('title','hello from member');

}
const teamTitle=document.getElementById("team-title");
console.log(teamTitle.getAttribute('id'));


