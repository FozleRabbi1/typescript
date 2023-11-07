{

    // ==============>>> 
    const numArray : number [] = [1,2,3,4,5,6];   // =========>> normal number type array
    const stringArray : string [] = ['cool', "cool 1", "cool 2"] // =========>> normal string type array
    const booleanArray : boolean[] = [true, false] // =========>> normal boolean type array


    // =========>>>>>> Alias type Obj
    type NumberArray = number[];   
    const aliasNumArray : NumberArray = [1,2,3,4,5,6] ;

    type StringArray = string[];
    const aliasStringArray : StringArray = ['cool', "cool 1 ", ' cool 3']

    type User1 = {
        name : string;
        age : number | string
    }
    const userInfo : User1 = {
        name : " fozle rabbi",
        age : 27
    }


     // =========>>>>>> interface type obj
     interface User2 {
        name : string,
        age : number
     }
     const user2 : User2 = {
        name : 'fozle rabbi',
        age : 27
     }

    // ======== extend object data
    type User3 = {
        name : string;
        age : number
    }
    
    type NewUser = User3 & {role : string, phoneNumber ?: number | string}
    const newUser : NewUser = {
        name : ' Fozle rabbi',
        age : 27,
        role : "front end developer",
        phoneNumber :" 1010101012121"
    }

    // ========== extend object data with interface
    interface User4 {
        name : string,
        age : number
    }
    interface NewUserData extends User4{role : string, address : string}
    const newUser2 : NewUserData = {
        name : ' shanto',
        age : 24,
        role : "react developer",
        address : "nougon"
    }

    // =================>>>>> Generic type
    const number : number[] = [1,2,3,4,5]
    const number2 : Array<number> = [1,2,3,4,5]

    type GenerictArray = Array<number>;
    const numArray2 : GenerictArray = [1,2,3,4,5];

    type GenericArrayString = Array<string>
    const stringArray2 : GenericArrayString = [" dfs",' dsfs', ' dsfsdf' ];

    type DynamicGenericArray<T> = Array<T>;
    const numberDynamiArray : DynamicGenericArray<number> = [1,2,3,4,5,6];
    const stringDynamicArray : DynamicGenericArray<string> = [' dsfsd', ' fsdf', ' sdfds'];
    const arrayWithObjectDynamicGeneric : DynamicGenericArray<{name: string, age : number}> = [
        {
            name : ' fozle rabbi',
            age : 27
        }
    ];

    type UserForGeneric = {        //===============>> Alias type 
        name : string,
        age : number,
        no ?: number,
    }
    const genericDynamicTypeObj : DynamicGenericArray<UserForGeneric> = [
        {
            name : " shuvo",
            age : 27,
            no : 10121212121
        }
    ]

    interface UserForGeneric2  {   // ==============>> interface type
        name : string,
        age : number,
        no ?: number,
    }
    const genericDynamicTypeObj2 : DynamicGenericArray<UserForGeneric2> = [
        {
            name : " shuvo",
            age : 27,
            no : 10121212121
        }
    ]

    // =============>>>>  Tuple
    type GenericTuple <x,y,z> = [x,y,z]
    const number3 : GenericTuple<number, number, number> = [1,2,3];
    const number4 : GenericTuple<number, string, boolean> = [1,' dsf', true];


    



    // ===========================>>>  Constraints
    const constraintsFun = <T extends {id: number | string, name : string, email : string}>(student : T) =>{
        const addText = "this text then comming value"
        return{
            ...student,
            addText
        }
    }

    const result = constraintsFun<{
        id : number;
        name: string;
        email : string;
        other : string;
    }>({
        id : 101,
        name : "fozle rabbi",
        email : "x@gmail.com",
        other : "othen value",
    })

    const result2 = constraintsFun<{
        id : number |string;
        name : string;
        email : string;
        other ?: string;
    }>({
        id : '102',
        name : "shanto",
        email : "z@gmail.com"
    })

    // console.log(result);
    // console.log(result2);
    











}