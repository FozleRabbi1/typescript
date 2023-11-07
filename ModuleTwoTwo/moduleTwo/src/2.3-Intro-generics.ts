{
  //
  //

  const numberArray: number[] = [1, 2, 3, 4, 5, 6];
  const stringArray: string[] = ["cool", "cool2", "cool3"];

  const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6];
  const stringArray2: Array<string> = ["sdf", "sdfs", "sdfds"];

  type GenericArray = Array<number>;
  const genericarray: GenericArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const genericarray2: GenericArray = [454, 654, 54, 354, 534];

  type GenericDynamicType<T> = Array<T>;
  const numberArray3: GenericDynamicType<number> = [12, 3, 4, 5, 6, 6];
  const stringArray3: GenericDynamicType<string> = ["sdf", "fsdfsd", "fsdfsd"];

  type GenericArrayOfObject<T> = Array<T>;

  const userInfo: GenericArrayOfObject<{ name: string; age: number }> = [
    {
      name: "fozle rabbi",
      age: 27,
    },
    {
      name: "shanto",
      age: 24,
    },
  ];
  //   console.log(userInfo)

  const newStudent: GenericArrayOfObject<{
    name: string;
    age: number;
    address: {
      vill: string;
      thana: string;
      roadNum: number;
    };
    isMan: boolean;
  }> = [
    {
      name: "fozle rabbi new",
      age: 27,
      address: {
        vill: "chorkodim para",
        thana: "ishwardi",
        roadNum: 102,
      },
      isMan: true,
    },
    {
      name: "shanto",
      age: 24,
      address: {
        vill: "dhornai",
        thana: "pothnitola",
        roadNum: 200,
      },
      isMan: true,
    },
  ];

  //   const {name, age, address : {vill, thana, roadNum}} = newStudent[0];
  const {
    name,
    age,
    address: { vill, thana, roadNum },
  } = newStudent[1];
  //   const { vill  } = address;
//   console.log(name, vill, thana);


// type GenericTuple<x, y> = [x, y]
// const user5 : GenericTuple<string, number> = ['cool', 12];
// console.log(user5)

type GenericTuple<x, y> = [x, y]
const user5 : GenericTuple<number, number> = [6, 12];
const user6 : GenericTuple<string, string> = ["cool1", 'cool2']
const myData : GenericTuple<number, {name: string, phoneNo: number}> = [101010, {name  : "shuvooo", phoneNo : 10101212}]

console.log(user5)
console.log(user6)
console.log(myData)









  //
  //
}
