const stdlib_unicode_utf16_functionsHTML = `
<div class="code">pub fn is_surrogate(r: rune) bool</div>
Reports whether the specified Unicode code point can appear in a surrogate pair.

<div class="topic-separator"></div>
<div class="code">pub fn decode_rune(r1: rune, r2: rune) rune</div>
Returns the UTF-16 decoding of a surrogate pair.
If the pair is not a valid UTF-16 surrogate pair, decode_rune returns
the Unicode replacement code point U+FFFD.

<div class="topic-separator"></div>
<div class="code">pub fn encode_rune(r: rune) (r1: rune, r2: rune)</div>
Returns the UTF-16 surrogate pair r1, r2 for the given rune.
If the rune is not a valid Unicode code point or does not need encoding,
encode_rune returns U+FFFD, U+FFFD.

<div class="topic-separator"></div>
<div class="code">pub fn encode(s: []rune) []u16</div>
Returns the UTF-16 encoding of the Unicode code point sequence s.

<div class="topic-separator"></div>
<div class="code">pub fn decode(s: []u16) []rune</div>
Returns the Unicode code point sequence represented by the UTF-16 encoding s.

`;

const NAV_stdlib_unicode_utf16_functions = document.getElementById("functions");

const stdlib_unicode_utf16_nav = new SideNavigator();
stdlib_unicode_utf16_nav.navigations = [
    [NAV_stdlib_unicode_utf16_functions, stdlib_unicode_utf16_functionsHTML],
];

stdlib_unicode_utf16_nav.set_events();
stdlib_unicode_utf16_nav.set_content_url();
