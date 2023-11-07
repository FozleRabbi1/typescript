{
    // 
    // 


    // ==========================>>>>>>> typeof key
    type NumberNumaric = number | string;
    const add  = (number1 : NumberNumaric, number2 : NumberNumaric) : NumberNumaric =>{
        if(typeof number1 === "number" && typeof number2 === "number" ){
            return number1 + number2;
        }
        else{
            return number1.toString() + number2.toString();
            // const num1 = typeof number1 === "string" ? parseInt(number1) : number1;
            // const num2 = typeof number2 === "string" ? parseInt(number2) : number1;
            // // return num1 + num2
            // console.log(num1);
            // console.log(num2);
            
        }
    }
    // console.log(add(5,100));


    //==================>>>>>>>>>>  in guard type
    type NormalUser = {
        name : string,
    }
    type AdminUser = {
        name : string,
        role : "admin"
    }
    const getUser = (user : NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`His name is ${user.name} and he is a ${user.role}`);            
        }else{
            console.log(`His name is ${user.name}`)
        }
    }
    const normalUser : NormalUser = {
        name : 'mr. x'
    }
    const adminUser : AdminUser = {
        name : "Mr Y",
        role : "admin"
    }
    getUser(normalUser)
    getUser(adminUser)

    


    // 
    // 
}