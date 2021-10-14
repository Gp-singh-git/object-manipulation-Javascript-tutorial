const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj_2 = Object.freeze(obj_1);
console.log(obj_2); //Output: { a: 1, b: 2, c: 3 }
obj_1.a = 'X';
obj_2.b = 5;
console.log(obj_1); //Output: { a: 1, b: 2, c: 3 }
console.log(obj_2); //Output: { a: 1, b: 2, c: 3 }

console.log(Object.isFrozen(obj_1)); //Output: true
console.log(Object.isFrozen(obj_2)); //Output: true


