var isin = require('./isin.js');

var inness = function (a, b) {
    // Take arrays ready-done or objects and turn their property names into arrays
    var compa=[];
    var compb=[];
    
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
    var lb=compb.length;
    
    // Switch them around if b is shorter ...
    if (lb<la) {
        var t=compa;
        compa=compb;
        compb=t;
        t=la;
        la=lb;
        lb=t;
    }
    // Now compa is the shorter and we just count the intersection
    var icount=0;
    for (var i = 0; i<la; i++) {
        icount = icount + isin.isin(compa[i], compb);
    }
    // Size of intersection/sizeof union gives a normalised 'inness' score
    return icount/(la+lb-icount);
}
module.exports.inness = inness;