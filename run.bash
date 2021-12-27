#!/bin/bash
cwd=`pwd`
pre '.' '$' prule.ohm prule.glue --stop=1 --input=prule.txt
pre '.' '$' prule2.ohm prule2.glue --stop=1 --input=prule.txt
node a.js
