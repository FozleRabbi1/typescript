"use strict";
var _a, _b;
{
    const age = 5;
    // if(age >= 18){
    //     console.log("adult");
    // }else{
    //     console.log('not adult');
    // }
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log(isAdult)
    // console.log({isAdult})
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Gust"; //=====>>>      ?? nullish coalescing  operator  (null and undefine er upor vitti kore kono kaj kora)
    const isAuthenticated2 = ""; //========>>>  ? ternaty operator
    const result2 = isAuthenticated2 ? isAuthenticated2 : "Gust";
    const userInfo = {
        name: "fozle rabbi",
        age: 27,
        address: {
            vill: "chorkorim para",
            thana: "Ishwardi",
            jela: "pabna",
        },
        permanentAddress: {
        //   vill: "cholimpur",
        },
    };
    const permanentAddress = (_b = (_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.permanentAddress) === null || _a === void 0 ? void 0 : _a.vill) !== null && _b !== void 0 ? _b : "No Premant Address";
    console.log(permanentAddress);
}
