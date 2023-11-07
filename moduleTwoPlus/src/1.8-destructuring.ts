{

    
    //  destructuring  in object
    const userInfo = {
        name : "fozle rabbi",
        address : {
            village : "chorkodim para",
            thana : " ishwardi",
            jela : " pabna"
        },
        contactNum : "01743979097",
        isMan : true
    }
    const {name, address : {village, thana}} = userInfo;
    // console.log(name, village, thana)


    const friendsName = ['shimul', 'nishan', 'sabbir', 'shanto', 'riyazul', 'cool'];
    // const [a,b,brother, ...d] = friendsName;   // rest operator  er sahajje destructuring kora
    const [,,brother, ...d] = friendsName;
    console.log(d)











}