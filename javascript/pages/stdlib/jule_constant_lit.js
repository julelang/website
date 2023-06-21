const functionsHTML = `
<div class="code">fn is_byte_lit(mut kind: str): (str, bool)</div>
Reports whether kind is byte literal and returns literal without quotes.
<br><br>
Byte literal patterns:
<ul>
  <li><x class="inline_code">0 <= r <= 255</x></li>
  <li><x class="inline_code">'\\xhh'</x></li>
  <li><x class="inline_code">'\\nnn'</x></li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn to_rune(bytes: []byte): rune</div>
Returns rune value string from bytes, not includes quotes. <br>
Bytes are represents rune literal, allows escape sequences. <br>
Returns empty string if bytes.len == 0

<div class="topic-separator"></div>
<div class="code">fn to_raw_str(bytes: []byte): str</div>
Returns raw-string value string from bytes, not includes quotes. <br>
Bytes are represents string characters, allows escape sequences. <br>
Returns empty string if bytes.len == 0

<div class="topic-separator"></div>
<div class="code">fn to_str(bytes: []byte): str</div>
Returns string value string from bytes, not includes quotes. <br>
Bytes are represents string characters, allows escape sequences. <br>
Returns empty string if bytes.len == 0

`;

const functions = document.getElementById("functions");

const nav = new SideNavigator();
nav.navigations = [
    [functions, functionsHTML],
];

nav.set_events();
nav.set_content_url();
