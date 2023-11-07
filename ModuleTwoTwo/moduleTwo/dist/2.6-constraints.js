"use strict";
{
    const copycode = (student) => {
        const copyText = "Next level web dev";
        return Object.assign(Object.assign({}, student), { copyText });
    };
    // const result0 = copycode({cool : "cooolllll"})      // eita kaj korbe na
    const result = copycode({
        id: 101,
        name: "mr x",
        email: "x@gmail.com",
    });
    const result2 = copycode({
        id: 102,
        name: "mr y",
        email: "y@gmail.com",
        age: 27,
        home: "ishwardi",
    });
    console.log(result);
    console.log(result2);
}
