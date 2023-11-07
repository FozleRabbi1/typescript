"use strict";
{
    // ==============>>> 
    const numArray = [1, 2, 3, 4, 5, 6]; // =========>> normal number type array
    const stringArray = ['cool', "cool 1", "cool 2"]; // =========>> normal string type array
    const booleanArray = [true, false]; // =========>> normal boolean type array
    const aliasNumArray = [1, 2, 3, 4, 5, 6];
    const aliasStringArray = ['cool', "cool 1 ", ' cool 3'];
    const userInfo = {
        name: " fozle rabbi",
        age: 27
    };
    const user2 = {
        name: 'fozle rabbi',
        age: 27
    };
    const newUser = {
        name: ' Fozle rabbi',
        age: 27,
        role: "front end developer",
        phoneNumber: " 1010101012121"
    };
    const newUser2 = {
        name: ' shanto',
        age: 24,
        role: "react developer",
        address: "nougon"
    };
    // =================>>>>> Generic type
    const number = [1, 2, 3, 4, 5];
    const number2 = [1, 2, 3, 4, 5];
    const numArray2 = [1, 2, 3, 4, 5];
    const stringArray2 = [" dfs", ' dsfs', ' dsfsdf'];
    const numberDynamiArray = [1, 2, 3, 4, 5, 6];
    const stringDynamicArray = [' dsfsd', ' fsdf', ' sdfds'];
    const arrayWithObjectDynamicGeneric = [
        {
            name: ' fozle rabbi',
            age: 27
        }
    ];
    const genericDynamicTypeObj = [
        {
            name: " shuvo",
            age: 27,
            no: 10121212121
        }
    ];
    const genericDynamicTypeObj2 = [
        {
            name: " shuvo",
            age: 27,
            no: 10121212121
        }
    ];
    const number3 = [1, 2, 3];
    const number4 = [1, ' dsf', true];
    // ===========================>>>  Constraints
    const constraintsFun = (student) => {
        const addText = "this text then comming value";
        return Object.assign(Object.assign({}, student), { addText });
    };
    const result = constraintsFun({
        id: 101,
        name: "fozle rabbi",
        email: "x@gmail.com",
        other: "othen value",
    });
    const result2 = constraintsFun({
        id: '102',
        name: "shanto",
        email: "z@gmail.com"
    });
    // console.log(result);
    // console.log(result2);
}
