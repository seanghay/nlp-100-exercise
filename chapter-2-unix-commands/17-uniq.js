#!/usr/bin/env zx

// find unique name from column 1
await $`cut -f1 13-merged.txt | sort | uniq > 17-unique-names.txt`;

// with occurrence count
await $`cut -f1 13-merged.txt | sort | uniq -c > 17-unique-name-counts.txt`;