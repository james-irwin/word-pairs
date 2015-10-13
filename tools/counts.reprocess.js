var fs=require('fs');
var thresholding=true;

if (process.argv[2] == null)
{
    console.error('Provide a filename');
    return;
}

var InBuf=fs.readFileSync(process.argv[2]).toString();

var InWords=JSON.parse(InBuf);

var WordSet={};

for (i=0;i<InWords.length;i++) {
    var word=InWords[i].w1;
    
    if ((WordSet[word] == undefined)) {
        // Threshold
        if (thresholding==false || InWords[i].count>1) {
            WordSet[word]=[];
            WordSet[word].push(InWords[i].w2);
        }
    } else {
        // More thresholding
        if (thresholding==false || InWords[i].count>1) {
            WordSet[word].push(InWords[i].w2);
        }
    }
}

console.log(JSON.stringify(WordSet));