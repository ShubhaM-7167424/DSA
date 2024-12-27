// Q. Waf which accepts an argument and returns the type
// There are six possible values that typeof returns: Object, Boolean, function, Number, String, undefined

function typeTeller(arg) {
        return typeof arg
}

console.log(typeTeller('shubham'));
console.log(typeTeller(45));
console.log(typeTeller(undefined));
console.log(typeTeller(true));
console.log(typeTeller({a:1, b:5}));
console.log(typeTeller(function(){}));


