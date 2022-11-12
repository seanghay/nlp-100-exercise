#!/usr/bin/env zx

await $`cut -f1 popular-names.txt | sort | uniq -c | sort -r -k1 > 19-freq.txt`;