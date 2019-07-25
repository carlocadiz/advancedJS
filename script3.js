//reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2 // true
object1 === object3 // false

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 5;
console.log(clone); // {a: 'a', b: 'b', c: 5}
console.log(clone); // {a: 'a', b: 'b', c: 'c'}
console.log(clone2); // {a: 'a', b: 'b', c: 'c'}

// Shallow clone
let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
obj.c.deep = "hahaha";
console.log(obj); // {a: 'a', b: 'b', c: { deep: 'hahaha'}}
console.log(clone); // {a: 'a', b: 'b', c: { deep: 'hahaha'}}
console.log(clone2); // {a: 'a', b: 'b', c: { deep: 'hahaha'}}

let superClone = JSON.parse(JSON.stringify(obj));
console.log(superClone); // {a: 'a', b: 'b', c: { deep: 'try and copy me'}}


// context vs scope
console.log(this)

// this is the window object

function a(){
  console.log(this)
}

a(); // windows object

const object4 = {
  a: function() {
      console.log(this)
  }
}

object4.a(); // {a: f}

// instantiation
class Player {
  constructor(name, type) {
    this.name =name;
    this.type = type
  }
  introduce (){
    console.log(`Hi I am ${this.name}. I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Carlo', 'Healer');
const wizard2 = new Wizard('Liv', 'Dark Magic')

//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };  //object1 a=4
const object2 = object1;   //object2 a=4
const object3 = object2;   //object3 a=4
const object4 = { a: 5};   //object4 a=5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  }
  sound() {
    console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
  }
}

const cow = new Mamal('Shelly', 'cow', 'brown');
