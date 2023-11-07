{

    type Student = {
        name : string;
        age ?: number;
        address : string;
        contactNo ? : string | number;
        isMane : boolean
    }

    const student1 : Student = {
        name : "fozle rabbi",
        age : 27,
        address : "chorkodim para",
        contactNo : "01010101",
        isMane : true
    }

    const student2 : Student ={
        name : "cool name",
        age : 27,
        address : "pabna",
        isMane : true
    }
    // console.log(student2)
 
    type UserName = string;
    type IsAdmin = true | string;
    const userName : UserName = "fozle rabbi shuvo";
    const isAdmin : IsAdmin = true;
    const userName2 : UserName = "cool name" 
    // console.log(userName)
    // console.log(userName2)

    type NumFun = (num1 : number, num2 : number) => number;

    const  add : NumFun = (num1, num2) => num1 + num2;
    const add2 : NumFun = (num1, num2) => num1 - num2
    console.log(add(5,10))
    console.log(add2(50,10))








}