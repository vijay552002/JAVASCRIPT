//Default Parameter Values
// function f (x, y = 7, z = 42) {
//     return x + y + z
// }
// console.log(f(1));

//Rest Parameter
// function f (x, y, ...a) {
//     return (x + y) * a.length
// }
// console.log(f(1, 2,3.3,"hello", true, 7));

//spread operator
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, ...params));

var str = "foo"
var chars = [ ...str ] 