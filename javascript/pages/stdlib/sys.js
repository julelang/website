const stdlib_sys_type_aliasesHTML = `
<div class="inline_code">type handle: uintptr</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">type errno: int</div>
Type of error numbers.

`;

const stdlib_sys_globalsHTML = `
<div class="inline_code">const INVALID_HANDLE: handle</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const STD_INPUT_HANDLE</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const STD_OUTPUT_HANDLE</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const STD_ERROR_HANDLE</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>


<div class="topic-separator"></div>
<div class="inline_code">let STDIN: uintptr</div>

<div class="topic-separator"></div>
<div class="inline_code">let STDOUT: uintptr</div>

<div class="topic-separator"></div>
<div class="inline_code">let STDERR: uintptr</div>


<div class="topic-separator"></div>
<div class="inline_code">const S_IFMT: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFIFO: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFCHR: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFDIR: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFBLK: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFREG: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFLNK: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSOCK: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISUID: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISGID: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISVTX: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRUSR: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWRITE: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWUSR: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXUSR: int</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSHM_SYSV: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSEMA: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFCOND: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFMUTEX: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSHM: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFBOUNDSOCK: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSOCKADDR: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFDSOCK: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_UNSUP: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IREAD: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IEXEC: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXU: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXG: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRGRP: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWGRP: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXGRP: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXO: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IROTH: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWOTH: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXOTH: int</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPERM: errno</div> <br>
Operation not permitted.

<div class="topic-separator"></div>
<div class="inline_code">const ENOENT: errno</div> <br>
No such file or directory.

<div class="topic-separator"></div>
<div class="inline_code">const ESRCH: errno</div> <br>
No such process.

<div class="topic-separator"></div>
<div class="inline_code">const EINTR: errno</div> <br>
Interrupted system call.

<div class="topic-separator"></div>
<div class="inline_code">const EIO: errno</div> <br>
I/O error.

<div class="topic-separator"></div>
<div class="inline_code">const ENXIO: errno</div> <br>
No such device or address.

<div class="topic-separator"></div>
<div class="inline_code">const E2BIG: errno</div> <br>
Argument list too long.

<div class="topic-separator"></div>
<div class="inline_code">const ENOEXEC: errno</div> <br>
Exec format error.

<div class="topic-separator"></div>
<div class="inline_code">const EBADF: errno</div> <br>
Bad file number.

<div class="topic-separator"></div>
<div class="inline_code">const ECHILD: errno</div> <br>
No child processes.

<div class="topic-separator"></div>
<div class="inline_code">const EAGAIN: errno</div> <br>
Try again.

<div class="topic-separator"></div>
<div class="inline_code">const ENOMEM: errno</div> <br>
Out of memory.

<div class="topic-separator"></div>
<div class="inline_code">const EACCESS: errno</div> <br>
Permission denied.

<div class="topic-separator"></div>
<div class="inline_code">const EFAULT: errno</div> <br>
Bad address.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTBLK: errno</div> <br>
Block device required.

<div class="topic-separator"></div>
<div class="inline_code">const EBUSY: errno</div> <br>
Device or resource busy.

<div class="topic-separator"></div>
<div class="inline_code">const EEXIST: errno</div> <br>
File exists.

<div class="topic-separator"></div>
<div class="inline_code">const EXDEV: errno</div> <br>
Cross-device link.

<div class="topic-separator"></div>
<div class="inline_code">const ENODEV: errno</div> <br>
No such device.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTDIR: errno</div> <br>
Not a directory.

<div class="topic-separator"></div>
<div class="inline_code">const EISDIR: errno</div> <br>
Is a directory.

<div class="topic-separator"></div>
<div class="inline_code">const EINVAL: errno</div> <br>
Invalid argument.

<div class="topic-separator"></div>
<div class="inline_code">const ENFILE: errno</div> <br>
File table overflow.

<div class="topic-separator"></div>
<div class="inline_code">const EMFILE: errno</div> <br>
Too many open files.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTTY: errno</div> <br>
Not a typewriter.

<div class="topic-separator"></div>
<div class="inline_code">const ETXTBSY: errno</div> <br>
Text file busy.

<div class="topic-separator"></div>
<div class="inline_code">const EFBIG: errno</div> <br>
File too large.

<div class="topic-separator"></div>
<div class="inline_code">const ENOSPC: errno</div> <br>
No space left on device.

<div class="topic-separator"></div>
<div class="inline_code">const ESPIPE: errno</div> <br>
Illegal seek.

<div class="topic-separator"></div>
<div class="inline_code">const EROFS: errno</div> <br>
Read-only file system.

<div class="topic-separator"></div>
<div class="inline_code">const EEMLINK: errno</div> <br>
Too many links.

<div class="topic-separator"></div>
<div class="inline_code">const EPIPE: errno</div> <br>
Broken pipe.

<div class="topic-separator"></div>
<div class="inline_code">const EDOM: errno</div> <br>
Math argument out of domain of func.

<div class="topic-separator"></div>
<div class="inline_code">const ERANGE: errno</div> <br>
Math result not representable.

<div class="topic-separator"></div>
<div class="inline_code">const EDEADLK: errno</div> <br>
Resource deadlock would occur.

<div class="topic-separator"></div>
<div class="inline_code">const ENAMETOOLONG: errno</div> <br>
File name too long.

<div class="topic-separator"></div>
<div class="inline_code">const ENOLCK: errno</div> <br>
No record locks available.

<div class="topic-separator"></div>
<div class="inline_code">const ENOSYS: errno</div> <br>
Function not implemented.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTEMPTY: errno</div> <br>
Directory not empty.

<div class="topic-separator"></div>
<div class="inline_code">const ELOOP: errno</div> <br>
Too many symbolic links encountered.

<div class="topic-separator"></div>
<div class="inline_code">const ENOMSG: errno</div> <br>
No message of desired type.

<div class="topic-separator"></div>
<div class="inline_code">const EIDRM: errno</div> <br>
Identifier removed.

<div class="topic-separator"></div>
<div class="inline_code">const ECHRNG: errno</div> <br>
Channel number out of range.

<div class="topic-separator"></div>
<div class="inline_code">const EL2NSYNC: errno</div> <br>
Level 2 not synchronized.

<div class="topic-separator"></div>
<div class="inline_code">const EL3HTL: errno</div> <br>
Level 3 halted.

<div class="topic-separator"></div>
<div class="inline_code">const EL3RST: errno</div> <br>
Level 3 reset.

<div class="topic-separator"></div>
<div class="inline_code">const ELNRNG: errno</div> <br>
Link number out of range.

<div class="topic-separator"></div>
<div class="inline_code">const EUNATCH: errno</div> <br>
Protocol driver not attached.

<div class="topic-separator"></div>
<div class="inline_code">const ENOCSI: errno</div> <br>
No CSI structure available.

<div class="topic-separator"></div>
<div class="inline_code">const EL2HLT: errno</div> <br>
Level 2 halted.

<div class="topic-separator"></div>
<div class="inline_code">const EBADE: errno</div> <br>
Invalid exchange.

<div class="topic-separator"></div>
<div class="inline_code">const EBADR: errno</div> <br>
Invalid request descriptor.

<div class="topic-separator"></div>
<div class="inline_code">const EXFULL: errno</div> <br>
Exchange full.

<div class="topic-separator"></div>
<div class="inline_code">const ENOANO: errno</div> <br>
No anode.

<div class="topic-separator"></div>
<div class="inline_code">const EBADRQC: errno</div> <br>
Invalid request code.

<div class="topic-separator"></div>
<div class="inline_code">const EBADSLT: errno</div> <br>
Invalid slot.

<div class="topic-separator"></div>
<div class="inline_code">const EBFONT: errno</div> <br>
Bad font file format.

<div class="topic-separator"></div>
<div class="inline_code">const ENOSTR: errno</div> <br>
Device not a stream.

<div class="topic-separator"></div>
<div class="inline_code">const ENODATA: errno</div> <br>
No data available.

<div class="topic-separator"></div>
<div class="inline_code">const ETIME: errno</div> <br>
Timer expired.

<div class="topic-separator"></div>
<div class="inline_code">const ENOSR: errno</div> <br>
Out of streams resources.

<div class="topic-separator"></div>
<div class="inline_code">const ENONET: errno</div> <br>
Machine is not on the network.

<div class="topic-separator"></div>
<div class="inline_code">const ENOPKG: errno</div> <br>
Package not installed.

<div class="topic-separator"></div>
<div class="inline_code">const EREMOTE: errno</div> <br>
Object is remote.

<div class="topic-separator"></div>
<div class="inline_code">const ENOLINK: errno</div> <br>
Link has been severed.

<div class="topic-separator"></div>
<div class="inline_code">const EADV: errno</div> <br>
Advertise error.

<div class="topic-separator"></div>
<div class="inline_code">const ESRMNT: errno</div> <br>
Srmount error.

<div class="topic-separator"></div>
<div class="inline_code">const ECOMM: errno</div> <br>
Communication error on send.

<div class="topic-separator"></div>
<div class="inline_code">const EPROTO: errno</div> <br>
Protocol error.

<div class="topic-separator"></div>
<div class="inline_code">const EMULTIHOP: errno</div> <br>
Multihop attempted.

<div class="topic-separator"></div>
<div class="inline_code">const EDOTDOT: errno</div> <br>
RFS specific error.

<div class="topic-separator"></div>
<div class="inline_code">const EBADMSG: errno</div> <br>
Not a data message.

<div class="topic-separator"></div>
<div class="inline_code">const EOVERFLOW: errno</div> <br>
Value too large for defined data type.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTUNIQ: errno</div> <br>
Name not unique on network.

<div class="topic-separator"></div>
<div class="inline_code">const EBADFD: errno</div> <br>
File descriptor in bad state.

<div class="topic-separator"></div>
<div class="inline_code">const EREMCHG: errno</div> <br>
Remote address changed.

<div class="topic-separator"></div>
<div class="inline_code">const ELIBACC: errno</div> <br>
Can not access a needed shared library.

<div class="topic-separator"></div>
<div class="inline_code">const ELIBBAD: errno</div> <br>
Accessing a corrupted shared library.

<div class="topic-separator"></div>
<div class="inline_code">const ELIBSCN: errno</div> <br>
.lib section in a.out corrupted.

<div class="topic-separator"></div>
<div class="inline_code">const ELIBMAX: errno</div> <br>
Attempting to link in too many shared libraries.

<div class="topic-separator"></div>
<div class="inline_code">const ELIBEXEC: errno</div> <br>
Cannot exec a shared library directly.

<div class="topic-separator"></div>
<div class="inline_code">const EILSEQ: errno</div> <br>
Illegal byte sequence.

<div class="topic-separator"></div>
<div class="inline_code">const ERESTART: errno</div> <br>
Interrupted system call should be restarted.

<div class="topic-separator"></div>
<div class="inline_code">const ESTRPIPE: errno</div> <br>
Streams pipe error.

<div class="topic-separator"></div>
<div class="inline_code">const EUSERS: errno</div> <br>
Too many users.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTSOCK: errno</div> <br>
Socket operation on non-socket.

<div class="topic-separator"></div>
<div class="inline_code">const EDESTADDRREQ: errno</div> <br>
Destination address required.

<div class="topic-separator"></div>
<div class="inline_code">const EMSGSIZE: errno</div> <br>
Message too long.

<div class="topic-separator"></div>
<div class="inline_code">const EPROTOTYPE: errno</div> <br>
Protocol wrong type for socket.

<div class="topic-separator"></div>
<div class="inline_code">const ENOPROTOOPT: errno</div> <br>
Protocol not available.

<div class="topic-separator"></div>
<div class="inline_code">const EPROTONOSUPPORT: errno</div> <br>
Protocol not supported.

<div class="topic-separator"></div>
<div class="inline_code">const ESOCKTNOSUPPORT: errno</div> <br>
Socket type not supported.

<div class="topic-separator"></div>
<div class="inline_code">const EOPNOTSUPP: errno</div> <br>
Operation not supported on transport endpoint.

<div class="topic-separator"></div>
<div class="inline_code">const EPFNOSUPPORT: errno</div> <br>
Protocol family not supported.

<div class="topic-separator"></div>
<div class="inline_code">const EAFNOSUPPORT: errno</div> <br>
Address family not supported by protocol.

<div class="topic-separator"></div>
<div class="inline_code">const EADDRINUSE: errno</div> <br>
Address already in use.

<div class="topic-separator"></div>
<div class="inline_code">const EADDRNOTAVAIL: errno</div> <br>
Cannot assign requested address.

<div class="topic-separator"></div>
<div class="inline_code">const ENETDOWN: errno</div> <br>
Network is down.

<div class="topic-separator"></div>
<div class="inline_code">const ENETUNREACH: errno</div> <br>
Network is unreachable.

<div class="topic-separator"></div>
<div class="inline_code">const ENETRESET: errno</div> <br>
Network dropped connection because of reset.

<div class="topic-separator"></div>
<div class="inline_code">const ECONNABORTED: errno</div> <br>
Software caused connection abort.

<div class="topic-separator"></div>
<div class="inline_code">const ECONNRESET: errno</div> <br>
Connection reset by peer.

<div class="topic-separator"></div>
<div class="inline_code">const ENOBUFS: errno</div> <br>
No buffer space available.

<div class="topic-separator"></div>
<div class="inline_code">const EISCONN: errno</div> <br>
Transport endpoint is already connected.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTCONN: errno</div> <br>
Transport endpoint is not connected.

<div class="topic-separator"></div>
<div class="inline_code">const ESHUTDOWN: errno</div> <br>
Cannot send after transport endpoint shutdown.

<div class="topic-separator"></div>
<div class="inline_code">const ETOOMANYREFS: errno</div> <br>
Too many references: cannot splice.

<div class="topic-separator"></div>
<div class="inline_code">const ETIMEDOUT: errno</div> <br>
Connection timed out.

<div class="topic-separator"></div>
<div class="inline_code">const ECONNREFUSED: errno</div> <br>
Connection refused.

<div class="topic-separator"></div>
<div class="inline_code">const EHOSTDOWN: errno</div> <br>
Host is down.

<div class="topic-separator"></div>
<div class="inline_code">const EHOSTUNREACH: errno</div> <br>
No route to host.

<div class="topic-separator"></div>
<div class="inline_code">const EALREADY: errno</div> <br>
Operation already in progress.

<div class="topic-separator"></div>
<div class="inline_code">const EINPROGRESS: errno</div> <br>
Operation now in progress.

<div class="topic-separator"></div>
<div class="inline_code">const ESTALE: errno</div> <br>
Stale NFS file handle.

<div class="topic-separator"></div>
<div class="inline_code">const EUCLEAN: errno</div> <br>
Structure needs cleaning.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTNAM: errno</div> <br>
Not a XENIX named type file.

<div class="topic-separator"></div>
<div class="inline_code">const ENAVAIL: errno</div> <br>
No XENIX semaphores available.

<div class="topic-separator"></div>
<div class="inline_code">const EISNAM: errno</div> <br>
Is a named type file.

<div class="topic-separator"></div>
<div class="inline_code">const EREMOTEIO: errno</div> <br>
Remote I/O error.

<div class="topic-separator"></div>
<div class="inline_code">const EDQUOT: errno</div> <br>
Quota exceeded.

<div class="topic-separator"></div>
<div class="inline_code">const ENOMEDIUM: errno</div> <br>
No medium found.

<div class="topic-separator"></div>
<div class="inline_code">const EMEDIUMTYPE: errno</div> <br>
Wrong medium type.

<div class="topic-separator"></div>
<div class="inline_code">const ECANCELED: errno</div> <br>
Operation Canceled.

<div class="topic-separator"></div>
<div class="inline_code">const ENOKEY: errno</div> <br>
Required key not available.

<div class="topic-separator"></div>
<div class="inline_code">const EKEYEXPIRED: errno</div> <br>
Key has expired.

<div class="topic-separator"></div>
<div class="inline_code">const EKEYREVOKED: errno</div> <br>
Key has been revoked.

<div class="topic-separator"></div>
<div class="inline_code">const EKEYREJECTED: errno</div> <br>
Key was rejected by service.

<div class="topic-separator"></div>
<div class="inline_code">const EOWNERDEAD: errno</div> <br>
Owner died.

<div class="topic-separator"></div>
<div class="inline_code">const ENOTRECOVERABLE: errno</div> <br>
State not recoverable.

`;

