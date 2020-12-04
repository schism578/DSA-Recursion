const fibSeq = function (num) {
    if (num <= 2) {
        return 1;
    }
    return fibSeq(num - 1) + fibSeq(num - 2);
};

fibSeq(5);