const functionsHTML = `
<div class="code">fn parse_file(mut f: &File): &FileInfo</div>
Parses fileset's tokens and builds AST. <br>
Returns nil if f is not real.

<div class="topic-separator"></div>
<div class="code">fn parse_package(mut filesets: []&File): &PackageInfo</div>
Parses fileset's tokens and builds AST. <br>
Returns nil if filesets is nil. <br>
Skip fileset if nil.

`;

const structsHTML = `
<div class="code">struct FileInfo {
    ast:    &Ast  // Ast from std::jule::ast
    errors: []Log // Log from std::jule::build
}</div>
Stores information about file parsing.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct PackageInfo {
    files: []&FileInfo
}</div>
Stores information about package parsing.

`;

const functions = document.getElementById("functions");
const structs = document.getElementById("structs");

const nav = new SideNavigator();
nav.navigations = [
    [functions, functionsHTML],
    [structs, structsHTML],
];

nav.set_events();
nav.set_content_url();
