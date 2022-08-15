const stdlib_io_globalsHTML = `
<div class="code">pub ERROR_SYNTAX: Error</div>
Error trait compatible structure instance for syntax errors.

`;

const stdlib_io_functionsHTML = `
<div class="code">pub conv_bool(s: str) [bool, Error]</div>
Returns the boolean value represented by the string.
It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False.
Any other value returns an error.

<div class="topic-separator"></div>
<div class="code">pub fmt_bool(b: bool) str</div>
Returns "true" or "false" according to the value of b.

`;

const stdlib_io_structsHTML = `
<div class="code">pub struct ConvError</div>
Records a failed conversion.

<br><br>
<strong>Implemented traits:</strong>
<ul>
    <li><x class="inline_code">Error</x></li>
</ul>

<br><br>
<strong>Methods:</strong>

<div class="code">@inline
pub &unwrap() Error</div>

`;

const NAV_stdlib_io_globals = document.getElementById("globals");
const NAV_stdlib_io_functions = document.getElementById("functions");
const NAV_stdlib_io_structs = document.getElementById("structs");

const stdlib_io_nav = new SideNavigator();
stdlib_io_nav.navigations = [
    [NAV_stdlib_io_globals, stdlib_io_globalsHTML],
    [NAV_stdlib_io_functions, stdlib_io_functionsHTML],
    [NAV_stdlib_io_structs, stdlib_io_structsHTML],
];

stdlib_io_nav.set_events();
stdlib_io_nav.set_content_url();
