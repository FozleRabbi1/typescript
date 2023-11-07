{

type Shaikh = {
    bike : string;
    car : String;
    plain : string;
}

 type CheckVehicle <T> = T extends keyof Shaikh ? true : false;

 type IsBike = CheckVehicle<'bike'> 
 




}