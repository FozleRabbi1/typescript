{

    type Persone = {
        name : string;
        age : number;
        email ?: string;
    }
    type Name = Pick<Persone, 'name'>
    type AgeEmail = Pick<Persone , 'age' | 'email'>
    type Contact = Omit<Persone, 'name' | 'age'>
    type ReqiredPerson = Required<Persone>
    type PartialPersone = Partial<Persone>

    type PersoneReadOnly = Readonly<Persone>
    const persone1 : ReqiredPerson = {
    // const persone1 : PersoneReadOnly = {
        name : "mr. x",
        age : 24,
        email : "a@gmail.com"
    }
    // persone1.name = "cool"

    type MyObj = {      // manuyal 
        a : string;
        b : string;
        c : string;
        d : string;
    }
    type MyObj2 = Record<string, string>   // dynamic
    const obj1 : MyObj2 = {
        a : "aa",
        b : "bb",
        c : "cc",
    }


    type MyObj3 = Record<string, unknown>   // dynamic  (key string ,, dynamic type)
    const obj3 : MyObj3 = {
        a : "aa",
        b : "bb",
        c : "cc",
        d : 27
    }

    // const emptyObj : Record<string, string> = {}  //===================>> error dibe
    const emptyObj : Record<string, unknown> = {}
    emptyObj.name = "shuvo";
    emptyObj.age = 27;
    console.log(emptyObj);
    








}