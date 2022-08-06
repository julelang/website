const stdlib_mem_functionsHTML = `
<div class="code">@typearg
type[T]
pub new() *T</div>
Returns pointer to new heap-allocation of data type if
allocation is success, nil if not.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub drop(&ptr *T)</div>
Drops pointer from references if include reference counting and set as nil.
`;

const NAV_stdlib_mem_functions = document.getElementById("functions");

const stdlib_mem_nav = new SideNavigator();
stdlib_mem_nav.navigations = [
    [NAV_stdlib_mem_functions, stdlib_mem_functionsHTML],
];

stdlib_mem_nav.set_events();
stdlib_mem_nav.set_content_url();
