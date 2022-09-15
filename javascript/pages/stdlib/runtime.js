const stdlib_runtime_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const ARCH: str</x></div>
The running program's architecture target: one of i386, amd64 and so on.
<br>
To view possible combinations of OS, run <x class="inline_code">julec tool distarch</x>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const OS: str</x></div>
The running program's operating system target: one of darwin, linux and so on. <br>
To view possible combinations of OS, run <x class="inline_code">julec tool distos</x>

`;

const NAV_stdlib_runtime_globals = document.getElementById("globals");

const stdlib_runtime_nav = new SideNavigator();
stdlib_runtime_nav.navigations = [
    [NAV_stdlib_runtime_globals, stdlib_runtime_globalsHTML],
];

stdlib_runtime_nav.set_events();
stdlib_runtime_nav.set_content_url();
