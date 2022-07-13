const stdlib_mem_functionsHTML = `
<div class="code">type[Alloc_T]
pub calloc(const n size) *Alloc_T</div>
Allocates n memory by size of specified data-type. <br>
The allocated memory initialized with zero (0) value.
<br><br>
Special cases are; <br>
<li><x class="inline_code">calloc[Alloc_T](n) = nil if n == 0</x></li>
<li><x class="inline_code">calloc[Alloc_T](n) = nil if allocation failed</x></li>

<div class="topic-separator"></div>
<div class="code">pub malloc(const size size) voidptr</div>
Allocates memory by specified size. <br>
The allocated memory is not initialized.
<br><br>
Special cases are;
<li><x class="inline_code">malloc(size) = nil if n == 0</x></li>
<li><x class="inline_code">malloc(size) = nil if allocation failed</x></li>

<div class="topic-separator"></div>
<div class="code">pub realloc(ptr voidptr, const size size) voidptr</div>
Resizes the allocation based on the given size.
<br><br>
Special cases are;
<li><x class="inline_code">realloc(ptr, size) = nil if ptr == nil</x></li>
<li><x class="inline_code">realloc(ptr, size) = nil if allocation failed</x></li>

<div class="topic-separator"></div>
<div class="code">type[Alloc_T]
pub memset(ptr *Alloc_T, expr Alloc_T, const n size)</div>
Sets n value of pointer segments to specified expression.
<br><br>
Special case is:
<li><x class="inline_code">memset[Alloc_T](ptr, expr, n) = does nothing if n == 0</x></li>
<li><x class="inline_code">memset[Alloc_T](ptr, expr, n) = does nothing if ptr == nil</x></li>

<div class="topic-separator"></div>
<div class="code">type[Alloc_T]
pub memcopy(dest, src *Alloc_T, const n size)</div>
Copies n value from source allocation to destination allocation.
<br><br>
Special case is:
<li><x class="inline_code">memcopy[Alloc_T](dest, src, n) = does nothing if n == 0</x></li>
<li><x class="inline_code">memcopy[Alloc_T](dest, src, n) = does nothing if dest == nil</x></li>
<li><x class="inline_code">memcopy[Alloc_T](dest, src, n) = does nothing if src == nil</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
@typearg
type[T]
pub new() *T</div>
Returns pointer to new allocation of data type if allocation is success, nil if not.

<div class="topic-separator"></div>
<div class="code">@inline
pub free(ptr voidptr)</div>
Deallocates given heap-allocated pointer.
`;

const NAV_stdlib_mem_functions = document.getElementById("functions");

const stdlib_mem_nav = new SideNavigator();
stdlib_mem_nav.navigations = [
    [NAV_stdlib_mem_functions, stdlib_mem_functionsHTML],
];

stdlib_mem_nav.set_events();
stdlib_mem_nav.set_content_url();
