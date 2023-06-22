const globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const BIT_SIZE: int</x></div>
Bit-size of runtime architecture. <br>
Possible values are: 32, and 64.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let SYS_INT: str</x></div>
Signed integer kind of runtime architecture. <br>
Is equavalent to <x class="inline_code">int</x>, but specific bit-sized integer kind. <br>
Accept as constant.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let SYS_UINT: str</x></div>
Unsigned integer kind of runtime architecture.
Is equavalent to <x class="inline_code">uint</x> and <x class="inline_code">uintptr</x>, but specific bit-sized integer kind.
Accept as constant.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_F32</x></div>
Maximum positive value of 32-bit floating-points.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_F32</x></div>
Maximum negative value of 32-bit floating-points.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_F64</x></div>
Maximum positive value of 64-bit floating-points.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_F64</x></div>
Maximum negative value of 64-bit floating-points.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_I8</x></div>
Maximum positive value of 8-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_I8</x></div>
Maximum negative value of 8-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_I16</x></div>
Maximum positive value of 16-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_I16</x></div>
Maximum negative value of 16-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_I32</x></div>
Maximum positive value of 32-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_I32</x></div>
Maximum negative value of 32-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_I64</x></div>
Maximum positive value of 64-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MIN_I64</x></div>
Maximum negative value of 64-bit signed integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_U8</x></div>
Maximum value of 8-bit unsigned integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_U16</x></div>
Maximum value of 16-bit unsigned integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_U32</x></div>
Maximum value of 32-bit unsigned integers.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">MAX_U64</x></div>
Maximum value of 64-bit unsigned integers.

`;

const functionsHTML = `
<div class="code">fn real_kind_of(kind: str): str</div>
Returns kind's bit-specific kind if bit-specific like int, uint, and uintptr. <br>
Returns kind if not bit-specific. <br>
Bit-size is determined by runtime.

<div class="topic-separator"></div>
<div class="code">fn bitsize_of(k: str): int</div>
Returns kind's bit-size. <br>
Returns -1 if kind is not numeric.

<div class="topic-separator"></div>
<div class="code">fn int_from_bits(bits: u64): str</div>
Returns signed integer kind by bit-size. <br>
Possible bit-sizes are: 8, 16, 32, and 64. <br>
Returns empty string if bits is invalid.

<div class="topic-separator"></div>
<div class="code">fn uint_from_bits(bits: u64): str</div>
Returns unsigned integer kind by bit-size. <br>
Possible bit-sizes are: 8, 16, 32, and 64. <br>
Returns empty string if bits is invalid.

<div class="topic-separator"></div>
<div class="code">fn float_from_bits(bits: u64): str</div>
Returns floating-point kind by bit-size. <br>
Possible bit-sizes are: 32, and 64. <br>
Returns empty string if bits is invalid.

<div class="topic-separator"></div>
<div class="code">fn check_bit_int(v: str, bit: int): bool</div>
Reports whether signed integer literal is compatible given bit-size.

<div class="topic-separator"></div>
<div class="code">fn check_bit_uint(v: str, bit: int): bool</div>
Reports whether unsigned integer literal is compatible given bit-size.

<div class="topic-separator"></div>
<div class="code">fn check_bit_float(val: str, bit: int): bool</div>
Reports whether float literal is compatible given bit-size.

<div class="topic-separator"></div>
<div class="code">fn bitsize_of_float(x: f64): u64</div>
Reports minimum bit-size of given floating-point.
<br><br>
Possible values are:
<ul>
    <li>32 for 32-bit</li>
    <li>64 for 64-bit</li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn bitsize_of_int(x: i64): u64</div>
Reports minimum bit-size of given signed integer.
<br><br>
Possible values are:
<ul>
    <li>8 for 8-bit</li>
    <li>16 for 16-bit</li>
    <li>32 for 32-bit</li>
    <li>64 for 64-bit</li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn bitsize_of_uint(x: u64): u64</div>
Reports minimum bit-size of given unsigned integer.
<br><br>
Possible values are:
<ul>
    <li>8 for 8-bit</li>
    <li>16 for 16-bit</li>
    <li>32 for 32-bit</li>
    <li>64 for 64-bit</li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn min_of(mut k: str): f64</div>
Returns minimum value of signed/unsigned integer and floating-point kinds. <br>
Returns 0 if kind is invalid.

<div class="topic-separator"></div>
<div class="code">fn max_of(mut k: str): f64</div>
Returns minimum value of signed/unsigned integer and floating-point kinds. <br>
Returns 0 if kind is invalid.

