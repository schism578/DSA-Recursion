let reverseString = function (str) {
    if (!str) {
        return '';
    }
    return reverseString(str.slice(1)) + str[0]
}

reverseString('hello')