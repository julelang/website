const stdlib_os_functionsHTML = `
<div class="code">pub exit(code: int)</div>
Causes the current program to exit with the given status code. <br>
Conventionally, code zero indicates success, non-zero an error.
`;

const NAV_stdlib_os_functions = document.getElementById("functions");

const stdlib_os_nav = new SideNavigator();
stdlib_os_nav.navigations = [
    [NAV_stdlib_os_functions, stdlib_os_functionsHTML],
];

stdlib_os_nav.set_events();
stdlib_os_nav.set_content_url();
