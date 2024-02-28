const person={'name':'Masud','age':25,'job':'developer'};

//json - java script object notation
const value=JSON.stringify(person);
console.log(person); //js object
console.log(value); //json string

const getVal=JSON.parse(value);
console.log(getVal);