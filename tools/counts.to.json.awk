BEGIN {
    printf "[" ;
}

/./ {
    if (NR>1)
        printf ",";
    if ($4 != "")
        printf "{\"w1\":\"" $2 "\",\"w2\":\"" $3 " " $4 "\",\"count\":" $1 "}";
    else
        printf "{\"w1\":\"" $2 "\",\"w2\":\"" $3 "\",\"count\":" $1 "}";
}

END {
    print "]";
}