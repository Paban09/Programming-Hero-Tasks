const firstName="Masud";
const person=`My name is ${firstName}`;
console.log(person);
console.log(person[3]);
const newPerson=person.slice(0,5);
console.log(newPerson);
console.log(person);


var word="I am doing fine";
var reverse=[];
for(var letter of word){
    reverse.unshift(letter);
    // console.log(reverse.join(''));
}
console.log(reverse.join(''));
