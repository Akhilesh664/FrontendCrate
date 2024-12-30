"use strict";
exports.__esModule = true;
var num = 20;
console.log(num);
var name = "Rajeev";
console.log(name);
var temp_var = false;
console.log(temp_var);
var l_name = "Kumar";
console.log(l_name);
var abc;
console.log(abc);
if (abc == undefined) {
    console.log("If part excute");
}
else {
    console.log("Else part excute");
}
var nameList = ["Rajeev", "Ranjeet", "Rakesh", "Ravindra"];
for (var key in nameList) {
    console.log(nameList[key]);
}
for (var i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}
var mix;
mix = 56;
console.log(mix);
var mixdata;
mixdata = nameList;
console.log(mixdata);
var info = ["rajeev", 35, 756811485, 888.8];
console.log(info);
var person1 = {
    name: "Mohit",
    age: 32,
    qli: "mca",
    gen: "male"
};
var person2 = {
    name: "Mohit1",
    age: 32,
    qli: "mca",
    gen: "male"
};
var person3 = {
    name: "Mohit2",
    age: 32,
    qli: "mca",
    gen: "male"
};
console.log(person1.name + " " + person1.age + " " + person1.qli + " " + person1.gen);
console.log(person2.name + " " + person2.age + " " + person2.qli + " " + person2.gen);
console.log(person3.name + " " + person3.age + " " + person3.qli + " " + person3.gen);
