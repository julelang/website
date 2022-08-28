const stdlib_mem_functionsHTML = `
<div class="code">type[T]
pub fn drop(ptr: &*T)</div>
Drops pointer from references if include reference counting and set as nil.

<div class="topic-separator"></div>
<div class="code">type[T]
pub fn is_guaranteed(ptr: *T) bool</div>
Reports pointer is heap-guaranteed or not.
<li>Returns false if pointer is nil.</li>

<div class="topic-separator"></div>
<div class="code">type[T]
pub fn can_guarantee(ptr: *T) bool</div>
Reports pointer is can heap-guarantee.
<li>Returns false if pointer is nil.</li>
<li>Returns false if pointer is already heap-guaranteed.</li>

<div class="topic-separator"></div>
<div class="code">type[T]
pub fn guarantee(ptr: *T) bool</div>
Heap-guarantee to pointer if pointer is can guarantee.

<div class="topic-separator"></div>
<div class="code">pub fn size_of(TYPE || EXPRESSION) uint</div>
Returns the size of the type in bytes.
If given expression, uses type of expression.

<div class="topic-separator"></div>
<div class="code">pub fn align_of(TYPE || EXPRESSION) uint</div>
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
