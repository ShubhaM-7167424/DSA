// Q. Wap to count the occurances of each letter of a string ?
// input  => hello
// output => {h:1, e:1, l:2, o:1}

function countEachLetter(str) {

        let occurances = {}
        str.split('').forEach(element => {
                if(occurances.hasOwnProperty(element) === false){
                        occurances[element] = 1;
                }else{
                        occurances[element]++;
                }
        });

        return occurances
}


console.log(countEachLetter('hello'));
console.log(countEachLetter('misisipi'));

