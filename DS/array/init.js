let myName = "Shubham";
console.log(myName);

let myNames = ["Shubham", "Raj", "Rahul", "Rohan"];
console.log(myNames);

let mathScore = 89;
console.log(mathScore);

let mathScores = [89, 78, 67, 56];
console.log(mathScores);

let firstStudent = { name: "Shubham", city: "Delhi", country: "India" };
console.log(firstStudent);

let students = [
    { name: "Shubham", city: "Delhi", country: "India" },
    { name: "Raj", city: "Mumbai", country: "India" },
    { name: "Rahul", city: "Kolkata", country: "India" },
    { name: "Rohan", city: "Chennai", country: "India" },
];
console.log(students);

// using array constructor

let arrayConstructor1 = new Array();
arrayConstructor1[0] = 5;
arrayConstructor1[1] = 10;
console.log(arrayConstructor1);

let arrayConstructor2 = new Array("Ram", "Shyam", "Mohan");
console.log(arrayConstructor2);

let filledArray = new Array(7).fill(0);
console.log(filledArray);

let ofArray = Array.of(1, 2, 3, 4, 5);
console.log(ofArray);

let fromArray = Array.from("Shubham");
console.log(fromArray);

let sparseArray = [1, , , 3, 5];
console.log(sparseArray);
sparseArray[1] = 2;
console.log(sparseArray);

let ofArrayPlus = ['plus', 'minus', ...ofArray];
console.log(ofArrayPlus);

let dynamicArray = [12, 'Shubham', true, { name: 'Shubham', city: 'Delhi' }];
console.log(dynamicArray);

console.log(dynamicArray[1]);
console.log(dynamicArray[3]);

let fruits = ['apple', 'banana', 'orange', 'mango'];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
let fruit4 = fruits[3];
console.log(fruit1, fruit2, fruit3, fruit4);

let [fruit11, fruit22, fruit33, fruit44] = fruits;
console.log(fruit11, fruit22, fruit33, fruit44);

