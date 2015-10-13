var fs=require('fs');

if (process.argv[2] == null)
{
    console.error('Provide a filename');
    return;
}

fileBuf=fs.readFileSync(process.argv[2]).toString();

words=fileBuf.split(' ');

if (process.argv[3] == null) {
    for (var i=0; i<words.length-2; i++)
        console.log(words[i] +' '+ words[i+1]);
} else {
    for (var i=0; i<words.length-3; i++)
        console.log(words[i] +' '+ words[i+1] +' '+ words[i+2]);
}
