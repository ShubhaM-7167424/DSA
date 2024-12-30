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

    let lowercaseCharacterExist = 0;
    let uppercaseCharacterExist = 0;
    let numberExist = 0;
    let specialCharacterExist = 0;

    for (let char of password) {
        if (lowercaseCharacter.includes(char)) {
            lowercaseCharacterExist = 1;
        } else if (uppercaseCharacter.includes(char)) {
            uppercaseCharacterExist = 1;
        } else if (number.includes(char)) {
            numberExist = 1;
        } else if (specialCharacter.includes(char)) {
            specialCharacterExist = 1;
        }
    }

    return (
        (lowercaseCharacterExist &&
            uppercaseCharacterExist &&
            numberExist &&
            specialCharacterExist) === 1
    );
}

console.log(isStrongPassword("Shubh35@*"));
console.log(isStrongPassword("Shubh3538"));
console.log(isStrongPassword("shubh3@38"));
console.log(isStrongPassword("SHUBH4@38p"));
