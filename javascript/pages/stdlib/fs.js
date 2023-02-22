const stdlib_fs_constantsHTML = `
<div class="code">const O_RDONLY</div>
Open the file read-only.

<div class="topic-separator"></div>
<div class="code">const O_WRONLY</div>
Open the file write-only.

<div class="topic-separator"></div>
<div class="code">const O_RDWR</div>
Open the file read-write.

<div class="topic-separator"></div>
<div class="code">const O_APPEND</div>
Append data to the file when writing.

<div class="topic-separator"></div>
<div class="code">const O_CREAT</div>
Create a new file if none exists.

<div class="topic-separator"></div>
<div class="code">const O_EXCL</div>
Used with O_CREAT, file must not exist.

<div class="topic-separator"></div>
<div class="code">const O_SYNC</div>
Open for synchronous I/O.

<div class="topic-separator"></div>
<div class="code">const O_TRUNC</div>
Truncate regular writable file when opened.

<div class="topic-separator"></div>
<div class="code">const SEEK_SET</div>
Seek relative to the origin of the file.

<div class="topic-separator"></div>
<div class="code">const SEEK_CUR</div>
Seek relative to the current offset.

<div class="topic-separator"></div>
<div class="code">const SEEK_END</div>
Seek relative to the end.

`;

const stdlib_fs_functionsHTML = `
<div class="code">fn stat(path: str): (s: Stat, err: FsError)</div>
Returns a Stat describing the path. <br>
Returns nil reference if error occurs.
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
<div class="code">fn read_dir(path: str): ([]Dirent, FsError)</div>
Reads the named directory and returs all its directory entries can read. <br>
Returns nil if no any dirent or error occurs.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">PerProcessLimit</x>
<x class="inline_code">SystemWideLimit</x>
<x class="inline_code">NotExist</x>
<x class="inline_code">InsufficientMemory</x>
<x class="inline_code">NotDir</x>

<div class="topic-separator"></div>
<div class="code">fn open(path: str, flag: int, mode: int): (&File, FsError)</div>
Opens file stream with named file, specified flag (O_RDWR, O_TRUNC etc.) and perm.
If named file does not exist and O_CREAT flag is passed, will created with mode (before umask).
If successful, returns File reference with handle to file stream and the reference can used for I/O operations.
Returns nil reference if error occurs.
<br><br>
Possible errors:
<x class="inline_code">Denied</x>
<x class="inline_code">Exist</x>
<x class="inline_code">Signal</x>
<x class="inline_code">SyncIO</x>
<x class="inline_code">IO</x>
<x class="inline_code">IsDir</x>
<x class="inline_code">Loop</x>
<x class="inline_code">PerProcessLimit</x>
<x class="inline_code">LongPath</x>
<x class="inline_code">SystemWideLimit</x>
<x class="inline_code">NotExist</x>
<x class="inline_code">UnableStream</x>
<x class="inline_code">NoSpace</x>
<x class="inline_code">NotDir</x>
<x class="inline_code">NoResponse</x>
<x class="inline_code">Overflow</x>
<x class="inline_code">ReadOnly</x>
<x class="inline_code">Retry</x>
<x class="inline_code">Busy</x>

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
<div class="inline_code">fn is_dir(self): bool</div> <br>
Reports path is directory or not.

<div class="title-separator"></div>
<div class="inline_code">fn is_reg(self): bool</div> <br>
Reports path is regular file or not.

<div class="topic-separator"></div>
<div class="code">struct Dirent {
    name: str
    stat: Stat
}</div>
Directory entry.

<div class="topic-separator"></div>
<div class="code">struct File</div>
The file stream handle.
<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn seek(mut self, offset: i64, origin: int): (i64, FsError)</div> <br>
Sets offset to next Read/Write operation and returns the new offset.
whence: 0 (SEEK_SET) means, relative to the origin of the file, 1 (SEEK_CUR)
means relative to the current offset, and 2 (SEEK_END) means relative to end.
Return 0 if error occurs.
<br><br>
Possible errors:
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">SyncIO</x>
<x class="inline_code">Overflow</x>
<x class="inline_code">Seek</x>

<div class="title-separator"></div>
<div class="inline_code">fn read(mut self, mut buff: []byte): (n: int, FsError)</div> <br>
Read bytes to buffer from handle and returns readed byte count.
The number of bytes readed can never exceed the length of the buff.
If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow.
Offset will be shifted by the number of bytes read.
Returns 0 if error occurs.
<br><br>
Possible errors:
<x class="inline_code">Retry</x>
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">Signal</x>
<x class="inline_code">SyncIO</x>
<x class="inline_code">IO</x>
<x class="inline_code">IsDir</x>
<x class="inline_code">Overflow</x>
<x class="inline_code">Buffer</x>
<x class="inline_code">InsufficientMemory</x>
<x class="inline_code">NoResponse</x>
<x class="inline_code">Seek</x>

<div class="title-separator"></div>
<div class="inline_code">fn write(mut self, buff: []byte): (n: int, FsError)</div> <br>
Writes bytes to handle and returns writed byte count.
The number of bytes written can never exceed the length of the buff.
Returns 0 if error occurs.
<br><br>
Possible errors:
<x class="inline_code">Retry</x>
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">Big</x>
<x class="inline_code">Signal</x>
<x class="inline_code">IO</x>
<x class="inline_code">NoSpace</x>
<x class="inline_code">Pipe</x>
<x class="inline_code">Range</x>
<x class="inline_code">SyncIO</x>
<x class="inline_code">Seek</x>
<x class="inline_code">NoResponse</x>
<x class="inline_code">Buffer</x>

<div class="title-separator"></div>
<div class="inline_code">fn close(mut self): FsError</div> <br>
Closes file handle.
<br><br>
Possible errors:
<x class="inline_code">InvalidDescriptor</x>
<x class="inline_code">Signal</x>
<x class="inline_code">IO</x>

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
    <li><x class="inline_code">Exist</x>: A component of path does name an existing file</li>
    <li><x class="inline_code">Signal</x>: A signal was caught during</li>
    <li><x class="inline_code">SyncIO</x>: The implementation does not support synchronized I/O for this file</li>
    <li><x class="inline_code">IsDir</x>: The named file is a directory and flag includes O_WRONLY or O_RDWR</li>
    <li><x class="inline_code">UnableStream</x>: The path argument names a STREAMS-based file and the system is unable to allocate a STREAM</li>
    <li><x class="inline_code">NoSpace</x>: There is no space on the drive</li>
    <li><x class="inline_code">NoResponse</x>: Divice did not respond</li>
    <li><x class="inline_code">ReadOnly</x>: Read-only filesystem</li>
    <li><x class="inline_code">Retry</x>: Resource temporarily unavailable</li>
    <li><x class="inline_code">Busy</x>: File is busy</li>
    <li><x class="inline_code">Big</x>: File too large</li>
    <li><x class="inline_code">Pipe</x>: Broken pipe</li>
    <li><x class="inline_code">Range</x>: Input is outside the range</li>
    <li><x class="inline_code">NoDest</x>: No such device or address</li>
    <li><x class="inline_code">Buffer</x>: No buffer space available</li>
    <li><x class="inline_code">BadMessage</x>: Not a data message</li>
</ul>

`;

const NAV_stdlib_fs_constants = document.getElementById("constants");
const NAV_stdlib_fs_functions = document.getElementById("functions");
const NAV_stdlib_fs_structs = document.getElementById("structs");
const NAV_stdlib_fs_enums = document.getElementById("enums");

const stdlib_fs_nav = new SideNavigator();
stdlib_fs_nav.navigations = [
    [NAV_stdlib_fs_constants, stdlib_fs_constantsHTML],
    [NAV_stdlib_fs_functions, stdlib_fs_functionsHTML],
    [NAV_stdlib_fs_structs, stdlib_fs_structsHTML],
    [NAV_stdlib_fs_enums, stdlib_fs_enumsHTML],
];

stdlib_fs_nav.set_events();
stdlib_fs_nav.set_content_url();
