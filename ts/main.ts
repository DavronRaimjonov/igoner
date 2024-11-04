// Bigint
// console.log(BigInt(22) + BigInt(21));

// console.log("Max_safe_integer", Number.MAX_SAFE_INTEGER);
// 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(BigInt(9007199254740991) + 2n);
//BigInt
// 2n
//text

// ??=

// let x: number | null = null;
// x ??= 5;

// let y: string | undefined = undefined;

// y ??= "salom";
// let z: number | null = 25;
// z ??= 20;
// console.log(z);

// let obj = {};
// function sonme(a = 22) {}

// let a: string | null = false ?? "salom";
// console.log(a);

interface ObjType {
  name: string;
  age?: number;
}

let obj: ObjType = {
  name: "Davron",
};

//console.log(obj.age); // error
console.log(obj?.age);

//6

let data: string | null = "salom";

data ??= "data";
