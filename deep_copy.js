let obj = {   //deep copy
  a: 1,
  b: {
    c: 2,
  },
};

let newObj = JSON.parse(JSON.stringify(obj));

obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }  
                  //(Only original changes)
console.log(newObj); // { a: 1, b: { c: 2 } } 
                  //(New Object unchanged)



