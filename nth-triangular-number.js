let triangularNumSeq = function (num) {
    if (num <= 0) {
        return 0;
    }
    return num + triangularNumSeq(num - 1)
}

triangularNumSeq(3);
