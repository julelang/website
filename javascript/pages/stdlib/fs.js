const stdlib_fs_functionsHTML = `
<div class="code">fn stat(path: str) (s: Stat, err: FsError)</div>
Returns a Stat describing the path.

`;


const stdlib_fs_structsHTML = `
<div class="code">struct Stat {
    mode: uint
}</div>
Stat information.
<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_dir(self) bool</div> <br>
Reports path is directory or not.

<div class="title-separator"></div>
<div class="inline_code">fn is_reg(self) bool</div> <br>
Reports path is regular file or not.

`;

const stdlib_fs_enumsHTML = `
<div class="inline_code">enum FsError</div>
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">Ok</x>: No problem</li>
    <li><x class="inline_code">Denied</x>: Search permission is denied for a component of the path prefix</li>
    <li><x class="inline_code">IO</x>: Input/Output error, an error occurred while reading from the file system</li>
    <li><x class="inline_code">Loop</x>: A loop exists in symbolic links encountered during resolution of the path argument</li>
    <li><x class="inline_code">LongPath</x>: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length</li>
    <li><x class="inline_code">NotExist</x>: A component of path does not name an existing file or path is an empty string</li>
    <li><x class="inline_code">NotDir</x>: A component of the path prefix is not a directory</li>
    <li><x class="inline_code">Overflow</x>: The file size in bytes or the number of blocks allocated to the file or the file serial number cannot be represented correctly in the structure pointed to by buf</li>
</ul>

`;

const NAV_stdlib_fs_functions = document.getElementById("functions");
const NAV_stdlib_fs_structs = document.getElementById("structs");
const NAV_stdlib_fs_enums = document.getElementById("enums");

const stdlib_fs_nav = new SideNavigator();
stdlib_fs_nav.navigations = [
    [NAV_stdlib_fs_functions, stdlib_fs_functionsHTML],
    [NAV_stdlib_fs_structs, stdlib_fs_structsHTML],
    [NAV_stdlib_fs_enums, stdlib_fs_enumsHTML],
];

stdlib_fs_nav.set_events();
stdlib_fs_nav.set_content_url();
