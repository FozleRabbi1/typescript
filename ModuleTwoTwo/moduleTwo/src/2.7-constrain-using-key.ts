{


    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = 'bike' | 'car' | 'ship';
    const persone1 : Owner = "car";
    // console.log(persone1)

    type Owner2 = keyof Vehicle
    const persone2 : Owner2 = "ship"
    // console.log(persone2);


    const getPropertyValue = <x, y extends keyof x> (obj : x, key : y)=>{
        return obj[key]
    }
    const user5 = {
        name : "shuvo",
        age : 27
    }
    const user6 = {
        address : "nougon",
        des : "bangladesh"
    }

    const result = getPropertyValue(user6, 'des')
    // console.log(result)


    const getPropertyValue2 = <x , y extends keyof x> (obj : x, key : y) => {
        return obj[key]
    }

    const user7 = {
        name  : "cool",
        phone : 12012121212
    }
    const user8 = {
        address : "cande",
        work : "voboghure"
    }
    const result3 = getPropertyValue2(user8, 'work');
    console.log(result3);
    



    



}