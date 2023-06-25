const reverseString = function(stringToReverse) {
    if (stringToReverse.length == 0){
        return '';
    }

    let result = '';
    const splitString = stringToReverse.split('');
    for(let i = stringToReverse.length -1; i >=0; i--){
        result += splitString[i];

    }
    
    return result;

};

// Do not edit below this line
module.exports = reverseString;
