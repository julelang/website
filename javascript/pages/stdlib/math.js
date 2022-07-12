const stdlib_math_constantsHTML = `
<div class="sub-sub-title"><x class="inline_code">pub const E:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const PI:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const PHI:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT2:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_E:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_PI:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_PHI:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LN2:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LOG_2E:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LN10:f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LOG_10E:f64</x></div>
`;

const stdlib_math_functionsHTML = `
<div class="code">@inline
pub abs(const x f64) f64</div>
Returns the absolute value of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">abs(±inf) = inf</x></li>
<li><x class="inline_code">abs(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub acosh(const x f64) f64</div>
Returns the inverse hyperbolic cosine of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">acosh(inf) = inf</x></li>
<li><x class="inline_code">acosh(x) = nan if x < 1</x></li>
<li><x class="inline_code">acosh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub asin(x f64) f64</div>
Returns the arcsine, in radians, of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">asin(±0) = ±0</x></li>
<li><x class="inline_code">asin(x) = nan if x < -1 or x > 1</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub acos(const x f64) f64</div>
Returns the arccosine, in radians, of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">acos(x) = nan if x < -1 or x > 1</x></li>

<div class="topic-separator"></div>
<div class="code">pub asinh(x f64) f64</div>
Returns the inverse hyperbolic sine of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">asinh(±0) = ±0</x></li>
<li><x class="inline_code">asinh(±inf) = ±inf</x></li>
<li><x class="inline_code">asinh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub atan(const x f64) f64</div>
Returns the arctangent, in radians, of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">atan(±0) = ±0</x></li>
<li><x class="inline_code">atan(±inf) = ±PI/2</x></li>

<div class="topic-separator"></div>
<div class="code">pub atan2(const y, const x f64) f64</div>
Returns the arc tangent of y/x, using
the signs of the two to determine the quadrant of the return value.
<br><br>
Special cases are; <br>
<li><x class="inline_code">atan2(y, nan) = nan</x></li>
<li><x class="inline_code">atan2(nan, x) = nan</x></li>
<li><x class="inline_code">atan2(+0, x>=0) = +0</x></li>
<li><x class="inline_code">atan2(-0, x>=0) = -0</x></li>
<li><x class="inline_code">atan2(+0, x<=-0) = +PI</x></li>
<li><x class="inline_code">atan2(-0, x<=-0) = -PI</x></li>
<li><x class="inline_code">atan2(y>0, 0) = +PI/2</x></li>
<li><x class="inline_code">atan2(y<0, 0) = -PI/2</x></li>
<li><x class="inline_code">atan2(inf, inf) = +PI/4</x></li>
<li><x class="inline_code">atan2(-inf, inf) = -PI/4</x></li>
<li><x class="inline_code">atan2(inf, -inf) = 3PI/4</x></li>
<li><x class="inline_code">atan2(-inf, -inf) = -3PI/4</x></li>
<li><x class="inline_code">atan2(y, inf) = 0</x></li>
<li><x class="inline_code">atan2(y>0, -inf) = +PI</x></li>
<li><x class="inline_code">atan2(y<0, -inf) = -PI</x></li>
<li><x class="inline_code">atan2(inf, x) = +PI/2</x></li>
<li><x class="inline_code">atan2(-inf, x) = -PI/2</x></li>

<div class="topic-separator"></div>
<div class="code">pub atanh(x f64) f64</div>
Returns the inverse hyperbolic tangent of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">atanh(1) = inf</x></li>
<li><x class="inline_code">atanh(±0) = ±0</x></li>
<li><x class="inline_code">atanh(-1) = -inf</x></li>
<li><x class="inline_code">atanh(x) = nan if x < -1 or x > 1</x></li>
<li><x class="inline_code">atanh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub nan() f64</div>
Returns an IEEE 754 “not-a-number” value.

<div class="topic-separator"></div>
<div class="code">@inline
pub isnan(const f f64) bool</div>
Reports whether f is an IEEE 754 “not-a-number” value.

<div class="topic-separator"></div>
<div class="code">pub inf(const sign int) f64</div>
Returns positive infinity if sign >= 0, negative infinity if !sign < 0.

<div class="topic-separator"></div>
<div class="code">@inline
pub isinf(const f f64, const sign int) bool</div>
Reports whether f is an infinity, according to sign. <br>
If sign > 0, IsInf reports whether f is positive infinity. <br>
If sign < 0, IsInf reports whether f is negative infinity. <br>
If sign == 0, IsInf reports whether f is either infinity. <br>

<div class="topic-separator"></div>
<div class="code">pub cbrt(x f64) f64</div>
Returns the cube root of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">cbrt(±0) = ±0</x></li>
<li><x class="inline_code">cbrt(±inf) = ±inf</x></li>
<li><x class="inline_code">cbrt(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub copysign(const f, const sign f64) f64</div>
Returns a value with the magnitude of f and the sign of sign.

<div class="topic-separator"></div>
<div class="code">pub dim(const x, const y f64) f64</div>
Returns the maximum of x-y or 0.
<br><br>
Special cases are; <br>
<li><x class="inline_code">dim(inf, inf) = nan</x></li>
<li><x class="inline_code">dim(-inf, -inf) = nan</x></li>
<li><x class="inline_code">dim(x, nan) = dim(nan, x) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub max(const x, const y f64) f64</div>
Returns the larger of x or y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">max(x, inf) = max(inf, x) = inf</x></li>
<li><x class="inline_code">max(x, nan) = max(nan, x) = nan</x></li>
<li><x class="inline_code">max(+0, ±0) = max(±0, +0) = +0</x></li>
<li><x class="inline_code">max(-0, -0) = -0</x></li>

<div class="topic-separator"></div>
<div class="code">pub min(const x, const y f64) f64</div>
Returns the smaller of x or y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">min(x, -inf) = min(-inf, x) = -inf</x></li>
<li><x class="inline_code">min(x, nan)  = min(nan, x) = nan</x></li>
<li><x class="inline_code">min(-0, ±0)  = min(±0, -0) = -0</x></li>

<div class="topic-separator"></div>
<div class="code">pub erf(x f64) f64</div>
Returns the error function of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">erf(inf) = 1</x></li>
<li><x class="inline_code">erf(-inf) = -1</x></li>
<li><x class="inline_code">erf(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub erfinv(x f64) f64</div>
Returns the inverse error function of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">erfinv(1) = inf</x></li>
<li><x class="inline_code">erfinv(-1) = -inf</x></li>
<li><x class="inline_code">erfinv(x) = nan if x < -1 or x > 1</x></li>
<li><x class="inline_code">erfinv(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub erfcinv(const x f64) f64</div>
Returns the inverse of erfc(x).
<br><br>
Special cases are; <br>
<li><x class="inline_code">erfcinv(0) = inf</x></li>
<li><x class="inline_code">erfcinv(2) = -inf</x></li>
<li><x class="inline_code">erfcinv(x) = nan if x < 0 or x > 2</x></li>
<li><x class="inline_code">erfcinv(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub erfc(x f64) f64</div>
Returns the complementary error function of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">erfc(inf) = 0</x></li>
<li><x class="inline_code">erfc(-inf) = 2</x></li>
<li><x class="inline_code">erfc(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub exp(const x f64) f64</div>
Returns e**x, the base-e exponential of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">exp(inf) = inf</x></li>
<li><x class="inline_code">exp(nan) = nan</x></li>
<div class="warn">
  <li>Very large values overflow to 0 or inf.</li>
  <li>Very small values underflow to 1.</li>
</div>

<div class="topic-separator"></div>
<div class="code">pub exp2(const x f64) f64</div>
Returns 2**x, the base-2 exponential of x.
Special cases are the same as exp.

<div class="topic-separator"></div>
<div class="code">pub expm1(x f64) f64</div>
Returns e**x - 1, the base-e exponential of x minus 1.
It is more accurate than exp(x) - 1 when x is near zero.
<br><br>
Special cases are; <br>
<li><x class="inline_code">expm1(inf) = inf</x></li>
<li><x class="inline_code">expm1(-inf) = -1</x></li>
<li><x class="inline_code">expm1(nan) = nan</x></li>
<div class="warn">Very large values overflow to -1 or inf.</div>

<div class="topic-separator"></div>
<div class="code">pub floor(const x f64) f64</div>
Returns the greatest integer value less than or equal to x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">floor(±0) = ±0</x></li>
<li><x class="inline_code">floor(±inf) = ±inf</x></li>
<li><x class="inline_code">floor(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub ceil(const x f64) f64</div>
Returns the least integer value greater than or equal to x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">ceil(±0) = ±0</x></li>
<li><x class="inline_code">ceil(±inf) = ±inf</x></li>
<li><x class="inline_code">ceil(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub trunc(const x f64) f64</div>
Returns the integer value of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">trunc(±0) = ±0</x></li>
<li><x class="inline_code">trunc(±inf) = ±inf</x></li>
<li><x class="inline_code">trunc(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub round(const x f64) f64</div>
Returns the nearest integer, rounding half away from zero.
<br><br>
Special cases are; <br>
<li><x class="inline_code">round(±0) = ±0</x></li>
<li><x class="inline_code">round(±inf) = ±inf</x></li>
<li><x class="inline_code">round(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub round_even(const x f64) f64</div>
Returns the nearest integer, rounding ties to even.
<br><br>
Special cases are; <br>
<li><x class="inline_code">round_even(±0) = ±0</x></li>
<li><x class="inline_code">round_even(±inf) = ±inf</x></li>
<li><x class="inline_code">round_even(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub frexp(f f64) [frac f64, exp int]</div>
Breaks f into a normalized fraction and an integral power of two.
It returns frac and exp satisfying f == frac × 2**exp, with the absolute value of frac in the interval [½, 1).
<br><br>
Special cases are; <br>
<li><x class="inline_code">frexp(±0) = ±0, 0</x></li>
<li><x class="inline_code">frexp(±inf) = ±inf, 0</x></li>
<li><x class="inline_code">frexp(nan) = nan, 0</x></li>

<div class="topic-separator"></div>
<div class="code">pub hypot(p, q f64) f64</div>
Returns sqrt(p*p + q*q), taking care to avoid unnecessary overflow and underflow.
<br><br>
Special cases are; <br>
<li><x class="inline_code">hypot(±inf, q) = inf</x></li>
<li><x class="inline_code">hypot(p, ±inf) = inf</x></li>
<li><x class="inline_code">hypot(nan, q) = nan</x></li>
<li><x class="inline_code">hypot(p, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub ldexp(frac f64, exp int) f64</div>
Is the inverse of frexp.
It returns frac × 2**exp.
<br><br>
Special cases are; <br>
<li><x class="inline_code">ldexp(±0, exp) = ±0</x></li>
<li><x class="inline_code">ldexp(±inf, exp) = ±inf</x></li>
<li><x class="inline_code">ldexp(nan, exp) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub log(const x f64) f64</div>
Returns the natural logarithm of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">log(inf) = inf</x></li>
<li><x class="inline_code">log(0) = -inf</x></li>
<li><x class="inline_code">log(x < 0) = nan</x></li>
<li><x class="inline_code">log(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub log1p(const x f64) f64</div>
Returns the natural logarithm of 1 plus its argument x.
It is more accurate than log(1 + x) when x is near zero.
<br><br>
Special cases are; <br>
<li><x class="inline_code">log1p(inf) = inf</x></li>
<li><x class="inline_code">log1p(±0) = ±0</x></li>
<li><x class="inline_code">log1p(-1) = -inf</x></li>
<li><x class="inline_code">log1p(x < -1) = nan</x></li>
<li><x class="inline_code">log1p(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub log10(const x f64) f64</div>
Returns the decimal logarithm of x.
The special cases are the same as for log.

<div class="topic-separator"></div>
<div class="code">pub log2(const x f64) f64</div>
Returns the binary logarithm of x.
The special cases are the same as for log.

<div class="topic-separator"></div>
<div class="code">pub logb(const x f64) f64</div>
Returns the binary exponent of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">logb(±inf) = inf</x></li>
<li><x class="inline_code">logb(0) = -inf</x></li>
<li><x class="inline_code">logb(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub ilogb(const x f64) int</div>
Returns the binary exponent of x as an integer.
<br><br>
Special cases are; <br>
<li><x class="inline_code">ilogb(±inf) = i32.max</x></li>
<li><x class="inline_code">ilogb(0) = i32.min</x></li>
<li><x class="inline_code">ilogb(nan) = i32.max</x></li>

<div class="topic-separator"></div>
<div class="code">pub mod(const x, y f64) f64</div>
Returns the floating-point remainder of x/y.
The magnitude of the result is less than y and its sign agrees with that of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">mod(±inf, y) = nan</x></li>
<li><x class="inline_code">mod(nan, y) = nan</x></li>
<li><x class="inline_code">mod(x, 0) = nan</x></li>
<li><x class="inline_code">mod(x, ±inf) = x</x></li>
<li><x class="inline_code">mod(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub modf(const f f64) [integer f64, frac f64]</div>
Returns integer and fractional floating-point numbers that sum to f.
Both values have the same sign as f.
<br><br>
Special cases are; <br>
<li><x class="inline_code">modf(±inf) = ±inf, nan</x></li>
<li><x class="inline_code">modf(nan) = nan, nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub nextafter32(const x, const y f32) [r f32]</div>
Returns the next representable f32 value after x towards y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">nextafter32(x, x)   = x</x></li>
<li><x class="inline_code">nextafter32(nan, y) = nan</x></li>
<li><x class="inline_code">nextafter32(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub nextafter(const x, const y f64) [r f64]</div>
Returns the next representable f64 value after x towards y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">nextafter(x, x) = x</x></li>
<li><x class="inline_code">nextafter(nan, y) = nan</x></li>
<li><x class="inline_code">nextafter(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub pow(const x, const y f64) f64</div>
Returns x**y, the base-x exponential of y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">pow(x, ±0) = 1 for any x</x></li>
<li><x class="inline_code">pow(1, y) = 1 for any y</x></li>
<li><x class="inline_code">pow(x, 1) = x for any x</x></li>
<li><x class="inline_code">pow(nan, y) = nan</x></li>
<li><x class="inline_code">pow(x, nan) = nan</x></li>
<li><x class="inline_code">pow(±0, y) = ±inf for y an odd integer < 0</x></li>
<li><x class="inline_code">pow(±0, -inf) = inf</x></li>
<li><x class="inline_code">pow(±0, inf) = +0</x></li>
<li><x class="inline_code">pow(±0, y) = inf for finite y < 0 and not an odd integer</x></li>
<li><x class="inline_code">pow(±0, y) = ±0 for y an odd integer > 0</x></li>
<li><x class="inline_code">pow(±0, y) = +0 for finite y > 0 and not an odd integer</x></li>
<li><x class="inline_code">pow(-1, ±inf) = 1</x></li>
<li><x class="inline_code">pow(x, inf) = inf for |x| > 1</x></li>
<li><x class="inline_code">pow(x, -inf) = +0 for |x| > 1</x></li>
<li><x class="inline_code">pow(x, inf) = +0 for |x| < 1</x></li>
<li><x class="inline_code">pow(x, -inf) = inf for |x| < 1</x></li>
<li><x class="inline_code">pow(inf, y) = inf for y > 0</x></li>
<li><x class="inline_code">pow(inf, y) = +0 for y < 0</x></li>
<li><x class="inline_code">pow(-inf, y) = pow(-0, -y)</x></li>
<li><x class="inline_code">pow(x, y) = nan for finite x < 0 and finite non-integer y</x></li>

<div class="topic-separator"></div>
<div class="code">pub pow10(const n int) f64</div>
Returns 10**n, the base-10 exponential of n.
<br><br>
Special cases are; <br>
<li><x class="inline_code">pow10(n) = 0 for n < -323</x></li>
<li><x class="inline_code">pow10(n) = inf for n > 308</x></li>

<div class="topic-separator"></div>
<div class="code">pub remainder(x, y f64) f64</div>
Returns the IEEE 754 floating-point remainder of x/y.
<br><br>
Special cases are; <br>
<li><x class="inline_code">remainder(±inf, y) = nan</x></li>
<li><x class="inline_code">remainder(nan, y) = nan</x></li>
<li><x class="inline_code">remainder(x, 0) = nan</x></li>
<li><x class="inline_code">remainder(x, ±inf) = x</x></li>
<li><x class="inline_code">remainder(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub signbit(const x f64) bool</div>
Reports whether x is negative or negative zero.

<div class="topic-separator"></div>
<div class="code">pub sinh(x f64) f64</div>
Returns the hyperbolic sine of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">sinh(±0) = ±0</x></li>
<li><x class="inline_code">sinh(±inf) = ±inf</x></li>
<li><x class="inline_code">sinh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub cosh(x f64) f64</div>
Returns the hyperbolic cosine of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">cosh(±0) = 1</x></li>
<li><x class="inline_code">cosh(±inf) = inf</x></li>
<li><x class="inline_code">cosh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub sqrt(const x f64) f64</div>
Returns the square root of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">sqrt(inf) = inf</x></li>
<li><x class="inline_code">sqrt(±0) = ±0</x></li>
<li><x class="inline_code">sqrt(x < 0) = nan</x></li>
<li><x class="inline_code">sqrt(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub tanh(const x f64) f64</div>
Returns the hyperbolic tangent of x.
<br><br>
Special cases are; <br>
<li><x class="inline_code">tanh(±0) = ±0</x></li>
<li><x class="inline_code">tanh(±inf) = ±1</x></li>
<li><x class="inline_code">tanh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
pub f32_bits(const f f32) u32</div>
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. <br>
<x class="inline_code">f32_bits(f32_from_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">@inline
pub f32_from_bits(const b u32) f32</div>
Returns the floating-point number corresponding
to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position.
<x class="inline_code">f32_from_bits(f32_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">@inline
pub f64_bits(const f f64) u64</div>
Returns the IEEE 754 binary representation of f,
with the sign bit of f and the result in the same bit position,
and <x class="inline_code">f64_bits(f64_from_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">@inline
pub f64_from_bits(const b u64) f64</div>
Returns the floating-point number corresponding
to the IEEE 754 binary representation b, with the sign bit of b
and the result in the same bit position.
<x class="inline_code">f64_from_bits(Float64bits(x)) == x</x>.
`;

const NAV_stdlib_math_constants = document.getElementById("constants");
const NAV_stdlib_math_functions = document.getElementById("functions");

const stdlib_math_nav = new SideNavigator();
stdlib_math_nav.navigations = [
    [NAV_stdlib_math_constants, stdlib_math_constantsHTML],
    [NAV_stdlib_math_functions, stdlib_math_functionsHTML],
];

stdlib_math_nav.set_events();
stdlib_math_nav.set_content_url();
