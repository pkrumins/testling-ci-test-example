module.exports.timesTwo = function (list) {
    return list.map(function (x) { return x*2 });
}

module.exports.timesThree = function (list) {
    var ret = [];
    for (var i = 0; i < list.length; i++) {
        ret[i] = list[i]*3;
    }
    return ret;
}
