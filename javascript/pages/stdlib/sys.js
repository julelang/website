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
<div class="inline_code">const E2BIG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EACCES: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EADDRINUSE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EADDRNOTAVAIL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EAFNOSUPPORT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EAGAIN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EALREADY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EAUTH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADARCH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADEXEC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADF: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADMACHO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADMSG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADRPC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBUSY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECANCELED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECHILD: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECONNABORTED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECONNREFUSED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECONNRESET: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EDEADLK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EDESTADDRREQ: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EDEVERR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EDQUOT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EEXIST: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EFAULT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EFBIG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EFTYPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EHOSTDOWN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EHOSTUNREACH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EIDRM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EILSEQ: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EINPROGRESS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EINTR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EINVAL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EIO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EISCONN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EISDIR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELAST: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELOOP: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EMFILE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EMLINK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EMSGSIZE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EMULTIHOP: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENAMETOOLONG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENEEDAUTH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENETDOWN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENETRESET: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENETUNREACH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENFILE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOATTR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOBUFS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENODATA: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENODEV: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOENT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOEXEC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOLCK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOLINK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOMEM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOMSG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOPOLICY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOPROTOOPT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOSPC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOSR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOSTR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOSYS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTBLK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTCONN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTDIR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTEMPTY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTRECOVERABLE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTSOCK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTSUP: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTTY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENXIO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EOPNOTSUPP: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EOVERFLOW: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EOWNERDEAD: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPERM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPFNOSUPPORT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPIPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROCLIM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROCUNAVAIL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROGMISMATCH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROGUNAVAIL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROTO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROTONOSUPPORT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPROTOTYPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EPWROFF: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERANGE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EREMOTE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EROFS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERPCMISMATCH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESHLIBVERS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESHUTDOWN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESOCKTNOSUPPORT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESPIPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESRCH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESTALE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ETIME: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ETIMEDOUT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ETOOMANYREFS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ETXTBSY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EUSERS: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EWOULDBLOCK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EXDEV: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EDEADLOCK: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EQFULL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EADV: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADFD: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADR: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADRQC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBADSLT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EBFONT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECHRNG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ECOMM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EISNAM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EKEYEXPIRED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EKEYREJECTED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EKEYREVOKED: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EL2HLT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EL2NSYNC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EL3HLT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EL3RST: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELIBACC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELIBBAD: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELIBEXEC: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELIBMAX: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELIBSCN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ELNRNG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EMEDIUMTYPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENAVAIL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOANO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOCSI: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOKEY: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOMEDIUM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENONET: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOPKG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTNAM: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ENOTUNIQ: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EREMCHG: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EREMOTEIO: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERESTART: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERFKILL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESRMNT: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ESTRPIPE: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EUCLEAN: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EUNATCH: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EXFULL: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const EHWPOISON: errno</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_ACCMODE</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_ALERT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_APPEND</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_ASYNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_CLOEXEC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_CREAT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_DIRECTORY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_DSYNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_EVTONLY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_EXCL</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_EXLOCK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_FSYNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_NDELAY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_NOCTTY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_NOFOLLOW</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_NONBLOCK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_POPUP</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_RDONLY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_RDWR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_SHLOCK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_SYMLINK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_SYNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_TRUNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_WRONLY</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_DP_GETRAWENCRYPTED</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_DIRECT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_LARGEFILE</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_RSYNC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_PATH</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_TMPFILE</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const O_NOATIME</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_BLKSIZE</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IEXEC</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFBLK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFCHR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFDIR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFIFO</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFLNK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFMT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFREG</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFSOCK</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IREAD</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRGRP</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IROTH</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRUSR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXG</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXO</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IRWXU</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISGID</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISUID</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISVTX</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWGRP</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWOTH</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWRITE</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IWUSR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXGRP</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXOTH</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IXUSR</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
<x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_ISTXT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const S_IFWHT</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const PATH_MAX</div> <br>
<div class="warn">
<strong>Available on: </strong>
<x class="inline_code">darwin_amd64</x>
<x class="inline_code">darwin_arm64</x>
<x class="inline_code">linux_amd64</x>
<x class="inline_code">linux_arm</x>
<x class="inline_code">linux_arm64</x>
<x class="inline_code">linux_i386</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_ACCESS_DENIED</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_ALREADY_EXISTS</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_BROKEN_PIPE</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_BUFFER_OVERFLOW</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_DIR_NOT_EMPTY</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_ENVVAR_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_FILE_EXISTS</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_FILE_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_HANDLE_EOF</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_INSUFFICIENT_BUFFER</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_INVALID_NAME</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_IO_PENDING</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_MOD_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_MORE_DATA</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_NETNAME_DELETED</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_NOT_READY</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_NO_MORE_FILES</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_OPERATION_ABORTED</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_PATH_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_PRIVILEGE_NOT_HELD</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const ERROR_PROC_NOT_FOUND</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const WSAEACCES</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const WSAECONNABORTED</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const WSAECONNRESET</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const MAX_PATH</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="inline_code">const MAX_LONG_PATH</div> <br>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

