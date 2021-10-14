const obj_1 = {
  a: 1,
  b: 2,
};

Object.preventExtensions(obj_1);

console.log(Object.isExtensible(obj_1)); //Output: false

obj_1.c = 3;

console.log(obj_1); //Output: { a: 1, b: 2 }

delete obj_1.a;  //Allows deletions

console.log(obj_1); //Output: { b: 2 }



