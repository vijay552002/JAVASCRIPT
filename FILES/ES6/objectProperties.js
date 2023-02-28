//Property Shorthand
// var x = 0, y = 0
// obj = { x, y }
// console.log(obj)

//Computed Property Names
// let obj = {
//     foo: "bar",
//     [ "baz" + quux() ]: 42
// }

//Method Properties
obj = {
    foo (a, b) {
        console.log(a);
    },
    bar (x, y) {
       
    },
    *quux (x, y) {
        yield x;
        yield y + 10;
    }
}
const a=2;
const b=3;
obj.foo()



