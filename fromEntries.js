const arr1 = [
  ['a',1], ['b',2], ['c',3]
]

const obj_1 = Object.fromEntries(arr1);
console.log(obj_1);  //Output: { a: 1, b: 2, c: 3 }

const arr2 = [
  ['a',1], ['b',['x',4]], ['c',3]
]                      

const obj_2 = Object.fromEntries(arr2);
console.log(obj_2); 
            //Output: { a: 1, b: [ 'x', 4 ], c: 3 }

            


            