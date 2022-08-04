const stdlib_math_bits_functionsHTML = `
<div class="code">@inline
pub leading_zeros8(x u8) int</div>
Returns the number of leading zero bits in x; the result is 8 for x == 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub leading_zeros16(x u16) int</div>
Returns the number of leading zero bits in x; the result is 16 for x == 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub leading_zeros32(x u32) int</div>
Returns the number of leading zero bits in x; the result is 32 for x == 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub leading_zeros64(x u64) int</div>
Returns the number of leading zero bits in x; the result is 64 for x == 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub trailing_zeros8(x u8) int</div>
Returns the number of trailing zero bits in x; the result is 8 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub trailing_zeros16(x u16) int</div>
Returns the number of trailing zero bits in x; the result is 16 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub trailing_zeros32(x u32) int</div>
Returns the number of trailing zero bits in x; the result is 32 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub trailing_zeros64(x u64) int</div>
Returns the number of trailing zero bits in x; the result is 64 for x == 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub ones_count8(x u8) int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">@inline
pub ones_count16(x u16) int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">@inline
pub ones_count32(x u32) int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">pub ones_count64(x u64) int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">pub rotate_left8(x u8, k int) u8</div>
Returns the value of x rotated left by (k mod 8) bits.
To rotate x right by k bits, call rotate_left8(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub rotate_left16(x u16, k int) u16</div>
Returns the value of x rotated left by (k mod 16) bits.
To rotate x right by k bits, call rotate_left16(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub rotate_left32(x u32, k int) u32</div>
Returns the value of x rotated left by (k mod 32) bits.
To rotate x right by k bits, call rotate_left32(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub rotate_left64(x u64, k int) u64</div>
Returns the value of x rotated left by (k mod 64) bits.
To rotate x right by k bits, call rotate_left64(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">@inline
pub reverse8(x u8) u8</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">@inline
pub reverse16(x u16) u16</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">@inline
pub reverse32(x u32) u32</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">@inline
pub reverse64(x u64) u64</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">@inline
pub reverse_bytes16(x u16) u16</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub reverse_bytes32(x u32) u32</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub reverse_bytes64(x u64) u64</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">@inline
pub len8(x u8) int</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub len16(x u16) [n int]</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub len32(x u32) [n int]</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub len64(x u64) [n int]</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">pub add32(x, y, carry u32) [sum, carryout u32]</div>
Returns the sum with carry of x, y and carry: sum = x + y + carry.
The carry input must be 0 or 1; otherwise the behavior is undefined.
The carryout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub add64(x, y, carry u64) [sum, carryout u64]</div>
Returns the sum with carry of x, y and carry: sum = x + y + carry.
The carry input must be 0 or 1; otherwise the behavior is undefined.
The carryout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub sub32(x, y, borrow u32) [diff, borrowout u32]</div>
Returns the difference of x, y and borrow, diff = x - y - borrow.
The borrow input must be 0 or 1; otherwise the behavior is undefined.
The borrowout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub sub64(x, y, borrow u64) [diff, borrowout u64]</div>
Returns the difference of x, y and borrow: diff = x - y - borrow.
The borrow input must be 0 or 1; otherwise the behavior is undefined.
The borrowout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub mul32(x, y u32) [hi, lo u32]</div>
Returns the 64-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub mul64(x, y u64) [hi, lo u64]</div>
Returns the 128-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub div32(hi, lo, y u32) [quo, rem u32]</div>
Returns the quotient and remainder of (hi, lo) divided by y: <br>
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper
half in parameter hi and the lower half in parameter lo. <br>
div32 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

<div class="topic-separator"></div>
<div class="code">pub div64(hi, lo, y u64) [quo, rem u64]</div>
Returns the quotient and remainder of (hi, lo) divided by y: <br>
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper
half in parameter hi and the lower half in parameter lo. <br>
div64 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

<div class="topic-separator"></div>
<div class="code">@inline
pub rem32(hi, lo, y u32) u32</div>
Returns the remainder of (hi, lo) divided by y. rem32 panics
for y == 0 (division by zero) but, unlike div32, it doesn't panic
on a quotient overflow.

<div class="topic-separator"></div>
<div class="code">pub rem64(hi, lo, y u64) u64</div>
Returns the remainder of (hi, lo) divided by y. rem64 panics
for y == 0 (division by zero) but, unlike div64, it doesn't panic
on a quotient overflow.

`;

const NAV_stdlib_math_bits_functions = document.getElementById("functions");

const stdlib_math_bits_nav = new SideNavigator();
stdlib_math_bits_nav.navigations = [
    [NAV_stdlib_math_bits_functions, stdlib_math_bits_functionsHTML],
];

stdlib_math_bits_nav.set_events();
stdlib_math_bits_nav.set_content_url();
