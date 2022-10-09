const stdlib_fs_functionsHTML = `
<div class="code">fn stat(path: str) (s: Stat, err: FsError)</div>
Returns a Stat describing the path.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>
<x class="inline_code">IO</x>
<x class="inline_code">Loop</x>
<x class="inline_code">LongPath</x>
<x class="inline_code">NotExist</x>
<x class="inline_code">NotDir</x>
<x class="inline_code">Overflow</x>

<div class="topic-separator"></div>
<div class="code">fn read_dir(path: str) ([]Dirent, FsError)</div>
Reads the named directory and returs all its directory entries can read.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">PerProcessLimit</x>
<x class="inline_code">SystemWideLimit</x>
<x class="inline_code">NotExist</x>
<x class="inline_code">InsufficientMemory</x>
<x class="inline_code">NotDir</x>

`;


const stdlib_fs_structsHTML = `
<div class="code">struct Stat {
    // Type and mode.
    mode: uint

    // Total size in bytes of regular file or symbolic link.
    size: uint
}</div>
Stat information.
<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_dir(self) bool</div> <br>
Reports path is directory or not.

<div class="title-separator"></div>
<div class="inline_code">fn is_reg(self) bool</div> <br>
Reports path is regular file or not.

<div class="topic-separator"></div>
<div class="code">struct Dirent {
    name: str
    stat: Stat
}</div>
Directory entry.

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
    <li><x class="inline_code">InvalidDescriptor</x>: fd is not a valid file descriptor opened for reading.</li>
    <li><x class="inline_code">PerProcessLimit</x>: The per-process limit on the number of open file descriptors has been reached.</li>
    <li><x class="inline_code">SystemWideLimit</x>: The system-wide limit on the total number of open files has been reached.</li>
    <li><x class="inline_code">InsufficientMemory</x>: Insufficient memory to complete the operation.</li>
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
