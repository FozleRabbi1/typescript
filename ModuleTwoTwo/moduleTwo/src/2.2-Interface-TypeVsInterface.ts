{
    // 
    // 
    // 

    type User1 = {
        name : string;
        age : number
    }

    const user1 : User1 = {
        name : "shuvo",
        age : 27,
    }

    interface User2 {
        name : string;
        age : number;
    }
     const user2 : User2 = {
        name : "f rabbi",
        age : 27
     }

    //  console.log(user1);
    //  console.log(user2);


    type NewUser1 = {
        name : string;
        age : number;
    }
    // type NewUserWithIntersection = User2 & {role : string, serialNumber : number}  // intersection er bebohar
    type NewUserWithIntersection = NewUser1 & {role : string, serialNumber : number}  // intersection er bebohar
    const newUser : NewUserWithIntersection = {
        name : "fozle rabbi shuvo", 
        age : 27,
        role : "manger",
        serialNumber : 6        
    }
    // console.log(newUser)


    interface NewUser2 {
        name : string;
        age : number;
    }
    // interface UserWiwhRole2 extends NewUser1 {role : string, address : string, isMan : boolean}   // type Alias keu access kora jabe
    interface UserWiwhRole2 extends NewUser2 {role : string, address : string, isMan : boolean}   // extend er bebohar
    const newUser2 : UserWiwhRole2 = {
        name : "fozle rabbi extends",
        age : 27,
        role : "batpar",
        address : "voboghure",
        isMan : true
    }
    // console.log(newUser2);


    type Role = number[];
    const roleNumber : Role = [1,2,3];
    // console.log(roleNumber);
    

    interface Role2 {
        [index : number] : number
    }
    const roleNumber2 : Role2 = [1,2,3,4,5];
    // console.log(roleNumber2);


    type UserName = string[];
    const userName : UserName = ['rabbi', 'shuvo', 'fozle']
    // console.log(userName);
    

    // interface UserName2 {           // error show korse fixed korte hobe
    //     [keyof : string] : string
    // }
    // const  usersName2 : UserName2 = ['cool1', 'cool2', 'cool3'];
    // console.log(usersName2)

    type Add = (num1 : number, num2 : number) => number;       // this is type alias
    const add : Add = (num1, num2) => num1 + num2;
    // console.log(add(10,20));

    interface Add2 {
        (num1 : number , num2 : number) : number
    }
    const add2 : Add2 = (num1, num2) => num1 + num2
    // console.log(add2(50,100));
    
    

    
    

     

    



    // 
    // 
    // 
}