const stdlib_errors_functionsHTML = `
<div class="code">fn new(message: str): Error</div>
Creates new error with given message.

`;

const NAV_stdlib_errors_functions = document.getElementById("functions");

const stdlib_errors_nav = new SideNavigator();
stdlib_errors_nav.navigations = [
    [NAV_stdlib_errors_functions, stdlib_errors_functionsHTML],
];

stdlib_errors_nav.set_events();
stdlib_errors_nav.set_content_url();
