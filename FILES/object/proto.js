const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet();
  myObject.toString(); 
  Object.getPrototypeOf(myObject);
  const myDate = new Date();
  let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object); 