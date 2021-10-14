const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

Object.defineProperty(obj_1, 'a', { enumerable: false });

console.log(Object.getOwnPropertyNames(obj_1));
          //Still shows 'a'
          //Output: [ 'a', 'b', 'c' ]



          