// Q. Wap to swap Two Numbers

function swapTwoNumbers(a, b) {
    console.log(`before a = ${a} b = ${b}`);
    [a, b]  =   [b, a]
    console.log(`after  a = ${a} b = ${b}`);
}

console.log(swapTwoNumbers(19, 37));

function swapTwoNumbers1(a, b) {
    console.log(`before a = ${a} b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`after  a = ${a} b = ${b}`);
}

console.log(swapTwoNumbers1(19, 37));

console.log('2nd function');

function swapTwoNumbers2(a, b) {
    console.log(`before a = ${a} b = ${b}`);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(`after  a = ${a} b = ${b}`);
}

console.log(swapTwoNumbers2(5,7));

console.log('3rd function');

function swapTwoNumbers3(a, b) {
    console.log(`before a = ${a} b = ${b}`);
    a=a*b;
    b=a/b;
    a=a/b;
    console.log(`after  a = ${a} b = ${b}`);
}

console.log(swapTwoNumbers3(9, 4));

