const obj_1 = {
  a: 1,
  b: 2,
  c: {
        d: 4,
        e: {f: 6}
      },
};

const obj_2 = {...obj_1};

console.log(obj_2); 
//Output: { a: 1, b: 2, c: { d: 4, e: { f: 6 } } }

obj_1.a = 'X';
obj_2.b = 'Y';

console.log(obj_1);  //Output :{ a: 'X', b: 2, ....}
console.log(obj_2);   //Output: { a: 1, b: 'Y', ....}

const obj_3 = {...obj_1, 'b':100}  //Updating only 1 value

console.log(obj_3);  //Output: { a: 'X', b: 100, ....}


