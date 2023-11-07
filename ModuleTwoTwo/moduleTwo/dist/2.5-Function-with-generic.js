"use strict";
{
    const normalReturnArrayFun = (param) => {
        return [param];
    };
    // console.log(normalReturnArrayFun("this is normal fun",));
    const dynamicGenericReturnArray = (param) => {
        return [param];
    };
    const result = dynamicGenericReturnArray("bangladesh");
    const result2 = dynamicGenericReturnArray({
        name: "fozle rabbi",
        age: 27
    });
    // console.log(result2);
    const dynamicGenericArray = (param) => {
        return [param];
    };
    const res = dynamicGenericArray(1);
    const res2 = dynamicGenericArray({
        id: 101,
        name: "vokam"
    });
    // console.log(res2);
    // ===================================>>> Tuple
    const tupleReturnArrayFun = (param, param2, param3) => {
        return [param, param2, param3];
    };
    // const result1 = tupleReturnArrayFun('string', 101, true)
    const result1 = tupleReturnArrayFun('string', 101, true); // dui vabei kaj korbe
    const result5 = tupleReturnArrayFun("rabbi", true, {
        name: "shuvo",
        address: "pabna"
    });
    // console.log(result5);
    // ===============>>> dynamic type generic return object
    const addCoursrToStudent = (student) => {
        const course = "next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCoursrToStudent({ name: "tis ma kha", age: 27 });
    const student2 = addCoursrToStudent({ name: "shanto", address: "nougon", watch: "apple watch" });
    const info = {
        bari: "chorkodim para",
        thana: "ishwardi (cool)"
    };
    const student3 = addCoursrToStudent(info);
    // console.log(student1);
    // console.log(student2);
    console.log(student3);
}
