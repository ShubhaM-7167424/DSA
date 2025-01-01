let myName = 'Shubham'
console.log(myName);

let myNames = ['Shubham', 'Raj', 'Rahul', 'Rohan']
console.log(myNames);

let mathScore = 89
console.log(mathScore);

let mathScores = [89, 78, 67, 56]
console.log(mathScores);

let firstStudent = {name: 'Shubham', city: 'Delhi', country: 'India'}
console.log(firstStudent);

let students = [
    {name: 'Shubham', city: 'Delhi', country: 'India'},
    {name: 'Raj', city: 'Mumbai', country: 'India'},
    {name: 'Rahul', city: 'Kolkata', country: 'India'},
    {name: 'Rohan', city: 'Chennai', country: 'India'}
]
console.log(students);

// using array constructor

let arrayConstructor1 = new Array()
arrayConstructor1[0] = 5
arrayConstructor1[1] = 10
console.log(arrayConstructor1);

let arrayConstructor2 = new Array("Ram", "Shyam", "Mohan")
console.log(arrayConstructor2);

let filledArray = new Array(7).fill(0)
console.log(filledArray);
