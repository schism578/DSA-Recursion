const powerCalculator = function (base, exp) {
    if (exp === 0) {
        return base;
    }
    if (exp < 0) {
        return 'exponent should be >= 0';
    }
    else {
        return base * powerCalculator(base, exp - 1);
    }
};

console.log(powerCalculator(10, 2))