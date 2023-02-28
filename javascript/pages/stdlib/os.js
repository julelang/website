const stdlib_os_globalsHTML = `
<div class="code">let ARGS: []str</div>
Holds the command-line arguments. <br>
Starts with the program name.
<br><br>
Special bytes trimmed if program name have any special byte at begin or end.
<br>
Special bytes are: <x class="inline_code">" ' &lt; &gt;</x>
<div class="warn">
Command-line arguments sets at runtime with init function. <br>
Initialize expression is nil. <br>
You got nil slice if used as initialize expression to any global.
</div>

<div class="topic-separator"></div>
<div class="code">const PATH_SEPARATOR</div>
Operating system specific path separator.

<div class="topic-separator"></div>
<div class="code">const PATH_LIST_SEPARATOR</div>
Operating system specific path list separator.
`;

const stdlib_os_functionsHTML = `
<div class="code">exit(code: int)</div>
Causes the current program to exit with the given status code. <br>
Conventionally, code zero indicates success, non-zero an error.

<div class="topic-separator"></div>
<div class="code">fn getwd(): (str, OsError)</div>
Returns an absolute path name of the current working directory of the calling process.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>

<div class="topic-separator"></div>
<div class="code">fn chdir(path: str): OsError</div>
Changes the current working directory to the given directory.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>
<x class="inline_code">IO</x>
<x class="inline_code">Loop</x>
<x class="inline_code">LongPath</x>
<x class="inline_code">NotExist</x>
<x class="inline_code">NotDir</x>
<x class="inline_code">InsufficientMemory</x>

<div class="topic-separator"></div>
<div class="code">fn is_path_sep(c: u8): bool</div>
Reports whether c is path separator.

</div>`;

const stdlib_os_enumsHTML = `
<div class="inline_code">enum OsError</div>
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">Ok</x>: No problem</li>
    <li><x class="inline_code">Denied</x>: Search permission is denied for a component of the path prefix</li>
    <li><x class="inline_code">IO</x>: Input/Output error, an error occurred while reading from the file system</li>
    <li><x class="inline_code">Loop</x>: A loop exists in symbolic links encountered during resolution of the path argument</li>
    <li><x class="inline_code">LongPath</x>: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length</li>
    <li><x class="inline_code">NotExist</x>: A component of path does not name an existing file or path is an empty string</li>
    <li><x class="inline_code">NotDir</x>: A component of the path prefix is not a directory</li>
    <li><x class="inline_code">InsufficientMemory</x>: Insufficient memory to complete the operation</li>
    <li><x class="inline_code">Divice</x>: Divice did not respond</li>
</ul>

`;

const NAV_stdlib_os_globals = document.getElementById("globals");
const NAV_stdlib_os_functions = document.getElementById("functions");
const NAV_stdlib_os_enums = document.getElementById("enums");

const stdlib_os_nav = new SideNavigator();
stdlib_os_nav.navigations = [
    [NAV_stdlib_os_globals, stdlib_os_globalsHTML],
    [NAV_stdlib_os_functions, stdlib_os_functionsHTML],
    [NAV_stdlib_os_enums, stdlib_os_enumsHTML],
];

stdlib_os_nav.set_events();
stdlib_os_nav.set_content_url();
