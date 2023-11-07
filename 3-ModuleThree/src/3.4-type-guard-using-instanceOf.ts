{
    // 
    // 
    // 

    class Animal {
        name : string;
        species : string;
        constructor(name : string, species : string){
            this.name = name;
            this.species = species;
        }
        makeSound(sound : string){
            console.log(`this ${this.name} make sound ${sound}`)            
        }
    }

    class Dog extends Animal{
        brand : string;
        constructor(name : string, species : string, brand : string){
            super(name, species)
            this.brand = brand
        }
        lifeStyle(){
            console.log('dipend what kind of dog it is');
            
        }
    }
    class Cat extends Animal{
        constructor(name: string, species : string){
            super(name, species)
        }
        food(){
            console.log('cat it fish');
            
        }
    }
    const isDog = (animal: Animal) : animal is Dog =>{
        return animal instanceof Dog;
    }
    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat
    }
    const getAnimal=(animal : Animal)=>{
        if(isDog(animal)){
            animal.lifeStyle()
        }
        else if(isCat(animal)){
            animal.food()
        }
        else{
            animal.makeSound
        }
    }
    // const getAnimal=(animal : Animal)=>{
    //     if(animal instanceof Dog){
    //         animal.lifeStyle()
    //     }
    //     else if(animal instanceof Cat){
    //         animal.food()
    //     }
    //     else{
    //         animal.makeSound
    //     }
    // }
    const dog = new Dog('laped bhai', ' gheu gheu', 'foren')
    const cat = new Cat(' mini cat', ' meow meow');
    // dog.makeSound("gheu gheu")
    getAnimal(cat)

    


    // 
    // 
    // 
}