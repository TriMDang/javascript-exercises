const sumAll = function(firstNum, secNum) {
    let small, big = 0;
    if (!Number.isInteger(firstNum) ||
    !Number.isInteger(secNum)||
    secNum < 0 ||
    firstNum < 0){
        return ('ERROR');
    }

    if (firstNum > secNum){
        big = firstNum;
        small = secNum;
    } else {
        big = secNum;
        small = firstNum;
    }

    let sum = 0;

    while (small <= big){
        sum += small
        small++;
    }
    return (sum);

};

// Do not edit below this line
module.exports = sumAll;
