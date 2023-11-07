{

    //  interface and Alias type

    type User1 = {
        name : string,
        age: number
    }

    const userInfo : User1 = {
        name : " fozle rabbi",
        age : 27
    }

    interface User2 {
        name : string,
        age : number
    }
    const userInfo2 : User2 = {
        name :"fozle",
        age : 27
    }

    // interface AddmoreData extends User1 {role : string, phoneNum ?: string | number | boolean} 
    interface AddmoreData extends User2 {role : string, phoneNum ?: string | number | boolean} 
    const newData : AddmoreData = {
        name : " shuvo",
        age : 20,
        role : "vobo ghure",
        phoneNum : true        
    }

    // console.log(newData);

    //  ==============>>>>>>     Alias type
    type NumArray = number[];
    const num1 : NumArray = [1,2,3,4,5,6]

    // ==================>>>>>  interface type   (eivabe na korai valo)
    interface NumArray2 {
        [index : number] : number
    }
    const num2 : NumArray2 = [1,2,3,4,5,6]

    type StringArray2 = string[];
    const stringArray3 : StringArray2 = ['fsdf', 'gjg']

    
    type ArrayData<T> = Array<T>   //===============>> Generic dynamic data
    const test1 : ArrayData<number> = [1,2,3,4,5,6]
    const test2 : ArrayData<string> = [' fsdf', ' fsdfs', ' sdfsdf'];
    







    // =========================>>> Generic type / generic dynamic type

    const numArray : number[] = [1,2,3,4,5,6]
    const stringArray : string[]= ['sfsd' , 'dfs']
     
    type GenericArray = number[];
    const numArray2 : GenericArray = [1,2,3,4,5,6];
    const numArray3 : GenericArray = [98,7,6,5,4,3];

    type GenericArray2 = Array<number>
    const numArray4 : GenericArray2 = [1,2,3,4,5,6];

    type GenericArray3 = Array<string>
    const stringArray2 : GenericArray3 = ["sdf",'sdf', 'sdfsd'];

    type GenericDynamicArray <T> = Array<T>;
    const dynamicArray : GenericDynamicArray <number> = [1,2,3,4,5,6,];
    const dynamicArray2 : GenericDynamicArray <string> = ["fsdf", 'sdfdsf', 'fsdf'];
    const dynamicArray33 : GenericDynamicArray <boolean> = [true, false, true, true, false];
    const dynamicArray3 : GenericDynamicArray <{name: string, age : number, address : {home : string, town ? : string, houseNo : number}}> = [
        {
            name : "fozle rabbi", 
            age : 27,
            address : {
                home : "barite",
                houseNo : 101,
                town : "pabna"
            }
        }
    ]
    const {name, address : {home, town}} = dynamicArray3[0]
    // console.log(town)

    // Tuple 
    type GenericTuple <x, y, z> = [x, y, z]
    const numArray5 : GenericTuple<number, number, number> = [1,2,3]
    const numArray6 : GenericTuple<number, string, boolean> = [1,"string",true]
    // console.log(numArray6);


    






}