{

    const value : string = 'union and intersectionnnnnnn cool'
    // console.log(value);

    // type Developer = "fakibaz" | "juniyorDeveloper";
    // const dev : Developer = "juniyorDeveloper"
    // console.log(dev)

    type JuniyorDeveloper = 'fakibaz' | 'juniyor Deleloper';
    type FullStack = 'Front End Developoer' | 'Full Stack Developer';
    type Developer = JuniyorDeveloper | FullStack;
    const dev : Developer = "Front End Developoer";
    console.log(dev)

    
    type User = {
        name : string;
        age : number;
        email ? : string;
        gender : "male" | "female";
        blordGroup : "A+" | "B+" | "AB+"
    }

    const userInfo : User = {
        name : "shuvo",
        age : 27,
        gender : "male",
        blordGroup : "B+"
    }   
    // console.log(userInfo);

    type FrontEndDeveloper = {
        skills1 : string[] ;
        designation1 : "Front-End Developer";
    }
    type BackEndDeveloper ={
        skills2 : Array<string>;
        designation2 : "Back-End Developer"
    }

    type Webdeveloper = BackEndDeveloper & FrontEndDeveloper;

    const fullStackDeveloper : Webdeveloper = {
        skills1 : ["html", "css", "js"],
        skills2 : ['js', 'node.js', 'expree.js', 'mongoDB'],
        designation1 : "Front-End Developer",
        designation2 : 'Back-End Developer'
    }
    // console.log(fullStackDeveloper)


    





}