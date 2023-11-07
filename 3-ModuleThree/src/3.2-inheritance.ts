{
    // 
    // 

    class Persone {
        name : string;
        age : number;
        email : string;
        constructor(name : string, age: number, email : string){
            this.name =name;
            this.age = age;
            this.email =email;
        }
        commonMethod (time : number){
            return `${this.name} sleeping ${time} hours`
        }
    }

    class Student extends Persone{
        constructor(name : string, age : number, email : string){
            super(name, age, email)
        }
    }
    const student1 = new Student('shanto', 23, 'shanto@gmail.com');


    class Teachers extends Persone{
        designation : string;
        constructor(name : string, age : number, email : string, designation : string){
            super(name, age, email)
            this.designation = designation
        }
    }
    const teacher1 = new Teachers('Rofiq sir', 50, 'sir@gmail.com', 'professor');
    
    console.log(student1);
    console.log(student1.commonMethod(7));
    console.log(teacher1);
    console.log(teacher1.commonMethod(7));
    

    
    
    


    // 
    // 
}