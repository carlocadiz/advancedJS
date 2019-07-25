//Advanced arrays

const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
})

console.log(double); //[2, 4, 20, 32]

// map
const mapArray = array.map(num => num * 2);
console.log(mapArray); //[2, 4, 20, 32]


//filter
const filterArray = array.filter(num => num > 5);
console.log(filter); // [10, 16]

//reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
},0);
console.log(reduceArray); // 29

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayForEach = [];
array.forEach(num => {
 arrayForEach.push(num.username + '!');
})
console.log(arrayForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map(num => num.username + '?');
console.log(arrayMap);

//Filter the array to only include users who are on team: red
const arrayFilter = array.filter(num => num.team === 'red');
console.log(arrayFilter);

//Find out the total score of all users using reduce
const arrayReduce = array.reduce((accumulator, num) =>{
  return accumulator + num.score},0);
console.log(arrayReduce);

// (1), what is the value of i?
//i is the index number of num
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num =>  num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

 array.map(num => {
  num.items = num.items.map(item => item + '!')
})
console.log(array);
