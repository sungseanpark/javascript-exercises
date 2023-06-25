const repeatString = function(stringToRepeat, numTimesToRepeat) {
    if (numTimesToRepeat < 0){
        return 'ERROR'
    }
    let result = '';
    for (let i = 0; i < numTimesToRepeat; i++) {
        result += stringToRepeat;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
