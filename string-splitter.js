const splitString = function (str, separator) {
    if (str === '') {
        return '';
    }
    const newChar = str[0];
    if (newChar === separator) {
        return splitString(str.slice(1), separator);
    }
    else {
        return newChar + splitString(str.slice(1), separator);
    }
};

splitString('02/20/2020');