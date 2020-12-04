let bin = function (num) {
    if (num === 0) {
        return ''
    }
    return `${bin(Math.floor(num / 2))}${(num % 2)}`
}

bin(25)