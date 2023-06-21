const functionsHTML = `
<div class="code">fn new_i64(x: i64): &Const</div>
Returns new constant value instance from 64-bit signed integer.

<div class="topic-separator"></div>
<div class="code">fn new_u64(x: u64): &Const</div>
Returns new constant value instance from 64-bit unsigned integer.

<div class="topic-separator"></div>
<div class="code">fn new_bool(x: bool): &Const</div>
Returns new constant value instance from boolean.

<div class="topic-separator"></div>
<div class="code">fn new_str(x: str): &Const</div>
Returns new constant value instance from string.

<div class="topic-separator"></div>
<div class="code">fn new_f64(x: f64): &Const</div>
Returns new constant value instance from 64-bit floating-point.

<div class="topic-separator"></div>
<div class="code">fn new_nil(): &Const</div>
Returns new constant value instance with nil.

`;

const structsHTML = `
<div class="code">struct Const</div>
Constant data. <br>
Use <x class="inline_code">new_nil</x> function istead of <x class="inline_code">Const{}</x> for nil literal.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn read_i64(self): i64</div> <br>
Reads 64-bit signed integer data. <br>
Returns 0 if data is not 64-bit signed integer.

<div class="title-separator"></div>
<div class="inline_code">fn read_u64(self): u64</div> <br>
Reads 64-bit unsigned integer data. <br>
Returns 0 if data is not 64-bit unsigned integer.

<div class="title-separator"></div>
<div class="inline_code">fn read_bool(self): bool</div> <br>
Reads boolean data. <br>
Returns false if data is not boolean.

<div class="title-separator"></div>
<div class="inline_code">fn read_str(self): str</div> <br>
Reads string data. <br>
Returns empty string if data is not string.

<div class="title-separator"></div>
<div class="inline_code">fn read_f64(self): f64</div> <br>
Reads 64-bit floating-point data. <br>
Returns 0 if data is not 64-bit floating-point.

<div class="title-separator"></div>
<div class="inline_code">fn as_i64(self): i64</div> <br>
Reads data as 64-bit signed integer. <br>
Returns 0 if data is string, bool or which is not numeric.

<div class="title-separator"></div>
<div class="inline_code">fn as_u64(self): u64</div> <br>
Reads data as 64-bit unsigned integer. <br>
Returns 0 if data is string, bool or which is not numeric.

<div class="title-separator"></div>
<div class="inline_code">fn as_f64(self): f64</div> <br>
Reads data as 64-bit floating-point. <br>
Returns 0 if data is string, bool or which is not numeric.

<div class="title-separator"></div>
<div class="inline_code">fn set_i64(mut self, x: i64)</div> <br>
Sets constant value from 64-bit signed integer.

<div class="title-separator"></div>
<div class="inline_code">fn set_u64(mut self, x: u64)</div> <br>
Sets constant value from 64-bit unsigned integer.

<div class="title-separator"></div>
<div class="inline_code">fn set_bool(mut self, x: bool)</div> <br>
Sets constant value from boolean.

<div class="title-separator"></div>
<div class="inline_code">fn set_str(mut self, x: str)</div> <br>
Sets constant value from string.

<div class="title-separator"></div>
<div class="inline_code">fn set_f64(mut self, x: f64)</div> <br>
Sets constant value from 64-bit floating-point.

<div class="title-separator"></div>
<div class="inline_code">fn set_nil(mut self)</div> <br>
Sets constant value to nil.

<div class="title-separator"></div>
<div class="inline_code">fn is_i64(self): bool</div> <br>
Reports whether data is 64-bit signed integer.

<div class="title-separator"></div>
<div class="inline_code">fn is_u64(self): bool</div> <br>
Reports whether data is 64-bit unsigned integer.

<div class="title-separator"></div>
<div class="inline_code">fn is_bool(self): bool</div> <br>
Reports whether data is boolean.

<div class="title-separator"></div>
<div class="inline_code">fn is_str(self): bool</div> <br>
Reports whether data is string.

<div class="title-separator"></div>
<div class="inline_code">fn is_f64(self): bool</div> <br>
Reports whether data is 64-bit floating-point.

<div class="title-separator"></div>
<div class="inline_code">fn is_nil(self): bool</div> <br>
Reports whether data is nil.

<div class="title-separator"></div>
<div class="inline_code">fn are_same_types(self, x: Const): bool</div> <br>
Reports whether self and x has same type.

<div class="title-separator"></div>
<div class="inline_code">fn and(self, x: Const): bool</div> <br>
Reports whether self and x are true. <br>
Returns false if type is not supported.

<div class="title-separator"></div>
<div class="inline_code">fn or(self, x: Const): bool</div> <br>
Reports whether self or x is true. <br>
Returns false if type is not supported.

<div class="title-separator"></div>
<div class="inline_code">fn eqs(self, x: Const): bool</div> <br>
Reports whether self and x are equals. <br>
Returns false if type is not supported.

<div class="title-separator"></div>
<div class="inline_code">fn lt(self, x: Const): bool</div> <br>
Reports whether self less than x. <br>
Returns false if type is unsupported by operation.
<br><br>
Supported types are:
<ul>
    <li>64-bit signed integer</li>
    <li>64-bit unsigned integer</li>
    <li>64-bit floating-point</li>
</ul>

<div class="title-separator"></div>
<div class="inline_code">fn gt(self, x: Const): bool</div> <br>
Reports whether self greater than x. <br>
Returns false if type is unsupported by operation.
<br><br>
Supported types are:
<ul>
    <li>64-bit signed integer</li>
    <li>64-bit unsigned integer</li>
    <li>64-bit floating-point</li>
</ul>

<div class="title-separator"></div>
<div class="inline_code">fn add(mut self, x: Const): bool</div> <br>
Adds x's value to itself value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn sub(mut self, x: Const): bool</div> <br>
Subs x's value from itself value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn mul(mut self, x: Const): bool</div> <br>
Multiplies x's value to c's value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn div(mut self, x: Const): bool</div> <br>
Divides itself value to x's value. <br>
Reports whether operation is success. <br>
Reports false if divided-by-zero.
<div class="warn">This operation makes constant value is floating-point.</div>

<div class="title-separator"></div>
<div class="inline_code">fn mod(mut self, x: Const): bool</div> <br>
Mods itself value to x's value. <br>
Reports whether operation is success. <br>
Reports false if divided-by-zero.

<div class="title-separator"></div>
<div class="inline_code">fn bitwise_and(mut self, x: Const): bool</div> <br>
Bitwise and itself value to x's value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn bitwise_or(mut self, x: Const): bool</div> <br>
Bitwise or itself value to x's value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn xor(mut self, x: Const): bool</div> <br>
Bitwise xor itself value to x's value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn lshift(mut self, x: Const): bool</div> <br>
Left shifts itself value to x's value. <br>
Reports whether operation is success.

<div class="title-separator"></div>
<div class="inline_code">fn rshift(mut self, x: Const): bool</div> <br>
Right shifts itself value to x's value. <br>
Reports whether operation is success.

`;

const functions = document.getElementById("functions");
const structs = document.getElementById("structs");

const nav = new SideNavigator();
nav.navigations = [
    [functions, functionsHTML],
	[structs, structsHTML],
];

nav.set_events();
nav.set_content_url();
