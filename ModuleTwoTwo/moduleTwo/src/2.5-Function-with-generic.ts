{


    const normalReturnArrayFun = (param : string) : string[] =>{
        return [param]
    }
    // console.log(normalReturnArrayFun("this is normal fun",));

    const dynamicGenericReturnArray = <T>(param : T) : T[] =>{
        return [param]
    }
    const result = dynamicGenericReturnArray<string>("bangladesh") ;

    type User = {
        name : string;
        age : number;
    }
    const result2 = dynamicGenericReturnArray<User>({
        name : "fozle rabbi",
        age : 27
    })
    // console.log(result2);


    const dynamicGenericArray = <T> (param : T)  :T [] =>{
        return [param]
    }    
    const res = dynamicGenericArray<number>(1)
    // console.log(res);
    interface User2{
        id: number;
        name : string;
    }
    const res2 = dynamicGenericArray<User2>({
        id: 101,
        name : "vokam"
    })
    // console.log(res2);



    // ===================================>>> Tuple
    const tupleReturnArrayFun = <S, N, B>(param : S, param2 : N, param3 : B ) : [S, N, B] =>{
        return [param, param2, param3]
    }
    // const result1 = tupleReturnArrayFun('string', 101, true)
    const result1 = tupleReturnArrayFun<string, number, boolean>('string', 101, true)   // dui vabei kaj korbe
    // console.log(result1);
    
    type User3 = {
        name : string;
        address : string;
    }
    const result5 = tupleReturnArrayFun<string, boolean, User3> ("rabbi", true, {
        name : "shuvo",
        address : "pabna"
    })
    // console.log(result5);


    // ===============>>> dynamic type generic return object
    const addCoursrToStudent =<T> (student : T)=>{
        const course = "next level web development";
        return {
            ...student,
            course
        }
    }

    const student1 = addCoursrToStudent({name : "tis ma kha", age : 27})
    const student2 = addCoursrToStudent({name : "shanto", address : "nougon", watch : "apple watch"})
    const info = {
        bari : "chorkodim para",
        thana : "ishwardi (cool)"
    }
    const student3 = addCoursrToStudent(info)
    // console.log(student1);
    // console.log(student2);
    console.log(student3);
    
    

    
        



}