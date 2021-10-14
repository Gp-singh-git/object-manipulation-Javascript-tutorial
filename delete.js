const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

delete obj_1.a;
console.log(obj_1.a); //Output: undefined
console.log(obj_1);  //Output: { b: 2, c: 3 }



