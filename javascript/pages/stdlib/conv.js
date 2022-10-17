const stdlib_conv_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const INT_SIZE</x></div>
Is the size in bits of an int or uint value.`;

const stdlib_conv_functionsHTML = `
<div class="code">fn conv_bool(s: str): (bool, ConvError)</div>
Returns the boolean value represented by the string.
It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False.
Any other value returns an error.

<div class="topic-separator"></div>
<div class="code">fn fmt_bool(b: bool): str</div>
Returns "true" or "false" according to the value of b.

<div class="topic-separator"></div>
<div class="code">fn fmt_uint(i: u64, base: int): str</div>
Returns the string representation of i in the given base,
for 2 <= base <= 36. The result uses the lower-case letters 'a' to 'z'
for digit values >= 10.

<div class="topic-separator"></div>
<div class="code">fn fmt_int(i: i64, base: int): str</div>
Returns the string representation of i in the given base,
for 2 <= base <= 36. The result uses the lower-case letters 'a' to 'z'
for digit values >= 10.

<div class="topic-separator"></div>
<div class="code">fn itoa(i: int): str</div>
Is equivalent to fmt_int(i64(i), 10).

<div class="topic-separator"></div>
<div class="code">fn fmt_float(f: f64, fmt: byte, prec: int, bit_size: int): str</div>
Converts the floating-point number f to a string,
according to the format fmt and precision prec. It rounds the
result assuming that the original was obtained from a floating-point
value of bit_size bits (32 for f32, 64 for f64).
<br><br>
The format fmt is one of <br>
'b' (-ddddp±ddd, a binary exponent), <br>
'e' (-d.dddde±dd, a decimal exponent), <br>
'E' (-d.ddddE±dd, a decimal exponent), <br>
'f' (-ddd.dddd, no exponent), <br>
'g' ('e' for large exponents, 'f' otherwise), <br>
'G' ('E' for large exponents, 'f' otherwise), <br>
'x' (-0xd.ddddp±ddd, a hexadecimal fraction and binary exponent), or <br>
'X' (-0Xd.ddddP±ddd, a hexadecimal fraction and binary exponent).
<br><br>
The precision prec controls the number of digits (excluding the exponent)
printed by the 'e', 'E', 'f', 'g', 'G', 'x', and 'X' formats.
For 'e', 'E', 'f', 'x', and 'X', it is the number of digits after the decimal point.
For 'g' and 'G' it is the maximum number of significant digits (trailing
zeros are removed).
The special precision -1 uses the smallest number of digits
necessary such that ParseFloat will return f exactly.

<div class="topic-separator"></div>
<div class="code">fn parse_int(mut s: str, base: int, mut bit_size: int): (i64, ConvError)</div>
Interprets a string s in the given base (0, 2 to 36) and
bit size (0 to 64) and returns the corresponding value i.
<br><br>
The string may begin with a leading sign: "+" or "-".
<br><br>
If the base argument is 0, the true base is implied by the string's
prefix following the sign (if present): 2 for "0b", 8 for "0" or "0o",
16 for "0x", and 10 otherwise.
<br><br>
The bit_size argument specifies the integer type
that the result must fit into. Bit sizes 0, 8, 16, 32, and 64
correspond to int, i8, i16, i32, and i64.
If bit_size is below 0 or above 64, an error is returned.
<br><br>
The errors that parse_int returns have concrete type ConvError.
If s is empty or contains invalid digits, err = ConvError.InvalidSyntax and the returned value is 0;
if the value corresponding to s cannot be represented by a
signed integer of the given size, err = ConvError.OutOfRange and the
returned value is the maximum magnitude integer of the
appropriate bit_size and sign.

<div class="topic-separator"></div>
<div class="code">fn parse_uint(mut s: str, mut base: int, mut bit_size: int): (u64, ConvError)</div>
Is like parse_int but for unsigned numbers.
A sign prefix is not permitted.

<div class="topic-separator"></div>
<div class="code">fn parse_float(s: str, bit_size: int): (f64, ConvError)</div>
Converts the string s to a floating-point number
with the precision specified by bit_size: 32 for f32, or 64 for f64.
When bit_size=32, the result still has type f64, but it will be
convertible to f32 without changing its value.
<br><br>
Accepts decimal and hexadecimal floating-point numbers
as defined by the Jule syntax for [floating-point literals].
If s is well-formed and near a valid floating-point number,
returns the nearest floating-point number rounded
using IEEE754 unbiased rounding.
(Parsing a hexadecimal floating-point value only rounds when
there are more bits in the hexadecimal representation than
will fit in the mantissa.)
<br><br>
The errors that returns have concrete type ConvError.
<br><br>
If s is not syntactically well-formed, returns err = ConvError.InvalidSyntax.
<br><br>
If s is syntactically well-formed but is more than 1/2 ULP
away from the largest floating point number of the given size,
Returns f = ±inf, err = ConvError.OutOfRange.
<br><br>
Recognizes the string "nan", and the (possibly signed) strings "inf" and "infinity"
as their respective special floating point values. It ignores case when matching.

`;

const stdlib_conv_enumsHTML = `
<div class="code">enum ConvError</div>
Error codes of conv package.

<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">Ok</x>: No problem</li>
    <li><x class="inline_code">OutOfRange</x>: Indicates that a value is out of range for the target type</li>
    <li><x class="inline_code">InvalidSyntax</x>: Indicates that a value does not have the right syntax for the target type</li>
    <li><x class="inline_code">InvalidBase</x>: Indicates that a base is invalid</li>
    <li><x class="inline_code">InvalidBitSize</x>: Indicates that a bit size is invalid</li>
</ul>
`;

const NAV_stdlib_conv_globals = document.getElementById("globals");
const NAV_stdlib_conv_functions = document.getElementById("functions");
const NAV_stdlib_conv_enums = document.getElementById("enums");

const stdlib_conv_nav = new SideNavigator();
stdlib_conv_nav.navigations = [
    [NAV_stdlib_conv_globals, stdlib_conv_globalsHTML],
    [NAV_stdlib_conv_functions, stdlib_conv_functionsHTML],
    [NAV_stdlib_conv_enums, stdlib_conv_enumsHTML],
];

stdlib_conv_nav.set_events();
stdlib_conv_nav.set_content_url();
