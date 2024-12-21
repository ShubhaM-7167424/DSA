// Q. In an Array of numbers and strings add only  numbers
// input => ['abc', 10, 'iwo', 20, 'eisi']
// output => 30


function addOnlyNumbers(arr) {
        let sum=0
        arr.forEach(element => {
                if(typeof element === 'number'){
                        sum += element
                }                
        });
        return sum
}

let arr = [1, 3, 5, 'abc', 30, 'shubham', 83]

console.log(addOnlyNumbers(arr));
