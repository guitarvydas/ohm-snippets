#!/bin/bash
cwd=`pwd`
#pre '.' '$' prule.ohm prule.glue --stop=1 --input=prule.txt
#pre '.' '$' prule2.ohm prule2.glue --stop=1 --input=prule.txt

node a.js
echo 'and print x one more time'
pre '.' '$' alex.ohm alex.glue --stop=1 --input=a.txt
