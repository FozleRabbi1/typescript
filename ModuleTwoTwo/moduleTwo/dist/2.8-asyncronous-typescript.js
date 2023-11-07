"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // const createPromise = () =>{
    //     return new Promise ((resolve, reject)=>{
    //         const data : string = "resolve data";
    //         // const data : string | null = null;
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject("data not found")
    //         }
    //     })
    // }
    // const getData = async() =>{
    //     const data = await createPromise();
    //     console.log(data);        
    // }
    // getData();
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "resolve data";
            // const data : string | null = null;
            if (data) {
                resolve(data);
            }
            else {
                reject("data not found");
            }
        });
    };
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
    });
    // getData();
    // const getData = async() : Promise<string> =>{
    //     const data : string = await createPromise();
    //     // console.log(data);     // console log use korar karone function void dekhasse karon ekhane kisu return korse na
    //     return data;     
    // }
    // getData();
    const objectTypePromise = () => {
        return new Promise((resolve, reject) => {
            const data = { message: "this is massage" };
            if (data) {
                resolve(data);
            }
            else {
                reject("data not found");
            }
        });
    };
    const getObjData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield objectTypePromise();
        console.log(data.message);
    });
    const somethingMessage = () => {
        return new Promise((resolve, reject) => {
            const data = { message: "this is somethig message" };
            if (data) {
                resolve(data);
            }
            else {
                reject(data);
            }
        });
    };
    const somethigGetMessage = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield somethingMessage();
        return data;
    });
    const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = yield res.json();
        // console.log(data);
        return data;
    });
    getTodoData();
}
