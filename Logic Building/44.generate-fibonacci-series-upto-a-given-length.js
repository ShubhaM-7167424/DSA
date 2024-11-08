// Q. Wap to generate a fibonacci series of a given length

function fibonacciSeries(length) {
        const fib = [0, 1]

        for(let i=2; i<length; i++){
                fib[i] = fib[i-1] + fib[i-2]
                
        }
        return fib
}

console.log(fibonacciSeries(5));
console.log(fibonacciSeries(10));
