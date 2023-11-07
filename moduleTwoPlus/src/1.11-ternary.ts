{
  const age: number = 5;

  // if(age >= 18){
  //     console.log("adult");
  // }else{
  //     console.log('not adult');
  // }

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log(isAdult)
  // console.log({isAdult})

  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Gust"; //=====>>>      ?? nullish coalescing  operator  (null and undefine er upor vitti kore kono kaj kora)

  const isAuthenticated2 = ""; //========>>>  ? ternaty operator
  const result2 = isAuthenticated2 ? isAuthenticated2 : "Gust";
  // console.log(result2);

  type UserInfo = {
    name: string;
    age: number;
    address: {
      vill?: string;
      town?: string;
      thana: string;
      jela: string;
    };
    permanentAddress?: {
      vill?: string;
      town?: string;
      thana?: string;
      jela?: string;
    };
  };
  const userInfo: UserInfo = {
    name: "fozle rabbi",
    age: 27,
    address: {
      vill: "chorkorim para",
      thana: "Ishwardi",
      jela: "pabna",
    },
    permanentAddress: {
    //   vill: "cholimpur",
    },
  };

  const permanentAddress = userInfo?.permanentAddress?.vill ?? "No Premant Address";

  console.log(permanentAddress);






}
