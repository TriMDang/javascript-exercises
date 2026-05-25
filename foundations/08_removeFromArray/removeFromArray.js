const removeFromArray = function(arr, ...value) {
    return filtered = arr.filter(
        num => {
               for (i = 0; i < value.length; i++) {
                    if (num === value[i]){
                        return 0;
                    }
                }
                return num;
        }
    )
};

// Do not edit below this line
module.exports = removeFromArray;
