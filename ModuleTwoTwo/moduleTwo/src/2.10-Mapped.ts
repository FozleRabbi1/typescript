{


    const numberOfArray : Array<number> = [1,2,3,4,5]
    const stringOfArray : Array<string> = numberOfArray.map(n => n.toString());
    // console.log(stringOfArray);

    type AreaNumber ={
        hight : number;
        width : number;
    }
    type Height = AreaNumber['hight']  // lookup type
    type AreaString = {
        [key in keyof AreaNumber] : string
    }


    type Area = {
        height : number;
        width : number;
    }
    type AreaStirng2 = {
        [key in keyof Area] : string
    }

    type AreaDefine <T> = {
        [key in keyof T] : T[key]   // ekhane T[key] lookup kora hoyse
    }
    const area2 : AreaDefine<{height : string; width : number}>={
        height : '100',
        width : 50
    }    
    // console.log(area2);
    

    


    
    


}