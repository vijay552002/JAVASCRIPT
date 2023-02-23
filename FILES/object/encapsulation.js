class Person {
    name;
    constructor(name) {
        this.name = name;
      }
    
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
  class Student extends Person {

    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
      
    }
  
  }
  const summers = new Student('Summers', 1);
 
  summers.introduceSelf(); 
  console.log(summers.canStudyArchery()); 
  
  
  
  class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log('You called me?');
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); 
  
  