// Q. Wap to check weather a given password is strong or not
// "abcdefghijklmnopqrstuvwxyz";
// conditions  => password length should be greater than or equal to 8
//    => should contain one uppercase and one lowercase character
//    => should contain a number and a specialcase character

function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseCharacter = lowercaseCharacter.toUpperCase();
    let number = "0123456789";
    let specialCharacter = "!@#$%^&*";

    let lowercaseCharacterExist = false;
    let uppercaseCharacterExist = false;
    let numberExist = false;
    let specialCharacterExist = false;

    for (let char of password) {
        if (lowercaseCharacter.includes(char)) {
            lowercaseCharacterExist = true;
        } else if (uppercaseCharacter.includes(char)) {
            uppercaseCharacterExist = true;
        } else if (number.includes(char)) {
            numberExist = true;
        } else if (specialCharacter.includes(char)) {
            specialCharacterExist = true;
        }
    }

    return lowercaseCharacterExist && uppercaseCharacterExist && numberExist && specialCharacterExist;
}

console.log(isStrongPassword("Shubh35@*"));
console.log(isStrongPassword("Shubh3538"));
console.log(isStrongPassword("shubh3@38"));
console.log(isStrongPassword("SHUBH4@38"));
