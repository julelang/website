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
<div class="code">fn getwd() (path: str, ok: bool)</div>
Returns an absolute path name of the current working directory of the calling process.

<div class="topic-separator"></div>
<div class="code">fn chdir(path: str) (ok: bool)</div>
Changes the current working directory to the given directory.

</div>`;

const NAV_stdlib_os_globals = document.getElementById("globals");
const NAV_stdlib_os_functions = document.getElementById("functions");

const stdlib_os_nav = new SideNavigator();
stdlib_os_nav.navigations = [
    [NAV_stdlib_os_globals, stdlib_os_globalsHTML],
    [NAV_stdlib_os_functions, stdlib_os_functionsHTML],
];

stdlib_os_nav.set_events();
stdlib_os_nav.set_content_url();
