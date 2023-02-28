Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
console.log(typeof foo)
console.log(typeof bar)
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj)//{}
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj) )
console.log(Object.getOwnPropertySymbols(obj))

