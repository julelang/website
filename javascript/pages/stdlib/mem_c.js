const stdlib_mem_c_functionsHTML = `
<div class="code">fn malloc(size: uint): *unsafe</div>
Allocates size bytes of memory.
Memory does not initialize.
Returns pointer to allocation if success, nil if not.

<div class="topic-separator"></div>
<div class="code">fn calloc(size: uint, n: uint): *unsafe</div>
Allocates n elements of size bytes each, all initialized to zero.
Returns pointer to allocation if success, nil if not.

<div class="topic-separator"></div>
<div class="code">unsafe fn realloc(mut ptr: *unsafe, size: uint): *unsafe</div>
Re-allocates the previously allocated block in ptr, making the new block size bytes long.
Returns pointer to allocation if success, nil if not.

<div class="topic-separator"></div>
<div class="code">unsafe fn free(mut ptr: *unsafe)</div>
Free a block allocated by malloc, realloc or calloc.
ptr is not setted as nil by function, therefore ptr is dangling after free.
Set ptr as nil after free for more safety.

`;

const NAV_stdlib_mem_c_functions = document.getElementById("functions");

const stdlib_mem_c_nav = new SideNavigator();
stdlib_mem_c_nav.navigations = [
    [NAV_stdlib_mem_c_functions, stdlib_mem_c_functionsHTML],
];

stdlib_mem_c_nav.set_events();
stdlib_mem_c_nav.set_content_url();
