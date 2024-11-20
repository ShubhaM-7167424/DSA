// Q. Wap to reverse a number ?

function reverseANumber(number) {
                
        return Number(number.toString().split('').reverse().join(''))
}

console.log(reverseANumber(123));
console.log(reverseANumber(3258));


function reverseANumber2(number) {
        let sum=0;

        while (number>0) {
                let r = number%10
                sum = sum*10 + r;
                number = Math.floor(number/10)
                
        }
        
        return sum        
}

console.log(reverseANumber2(245));
console.log(reverseANumber2(1234));
