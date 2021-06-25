var ar = [];
var x = {a: "b", c: "d" };
ar.push(x);

console.log("should be true: ", ar[0] === x);
console.log(ar.some(el => el === x))

ar.push({a: "b", c: "d" });
// this will log false because i have created 
// a different reference for a new object.
console.log("should be false: ", ar[1] === x);

ar.push(x);
console.log('ARRAY', ar)

console.log("should be true", ar[2] === x);
