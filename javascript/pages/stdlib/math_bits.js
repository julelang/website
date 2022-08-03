const stdlib_math_bits_functionsHTML = `
<div class="code">@inline
pub leading_zeros8(x u8) int</div>
Returns the number of leading zero bits in x; the result is 8 for x == 0.

<div class="code">@inline
pub leading_zeros16(x u16) int</div>
Returns the number of leading zero bits in x; the result is 16 for x == 0.

<div class="code">@inline
pub leading_zeros32(x u32) int</div>
Returns the number of leading zero bits in x; the result is 32 for x == 0.

<div class="code">@inline
pub leading_zeros64(x u64) int</div>
Returns the number of leading zero bits in x; the result is 64 for x == 0.

<div class="code">@inline
pub trailing_zeros8(x u8) int</div>
Returns the number of trailing zero bits in x; the result is 8 for x == 0.

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
<div class="code">pub mul32(x, y u32) [hi u32, lo u32]</div>
Returns the 64-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">pub mul64(x, y u64) [hi u64, lo u64]</div>
Returns the 128-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

`;

const NAV_stdlib_math_bits_functions = document.getElementById("functions");

const stdlib_math_bits_nav = new SideNavigator();
stdlib_math_bits_nav.navigations = [
    [NAV_stdlib_math_bits_functions, stdlib_math_bits_functionsHTML],
];

stdlib_math_bits_nav.set_events();
stdlib_math_bits_nav.set_content_url();
