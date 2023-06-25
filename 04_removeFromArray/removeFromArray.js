const removeFromArray = function() {
    let originalArray = arguments[0];
    let result = [];
    for (let i = 0; i < originalArray.length; i ++) {
        let match = false;
        for (let j = 1; j < arguments.length; j ++) {
            if (originalArray[i] === arguments[j]) {
                match = true;
            }
        }

        if(!match) {
            result.push(originalArray[i]);
        }
    }

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
