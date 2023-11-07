"use strict";
{
    const num1 = 12;
    const text = "";
    const boolen = true;
    const mixed = ''; // '' / 123 / true/false 
    const add = 120;
    const add2 = 200;
    const addSum = add + add2;
    const userInfo = {
        nationality: "bangladeshi",
        name: "fozle rabbi",
        age: 27,
        currentAddress: {
            vill: "chorkodim para",
        }
    };
    const userInfo2 = {
        nationality: "bangladeshi",
        name: "sabbir hosain",
        age: 23,
        currentAddress: {
            town: "nougon",
            homeNumber: 123
        },
        presentAddress: {
            town: "shantahar",
            homeNumber: 456
        }
    };
    // userInfo2.currentAddress.town = "baper bari";
    // userInfo2.presentAddress.town = "age jekhane chilam";   //=========>> update nisse na
    userInfo2.currentAddress.homeNumber = 450;
    // console.log(userInfo)
    // console.log(userInfo2)
    const userNames = ['shimul', 'nishan', 'riyazul', 'rabbi'];
    const mixedArray = ['shimul', 'nishan', 'riyazul', 'rabbi', 420];
    const tupleTag = ["tuple", 123];
    // const tuple2 : [number, string] = ["error", 120]   // =======  error show korbe (number er jaigai string r string er jaigai number)
    const numberArray = [23, 4, 5, 6, 7, 8];
    const newArray = [10, 20, 30, 40, 50, 60];
    const user3 = {
        name: "fozle rabbi",
        age: 27,
        home: "chorkodim para"
    };
    const user4 = {
        name: 'shuvo',
        age: 26,
        home: "ishwardi"
    };
    const allUser = Object.assign(Object.assign({}, user3), user4);
    console.log(allUser);
}
