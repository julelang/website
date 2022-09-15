const stdlib_unicode_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const MAX_RUNE</x></div>
Maximum valid Unicode code point.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const REPLACEMENT_CHAR</x></div>
Represents invalid code points.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MAX_ASCII</x></div>
Maximum ASCII value.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MAX_LATIN1</x></div>
Maximum Latin-1 value.
`;

const NAV_stdlib_unicode_globals = document.getElementById("globals");

const stdlib_unicode_nav = new SideNavigator();
stdlib_unicode_nav.navigations = [
    [NAV_stdlib_unicode_globals, stdlib_unicode_globalsHTML],
];

stdlib_unicode_nav.set_events();
stdlib_unicode_nav.set_content_url();
