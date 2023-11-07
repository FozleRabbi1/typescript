{







  const copycode = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const copyText = "Next level web dev";
    return {
      ...student,
      copyText,
    };
  };

  // const result0 = copycode({cool : "cooolllll"})      // eita kaj korbe na

  const result = copycode<{
    id: number;
    name: string;
    email: string;
  }>({
    id: 101,
    name: "mr x",
    email: "x@gmail.com",
  });

  const result2 = copycode<{
    id: number;
    name: string;
    email: string;
    age: number;
    home: string;
  }>({
    id: 102,
    name: "mr y",
    email: "y@gmail.com",
    age: 27,
    home: "ishwardi",
  });

  console.log(result);
  console.log(result2);










}
