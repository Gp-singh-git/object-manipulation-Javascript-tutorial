const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj_2 = Object.create(obj_1);
const obj_3 = new Object();
const obj_4 = {};

obj_2.a = 6;
obj_2.d = 5;

obj_1.b = 4;
console.log(obj_1); // Output: { a: 1, b: 4, c: 3 }
console.log(obj_2); // Output: { a: 6, d: 5 }
console.log(obj_2.a, obj_2.b, obj_2.c, obj_2.d);
                    // Output: 6 4 3 5
//Other values for obj_2 available through prototypes

console.log(obj_3); //Output: {}
obj_4.b = 8;
console.log(obj_4); //Output: { b: 8 }



