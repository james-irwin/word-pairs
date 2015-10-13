var isin = require('./isin.js');

var intersect = function (a, b) {
    // Returns an array (whether the inputs are objects or arrays)
    // ordered in respect to 'a' elements a[i] where a[i]==b[j]
    
    var compa=[];
    var compb=[];
    var result=[];
    
    if (typeof(a) == 'object' && Array.isArray(a)==false) {
        for (keys in a) {
            compa.push(keys);
        }
    } else if (Array.isArray(a)==true) {
        compa=a;
    }
    
    if (typeof(b) == 'object' && Array.isArray(b)==false) {
        for (keys in b) {
            compb.push(keys);
        }
    } else if (Array.isArray(b)==true) {
        compb=b;
    }
    var la=compa.length;
    //console.log(JSON.stringify(compa));
    //console.log(JSON.stringify(compb));
    //console.log(JSON.stringify(la));
    for (var i=0; i<la; i++) {
        if (isin.isin(compa[i], compb)==1) {
            result.push(compa[i]);
        }
    }
    return result;
}
module.exports.intersect=intersect;