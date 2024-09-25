// Q. Wap to print "fizz" if the number is divisible by 3 and print "buzz" if it is divisible by 5 and if it is divisible by both( 3 and 5 ) then print 'fizzbuzz'

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

console.log(fizzBuzz(32));
