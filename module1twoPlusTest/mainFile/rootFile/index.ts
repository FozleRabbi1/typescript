{
  const num1: number = 12;
  const text: string = "";
  const boolen: boolean = true;
  const mixed: number | string | boolean = ""; // '' / 123 / true/false

  type Num2 = number;
  const add: Num2 = 120;
  const add2: Num2 = 200;
  const addSum = add + add2;
  // console.log(addSum);

  type User = {
    nationality: "bangladeshi"; // literal type
    name: string;
    age: number;
    currentAddress: {
      vill?: string;
      town?: string;
      homeNumber?: string | number;
    };
    presentAddress?: {
      vill?: string;
      town?: string;
      homeNumber?: string | number;
    };
  };

  const userInfo: User = {
    nationality: "bangladeshi",
    name: "fozle rabbi",
    age: 27,
    currentAddress: {
      vill: "chorkodim para",
    },
  };

  const userInfo2: User = {
    nationality: "bangladeshi",
    name: "sabbir hosain",
    age: 23,
    currentAddress: {
      town: "nougon",
      homeNumber: 123,
    },
    presentAddress: {
      town: "shantahar",
      homeNumber: 456,
    },
  };

  // userInfo2.presentAddress.town = "age jekhane chilam";   //=========>> update nisse but code a error dekhai
  // userInfo2.currentAddress.town = "baper bari";
  // userInfo2.currentAddress.homeNumber = 450;

  // console.log(userInfo)
  // console.log(userInfo2)

  const userNames: string[] = ["shimul", "nishan", "riyazul", "rabbi"];
  const mixedArray: (string | number)[] = [
    "shimul",
    "nishan",
    "riyazul",
    "rabbi",
    420,
  ];
  const tupleTag: [string, number] = ["tuple", 123];
  // const tuple2 : [number, string] = ["error", 120]   // =======  error show korbe (number er jaigai string r string er jaigai number)

  const numberArray: number[] = [23, 4, 5, 6, 7, 8];

  type NumberArrayType = number[];
  const newArray: NumberArrayType = [10, 20, 30, 40, 50, 60];
  // newArray.forEach(n => console.log(n))

  type NewUser = {
    name: string;
    age: number;
    home: string;
  };

  const user3: NewUser = {
    name: "fozle rabbi",
    age: 27,
    home: "chorkodim para",
  };

  const user4: NewUser = {
    name: "shuvo",
    age: 26,
    home: "ishwardi",
  };

  const allUser = {
    ...user3,
    ...user4,
  };
  // console.log(allUser)

  const restOperatonFun = (...allFriends: string[]) => {
    // console.log(allFriends)
    // allFriends.forEach(f => console.log(f))
  };
  restOperatonFun("fahim", "rabeya", "shanto", "hanif", "khusbu");
  const friends1: string[] = ["fahim", "rabeya", "shanto", "hanif", "khusbu"];
  const friends2: string[] = ["ami", "tumi", "se"];
  friends1.push(...friends2);
  // console.log(friends1);
  // friends1.map(f => console.log(f) )

  const voidFun = () => {
    console.log("this is void function");
  };
  // voidFun();

  // ==========>> distructuring

  const destructuringObg = {
    name: "name1",
    home: "home1",
    address: {
      village: "village1",
      thana: "thana1",
      jela: "jela1",
    },
  };
  const {
    name,
    address: { thana },
  } = destructuringObg;
  // console.log( thana)

  type IsTrue = boolean;
  const isAdmin: IsTrue = false;

  type UserName = string;
  // console.log(isAdmin)
  const namee: UserName = "user name";
  // console.log(namee);

  const sum = (num1: number, num2: number) => num1 + num2;
  // console.log(sum(5,10))

  type AddSum = (num1: number, num2: number) => number;
  const addsum2: AddSum = (num1, num2) => num1 + num2;
//   console.log(addsum2(10, 90));



type FrontEndDeveloper = "fakibaz" | "front end developer";
type BackendDeveloper = 'full stack developer' | "expart";

const frontEndDev : FrontEndDeveloper = 'front end developer';
const fullStack : BackendDeveloper = 'full stack developer';

type FullStackDeveloper = FrontEndDeveloper | BackendDeveloper;
const fullstack : FullStackDeveloper = 'expart';
console.log(fullstack)











}
