//String Interpolation
// var customer = { name: "Foo" }
// var card = { amount: 7, product: "Bar", unitprice: 42 }
// var message = `Hello ${customer.name},
// want to buy ${card.amount} ${card.product} for
// a total of ${card.amount * card.unitprice} bucks?`
// console.log(message);

//Custom Interpolation
//get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`

//Raw String Access
function quux (strings, ...values) {
    console.log(strings[0],'1');
    console.log(strings.raw[0],'2');
    console.log(values[0]);
    strings[1] === "bar"
    strings.raw[1] === "bar"
}
quux`foo\n${ 42 }bar`

console.log(String.raw`foo\n${ 42 }bar`); 