<div class="topic-separator"></div>
<div class="code">fn is_sig_int(mut k: str): bool</div>
Reports whether kind is signed integer.

<div class="topic-separator"></div>
<div class="code">fn is_unsig_int(mut k: str): bool</div>
Reports kind is unsigned integer.

<div class="topic-separator"></div>
<div class="code">fn is_int(k: str): bool</div>
Reports whether kind is signed/unsigned integer.

<div class="topic-separator"></div>
<div class="code">fn is_float(k: str): bool</div>
Reports whether kind is float.

<div class="topic-separator"></div>
<div class="code">fn is_num(k: str): bool</div>
Reports whether kind is numeric.

<div class="topic-separator"></div>
<div class="code">fn is_sig_num(k: str): bool</div>
Reports whether kind is signed numeric.

<div class="topic-separator"></div>
<div class="code">fn is_i8_compatible(mut k: str): bool</div>
Reports whether i8 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_i16_compatible(mut k: str): bool</div>
Reports whether i16 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_i32_compatible(mut k: str): bool</div>
Reports whether i32 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_i64_compatible(mut k: str): bool</div>
Reports whether i64 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_u8_compatible(mut k: str): bool</div>
Reports whether u8 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_u16_compatible(mut k: str): bool</div>
Reports whether u16 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_u32_compatible(mut k: str): bool</div>
Reports whether u32 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_u64_compatible(mut k: str): bool</div>
Reports whether u64 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_f32_compatible(mut k: str): bool</div>
Reports whether f32 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn is_f64_compatible(mut k: str): bool</div>
Reports whether f64 is compatible with kind.

<div class="topic-separator"></div>
<div class="code">fn types_are_compatible(mut k1: str, k2: str): bool</div>
Reports types are compatible. <br>
k1 is the destination type, k2 is the source type. <br>
Return false if k2 is unsupported kind.

<div class="topic-separator"></div>
<div class="code">fn is_i16_greater(mut k: str): bool</div>
Reports whether i16 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_i32_greater(mut k: str): bool</div>
Reports whether i32 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_i64_greater(mut k: str): bool</div>
Reports whether i64 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_u8_greater(mut k: str): bool</div>
Reports whether u8 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_u16_greater(mut k: str): bool</div>
Reports whether u16 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_u32_greater(mut k: str): bool</div>
Reports whether u32 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_u64_greater(mut k: str): bool</div>
Reports whether u64 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_f32_greater(k: str): bool</div>
Reports whether f32 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_f64_greater(k: str): bool</div>
Reports whether f64 is greater than given kind.

<div class="topic-separator"></div>
<div class="code">fn is_greater(mut k1: str, k2: str): bool</div>
Reports whether k1 kind greater than k2 kind.
`;

const enumsHTML = `
<div class="inline_code">enum TypeKind: str</div>
<br><br>
Type kinds of primitive types. <br>
These kinds are must match keyword form itself.
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">I8</x>: Kind of signed 8-bit integer</li>
    <li><x class="inline_code">I16</x>: Kind of signed 16-bit integer</li>
    <li><x class="inline_code">I32</x>: Kind of signed 32-bit integer</li>
    <li><x class="inline_code">I64</x>: Kind of signed 64-bit integer</li>
    <li><x class="inline_code">U8</x>: Kind of unsigned 8-bit integer</li>
    <li><x class="inline_code">U16</x>: Kind of unsigned 16-bit integer</li>
    <li><x class="inline_code">U32</x>: Kind of unsigned 32-bit integer</li>
    <li><x class="inline_code">U64</x>: Kind of unsigned 64-bit integer</li>
    <li><x class="inline_code">F32</x>: Kind of 32-bit floating-point</li>
    <li><x class="inline_code">F64</x>: Kind of 64-bit floating-point</li>
    <li><x class="inline_code">Uint</x>: Kind of system specific bit-size unsigned integer</li>
    <li><x class="inline_code">Int</x>: Kind of system specific bit-size signed integer</li>
    <li><x class="inline_code">Uintptr</x>: Kind of system specific bit-size unsigned integer</li>
    <li><x class="inline_code">Bool</x>: Kind of boolean</li>
    <li><x class="inline_code">Str</x>: Kind of string</li>
    <li><x class="inline_code">Any</x>: Kind of any type</li>
</ul>


`;

const globals = document.getElementById("globals");
const functions = document.getElementById("functions");
const enums = document.getElementById("enums");

const nav = new SideNavigator();
nav.navigations = [
    [globals, globalsHTML],
    [functions, functionsHTML],
    [enums, enumsHTML],
];

nav.set_events();
nav.set_content_url();
