const stdlib_builtin_type_aliasesHTML = `
<div class="sub-sub-title"><x class="inline_code">type byte: u8</x></div>
Is an alias for u8.
It is used, by convention, to distinguish byte values from 8-bit unsigned integer values.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">type rune: i32</x></div>
Is an alias for i32.
It is used, by convention, to distinguish character values from integer values.`;

const stdlib_builtin_functionsHTML = `
<div class="sub-sub-title"><x class="inline_code">fn out(expr)</x></div>
Prints specified expression to command line.
Uses built-in formatter.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn outln(expr)</x></div>
This function same with <x class="inline_code">out</x> function.
One difference, prints new line after print.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn panic(error: any)</x></div>
Panics program with given error data.
The data converting to str and panics with
Error trait compatible structure instance.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn recover(handler: fn(Error))</x></div>
Recovers errors if exist and call given function with handled error instance.

<div class="topic-separator"></div>
<div class="code">//jule:typearg
fn new[T](): &T</div>
Returns reference to new heap-allocation of data type if allocation is success, panics if not.

<div class="topic-separator"></div>
<div class="code">fn make(X, ...Y): X</div>
Returns new instance of data type for supported types.

<div class="topic-separator"></div>
<div class="code">fn copy[Item](mut dest: []Item, src: []Item): int</div>
Copies components of source slice to destination slice.
Returns number of copied components.
<br><br>
Special cases are: <br>
<li><x class="inline_code">copy[Item](dest, src) = length accepts as src.len if dest.len > src.len</x></li>
<li><x class="inline_code">copy[Item](dest, src) = length accepts as dest.len if src.len > dest.len</x></li>

<div class="topic-separator"></div>
<div class="code">fn append[Item](src: []Item, components: ...Item): []Item</div>
Creates new required sized slice. Copies all components
of given source slice and appends given components to end of new slice.
Returns new slice, not changes given source slice.
If you want append components to source slice, assign returned slice.

`;

const stdlib_builtin_traitsHTML = `
<div class="code">trait Error {
    fn error(self): str
}</div>

This is a error handling trait of standard library. <br>
It is used for error handling and panics.
<br><br>
Example to error handling:<br>
You have a <x class="inline_code">div</x> method have two <x class="inline_code">f64</x> parameter: <x class="inline_code">x</x> and <x class="inline_code">y</x>. <br>
This function returns division of given arguments. <br>
Actually returns: <x class="inline_code">(f64, Error)</x> <br>
The first return value naturally result of computation. <br>
Returns result and empty Error for if the <x class="inline_code">x</x> and <x class="inline_code">y</x> is not equals to <x class="inline_code">0</x>. <br>
If not, returns <x class="inline_code">0</x> and returns <x class="inline_code">Error</x> instance with error message. <br>
You can handle errors like that; <br>
<div class="code">let (result, err) = div(x, y)
if err != nil {
    // If has error...
}</div>
`;

const NAV_stdlib_builtin_type_aliases = document.getElementById("type-aliases");
const NAV_stdlib_builtin_functions    = document.getElementById("functions");
const NAV_stdlib_builtin_traits   = document.getElementById("traits");

const stdlib_builtin_nav = new SideNavigator();
stdlib_builtin_nav.navigations = [
    [NAV_stdlib_builtin_type_aliases, stdlib_builtin_type_aliasesHTML],
    [NAV_stdlib_builtin_functions,    stdlib_builtin_functionsHTML],
    [NAV_stdlib_builtin_traits,       stdlib_builtin_traitsHTML],
];

stdlib_builtin_nav.set_events();
stdlib_builtin_nav.set_content_url();
