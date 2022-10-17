const stdlib_mem_functionsHTML = `
<div class="code">fn size_of(TYPE || EXPRESSION): uint</div>
Returns the size of the type in bytes.
If given expression, uses type of expression.

<div class="topic-separator"></div>
<div class="code">fn align_of(TYPE || EXPRESSION): uint</div>
Returns the alignment, in bytes, required for any instance of the type
indicated by type-id, which is either complete object type.
If given expression, uses type of expression.

`;

const NAV_stdlib_mem_functions = document.getElementById("functions");

const stdlib_mem_nav = new SideNavigator();
stdlib_mem_nav.navigations = [
    [NAV_stdlib_mem_functions, stdlib_mem_functionsHTML],
];

stdlib_mem_nav.set_events();
stdlib_mem_nav.set_content_url();
