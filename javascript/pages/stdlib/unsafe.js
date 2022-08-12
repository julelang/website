const stdlib_unsafe_functionsHTML = `
<div class="code">@inline @typearg
type[T]
pub sizeof_t() uint</div>
Returns the size of the data type in bytes.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub sizeof(expr: T) uint</div>
Returns the size of the expression in bytes.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub alignof(expr: T) uint</div>
Returns the alignment, in bytes, required for any instance of the type
indicated by type-id, which is either complete object type.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub ptr_of(ptr: *T) Ptr[T]</div>
Returns unsafe pointer for given raw pointer.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub ptr_from(addr: uintptr) Ptr[T]</div>
Returns unsafe pointer from given address.

<div class="topic-separator"></div>
<div class="code">@inline
type[T]
pub voidptr_of(ptr: *T) Voidptr</div>
Returns unsafe voidptr for given raw pointer.

<div class="topic-separator"></div>
<div class="code">@inline
pub voidptr_from(addr: uintptr) Voidptr</div>
Returns unsafe voidptr from given address.
`;

const stdlib_unsafe_traitsHTML = `
<div class="code">pub trait Pointer {
    addr() uintptr
}</div>
Common behaviors of unsafe pointers.
`;

const stdlib_unsafe_structsHTML = `
<div class="code">pub struct Voidptr</div>
Wrapper structure for voidptr.

<br><br>
<strong>Implemented traits:</strong>
<ul>
    <li><x class="inline_code">Pointer</x></li>
</ul>

<br><br>
<strong>Methods:</strong>

<div class="code">@typearg
type[T]
pub &cast() *T</div>
Returns casted raw pointer of given type.

<div class="topic-separator"></div>
<div class="code">@inline @typearg
type[T]
pub &to_ptr() Ptr[T]</div>
Returns unsafe pointer of given type.

<div class="topic-separator"></div>
<div class="code">type[T]
pub struct Ptr</div>
Wrapper structure for unsafe raw pointer.

<br><br>
<strong>Implemented traits:</strong>
<ul>
    <li><x class="inline_code">Pointer</x></li>
</ul>

<br><br>
<strong>Methods:</strong>

<div class="code">@inline
pub &to_voidptr() Voidptr</div>
Returns unsafe pointer as unsafe voidptr.

<div class="topic-separator"></div>
<div class="code">@inline
pub &move(n: int)</div>
Moves the pointer from its pointing position by the size of the data type.
The offset amount is determined by n.
Moving back requires a negative expression, and moving forward requires a positive expression.
<br><br>
Special cases are: <br>
<li><x class="inline_code">move(n) = address sets as zero (nil)</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub &get() T</div>
Returns data of pointer.
`;

const NAV_stdlib_unsafe_functions = document.getElementById("functions");
const NAV_stdlib_unsafe_traits    = document.getElementById("traits");
const NAV_stdlib_unsafe_structs   = document.getElementById("structs");

const stdlib_unsafe_nav = new SideNavigator();
stdlib_unsafe_nav.navigations = [
    [NAV_stdlib_unsafe_functions, stdlib_unsafe_functionsHTML],
    [NAV_stdlib_unsafe_traits,    stdlib_unsafe_traitsHTML],
    [NAV_stdlib_unsafe_structs,   stdlib_unsafe_structsHTML],
];

stdlib_unsafe_nav.set_events();
stdlib_unsafe_nav.set_content_url();
