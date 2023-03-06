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

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let STDLIB_PATH: str</x></div>
Absolute directory path of standard library.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let EXEC_PATH: str</x></div>
Absolute directory path of compiler (JuleC). <br>
Actually, this package and sub-packages designed for JuleC. <br>
So returns JuleC's executable file path. <br>
But actually returns executable path of current program.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let WORKING_PATH: str</x></div>
Absolute directory path of working path of compiler (JuleC). <br>
Actually, this package and sub-packages designed for JuleC. <br>
So returns JuleC's working path. <br>
But actually returns working path of current program.

`;

const NAV_stdlib_jule_globals = document.getElementById("globals");

const stdlib_jule_nav = new SideNavigator();
stdlib_jule_nav.navigations = [
    [NAV_stdlib_jule_globals, stdlib_jule_globalsHTML],
];

stdlib_jule_nav.set_events();
stdlib_jule_nav.set_content_url();
