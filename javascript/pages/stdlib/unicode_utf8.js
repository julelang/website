const stdlib_unicode_utf8_constantsHTML = `
<div class="sub-sub-title"><x class="inline_code">pub const RUNE_ERROR:</x></div>
The "error" rune or "Unicode replacement character"

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const RUNE_SELF:</x></div>
Characters below RUNE_SELF are represented as themselves in a single byte.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const MAX_RUNE:</x></div>
Maximum valid Unicode code point.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">pub const UTF_MAX:</x></div>
Maximum number of bytes of a UTF-8 encoded Unicode character.
`;

const stdlib_unicode_utf8_functionsHTML = `
<div class="code">pub full_rune(p: []byte) bool</div>
Reports whether the bytes in p begin with a full UTF-8 encoding of a rune.
An invalid encoding is considered a full Rune since it will convert as a width-1 error rune.

<div class="topic-separator"></div>
<div class="code">pub full_rune_str(s: str) bool</div>
Is like full_rune but its input is a string.

<div class="topic-separator"></div>
<div class="code">pub decode_rune(p: []byte) [r: rune, size: int]</div>
Unpacks the first UTF-8 encoding in p and returns the rune and
its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if
the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible
results for correct, non-empty UTF-8.
<br><br>
An encoding is invalid if it is incorrect UTF-8, encodes a rune that is
out of range, or is not the shortest possible UTF-8 encoding for the
value. No other validation is performed.

<div class="topic-separator"></div>
<div class="code">pub decode_rune_str(s: str) [r: rune, size: int]</div>
Is like decode_rune but its input is a string. If s is empty
it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it
returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty
UTF-8.
<br><br>
An encoding is invalid if it is incorrect UTF-8, encodes a rune that is
out of range, or is not the shortest possible UTF-8 encoding for the
value. No other validation is performed.

<div class="topic-separator"></div>
<div class="code">pub decode_last_rune(p: []byte) [r: rune, size: int]</div>
Unpacks the last UTF-8 encoding in p and returns the rune and
its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if
the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible
results for correct, non-empty UTF-8.
<br><br>
An encoding is invalid if it is incorrect UTF-8, encodes a rune that is
out of range, or is not the shortest possible UTF-8 encoding for the
value. No other validation is performed.

<div class="topic-separator"></div>
<div class="code">pub decode_last_rune_str(s: str) [r: rune, size: int]</div>
Is like decode_last_rune but its input is a string. If
s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid,
it returns (RUNE_ERROR, 1). Both are impossible results for correct,
non-empty UTF-8.
<br><br>
An encoding is invalid if it is incorrect UTF-8, encodes a rune that is
out of range, or is not the shortest possible UTF-8 encoding for the
value. No other validation is performed.

<div class="topic-separator"></div>
<div class="code">pub rune_len(r: rune) int</div>
Returns the number of bytes required to encode the rune.
It returns -1 if the rune is not a valid value to encode in UTF-8.

<div class="topic-separator"></div>
<div class="code">pub encode_rune(p: []byte, r: rune) int</div>
Writes into p (which must be large enough) the UTF-8 encoding of the rune.
If the rune is out of range, it writes the encoding of RUNE_ERROR.
It returns the number of bytes written.

<div class="topic-separator"></div>
<div class="code">pub append_rune(p: []byte, r: rune) []byte</div>
Appends the UTF-8 encoding of r to the end of p and returns the extended buffer.
If the rune is out of range, it appends the encoding of RUNE_ERROR.

<div class="topic-separator"></div>
<div class="code">pub rune_count(p: []byte) [n: int]</div>
Returns the number of runes in p. Erroneous and short
encodings are treated as single runes of width 1 byte.

<div class="topic-separator"></div>
<div class="code">pub rune_count_str(s: str) [n: int]</div>
Is like rune_count but its input is a string.

<div class="topic-separator"></div>
<div class="code">@inline
pub rune_start(b: byte) bool</div>
Reports whether the byte could be the first byte of an encoded,
possibly invalid rune. Second and subsequent bytes always have the top two
bits set to 10.

<div class="topic-separator"></div>
<div class="code">pub valid(p: []byte) bool</div>
Reports whether p consists entirely of valid UTF-8-encoded runes.

<div class="topic-separator"></div>
<div class="code">pub valid_str(s: str) bool</div>
Reports whether s consists entirely of valid UTF-8-encoded runes.

<div class="topic-separator"></div>
<div class="code">pub valid_rune(r: rune) bool</div>
Reports whether r can be legally encoded as UTF-8.
Code points that are out of range or a surrogate half are illegal.
`;

const NAV_stdlib_unicode_utf8_constants = document.getElementById("constants");
const NAV_stdlib_unicode_utf8_functions = document.getElementById("functions");

const stdlib_unicode_utf8_nav = new SideNavigator();
stdlib_unicode_utf8_nav.navigations = [
    [NAV_stdlib_unicode_utf8_constants, stdlib_unicode_utf8_constantsHTML],
    [NAV_stdlib_unicode_utf8_functions, stdlib_unicode_utf8_functionsHTML],
];

stdlib_unicode_utf8_nav.set_events();
stdlib_unicode_utf8_nav.set_content_url();
