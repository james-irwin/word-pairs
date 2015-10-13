var isin = function (what, list) {
    for (var i=0;i<list.length;i++) {
        if (what == list[i]) {
            return 1;
        }
    }
    return 0;
}
module.exports.isin = isin;