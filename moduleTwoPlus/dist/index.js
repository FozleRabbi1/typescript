"use strict";
const firstName = "Fozle";
const lastName = " Rabbi";
const userId = "123";
const mixedDataUsersName = [1, 2, 3, 5, 10, "cool", 1212, 'hjh', 125475];
let tupleMixedData = [123, "tuple", true, undefined];
tupleMixedData[0] = 456;
tupleMixedData[1] = "string";
const userInfo = {
    firstName: "fozle",
    // middleName : "rabbi",
    lastName: "shuvo"
};
// const userInfo2 : {
//     fixedValue ? : "this is fixed valuee";
//     fName ?: string;
//     mName ?: string;
//     lName ?: string;
// } = {
//     fixedValue : "this is fixed valuee",
//     fName : "forle",
//     // mName : "rabbi",
//     lName : "shuvo"
// }
const userInfo2 = {
    fixedValue: "this is fixed valuee",
    fName: "forle",
    mName: "rabbi",
    lName: "shuvo",
    mixedData: ["cool", "cool2", 123],
};
userInfo2.lName = "shohorawordi";
// console.log(firstName.concat(lastName));
// console.log(userId);
// console.log(mixedDataUsersName);
// console.log(tupleMixedData);
// console.log(userInfo)
// console.log(userInfo2)
// ==============>>>>>>>>    class 2-6   function
function add(num1, num2 = 0) {
    return num1 + num2;
}
// console.log(add(10))
const add2 = (num1, num2) => {
    return num1 + num2;
};
// console.log(add2(5,10))
// const poorUser = {
//     name : "fozle rabbi",
//     ballance : 0,
//     addBallance : (num1 : number, num2 : number) : number =>{
//                 return num1 + num2
//     }
// }
// const ballance = poorUser.addBallance(50,150)
// console.log(ballance)
// console.log(poorUser.addBallance)
const poorUser = {
    name: "fozle rabbi",
    ballance: 5,
    addBallance(num) {
        return `this is new Number ${num + this.ballance}`;
    }
};
// console.log(poorUser.addBallance(20))
// console.log(poorUser.addBallance(20))
const poorUser2 = {
    name: "fozle rabbi",
    balance: 5,
    addBalance(balance) {
        return `this is new Number ${balance + balance}`;
    }
};
// console.log(poorUser2.addBalance(10));
const poorUser3 = {
    name: "shuvo",
    ballance: 10,
    addSum(num1) {
        return `total ballance is ${num1 + this.ballance}`;
    }
};
// console.log(poorUser3.addSum(200))
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const squerNumber = numbers.map((n) => n * n);
console.log(squerNumber);
