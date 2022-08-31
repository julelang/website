const stdlib_math_constantsHTML = `
<div class="sub-sub-title"><x class="inline_code">pub const E: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const PI: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const PHI: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT2: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_E: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_PI: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const SQRT_PHI: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LN2: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LOG_2E: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LN10: f64</x></div>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const LOG_10E: f64</x></div>
`;

const stdlib_math_functionsHTML = `
<div class="code">pub fn abs(x: f64) f64</div>
Returns the absolute value of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">abs(±inf) = +inf</x></li>
<li><x class="inline_code">abs(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn acosh(mut x: f64) f64</div>
Returns the inverse hyperbolic cosine of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">acosh(+inf) = +inf</x></li>
<li><x class="inline_code">acosh(x) = nan if x < 1</x></li>
<li><x class="inline_code">acosh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn asin(mut x: f64) f64</div>
Returns the arcsine, in radians, of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">asin(±0) = ±0</x></li>
<li><x class="inline_code">asin(x) = nan if x < -1 or x > 1</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn acos(x: f64) f64</div>
Returns the arccosine, in radians, of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">acos(x) = nan if x < -1 or x > 1</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn asinh(mut x: f64) f64</div>
Returns the inverse hyperbolic sine of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">asinh(±0) = ±0</x></li>
<li><x class="inline_code">asinh(±inf) = ±inf</x></li>
<li><x class="inline_code">asinh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn atan(x: f64) f64</div>
Returns the arctangent, in radians, of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">atan(±0) = ±0</x></li>
<li><x class="inline_code">atan(±inf) = ±PI/2</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn atan2(y: f64, x: f64) f64</div>
Returns the arc tangent of y/x, using
the signs of the two to determine the quadrant of the return value.
<br><br>
Special cases are: <br>
<li><x class="inline_code">atan2(y, nan) = nan</x></li>
<li><x class="inline_code">atan2(nan, x) = nan</x></li>
<li><x class="inline_code">atan2(+0, x>=0) = +0</x></li>
<li><x class="inline_code">atan2(-0, x>=0) = -0</x></li>
<li><x class="inline_code">atan2(+0, x<=-0) = +PI</x></li>
<li><x class="inline_code">atan2(-0, x<=-0) = -PI</x></li>
<li><x class="inline_code">atan2(y>0, 0) = +PI/2</x></li>
<li><x class="inline_code">atan2(y<0, 0) = -PI/2</x></li>
<li><x class="inline_code">atan2(+inf, +inf) = +PI/4</x></li>
<li><x class="inline_code">atan2(-inf, +inf) = -PI/4</x></li>
<li><x class="inline_code">atan2(+inf, -inf) = 3PI/4</x></li>
<li><x class="inline_code">atan2(-inf, -inf) = -3PI/4</x></li>
<li><x class="inline_code">atan2(y, +inf) = 0</x></li>
<li><x class="inline_code">atan2(y>0, -inf) = +PI</x></li>
<li><x class="inline_code">atan2(y<0, -inf) = -PI</x></li>
<li><x class="inline_code">atan2(+inf, x) = +PI/2</x></li>
<li><x class="inline_code">atan2(-inf, x) = -PI/2</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn atanh(mut x: f64) f64</div>
Returns the inverse hyperbolic tangent of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">atanh(1) = +inf</x></li>
<li><x class="inline_code">atanh(±0) = ±0</x></li>
<li><x class="inline_code">atanh(-1) = -inf</x></li>
<li><x class="inline_code">atanh(x) = nan if x < -1 or x > 1</x></li>
<li><x class="inline_code">atanh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn nan() f64</div>
Returns an IEEE 754 “not-a-number” value.

<div class="topic-separator"></div>
<div class="code">pub fn is_nan(f: f64) bool</div>
Reports whether f is an IEEE 754 “not-a-number” value.

<div class="topic-separator"></div>
<div class="code">pub fn inf(sign: int) f64</div>
Returns positive infinity if sign >= 0, negative infinity if !sign < 0.

<div class="topic-separator"></div>
<div class="code">pub fn is_inf(f: f64, sign: int) bool</div>
Reports whether f is an infinity, according to sign. <br>
If sign > 0, is_inf reports whether f is positive infinity. <br>
If sign < 0, is_inf reports whether f is negative infinity. <br>
If sign == 0, is_inf reports whether f is either infinity. <br>

<div class="topic-separator"></div>
<div class="code">pub fn cbrt(mut x: f64) f64</div>
Returns the cube root of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">cbrt(±0) = ±0</x></li>
<li><x class="inline_code">cbrt(±inf) = ±inf</x></li>
<li><x class="inline_code">cbrt(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn copysign(f: f64, sign: f64) f64</div>
Returns a value with the magnitude of f and the sign of sign.

<div class="topic-separator"></div>
<div class="code">pub fn dim(x: f64, y: f64) f64</div>
Returns the maximum of x-y or 0.
<br><br>
Special cases are: <br>
<li><x class="inline_code">dim(+inf, +inf) = nan</x></li>
<li><x class="inline_code">dim(-inf, -inf) = nan</x></li>
<li><x class="inline_code">dim(x, nan) = dim(nan, x) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn max(x: f64, y: f64) f64</div>
Returns the larger of x or y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">max(x, +inf) = max(+inf, x) = +inf</x></li>
<li><x class="inline_code">max(x, nan) = max(nan, x) = nan</x></li>
<li><x class="inline_code">max(+0, ±0) = max(±0, +0) = +0</x></li>
<li><x class="inline_code">max(-0, -0) = -0</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn min(x: f64, y: f64) f64</div>
Returns the smaller of x or y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">min(x, -inf) = min(-inf, x) = -inf</x></li>
<li><x class="inline_code">min(x, nan) = min(nan, x) = nan</x></li>
<li><x class="inline_code">min(-0, ±0) = min(±0, -0) = -0</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn erf(mut x: f64) f64</div>
Returns the error function of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">erf(+inf) = 1</x></li>
<li><x class="inline_code">erf(-inf) = -1</x></li>
<li><x class="inline_code">erf(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn erfinv(mut x: f64) f64</div>
Returns the inverse error function of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">erfinv(1) = +inf</x></li>
<li><x class="inline_code">erfinv(-1) = -inf</x></li>
<li><x class="inline_code">erfinv(x) = nan if x < -1 or x > 1</x></li>
<li><x class="inline_code">erfinv(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn erfcinv(x: f64) f64</div>
Returns the inverse of erfc(x).
<br><br>
Special cases are: <br>
<li><x class="inline_code">erfcinv(0) = +inf</x></li>
<li><x class="inline_code">erfcinv(2) = -inf</x></li>
<li><x class="inline_code">erfcinv(x) = nan if x < 0 or x > 2</x></li>
<li><x class="inline_code">erfcinv(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn erfc(mut x: f64) f64</div>
Returns the complementary error function of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">erfc(+inf) = 0</x></li>
<li><x class="inline_code">erfc(-inf) = 2</x></li>
<li><x class="inline_code">erfc(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn exp(x: f64) f64</div>
Returns e**x, the base-e exponential of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">exp(+inf) = +inf</x></li>
<li><x class="inline_code">exp(nan) = nan</x></li>
<div class="warn">
  <li>Very large values overflow to 0 or inf.</li>
  <li>Very small values underflow to 1.</li>
</div>

<div class="topic-separator"></div>
<div class="code">pub fn exp2(x: f64) f64</div>
Returns 2**x, the base-2 exponential of x.
Special cases are the same as exp.

<div class="topic-separator"></div>
<div class="code">pub fn expm1(mut x: f64) f64</div>
Returns e**x - 1, the base-e exponential of x minus 1.
It is more accurate than exp(x) - 1 when x is near zero.
<br><br>
Special cases are: <br>
<li><x class="inline_code">expm1(+inf) = +inf</x></li>
<li><x class="inline_code">expm1(-inf) = -1</x></li>
<li><x class="inline_code">expm1(nan) = nan</x></li>
<div class="warn">Very large values overflow to -1 or inf.</div>

<div class="topic-separator"></div>
<div class="code">pub fn floor(x: f64) f64</div>
Returns the greatest integer value less than or equal to x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">floor(±0) = ±0</x></li>
<li><x class="inline_code">floor(±inf) = ±inf</x></li>
<li><x class="inline_code">floor(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn fma(x: f64, y: f64, z: f64) f64</div>
Returns x * y + z, computed with only one rounding.
(That is, fma returns the fused multiply-add of x, y, and z.)

<div class="topic-separator"></div>
<div class="code">pub fn frexp(mut f: f64) (frac: f64, exp: int)</div>
Breaks f into a normalized fraction and an integral power of two.
It returns frac and exp satisfying f == frac × 2**exp, with the absolute value of frac in the interval [½, 1).
<br><br>
Special cases are: <br>
<li><x class="inline_code">frexp(±0) = ±0, 0</x></li>
<li><x class="inline_code">frexp(±inf) = ±inf, 0</x></li>
<li><x class="inline_code">frexp(nan) = nan, 0</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn gamma(x: f64) f64</div>
Returns the gamma function of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">gamma(+inf) = +inf</x></li>
<li><x class="inline_code">gamma(+0) = +inf</x></li>
<li><x class="inline_code">gamma(-0) = -inf</x></li>
<li><x class="inline_code">gamma(x) = nan for integer x < 0</x></li>
<li><x class="inline_code">gamma(-inf) = nan</x></li>
<li><x class="inline_code">gamma(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn ceil(x: f64) f64</div>
Returns the least integer value greater than or equal to x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">ceil(±0) = ±0</x></li>
<li><x class="inline_code">ceil(±inf) = ±inf</x></li>
<li><x class="inline_code">ceil(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn trunc(x: f64) f64</div>
Returns the integer value of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">trunc(±0) = ±0</x></li>
<li><x class="inline_code">trunc(±inf) = ±inf</x></li>
<li><x class="inline_code">trunc(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn round(x: f64) f64</div>
Returns the nearest integer, rounding half away from zero.
<br><br>
Special cases are: <br>
<li><x class="inline_code">round(±0) = ±0</x></li>
<li><x class="inline_code">round(±inf) = ±inf</x></li>
<li><x class="inline_code">round(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn round_even(x: f64) f64</div>
Returns the nearest integer, rounding ties to even.
<br><br>
Special cases are: <br>
<li><x class="inline_code">round_even(±0) = ±0</x></li>
<li><x class="inline_code">round_even(±inf) = ±inf</x></li>
<li><x class="inline_code">round_even(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn hypot(mut p: f64, mut q: f64) f64</div>
Returns sqrt(p*p + q*q), taking care to avoid unnecessary overflow and underflow.
<br><br>
Special cases are: <br>
<li><x class="inline_code">hypot(±inf, q) = +inf</x></li>
<li><x class="inline_code">hypot(p, ±inf) = +inf</x></li>
<li><x class="inline_code">hypot(nan, q) = nan</x></li>
<li><x class="inline_code">hypot(p, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn j0(mut x: f64) f64</div>
Returns the order-zero Bessel function of the first kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">j0(±inf) = 0</x></li>
<li><x class="inline_code">j0(0) = 1</x></li>
<li><x class="inline_code">j0(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn y0(x: f64) f64</div>
Returns the order-zero Bessel function of the second kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">y0(+inf) = 0</x></li>
<li><x class="inline_code">y0(0) = -inf</x></li>
<li><x class="inline_code">y0(x < 0) = nan</x></li>
<li><x class="inline_code">y0(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn j1(mut x: f64) f64</div>
Returns the order-one Bessel function of the first kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">j1(±inf) = 0</x></li>
<li><x class="inline_code">j1(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn y1(x: f64) f64</div>
Returns the order-one Bessel function of the second kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">y1(+inf) = 0</x></li>
<li><x class="inline_code">y1(0) = -inf</x></li>
<li><x class="inline_code">y1(x < 0) = nan</x></li>
<li><x class="inline_code">y1(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn jn(mut n: int, mut x: f64) f64</div>
Returns the order-n Bessel function of the first kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">jn(n, ±inf) = 0</x></li>
<li><x class="inline_code">jn(n, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn yn(mut n: int, x: f64) f64</div>
Returns the order-n Bessel function of the second kind.
<br><br>
Special cases are: <br>
<li><x class="inline_code">yn(n, +inf) = 0</x></li>
<li><x class="inline_code">yn(n ≥ 0, 0) = -inf</x></li>
<li><x class="inline_code">yn(n < 0, 0) = +inf if n is odd, -inf if n is even</x></li>
<li><x class="inline_code">yn(n, x < 0) = nan</x></li>
<li><x class="inline_code">yn(n, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn ldexp(mut frac: f64, mut exp: int) f64</div>
Is the inverse of frexp.
It returns frac × 2**exp.
<br><br>
Special cases are: <br>
<li><x class="inline_code">ldexp(±0, exp) = ±0</x></li>
<li><x class="inline_code">ldexp(±inf, exp) = ±inf</x></li>
<li><x class="inline_code">ldexp(nan, exp) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn lgamma(mut x: f64) (lgamma: f64, sign: int)</div>
Returns the natural logarithm and sign (-1 or +1) of gamma(x).
<br><br>
Special cases are: <br>
<li><x class="inline_code">lgamma(+inf) = +inf</x></li>
<li><x class="inline_code">lgamma(0) = inf</x></li>
<li><x class="inline_code">lgamma(-integer) = +inf</x></li>
<li><x class="inline_code">lgamma(-inf) = -inf</x></li>
<li><x class="inline_code">lgamma(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn log(x: f64) f64</div>
Returns the natural logarithm of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">log(+inf) = +inf</x></li>
<li><x class="inline_code">log(0) = -inf</x></li>
<li><x class="inline_code">log(x < 0) = nan</x></li>
<li><x class="inline_code">log(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn log1p(x: f64) f64</div>
Returns the natural logarithm of 1 plus its argument x.
It is more accurate than log(1 + x) when x is near zero.
<br><br>
Special cases are: <br>
<li><x class="inline_code">log1p(+inf) = +inf</x></li>
<li><x class="inline_code">log1p(±0) = ±0</x></li>
<li><x class="inline_code">log1p(-1) = -inf</x></li>
<li><x class="inline_code">log1p(x < -1) = nan</x></li>
<li><x class="inline_code">log1p(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn log10(x: f64) f64</div>
Returns the decimal logarithm of x.
The special cases are the same as for log.

<div class="topic-separator"></div>
<div class="code">pub log2(x: f64) f64</div>
Returns the binary logarithm of x.
The special cases are the same as for log.

<div class="topic-separator"></div>
<div class="code">pub fn logb(x: f64) f64</div>
Returns the binary exponent of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">logb(±inf) = +inf</x></li>
<li><x class="inline_code">logb(0) = -inf</x></li>
<li><x class="inline_code">logb(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn ilogb(x: f64) int</div>
Returns the binary exponent of x as an integer.
<br><br>
Special cases are: <br>
<li><x class="inline_code">ilogb(±inf) = i32.max</x></li>
<li><x class="inline_code">ilogb(0) = i32.min</x></li>
<li><x class="inline_code">ilogb(nan) = i32.max</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn mod(x: f64, mut y: f64) f64</div>
Returns the floating-point remainder of x/y.
The magnitude of the result is less than y and its sign agrees with that of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">mod(±inf, y) = nan</x></li>
<li><x class="inline_code">mod(nan, y) = nan</x></li>
<li><x class="inline_code">mod(x, 0) = nan</x></li>
<li><x class="inline_code">mod(x, ±inf) = x</x></li>
<li><x class="inline_code">mod(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn modf(f: f64) (integer: f64, frac: f64)</div>
Returns integer and fractional floating-point numbers that sum to f.
Both values have the same sign as f.
<br><br>
Special cases are: <br>
<li><x class="inline_code">modf(±inf) = ±inf, nan</x></li>
<li><x class="inline_code">modf(nan) = nan, nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn nextafter32(x: f32, y: f32) (r: f32)</div>
Returns the next representable f32 value after x towards y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">nextafter32(x, x) = x</x></li>
<li><x class="inline_code">nextafter32(nan, y) = nan</x></li>
<li><x class="inline_code">nextafter32(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn nextafter(x: f64, y: f64) (r: f64)</div>
Returns the next representable f64 value after x towards y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">nextafter(x, x) = x</x></li>
<li><x class="inline_code">nextafter(nan, y) = nan</x></li>
<li><x class="inline_code">nextafter(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn pow(x: f64, y: f64) f64</div>
Returns x**y, the base-x exponential of y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">pow(x, ±0) = 1 for any x</x></li>
<li><x class="inline_code">pow(1, y) = 1 for any y</x></li>
<li><x class="inline_code">pow(x, 1) = x for any x</x></li>
<li><x class="inline_code">pow(nan, y) = nan</x></li>
<li><x class="inline_code">pow(x, nan) = nan</x></li>
<li><x class="inline_code">pow(±0, y) = ±inf for y an odd integer < 0</x></li>
<li><x class="inline_code">pow(±0, -inf) = inf</x></li>
<li><x class="inline_code">pow(±0, +inf) = +0</x></li>
<li><x class="inline_code">pow(±0, y) = +inf for finite y < 0 and not an odd integer</x></li>
<li><x class="inline_code">pow(±0, y) = ±0 for y an odd integer > 0</x></li>
<li><x class="inline_code">pow(±0, y) = +0 for finite y > 0 and not an odd integer</x></li>
<li><x class="inline_code">pow(-1, ±inf) = 1</x></li>
<li><x class="inline_code">pow(x, +inf) = +inf for |x| > 1</x></li>
<li><x class="inline_code">pow(x, -inf) = +0 for |x| > 1</x></li>
<li><x class="inline_code">pow(x, inf) = +0 for |x| < 1</x></li>
<li><x class="inline_code">pow(x, -inf) = +inf for |x| < 1</x></li>
<li><x class="inline_code">pow(+inf, y) = +inf for y > 0</x></li>
<li><x class="inline_code">pow(+inf, y) = +0 for y < 0</x></li>
<li><x class="inline_code">pow(-inf, y) = pow(-0, -y)</x></li>
<li><x class="inline_code">pow(x, y) = nan for finite x < 0 and finite non-integer y</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn pow10(n: int) f64</div>
Returns 10**n, the base-10 exponential of n.
<br><br>
Special cases are: <br>
<li><x class="inline_code">pow10(n) = 0 for n < -323</x></li>
<li><x class="inline_code">pow10(n) = +inf for n > 308</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn remainder(mut x: f64, mut y: f64) f64</div>
Returns the IEEE 754 floating-point remainder of x/y.
<br><br>
Special cases are: <br>
<li><x class="inline_code">remainder(±inf, y) = nan</x></li>
<li><x class="inline_code">remainder(nan, y) = nan</x></li>
<li><x class="inline_code">remainder(x, 0) = nan</x></li>
<li><x class="inline_code">remainder(x, ±inf) = x</x></li>
<li><x class="inline_code">remainder(x, nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn signbit(x: f64) bool</div>
Reports whether x is negative or negative zero.

<div class="topic-separator"></div>
<div class="code">pub fn cos(mut x: f64) f64</div>
Returns the cosine of the radian argument x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">cos(±inf) = nan</x></li>
<li><x class="inline_code">cos(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn sin(mut x: f64) f64</div>
Returns the sine of the radian argument x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">sin(±0) = ±0</x></li>
<li><x class="inline_code">sin(±inf) = nan</x></li>
<li><x class="inline_code">sin(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn sincos(mut x: f64) (sin: f64, cos: f64)</div>
Returns sin(x), cos(x).
<br><br>
Special cases are: <br>
<li><x class="inline_code">sincos(±0) = ±0, 1</x></li>
<li><x class="inline_code">sincos(±inf) = nan, nan</x></li>
<li><x class="inline_code">sincos(nan) = nan, nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn sinh(mut x: f64) f64</div>
Returns the hyperbolic sine of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">sinh(±0) = ±0</x></li>
<li><x class="inline_code">sinh(±inf) = ±inf</x></li>
<li><x class="inline_code">sinh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn cosh(x: f64) f64</div>
Returns the hyperbolic cosine of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">cosh(±0) = 1</x></li>
<li><x class="inline_code">cosh(±inf) = +inf</x></li>
<li><x class="inline_code">cosh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn sqrt(x: f64) f64</div>
Returns the square root of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">sqrt(+inf) = +inf</x></li>
<li><x class="inline_code">sqrt(±0) = ±0</x></li>
<li><x class="inline_code">sqrt(x < 0) = nan</x></li>
<li><x class="inline_code">sqrt(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn tan(mut x: f64) f64</div>
Returns the tangent of the radian argument x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">tan(±0) = ±0</x></li>
<li><x class="inline_code">tan(±inf) = nan</x></li>
<li><x class="inline_code">tan(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn tanh(x: f64) f64</div>
Returns the hyperbolic tangent of x.
<br><br>
Special cases are: <br>
<li><x class="inline_code">tanh(±0) = ±0</x></li>
<li><x class="inline_code">tanh(±inf) = ±1</x></li>
<li><x class="inline_code">tanh(nan) = nan</x></li>

<div class="topic-separator"></div>
<div class="code">pub fn f32_bits(f: f32) u32</div>
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. <br>
<x class="inline_code">f32_bits(f32_from_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">pub fn f32_from_bits(b: u32) f32</div>
Returns the floating-point number corresponding
to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position.
<x class="inline_code">f32_from_bits(f32_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">pub fn f64_bits(f: f64) u64</div>
Returns the IEEE 754 binary representation of f,
with the sign bit of f and the result in the same bit position,
and <x class="inline_code">f64_bits(f64_from_bits(x)) == x</x>.

<div class="topic-separator"></div>
<div class="code">pub fn f64_from_bits(b: u64) f64</div>
Returns the floating-point number corresponding
to the IEEE 754 binary representation b, with the sign bit of b
and the result in the same bit position.
<x class="inline_code">f64_from_bits(f64_bits(x)) == x</x>.
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
