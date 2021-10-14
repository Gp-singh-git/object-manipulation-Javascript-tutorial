const obj_1 = {     //shallow copy                    
  a: 1,
  b: 2,
  c: 3,
};

const obj_2 = Object.assign(obj_1);
obj_1.c = 'X';
console.log(obj_1);
//Output: { a: 1, b: 2, c: 'X' }
console.log(obj_2);
//Output: { a: 1, b: 2, c: 'X' }




