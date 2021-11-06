var idlist = [];

exports.pushNewIDList = () => {
    idlist.push ([]);
}

exports.prependID = (name) => {
    // replace top list of ids with cons(name,ids)
    var newlist = idlist.pop ();
    newlist.unshift (name);
    idlist.push (newlist);
}

exports.generateInitializations = (idlist, initstring) => {
    var result = [];
    idlist.forEach (name => {
	result.push (`var ${name} = ${initstring};\n`);
    });
    return result.join ('');
}
