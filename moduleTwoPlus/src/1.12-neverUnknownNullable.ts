{
  const searchFun = (value: string | null | number) => {
    if (value) {
      console.log("value is searching");
    } else {
      console.log(value);
    }
  };
  // searchFun(12)

  const carSpeedPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const speed = (value * 100) / 3600;
      console.log(`speed is ${speed.toFixed(2)} -ps`);
    } else if (typeof value === "string") {
      const getNumber = parseInt(value.split(" ")[0]);
      const speed = (getNumber * 100) / 3600;
      console.log(`speed is ${speed.toFixed(2)} -ps`);
    } else {
      console.log("age ekta gari keno");
    }
  };
  //   carSpeedPerSecond("20  speed");

  const bikeSpeed = (speedValue: unknown) => {
    if (typeof speedValue === "number") {
      const result = (speedValue * 100) / 3600;
      console.log(`speed is ${result.toFixed(2)} -ps`);
    } 
    else if (typeof speedValue === "string") {
      const [result, text] = speedValue.split(" ");
      const speedResult = (parseFloat(result) * 100) / 3600;
      console.log(` ${speedResult.toFixed(2)}km ${text ?? "-pre second"} `)
    }
  };

//   bikeSpeed(50);

const neverType = (msg: string) : never =>{
    throw new Error (msg)
}
neverType("this is naver type error message")






  //
}
