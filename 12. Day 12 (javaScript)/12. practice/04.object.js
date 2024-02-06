const person={
    'name':"Masud",
    'age':25
}

console.log(person);



//dot notation
console.log(person.name);
//bracket notation
console.log(person['age']);

//getting all keys 
const keys = Object.keys(person);
console.log(keys);

//getting all values 
const values = Object.values(person);
console.log(values);

//adding property
//creating a new key name for object
const newKey="address";
//assigning value into new Key
person[newKey] = "Dhaka"

console.log(person);

//update property
person.name="Paban";
console.log(person);


//delete property
delete person['name'];
console.log(person);

for(var key in person){
    console.log('key is',key);
}