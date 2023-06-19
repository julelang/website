const globalsHTML = `
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
<div class="code">let DIRECTIVES: [...]Directive</div>
List of all directives.

<div class="topic-separator"></div>
<div class="code">let CPP_HEADER_EXTS: []str</div>
Valid extensions of cpp headers.

<div class="topic-separator"></div>
<div class="code">let ERRORS: [str:str]</div>
Error messages.

<div class="topic-separator"></div>
<div class="code">let DISTOS: []Os</div>
List of supported operating systems.

<div class="topic-separator"></div>
<div class="code">let DISTARCH: []Arch</div>
List of supported architectures.

<div class="topic-separator"></div>
<div class="code">let DIRECTIVE_PREFIX: str</div>
Prefix of directive comments.

`;

const functionsHTML = `
<div class="code">fn is_pass_file_annotation(mut p: str): bool</div>
Reports whether file path passes file annotation by current system.

<div class="topic-separator"></div>
<div class="code">fn is_top_directive(directive: Directive): bool</div>
Reports whether directive is top-directive.

<div class="topic-separator"></div>
<div class="code">fn is_std_header_path(p: str): bool</div>
Reports path is C++ std library path.

<div class="topic-separator"></div>
<div class="code">fn is_valid_header_ext(ext: str): bool</div>
Reports whether C++ header extension is valid.

<div class="topic-separator"></div>
<div class="code">fn is_jule(path: str): bool</div>
Reports whether file path is Jule source code.

<div class="topic-separator"></div>
<div class="code">fn errorf(key: str, args: ...any): str</div>
Returns formatted error message by key and args.

<div class="topic-separator"></div>
<div class="code">fn is_windows(os: str): bool</div>
Reports whether os is windows.

<div class="topic-separator"></div>
<div class="code">fn is_darwin(os: str): bool</div>
Reports whether os is darwin.

<div class="topic-separator"></div>
<div class="code">fn is_linux(os: str): bool</div>
Reports whether os is linux.

<div class="topic-separator"></div>
<div class="code">fn is_i386(arch: str): bool</div>
Reports whether architecture is intel 386.

<div class="topic-separator"></div>
<div class="code">fn is_amd64(arch: str): bool</div>
Reports whether architecture is amd64.

<div class="topic-separator"></div>
<div class="code">fn is_arm(arch: str): bool</div>
Reports whether architecture is arm.

<div class="topic-separator"></div>
<div class="code">fn is_arm64(arch: str): bool</div>
Reports whether architecture is arm64.

<div class="topic-separator"></div>
<div class="code">fn is_unix(os: str): bool</div>
Reports whether os is unix.

<div class="topic-separator"></div>
<div class="code">fn is_32bit(arch: str): bool</div>
Reports whether architecture is 32-bit.

<div class="topic-separator"></div>
<div class="code">fn is_64bit(arch: str): bool</div>
Reports whether architecture is 64-bit.

`;

const structsHTML = `
<div class="code">struct Log {
	kind:   LogKind
	row:    int
	column: int
	path:   str
	text:   str
}</div>
Compiler log.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn flat(self): str</div> <br>
Returns text.

<div class="title-separator"></div>
<div class="inline_code">fn error(self): str</div> <br>
Returns error message text.

<div class="title-separator"></div>
<div class="inline_code">fn to_str(self): str</div> <br>
Returns message form of log.

`;

const enumsHTML = `
<div class="inline_code">enum Directive: str</div>
<br><br>
Compiler directives.
<br><br>
<strong>Fields:</strong>
<ul>
	<li><x class="inline_code">Cdef</x></li>
	<li><x class="inline_code">Typedef</x></li>
	<li><x class="inline_code">Derive</x></li>
	<li><x class="inline_code">Pass</x></li>
</ul>

<div class="topic-separator"></div>
<div class="inline_code">enum Os: str</div>
<br><br>
Operating Systems for file annotation kind.
<br><br>
<strong>Fields:</strong>
<ul>
	<li><x class="inline_code">Windows</x></li>
	<li><x class="inline_code">Linux</x></li>
	<li><x class="inline_code">Darwin</x></li>
	<li><x class="inline_code">Unix</x></li>
</ul>

<div class="topic-separator"></div>
<div class="inline_code">enum Arch: str</div>
<br><br>
Architectures for file annotation kind.
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">I386</x></li>
	<li><x class="inline_code">Arm</x></li>
	<li><x class="inline_code">Arm64</x></li>
	<li><x class="inline_code">Amd64</x></li>
	<li><x class="inline_code">Bit32</x></li>
	<li><x class="inline_code">Bit64</x></li>
	
</ul>

<div class="topic-separator"></div>
<div class="inline_code">enum Derives: str</div>
<br><br>
All built-in derive defines.
<br><br>
<strong>Fields:</strong>
<ul>
	<li><x class="inline_code">Clone</x></li>
</ul>

<div class="topic-separator"></div>
<div class="inline_code">enum LogKind</div>
<br><br>
Log kinds.
<br><br>
<strong>Fields:</strong>
<ul>
	<li><x class="inline_code">Flat</x>: Just text.</li>
	<li><x class="inline_code">Error</x>: Error message.</li>
</ul>

`;

const globals = document.getElementById("globals");
const functions = document.getElementById("functions");
const structs = document.getElementById("structs");
const enums = document.getElementById("enums");

const nav = new SideNavigator();
nav.navigations = [
    [globals, globalsHTML],
    [functions, functionsHTML],
	[structs, structsHTML],
    [enums, enumsHTML],
];

nav.set_events();
nav.set_content_url();
