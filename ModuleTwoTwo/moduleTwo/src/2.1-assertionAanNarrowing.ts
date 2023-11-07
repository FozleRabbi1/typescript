{
  //

  // let anything : any;
  // anything = "this is assertion type";
  // anything = 123;
  // (anything as number).toFixed();
  // console.log(anything)

  // let anything : any;
  // anything = "this is assertion type";
  // anything = (anything as string).toUpperCase();
  // console.log(anything);

  const kgToGm = (
    value: number | string | undefined
  ): number | string | undefined => {
    if (typeof value === "string") {
      const convartedValue = parseFloat(value) * 1000;
      return `this is convarted value ${convartedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    } else {
      return "age kisu patha";
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  //   const result3 = kgToGm() as undefined;
  //   console.log(result2)

  //   type CustomeError = {
  //     message: string = "this is error message";
  //   };

  //   try {
  //   } catch (error) {
  //     console.log((error as CustomeError).message);
  //   }

  interface CustomError {
    message: string;
  }

  try {
    // Simulate an error
    throw { message: "This is a custom error messageee (throw)" } as CustomError;
  } catch (error) {
    console.log((error as CustomError).message); // Access the 'message' property
  }

  //
}
