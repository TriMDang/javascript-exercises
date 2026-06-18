const palindromes = function (string) {
    string = convertString(string);
    let left = 0;
    let right = string.length - 1;
    while (left <= right){
        if ( string[left] != string[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function convertString (string){
    string = string.replaceAll(/\p{P}/gu, "");
    string = string.replaceAll(" ", "");
    string = string.toLowerCase();
    return (string);
}

// Do not edit below this line
module.exports = palindromes;
