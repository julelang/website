const stdlib_math_bits_functionsHTML = `
<div class="code">@inline
pub len8(const x u8) int</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.
`;

const NAV_stdlib_math_bits_functions = document.getElementById("functions");

const stdlib_math_bits_nav = new SideNavigator();
stdlib_math_bits_nav.navigations = [
    [NAV_stdlib_math_bits_functions, stdlib_math_bits_functionsHTML],
];

stdlib_math_bits_nav.set_events();
stdlib_math_bits_nav.set_content_url();
