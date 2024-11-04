// Bigint
// console.log(BigInt(22) + BigInt(21));
var obj = {
    name: "Davron",
};
//console.log(obj.age); // error
console.log(obj === null || obj === void 0 ? void 0 : obj.age);
//6
var data = "salom";
data !== null && data !== void 0 ? data : (data = "data");
