// use 'strict'

var ohm = require ('ohm-js');

let text = 'a';

let lexicalgrammar = String.raw`
simplelexicalgrammar {
  main = "a"
}
`;

let syntacticgrammar = String.raw`
simplesyntacticgrammar {
  Main = "a"
}
`;

let lexicalsemanticsFunctions = {
    main: function (capture) { return 'x'; },
    _iter: function (...children) { return children.map(c => c._glue ()); },
    _terminal: function () { return this.sourceString; }
};
let syntacticsemanticsFunctions = {
    Main: function (capture) { return 'x'; },
    _iter: function (...children) { return children.map(c => c._glue ()); },
    _terminal: function () { return this.sourceString; }
};

function parse (text, grammar, semanticsFunctions) {
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

console.log ('this should print x twice');
parse (text, lexicalgrammar, lexicalsemanticsFunctions);
parse (text, syntacticgrammar, syntacticsemanticsFunctions);
