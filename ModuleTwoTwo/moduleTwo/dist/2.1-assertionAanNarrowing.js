"use strict";
{
    //
    // let anything : any;
    // anything = "this is assertion type";
    // anything = 123;
    // (anything as number).toFixed();
    // console.log(anything)
    // let anything : any;
    // anything = "this is assertion type";
    // anything = (anything as string).toUpperCase();
    // console.log(anything);
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convartedValue = parseFloat(value) * 1000;
            return `this is convarted value ${convartedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
        else {
            return "age kisu patha";
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
        // Simulate an error
        throw { message: "This is a custom error messageee (throw)" };
    }
    catch (error) {
        console.log(error.message); // Access the 'message' property
    }
    //
}
