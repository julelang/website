const constantsHTML = `
<div class="code">const SEPARATOR</div>
Path separator. <br>
Same as <x class="inline_code">std::os::{PATH_SEPARATOR}</x>

<div class="topic-separator"></div>
<div class="code">const LIST_SEPARATOR</div>
Path list separator. <br>
Same as <x class="inline_code">std::os::{PATH_LIST_SEPARATOR}</x>

`;

const functionsHTML = `
<div class="code">fn is_abs(path: str): bool</div>
Reports whether the path is absolute.

<div class="topic-separator"></div>
<div class="code">fn clean(mut path: str): str</div>
Returns the shortest path name equivalent to path by purely lexical processing. <br>
It applies the following rules iteratively until no further processing can be done:
<ol>
    <li>Replace multiple <x class="inline_code">SEPARATOR</x> elements with a single one.</li>
    <li>Eliminate each <x class="inline_code">.</x> path name element (the current directory).</li>
    <li>Eliminate each inner <x class="inline_code">..</x> path name element (the parent directory) long with the non-<x class="inline_code">..</x> element that precedes it.</li>
    <li>Eliminate <x class="inline_code">..</x> elements that begin a rooted path: that is, replace <x class="inline_code">/..</x> by <x class="inline_code">/</x> at the beginning of a path, assuming <x class="inline_code">SEPARATOR</x> is <x class="inline_code">/</x>.</li>
</ol>
The returned path ends in a slash only if it represents a root directory, such as <x class="inline_code">/</x> on Unix or <x class="inline_code">C:\\</x> on Windows.
<br><br>
Finally, any occurrences of slash are replaced by <x class="inline_code">SEPARATOR</x>.
<br><br>
If the result of this process is an empty string, clean returns the string <x class="inline_code">.</x>.
<br><br>
On Windows, clean does not modify the volume name other than to replace occurrences of <x class="inline_code">/</x> with <x class="inline_code">\\</x>. <br>
For example, <x class="inline_code">clean("//host/share/../x")</x> returns <x class="inline_code">\\\\host\\share\\x</x>.
<br><br>
<a target="_blank" href="https://9p.io/sys/doc/lexnames.html">See also Rob Pike, “Lexical File Names in Plan 9 or Getting Dot-Dot Right”</a>

<div class="topic-separator"></div>
<div class="code">fn to_slash(path: str): str</div>
Returns the result of replacing each separator character in path with a slash (<x class="inline_code">/</x>) character. <br>
Multiple separators are replaced by multiple slashes.

<div class="topic-separator"></div>
<div class="code">fn from_slash(path: str): str</div>
Returns the result of replacing each slash (<x class="inline_code">/</x>) character in path with a separator character. <br>
Multiple slashes are replaced by multiple separators.

<div class="topic-separator"></div>
<div class="code">fn join(elem: ...str): str</div>
Joins any number of path elements into a single path, separating them with an OS specific <x class="inline_code">SEPARATOR</x>. <br>
Empty elements are ignored. <br>
The result is cleaned. However, if the argument list is empty or all its elements are empty, join returns an empty string. <br>
On Windows, the result will only be a UNC path if the first non-empty element is a UNC path.

<div class="topic-separator"></div>
<div class="code">fn ext(path: str): str</div>
Returns the file name extension used by path. <br>
The extension is the suffix beginning at the final dot in the final element of path; it is empty if there is no dot.

<div class="topic-separator"></div>
<div class="code">fn abs(path: str): (str, ok: bool)</div>
Returns an absolute representation of path. <br>
If the path is not absolute it will be joined with the current working directory to turn it into an absolute path. <br>
The absolute path name for a given file is not guaranteed to be unique. <br>
abs calls clean on the result.

<div class="topic-separator"></div>
<div class="code">fn base(mut path: str): str</div>
Returns the last element of path. <br>
Trailing path separators are removed before extracting the last element. <br>
If the path is empty, base returns <x class="inline_code">.</x>. <br>
If the path consists entirely of separators, base returns a single separator.

<div class="topic-separator"></div>
<div class="code">fn dir(path: str): str</div>
Returns all but the last element of path, typically the path's directory. <br>
After dropping the final element, dir calls clean on the path and trailing slashes are removed. <br>
If the path is empty, dir returns <x class="inline_code">.</x>. <br>
If the path consists entirely of separators, dir returns a single separator. <br>
The returned path does not end in a separator unless it is the root directory.

<div class="topic-separator"></div>
<div class="code">fn volume_name(path: str): str</div>
Returns leading volume name. <br>
Given <x class="inline_code">C:\\foo\\bar</x> it returns <x class="inline_code">C:</x> on Windows. <br>
Given <x class="inline_code">\\\\host\\share\\foo</x> it returns <x class="inline_code">\\\\host\\share</x>. <br>
On other platforms it returns empty string.

`;

const constants = document.getElementById("constants");
const functions = document.getElementById("functions");

const nav = new SideNavigator();
nav.navigations = [
    [constants, constantsHTML],
    [functions, functionsHTML],
];

nav.set_events();
nav.set_content_url();
