// Q. Loop an array of objects and remove all objects which doesn't ave gender's value male

let employees = [
    { name: "Shubham", gender: "male" },
    { name: "Puja", gender: "female" },
    { name: "Vijaya", gender: "female" },
    { name: "Kajal", gender: "female" },
    { name: "Dino", gender: "unknown" },
];

function removeFemaleObjects(employees) {
    const maleEmployee = employees.filter((element) => {
        return element.gender === "male";
    });
    return maleEmployee;
}

console.log(removeFemaleObjects(employees));

// =============================================================
// Q. How to remove non-male from the original array
// =============================================================

let arr = [
    { name: "Shubham", gender: "male" },
    { name: "Puja", gender: "female" },
    { name: "Vijaya", gender: "female" },
    { name: "Kajal", gender: "female" },
    { name: "Dino", gender: "unknown" },
];

let count = 0;

arr.forEach((element) => {
    if (element.gender !== "male") count++;
});
count;

for (let i = 0; i < count; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].gender !== "male") {
            arr.splice(j, 1);
        }
    }
}

arr;
