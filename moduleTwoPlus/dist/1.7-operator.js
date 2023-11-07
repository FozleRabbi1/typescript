"use strict";
{
    // ===============================================>>>>>  spread operator
    //   const users1: string[] = ["rabbi", "shanto", "hanif"];
    //   const users2: string[] = ["shimul", "riyazul", "nishan"];
    //   users1.push(...users2);
    //   console.log(users1);
    const users1 = ["rabbi", "shanto", "hanif"];
    const users2 = ["shimul", "riyazul", "nishan", 12];
    // users1.push(...users2);
    // console.log(users1);
    const mentors1 = {
        name1: "fozle rabbi",
        name2: "shanto",
        name3: "hanif",
    };
    const mentors2 = {
        name4: "shimul",
        name5: "nishan",
        name6: true,
    };
    const newMentors = Object.assign(Object.assign({}, mentors1), mentors2);
    // console.log(newMentors)
    // ===============================>>>>>> rest operaton
    const friends = (...allfriends) => {
        // allfriends.forEach((f : string) => console.log(f) )
    };
    friends("hanif", "shanto", "rabbi", "nishan");
    const friends1 = ["friend1", "friend2", "friend3"];
    const friends2 = ['friend4', 'friend5', 'friend6', 'friend7'];
    friends1.push(...friends2);
    //   console.log(friends1);
    const objFriend1 = {
        name1: "fozle rabbi 2",
        name2: "shanto 2 ",
        mixedValue: true
    };
    const objFriend2 = {
        fixedName: "hanif",
        changeName: "kazi",
        age: 14
    };
    const newFriends = Object.assign(Object.assign({}, objFriend1), objFriend2);
    // console.log(newFriends)
    const friendsFun = (...friends) => {
        const newFriend = friends.map((f) => f);
        // console.log(newFriend)
    };
    friendsFun("hanif1", "shanto1", "rabbi1");
    // const voidFriend = (...values : string [])  => values.forEach(f => console.log(f))
    // voidFriend("void1", 'void2', 'void3')
    const voidFriend = (...values) => values.forEach(f => console.log(f));
    voidFriend("void1", 'void2', 'void3', 123);
    function voidFun() {
        // console.log("this is void fun")
    }
    voidFun();
}
