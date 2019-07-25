//Closures
// a function ran, the function executed. It's never going to run
// again but it is going to remember there are references to those variables
// so the child scope always has access to the parent scope.

const first = () =>{
  const greet = "Hi!";
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

//Currying
// The process of converting a function that takes multiple arguements
// into a function that takes them one at a time.

const mulitiply = (a, b) => a * b;
const curriedMulitply = (a) => (b) => a * b;
const mulitiplyBy5 = curriedMulitply(5);
mulitiplyBy5(5); // 25
mulitiplyBy5(10); // 50
mulitiplyBy5(11); // 55


//Compose
// The act of putting two functions together to form a third function
// where the output of one function is the input of the other.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5); // 7

//Functions that avoid side effects. Ensure functional purity. Deterministic.

//#1 Create a one line function that adds adds two parameters
const add = ( a, b ) => a + b;


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

// returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//returns 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// Returns 17
//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// Returns 16
//What are the two elements of a pure function?

// Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.