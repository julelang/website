const stdlib_builtin_type_aliasesHTML = `
<div class="sub-sub-title"><x class="inline_code">pub type byte u8</x></div>
Is an alias for u8.
It is used, by convention, to distinguish byte values from 8-bit unsigned integer values.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub type sbyte i8</x></div>
Is an alias for i8.
It is used, by convention, to distinguish byte values from 8-bit signed integer values.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub type rune i32</x></div>
Is an alias for i32.
It is used, by convention, to distinguish character values from integer values.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub type size uint</x></div>
Is an Type for uint.
The size type can store the maximum size of a theoretically possible object of any type.
This type is safe way for indexing, loop counting, etc.`;

const stdlib_builtin_functionsHTML = `
<div class="sub-sub-title"><x class="inline_code">out(value{""} any)</x></div>
Prints value to command line.
Can take any data-type as argument.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">outln(value{""} any)</x></div>
This function same with <x class="inline_code">out</x> function.
One difference, prints new line after print.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">panic(error Error)</x></div>
Panics program with given error instance.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">recover(handler (Error))</x></div>
Recovers errors if exist and call given function with handled error instance.
`;

const stdlib_builtin_structuresHTML = `
<div class="code">pub struct Error {
    pub message:str
}</div>

This is a error handling structure of standard library. <br>
It is used for error handling and panics.
<br><br>
Example to error handling:<br>
You have a <x class="inline_code">div</x> method have two <x class="inline_code">f64</x> parameter: <x class="inline_code">x</x> and <x class="inline_code">y</x>. <br>
This function returns division of given arguments. <br>
Actually returns: <x class="inline_code">[f64, Error]</x> <br>
The first return value naturally result of computation. <br>
Returns result and empty Error for if the <x class="inline_code">x</x> and <x class="inline_code">y</x> is not equals to <x class="inline_code">0</x>. <br>
If not, returns <x class="inline_code">0</x> and returns <x class="inline_code">Error</x> instance with error message. <br>
You can handle errors like that; <br>
<div class="code">result:, err: = div(x, y)
if err { // Equals to !err.message.empty()
    // If has error...
}</div>
`;

const NAV_stdlib_builtin_type_aliases = document.getElementById("type-aliases");
const NAV_stdlib_builtin_functions    = document.getElementById("functions");
const NAV_stdlib_builtin_structures   = document.getElementById("structures");

const stdlib_builtin_nav = new SideNavigator();
stdlib_builtin_nav.navigations = [
    [NAV_stdlib_builtin_type_aliases, stdlib_builtin_type_aliasesHTML],
    [NAV_stdlib_builtin_functions,    stdlib_builtin_functionsHTML],
    [NAV_stdlib_builtin_structures,   stdlib_builtin_structuresHTML],
];

stdlib_builtin_nav.set_events();
stdlib_builtin_nav.set_content_url();
