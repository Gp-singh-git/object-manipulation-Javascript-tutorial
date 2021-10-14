const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj_2 = Object.seal(obj_1);

console.log(obj_2); //Output: { a: 1, b: 2, c: 3 }

obj_1.d = 4;      //has no effect
obj_2.e = 5;

obj_1.a = 'A';    //but changes existing properties
obj_2.b = 'B';

console.log(obj_1); //Output: { a: 'A', b: 'B', c: 3 }
console.log(obj_2); //Output: { a: 'A', b: 'B', c: 3 }

console.log(Object.isSealed(obj_1)); //Output: true
console.log(Object.isSealed(obj_2)); //Output: true



