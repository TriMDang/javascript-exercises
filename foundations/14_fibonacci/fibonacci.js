const fibonacci = function(num) {
    num = Number(num);
    let a = 0;
    let b = 1;
    let c = a + b;
    if (num == 0){ // Base Case
        return 0;
    };
    if (num < 0 || typeof(num) != "number"){ // Edge Case
        return "OOPS";
    };
    for (i = 2; i < num; i++){
        a = b;
        b = c;
        c = a + b;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
