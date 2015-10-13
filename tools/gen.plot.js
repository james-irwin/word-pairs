var set=require('./intersect.js');
var likeness=require('./likeness.js');
var inness=require('./inness.js');
var fs=require('fs');

var data_name_1 = process.argv[2];
var data_name_2 = process.argv[3];

var data1 = JSON.parse(fs.readFileSync(data_name_1).toString());
var data2 = JSON.parse(fs.readFileSync(data_name_2).toString());

var header="<!DOCTYPE HTML>\
<html>\
<head>\
  <script type='text/javascript'>\
  window.onload = function () {\
    var chart = new CanvasJS.Chart('chartContainer',\
    {\
      title:{\
       text: '" + data_name_1 + " vs " + data_name_2 + "'\
      },\
        axisX:{\
   maximum: 1.1,\
   minimum: -1.1,\
   title: 'likeness',\
 },\
        axisY:{\
   maximum: 1.0,\
   minimum: 0.0,\
   title:'inness'\
 },\
      data: [\
      {\
        type: 'bubble',\
    toolTipContent: '<strong>{name}</strong><br>{follow}',\
     dataPoints: [";

var footer=" ]\
   }\
   ]\
 });\
\
chart.render();\
}\
</script>\
<script type='text/javascript' src='js/canvasjs.min.js'></script></head>\
<body>\
  <div id='chartContainer' style='height: 400px; width: 100%;'>\
  </div>\
</body>\
</html>";

var vs=set.intersect(data1, data2);
//{ x: 0.5451387210126973, y: 0.2731824118415324, z: 1255, name: "Overall"},

console.log(header);

for (var i = 0; i < vs.length; i++) {
    var inter = set.intersect(data1[vs[i]], data1[vs[i]]);
    //if (inter.length>5) 
    {
        var follow= "";
        for (var w = 0; w<inter.length & w<5; w++) {
            follow = follow + inter[w] + ", ";
        }
        follow = follow + "...";

    console.log('{ x:' + likeness.likeness(data1[vs[i]], data2[vs[i]]) + 
                ', y:' + inness.inness(data1[vs[i]], data2[vs[i]]) +
                ', z:' + inter.length + 
                ', name: "' + vs[i] +
                '", follow: "' + follow +
                '" },');
    }
}

console.log('{ x:' + likeness.likeness(data1,data2) + 
           ', y:' + inness.inness(data1,data2) +
           ', z:'+ vs.length +
            ', name: "Overall"' +
           '},');

console.log(footer);