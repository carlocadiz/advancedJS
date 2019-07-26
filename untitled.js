// ES7
const pets = ['cat', 'dog','bat'];

pets.includes('dog'); //true
pets.includes('bird'); //false

const square = (x) => x**2;
const cube = (x) => x**3;

square(2); // 4
cube(2); // 8

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John'); //f

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John'));


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power = (num) => num ** 100;
power(10000);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
Infinity

// ES8
'dog'.padStart(10); // '       dog' 7 spaces in front of dog
'dog'.padEnd(10); //   'dog       ' 7 spaces after dog

// ending commas
const fun = (a, b, c, d,) => {
  console.log(a);
}
fun(1,2,3,4,); // 1

Object.values
Object.entries
Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})
// username0 Santa
// username1 Rudolf
// username2 Mr.Grinch

Object.values(obj).forEach((value) => {
  console.log(value);
})
// Santa
// Rudolf
// Mr.Grinch

Object.entries(obj).forEach((entry) => {
  console.log(entry);
})
// ['username0', 'Santa']
// ['username1', 'Rudoloph']
// ['username2', 'Mr.Grinch']

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
//'     ||<- Start line'
//'       🐢'
//'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'🐢========' // second parameter is the character used for padding

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let string = '';
Object.keys(obj).forEach(key => {
  string += (`${key} ${obj[key]} `)
})
console.log(string);


Object.entries(obj).map(value => value.join(" ")).join(' ');
