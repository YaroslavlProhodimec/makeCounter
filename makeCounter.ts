function makeCounter() {
  let count = 0;

  return function () {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
function f() {
  let value = 123;

  return function () {
    console.log(value);
  };
}

let g = f(); // g.[[Environment]] хранит ссылку на лексическое окружение
g(); // g.[[Environment]] хранит ссылку на лексическое окружение
из соответствующего вызова f()
function f() {
  let value = Math.random();

  return function () {
    console.log(value);
  };
}

3 функции в массиве, каждая из которых ссылается на лексическое окружение
из соответствующего вызова f()
let arr = [f(), f()];

function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let counter = makeCounter();
console.log(counter());
let counter2 = makeCounter();
let phrase = "Hello";

if (true) {
  let user = "John";

  const sayHi = () => {
    console.log(`${phrase}, ${user}`);
  };
}

sayHi();

function sum(a) {
  return function (b) {
    return a + b;
  };
}
let count = sum(1);

console.log(count(1));
console.log(sum(5)(-1));
let x = 1;

function func() {
  console.log(x); // ?

  // let x = 2;
}

// func();
let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (el, a, b) => {
  if (el >= a && el <= b) {
    return true;
  }
};
const inArray = (el, arr) => {
  // let mapObj = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === el) {
      return true;
    }
    // mapObj[char] = mapObj[char] ? mapObj[char] + 1 : 1;
  }
  // for (let i = 0; i < arr.length; i++) {
  //
  //   mapObj
  //
  // }
};

console.log(arr.filter((el) => inBetween(el, 3, 6))); // 3,4,5,6
//
console.log(arr.filter((el) => inArray(el, [1, 2, 10]))); // 1,2
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(name) {
  return function (a, b) {
    return name === "name"
      ? a[name] > b[name]
        ? 1
        : -1
      : a[name] > b[name]
      ? 1
      : -1;
  };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
function makeArmy(x) {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();
console.log(army[0]());
// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.

const x = () => {
  console.log(a, "xaxaxax");
  var a = 1;
};
x();
