const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);
fruits[5] = "mango";
console.log(fruits[5]); 
console.log(Object.keys(fruits)); 
console.log(fruits.length);
console.log(fruits);
fruits.length = 10;
console.log(fruits); 
console.log(Object.keys(fruits)); 
console.log(fruits.length); 
console.log(fruits[8]);
fruits.length = 2;
console.log(Object.keys(fruits)); 
console.log(fruits.length);
console.log(fruits);