const stdlib_sys_functionsHTML = `
<div class="code">fn utf16_from_str(s: str) []u16</div>
Returns the UTF-16 encoding of the UTF-8 string s, with a terminating NULL added.
If s includes NULL character at any location, ignores followed characters.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn utf16_to_str(s: []u16) str</div>
Returns the UTF-8 encoding of the UTF-16 sequence s, with a terminating NULL removed.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn wchar_to_str(s: *cpp.wchar_t) str</div>
Returns the UTF-8 encoding of the UTF-16 sequence s in *wchar_t form, with a terminating NULL removed.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn get_std_handle(stdh: uintptr) handle</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn close_handle(stdh: handle) bool</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn get_last_errno() errno</div>
Returns number of last error.

<div class="topic-separator"></div>
<div class="code">fn stat(path: str, handle: *cpp.stat) (ok: bool)</div>

<div class="topic-separator"></div>
<strong>Windows:</strong>
<div class="code">fn open_dir(path: str) *cpp._WDIR</div>
<strong>Unix:</strong>
<div class="code">fn open_dir(path: str) *cpp.DIR</div>

<div class="topic-separator"></div>
<strong>Windows:</strong>
<div class="code">unsafe fn read_dir(mut dir: *cpp._WDIR) *cpp._wdirent</div>
<strong>Unix:</strong>
<div class="code">unsafe fn read_dir(mut dir: *cpp.DIR) *cpp.dirent</div>

<div class="topic-separator"></div>
<strong>Windows:</strong>
<div class="code">unsafe fn close_dir(mut dir: *cpp._WDIR) int</div>
<strong>Unix:</strong>
<div class="code">unsafe fn close_dir(mut dir: *cpp.DIR) int</div>


`;

const NAV_stdlib_sys_type_aliases = document.getElementById("type-aliases");
const NAV_stdlib_sys_globals = document.getElementById("globals");
const NAV_stdlib_sys_functions = document.getElementById("functions");

const stdlib_sys_nav = new SideNavigator();
stdlib_sys_nav.navigations = [
    [NAV_stdlib_sys_type_aliases, stdlib_sys_type_aliasesHTML],
    [NAV_stdlib_sys_globals, stdlib_sys_globalsHTML],
    [NAV_stdlib_sys_functions, stdlib_sys_functionsHTML],
];

stdlib_sys_nav.set_events();
stdlib_sys_nav.set_content_url();
