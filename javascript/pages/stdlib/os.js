const stdlib_os_constantsHTML = `
<div class="sub-sub-title"><x class="inline_code">const EXIT_SUCCESS</x></div>
Exit code for success.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const EXIT_FAILURE</x></div>
Exit code for failure.
`;

const stdlib_os_functionsHTML = `
<div class="code">@inline
pub exit(code: int)</div>
Causes the current program to exit with the given status code. <br>
Conventionally, code zero indicates success, non-zero an error.
`;

const NAV_stdlib_os_constants = document.getElementById("constants");
const NAV_stdlib_os_functions = document.getElementById("functions");

const stdlib_os_nav = new SideNavigator();
stdlib_os_nav.navigations = [
    [NAV_stdlib_os_constants, stdlib_os_constantsHTML],
    [NAV_stdlib_os_functions, stdlib_os_functionsHTML],
];

stdlib_os_nav.set_events();
stdlib_os_nav.set_content_url();
