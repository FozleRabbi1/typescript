"use strict";
{
    const persone1 = "car";
    const persone2 = "ship";
    // console.log(persone2);
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user5 = {
        name: "shuvo",
        age: 27
    };
    const user6 = {
        address: "nougon",
        des: "bangladesh"
    };
    const result = getPropertyValue(user6, 'des');
    // console.log(result)
    const getPropertyValue2 = (obj, key) => {
        return obj[key];
    };
    const user7 = {
        name: "cool",
        phone: 12012121212
    };
    const user8 = {
        address: "cande",
        work: "voboghure"
    };
    const result3 = getPropertyValue2(user8, 'work');
    console.log(result3);
}
