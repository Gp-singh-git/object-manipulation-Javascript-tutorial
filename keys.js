const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
};

const myKeys = Object.keys(obj_1);
console.log(myKeys); //Output: [ 'a', 'b', 'c' ]

console.log(Object.keys(obj_1).length); //Output: 3

Object.defineProperty(obj_1, 'a', { enumerable: false });

console.log(Object.keys(obj_1)); //Output: [ 'b', 'c' ]
                      //Skips 'a'



                      