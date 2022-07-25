const stdlib_debug_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">ENABLE:bool</x></div>
If this is enabled, debug and all subpackages assume that the program has been compiled for debugging.
In this case the debugging tools work.
However, if it is not enabled, the debugging tools will not work because it assumes that the program was not compiled for debugging.
`;

const NAV_stdlib_debug_globals = document.getElementById("globals");

const stdlib_debug_nav = new SideNavigator();
stdlib_debug_nav.navigations = [
    [NAV_stdlib_debug_globals, stdlib_debug_globalsHTML],
];

stdlib_debug_nav.set_events();
stdlib_debug_nav.set_content_url();
