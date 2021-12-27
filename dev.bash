#!/bin/bash
cwd=`pwd`
#pfr - object-initializer.ohm object-initializer.glue $cwd/support.js
pre '.' '$' prule.ohm prule.glue --stop=1 --input=prule.txt
pre '.' '$' prule2.ohm prule2.glue --stop=1 --input=prule.txt
