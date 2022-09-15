const stdlib_io_functionsHTML = `
<div class="code">fn readln() str</div>
Reads full-complete line from command-line.

<div class="topic-separator"></div>
<div class="code">fn readin() str</div>
Read first part of line from command-line.
`;

const NAV_stdlib_io_functions = document.getElementById("functions");

const stdlib_io_nav = new SideNavigator();
stdlib_io_nav.navigations = [
    [NAV_stdlib_io_functions, stdlib_io_functionsHTML],
];

stdlib_io_nav.set_events();
stdlib_io_nav.set_content_url();
