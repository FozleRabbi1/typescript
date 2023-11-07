{



    // const createPromise = () =>{
    //     return new Promise ((resolve, reject)=>{
    //         const data : string = "resolve data";
    //         // const data : string | null = null;
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject("data not found")
    //         }
    //     })
    // }
    // const getData = async() =>{
    //     const data = await createPromise();
    //     console.log(data);        
    // }
    // getData();
    
    const createPromise = (): Promise<string> =>{
        return new Promise<string> ((resolve, reject)=>{
            const data : string = "resolve data";
            // const data : string | null = null;
            if(data){
                resolve(data)
            }
            else{
                reject("data not found")
            }
        })
    }

    const getData = async() : Promise<void> =>{
        const data : string = await createPromise();
        console.log(data);
        
    }
    // getData();

    // const getData = async() : Promise<string> =>{
    //     const data : string = await createPromise();
    //     // console.log(data);     // console log use korar karone function void dekhasse karon ekhane kisu return korse na
    //     return data;     
    // }
    // getData();


    const objectTypePromise = () : Promise<{message : string}> =>{
        return new Promise<{message : string}>((resolve,  reject)=>{
            const data : {message : string} = {message : "this is massage"}
            if(data){
                resolve(data)
            }else{
                reject("data not found")
            }
        })
    }

    const getObjData = async() : Promise<void> =>{
        const data : {message : string} = await objectTypePromise();
        console.log(data.message)
    }
    // getObjData();



    type Message = {message : string};
    const somethingMessage = () : Promise<Message> =>{
        return new Promise<Message> ((resolve, reject)=>{
            const data : Message = {message : "this is somethig message"}
            if (data){
                resolve(data)
            }else{
                reject(data)
            }
        })
    }
    const somethigGetMessage = async() : Promise<Message> =>{
        const data : Message = await somethingMessage();
        return data
    }


    type Todo = {
        userId : number;
        id : number;
        title : string;
        body : string;
    }
    const getTodoData = async() : Promise<Todo> =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await res.json();
        // console.log(data);
        return data
    }
    getTodoData();




    






}