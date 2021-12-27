// use 'strict'

var ohm = require ('ohm-js');

let text = 'a';

let grammar = String.raw`
simplelexicalgrammar {
  main = "a"
}
`;

let syntacticgrammar = String.raw`
simplesyntacticgrammar {
  Main = "a"
}
`;

let semanticsFunctions = {
    main: function (capture) { return '*'; },
    _iter: function (...children) { return children.map(c => c._glue ()); },
    _terminal: function () { return this.sourceString; }
};

function parse (text) {
    let parser = ohm.grammar (grammar);
    let cst = parser.match (text);
    if (cst.succeeded) {
	let sem = parser.createSemantics ();
	sem.addOperation ('op', semanticsFunctions);
	console.log ( sem (cst)['op'] ());
    } else {
	throw "something is terribly wrong";
    }
}

parse (text);
