exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    const reducer = (acc, curNum) => Math.min(acc, curNum);
    return array.reduce(reducer);
};


exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    const reducer = (acc, curNum) => Math.max(acc, curNum);
    return array.reduce(reducer);
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    const reducer = (acc, curNum) => acc + curNum;
    return array.reduce(reducer) / array.length;
};
