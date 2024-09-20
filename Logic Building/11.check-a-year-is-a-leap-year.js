// Q. Wap to check whether a given year is leap year or not

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2027));
console.log(isLeapYear(2024));
console.log(isLeapYear(2400));
console.log(isLeapYear(2100));

console.log('function 2');

function isLeapYear2(year) {
      if(year%400===0 || (year%4===0  && year%100!==0))
      {
            return true
      }else{
            return false
      }
}

console.log(isLeapYear2(2100));
console.log(isLeapYear2(2027));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(2028));
