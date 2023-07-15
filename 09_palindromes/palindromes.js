const palindromes = function (input) {
    const cleanInput = input.replace(/[^A-Za-z0-9]/g,'');
    const lowerCleanInput = cleanInput.toLowerCase();
    let i = 0;
    let j = lowerCleanInput.length - 1;

    while(i < j) {
        if(lowerCleanInput.charAt(i) != lowerCleanInput.charAt(j)){
            return false;
        }
        i++;
        j--;
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
