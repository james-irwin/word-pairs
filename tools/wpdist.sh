#!/bin/bash

# Given input $1 a text file, turn out a JSON structure that has a word-pair
# distribution.

# Drop punctuation, numbers spaces and turn it all lower case ready for 
# turning into straight word pairs.

cat $1 | tr [:punct:] \  | tr -d [0-9] | tr [:upper:] [:lower:] | tr [:space:] \ | tr -s \ > $1.prep

# Emit the word pairs and count them (and sort them)

node tools/split.text.to.word.pairs.js $1.prep | sort | uniq -c | sort -rn | awk -f tools/counts.to.json.awk > $1.json

# With an extra argument, split will emit "w1" "w2 w3" count

#node tools/split.text.to.word.pairs.js $1.prep three | sort | uniq -c | sort -rn | awk -f tools/counts.to.json.awk > $1.3.json

# just single word-aheads test for likeness ...
node tools/split.text.to.word.pairs.js $1.prep three | sort | uniq -c | sort -rn | awk -f tools/counts.to.json.awk > $1.3.json

# Tidy the .prep file

rm $1.prep

# Load the counts and collapse to the set. THIS LINE GENERATES THE OUTPUT.

# user either the two word input or the three word input. (.json or .3.json)
node tools/counts.reprocess.js $1.json 

# Tidy interim json file

rm $1.json $1.3.json
