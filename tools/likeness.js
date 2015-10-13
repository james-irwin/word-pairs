var set=require('./intersect.js');
var stats=require('./simple_statistics.min.js');
// Take two word lists and correlate them

var likeness=function(lista, listb) {
    var ina=set.intersect(lista, listb);
    var inb=set.intersect(listb, lista);
    
    if (ina.length==0) return 0; // Quick return
    if (ina.length==1) return 1; // Quick return
    var ida=[];
    var idb=[];
    for (var i=0; i<ina.length; i++) {
        ida.push(i+1);
        idb.push(1+inb.indexOf(ina[i]));
    }
    return stats.sampleCorrelation(ida, idb);
}
module.exports.likeness = likeness;

//var lista={"a":["cat", "mat"], "cat":["sat"], "sat":["on"], "on":["a"]};
//var listb={"sat":["on"], "a":["dog", "mat", "bone"], "dog":["sat"], "on":["a"], "mat":["gnawing"], "gnawing":["a"]};

//console.log(likeness(lista, listb));
//console.log(likeness(lista['a'], listb['a']));
//console.log(likeness(data1['of'],data1['as']));
/*
var data1=require('../output/oldtestament.3.json');
var data2=require('../output/newtestament.3.json');
var vs=set.intersect(data1, data2);
console.log(likeness(data1,data2));
for (var i=0; i<vs.length; i++) {
    //console.log(vs[i]);
    //console.log('-------------------------------------------');
    //console.log(data1[vs[i]]);
    //console.log('-------------------------------------------');
    //console.log(data2[vs[i]]);
    //console.log('-------------------------------------------');
    console.log(likeness(data1[vs[i]],data2[vs[i]]));
    //console.log('===========================================');
}
*/