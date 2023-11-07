{
  //
  //
  //
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`this ${this.name} make sound ${this.sound}`);
    }
  }
  const dog = new Animal("german sheprid bhai dog", "dog", "gheu gheu");
  const cat = new Animal("deshi cat", "cat", "meow meow");
  //   dog.makeSound()

  class Animal2 {
    constructor(
      public name: string,
      public brand: string,
      public sound: string
    ) {}

    gunagun(){
        return `this is ${this.brand} jater ${this.name}`
        // console.log( `this is ${this.brand} jater ${this.name}`)
    }
  }
  const dog2 = new Animal2('local dogggggg', 'deshi gat', 'ghew ghew')
  const cow = new Animal2('bideshi friziannnn', 'frizan', 'hamba  hamba')
//   dog2.gunagun()  
console.log(cow.gunagun());


  //
  //
  //
}
