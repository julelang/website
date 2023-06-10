const stdlib_jule_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const VERSION: str</x></div>
Version of package and sub-packages. <br>
This version represents also JuleC version.

`;

const NAV_stdlib_jule_globals = document.getElementById("globals");

const stdlib_jule_nav = new SideNavigator();
stdlib_jule_nav.navigations = [
    [NAV_stdlib_jule_globals, stdlib_jule_globalsHTML],
];

stdlib_jule_nav.set_events();
stdlib_jule_nav.set_content_url();
