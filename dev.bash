#!/bin/bash
echo 'use run.bash'
exit 1

~/app/make.bash
cwd=`pwd`
pre '.' '$' alex.ohm alex.glue --stop=1 --input=a.txt
