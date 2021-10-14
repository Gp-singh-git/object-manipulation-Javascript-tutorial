const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

Object.defineProperty(obj_1, 'a', { value: 100 });
console.log(obj_1); //Output: { a: 100, b: 2, c: 3 }
obj_1.a = 7;
console.log(obj_1); //Output: { a: 7, b: 2, c: 3 }
Object.defineProperty(obj_1, 'a', { writable: false });
obj_1.a = 200; // Will not update
console.log(obj_1); //Output: { a: 7, b: 2, c: 3 }

Object.defineProperty(obj_1, 'a', { enumerable: false });
// Will exclude it while looping or with Object.keys()

Object.defineProperty(obj_1, 'b', { configurable: false });
delete obj_1.b; // Will not delete this property
console.log(obj_1); //Output: { b: 2, c: 3 }


