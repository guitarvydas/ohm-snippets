#!/bin/bash
cwd=`pwd`
pfr test.txt const.ohm const.glue \
    | pfr - parens.ohm identity-parens.glue $cwd/support.js \
    | pfr - braces.ohm identity-braces.glue $cwd/support.js \
    | pfr - keywords.ohm keywords.glue $cwd/support.js \
    | pfr - mvar.ohm mvar.glue $cwd/support.js \
    | pfr - arrowfn1.ohm arrowfn1.glue $cwd/support.js \
    | pfr - unkeyword.ohm unkeyword.glue $cwd/support.js
