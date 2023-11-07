"use strict";
{
    //
    //
    const numberArray = [1, 2, 3, 4, 5, 6];
    const stringArray = ["cool", "cool2", "cool3"];
    const numberArray2 = [1, 2, 3, 4, 5, 6];
    const stringArray2 = ["sdf", "sdfs", "sdfds"];
    const genericarray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const genericarray2 = [454, 654, 54, 354, 534];
    const numberArray3 = [12, 3, 4, 5, 6, 6];
    const stringArray3 = ["sdf", "fsdfsd", "fsdfsd"];
    const userInfo = [
        {
            name: "fozle rabbi",
            age: 27,
        },
        {
            name: "shanto",
            age: 24,
        },
    ];
    //   console.log(userInfo)
    const newStudent = [
        {
            name: "fozle rabbi new",
            age: 27,
            address: {
                vill: "chorkodim para",
                thana: "ishwardi",
                roadNum: 102,
            },
            isMan: true,
        },
        {
            name: "shanto",
            age: 24,
            address: {
                vill: "dhornai",
                thana: "pothnitola",
                roadNum: 200,
            },
            isMan: true,
        },
    ];
    //   const {name, age, address : {vill, thana, roadNum}} = newStudent[0];
    const { name, age, address: { vill, thana, roadNum }, } = newStudent[1];
    const user5 = [6, 12];
    const user6 = ["cool1", 'cool2'];
    const myData = [101010, { name: "shuvooo", phoneNo: 10101212 }];
    console.log(user5);
    console.log(user6);
    console.log(myData);
    //
    //
}
