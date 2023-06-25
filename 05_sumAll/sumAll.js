const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let bigNum;
    let smallNum;
    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2;
    }
    else{
        bigNum = num2;
        smallNum = num1;
    }
    
    let result = 0;

    for (let i = smallNum; i <= bigNum; i++){
        result += i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
