{
  // =====================>>>>>>> interfear er sahajje dynamic data generate kora

  interface Developer<T> {
    name: string;
    age: number;
    computer: {
      model: string;
      lonchYear: number | string;
    };
    watch: T; // ========>> ei part ta synamic hobe
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
  }> = {
    name: "fozle rabbi",
    age: 12,
    computer: {
      model: " jana nai",
      lonchYear: 1975,
    },
    watch: {
      brand: "casiow",
      model: "cko 5",
    },
  };

  const richDeveloper: Developer<{
    model: string;
    price: number | string;
    home?: string;
  }> = {
    name: " shanto",
    age: 24,
    computer: {
      model: " etau jana nai",
      lonchYear: 1952,
    },
    watch: {
      model: "osthir",
      price: 50000,
      home: " cande",
    },
  };

  //    console.log(poorDeveloper);
  //    console.log(richDeveloper);




  
  interface Neta<T, Z = null> {
    name: string;
    age: number;
    role: string;
    currentAddress: {
      vill?: string;
      town?: string;
      roadNum?: string | number;
      houseNum?: string | number;
    };
    hobby: T;
    bike ? : Z;
  }

  type PatiInfo = {
    hobby1: string;
    hobby2: string;
  };
  type bikeInfo = {
    bikeModle : string;     
  }
  const patiNeta: Neta<PatiInfo, bikeInfo> = {
    name: "ami nije",
    age: 27,
    role: " pari neta",
    currentAddress: {
      vill: "chorkodim para",
    },
    hobby: {
      hobby1: " hunting bird",
      hobby2: " catching feeish",
    },
    bike : {
        bikeModle : " bajaj rtr"
    }
  };



  interface PopulerInfo  {
    hobbyy: string;
    hobbyy2: string;
    book: string;
  };
//   const powwerFullNeta: Neta<PopulerInfo, null> = {    
  const powwerFullNeta: Neta<PopulerInfo> = {   // default value set kora hoyse tai r extra vebe null send kora laglo na
    name: " shanto",
    age: 24,
    role: " Power full neta",
    currentAddress: {
      town: "nougon",
      roadNum: 101,
    },
    hobby: {
      hobbyy: " web-development ",
      hobbyy2: " jurney ",
      book: " bookreading",
    },
  };

  console.log(patiNeta);
  console.log(powwerFullNeta);
}
