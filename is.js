const obj_1 = {
  a:1,
  b:{c:2}
}
const obj_2 = {
  a:1,
  b:2
}

const obj_3 = obj_1;
console.log(Object.is(obj_1, obj_2)); //Output: false
console.log(Object.is(obj_1, obj_3)); //Output: true


