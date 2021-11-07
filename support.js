var idlist = [];

exports.pushNewIDList = () => {
    idlist.push ([]);
    return '';
}

exports.prependID = (name) => {
    // replace top list of ids with cons(name,ids)
    var newlist = idlist.pop ();
    newlist.unshift (name);
    idlist.push (newlist);
    return '';
}

exports.generateInitializations = (tempname, initstring) => {
    var result = [];
    var idarray = idlist.pop ();
    idarray.forEach (name => {
	result.push (`@var ${name} = ${tempname}.${name};\n`);
    });
    return result.join ('');
}

var counter = 0;
exports.currsym = () => {
    return `_gen_${counter}`;
}
exports.gensym = () => {
    counter += 1;
    return `_gen_${counter}`;
}