`;

const stdlib_sys_functionsHTML = `
<div class="code">fn utf16_from_str(s: str): []u16</div>
Returns the UTF-16 encoding of the UTF-8 string s, with a terminating NULL added.
If s includes NULL character at any location, ignores followed characters.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn utf16_to_str(s: []u16): str</div>
Returns the UTF-8 encoding of the UTF-16 sequence s, with a terminating NULL removed.
Returns empty string if s is nil.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn get_std_handle(stdh: uintptr): handle</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn close_handle(stdh: handle): bool</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn get_last_errno(): errno</div>
Returns number of last error.

<div class="topic-separator"></div>
<div class="code">unsafe fn stat(path: *byte, mut stat: *Stat): int</div>
Calls C's stat function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn wstat(path: *u16, mut stat: *Stat): int</div>
Calls C's wstat function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn open(path: *byte, flag: int, mode: int): int</div>
Wrapper for C's open function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn _wopen(path: *u16, flag: int, mode: int): int</div>
Wrapper for C's _wopen function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn seek(handle: int, offset: i64, origin: int): i64</div>
Wrapper for C's lseek function.

<div class="topic-separator"></div>
<div class="code">unsafe fn read(handle: int, mut buff: *unsafe, n: uint): int</div>
Wrapper for C's read function.

<div class="topic-separator"></div>
<div class="code">fn close(handle: int): int</div>
Wrapper for C's close function.

<div class="topic-separator"></div>
<div class="code">unsafe fn write(handle: int, buff: *unsafe, n: uint): int </div>
Wrapper for C's write function.

<div class="topic-separator"></div>
<div class="code">fn get_last_error(): u32</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn get_current_directory(bufflen: u32, mut buff: *u16): u32</div>
Reads working directory into buff and returns readed rune count of current process.
Returns 0 if fail.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn set_current_directory(path: *u16): bool</div>
Sets working directory to path.
Reports operation is success.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn getcwd(buff: *byte, bufflen: uint): *byte</div>
Reads current working directory into buff.
Returns pointer to buff if success, nil pointer if error occurs.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn u16_ptr_to_str(s: *u16): str</div>
Returns the UTF-8 encoding of the UTF-16 sequence s in *u16 form, with a terminating NULL removed.
Returns empty string if s is nil.
<div class="warn">
You can pass wchar_t pointer to this function, it's valid. <br>
If you passing wchar_t pointer, cast to u16 pointer. <br>
Otherwise generated C++ code does not compile.
</div>
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn opendir(path: *byte): *Dir</div>
Calls C's opendir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn _wopendir(path: *u16): *Wdir</div>
Calls C's _wopendir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn readdir(mut dir: *Dir): *Dirent</div>
Calls C's readdir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn _wreaddir(mut dir: *Wdir): *Wdirent</div>
Calls C's _wreaddir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn closedir(mut dir: *Dir): int</div>
Calls C's closedir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn _wclosedir(mut dir: *Wdir): int</div>
Calls C's _wclosedir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">fn exit(code: int)</div>
Wrapper for C's exit.

<div class="topic-separator"></div>
<div class="code">unsafe fn chdir(path: *byte): int</div>
Calls for C's chdir function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">unsafe fn get_full_path_name(path: *u16, bufflen: u32, buff: *u16, fname: **u16): u32</div>
Calls Windows's GetFullPathNameW function.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

`;

const stdlib_sys_structsHTML = `
<div class="code">struct Stat {
    st_mode: uint // _mode_t
    st_size: uint // _off_t
}</div>
C's stat.

<div class="topic-separator"></div>
<div class="code">struct Wdirent {
    d_name: *u16 // wchar_t*
}</div>
C's _wdirent.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">struct Dirent {
    d_name: *byte // char*
}</div>
C's dirent.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

<div class="topic-separator"></div>
<div class="code">struct Wdir</div>
C's _WDIR.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">windows</x>
</div>

<div class="topic-separator"></div>
<div class="code">struct Dir</div>
C's DIR.
<div class="warn">
<strong>Available on: </strong> <x class="inline_code">unix</x>
</div>

`;

const NAV_stdlib_sys_type_aliases = document.getElementById("type-aliases");
const NAV_stdlib_sys_globals = document.getElementById("globals");
const NAV_stdlib_sys_functions = document.getElementById("functions");
const NAV_stdlib_sys_structs = document.getElementById("structs");

const stdlib_sys_nav = new SideNavigator();
stdlib_sys_nav.navigations = [
    [NAV_stdlib_sys_type_aliases, stdlib_sys_type_aliasesHTML],
    [NAV_stdlib_sys_globals, stdlib_sys_globalsHTML],
    [NAV_stdlib_sys_functions, stdlib_sys_functionsHTML],
    [NAV_stdlib_sys_structs, stdlib_sys_structsHTML],
];

stdlib_sys_nav.set_events();
stdlib_sys_nav.set_content_url();
