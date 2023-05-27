const stdlib_jule_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const VERSION: str</x></div>
Version of package and sub-packages. <br>
This version represents also JuleC version.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const EXT: str</x></div>
Extension (includes dot) of Jule source code files.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const API: str</x></div>
Directory name of JuleC++ API.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const STDLIB: str</x></div>
Directory name of standard library.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const ENTRY_POINT: str</x></div>
Identifier of entry point function.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const INIT_FN: str</x></div>
Identifier of initializer function.
`;

const NAV_stdlib_jule_globals = document.getElementById("globals");

const stdlib_jule_nav = new SideNavigator();
stdlib_jule_nav.navigations = [
    [NAV_stdlib_jule_globals, stdlib_jule_globalsHTML],
];

stdlib_jule_nav.set_events();
stdlib_jule_nav.set_content_url();
