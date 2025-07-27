<script>
import { RouterLink } from 'vue-router';
import Code from '../components/CodeBlock.vue'
import VSCodeLogo from '../components/VSCodeLogo.vue'
import GitHubLogo from '../components/GitHubLogo.vue'
import NeovimLogo from '../components/NeovimLogo.vue'
import EmacsLogo from '../components/EmacsLogo.vue'
import EcodeLogo from '../components/EcodeLogo.vue'
import JuleLogo from '../components/JuleLogo.vue'
import Heart from '../components/Heart.vue'
import hljs from 'highlight.js';
import jule from '../jule';

hljs.registerLanguage('jule', jule.jule);

// Descriptions for the codes.
let description = [
  `Jule introduces exceptional functions for error handling. They are must be handled immediately, should break algorithm or return value if needed; no deferred error handling!`,
  `Jule supports modern concurrency principles on native threads; mutexes, condition variables, channels, select statements and etc. Spawn threads with a single keyword and elegant syntax.`,
  `Jule provides powerful compile-time support; reflection, evaluation, matching, and more. Examine source files and types at comptime with no runtime cost!`,
  `Jule can play with C/C++ code easily, provides an API for safe and simple experience. Just bind and use properly, do not port the whole code!`,
]

let code = [
  `use "std/encoding/json"
use "std/fmt"
use "std/os"

struct User {
	Username: str \`json:"username"\`
	Type:     str \`json:"type"\`
}

fn main() {
	data := os::ReadFile("users.json") else {
		fmt::Println("ReadFile error: ", error)
		use []byte(\`[
			{"username": "admin", "type": "admin"}
		]\`)
	}
	let mut users: []User
	json::Decode(data, &users) else {
		fmt::Println("JSON error: ", error)
		ret
	}
	fmt::Println(users)
}`,
`use "std/fmt"
use "std/time"

fn thread(c: chan int, i: int) {
	c <- i
}

fn main() {
	c := make(chan int)
	mut i := 0
	for i < 10; i++ {
		co thread(c, i)
	}
	for i > 0; i-- {
		r := <-c
		fmt::Println("thread #", r)
	}
}`,
  `use "std/comptime"

struct FooBarBaz {
    Foo: int
    Bar: str
    Baz: bool
}

fn printPublicFields[T](x: T) {
    const t = comptime::TypeOf(T)
    const match {
    | t.Kind() != comptime::Struct:
        panic("type T is not a struct")
    }
    const fields = t.Decl().Fields()
    const expr = comptime::ValueOf(x)
    const for _, field in fields {
        const match {
        | field.Public():
            println(expr.Field(field.Name()).Unwrap())
        }
    }
}

fn main() {
    fbz := FooBarBaz{
        Foo: 89,
        Bar: "comptime",
        Baz: true,
    }
    printPublicFields(fbz)
}`,
  `use integ "std/jule/integrated"
use "std/mem"

cpp use "<stdio.h>"

#typedef
cpp struct FILE{}

type CharPtr = *integ::Char

cpp unsafe fn fopen(CharPtr, CharPtr): *cpp.FILE
cpp unsafe fn fwrite(*unsafe, uint, int, *cpp.FILE)
cpp unsafe fn fclose(*cpp.FILE)

fn main() {
	path := integ::StrToBytes("foo.txt")
	mode := integ::StrToBytes("w")
	unsafe {
		f := cpp.fopen(CharPtr(&path[0]), CharPtr(&mode[0]))
		buf := []byte("hello world")
		cpp.fwrite(&buf[0], mem::SizeOf(byte), len(buf), f)
		cpp.fclose(f)
	}
}`,
];

export default {
  components: {
    Code,
    JuleLogo,
    GitHubLogo,
    VSCodeLogo,
    NeovimLogo,
    EmacsLogo,
    EcodeLogo,
    Heart,
  },
  async mounted() {
    // load syntax highlighting HTML from source code
    code.forEach(function(value, index) {
      code[index] = hljs.highlight(value, { language: 'jule', theme: "atom-one-dark" }).value
    })

    const elementCode = document.getElementById("code");
    const elementDescription = document.getElementById("code-description");
    const elementErrors = document.getElementById("errors");
    const elementConcurrency = document.getElementById("concurrency");
    const elementComptime = document.getElementById("comptime");
    const elementInteroperability = document.getElementById("interoperability");

    let codeElements = [
      elementErrors,
      elementConcurrency,
      elementComptime,
      elementInteroperability,
    ]

    function setActive(i) {
      elementCode.innerHTML = code[i];
      elementDescription.innerText = description[i];
      codeElements.forEach(function(element, index) {
        if (index == i) {
          element.style.borderColor="teal";
        } else {
          element.style.borderColor="transparent";
        }
      })
    }

    elementErrors.addEventListener('click', function () {
      setActive(codeElements.indexOf(elementErrors));
    })

    elementConcurrency.addEventListener('click', function () {
      setActive(codeElements.indexOf(elementConcurrency));
    })

    elementComptime.addEventListener('click', function () {
      setActive(codeElements.indexOf(elementComptime));
    })

    elementInteroperability.addEventListener('click', function () {
      setActive(codeElements.indexOf(elementInteroperability));
    })

    // load default value state as "stdlib"
    codeElements[0].click();
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://raw.githubusercontent.com/Yukaii/github-highlightjs-themes/master/themes/github-dark-default.css">
  <main>
    <div class="bg-[var(--bg-primary)] pt-20 pb-10 text-white text-center">
      <JuleLogo class="text-white text-center mx-auto h-32"></JuleLogo>
      <div class="max-w-(--breakpoint-lg) mx-auto py-7 px-5 justify-between items-center gap-2">
        <div>
          <div class="mb-2 text-5xl font-semibold">Jule</div>
          <div class="leading-7 text-xl">An effective programming language to build<br>efficient, fast, reliable and safe software.</div>
        </div>
        <div class="flexbox mt-8">
          <router-link to="/downloads" class="select-none py-2 px-7 bg-[var(--color-primary)] hover:bg-[teal] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] hover:border-[teal] rounded-lg">Download</router-link>
          <a href="https://manual.jule.dev" class="select-none ml-4 py-2 px-7 bg-transparent hover:bg-[var(--color-primary)] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] rounded-lg">Manual</a>
          <div class="ml-5 mt-4 font-light text-xs">Supported on Windows, macOS, and Linux</div>
        </div>
      </div>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto mt-40 max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-3xl">Quick Look</div>
      <div class="mx-auto">
        <div class="flex justify-center mt-5 text-lg">
          <div id="errors" class="duration-[0.3s] p-1 border-b-3 hover:cursor-pointer border-[transparent] font-[semibold]">Errors</div>
          <div id="concurrency" class="duration-[0.3s] p-1 border-b-3 hover:cursor-pointer border-[transparent] font-[semibold]">Concurrency</div>
          <div id="comptime" class="duration-[0.3s] p-1 border-b-3 hover:cursor-pointer border-[transparent] font-[semibold]">Comptime</div>
          <div id="interoperability" class="duration-[0.3s] p-1 border-b-3 hover:cursor-pointer border-[transparent] font-[semibold]">Interoperability</div>
        </div>
        <div id="code-description" class="max-w-md mx-auto leading-7 mt-5 text-center text-xl"></div>
        <div class="bg-[var(--bg-primary)] mt-5 text-white rounded-xl">
        <pre id="code" class="p-4 overflow-auto"></pre>
        </div>
      </div>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto mt-40 max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-3xl">Easy and Simple</div>
      <div class="max-w-md mx-auto leading-7 mt-8 text-center text-xl">Jule is simple and easy to learn with well-documented manual and community. Ready for the help; language support for popular editors, official formatter tool, documentation generator and more.</div>
      <div class="mx-auto">
        <div class="flex justify-center">
          <a href="https://github.com/julelang/vscode-jule" target="_blank">
            <VSCodeLogo class="mt-4 text-black mx-2 h-8"></VSCodeLogo>
          </a>
          <a href="https://github.com/julelang/jule.nvim" target="_blank">
            <NeovimLogo class="mt-4 text-black mx-2 h-8"></NeovimLogo>
          </a>
          <a href="https://github.com/julelang/jule-mode.el" target="_blank">
            <EmacsLogo class="mt-4 text-black mx-2 h-8"></EmacsLogo>
          </a>
          <a href="https://github.com/SpartanJ/ecode" target="_blank">
            <EcodeLogo class="mt-4 text-black mx-2 h-8"></EcodeLogo>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-[var(--bg-primary)]">
      <svg viewBox="0 0 600 140" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,180 450,20 600,100 L600,00 L0,0 Z" style="stroke: none; fill:white;"></path>
      </svg>
      <div class="max-w-(--breakpoint-lg) m-0 p-0 mx-auto px-5 py-20 text-lg text-white">
        <div class="transition-all duration-200 bg-clip-text max-w-(--breakpoint-lg) mx-auto px-5 bg-linear-to-r from-blue-600 w-fit via-purple-500 to-orange-400 hover:bg-linear-to-r hover:from-blue-900 hover:via-purple-700 hover:to-orange-500">
          <a href="/future-of-jule" class="text-transparent hover:cursor-pointer text-center font-semibold text-4xl">Future of Jule</a>
        </div>
        <div class="mt-2 text-center font-light text-xs">Contribute or give us a star to support</div>
        <a href="https://github.com/julelang/jule">
          <GitHubLogo class="mt-2 text-white mx-auto h-6"></GitHubLogo>
        </a>
      </div>
      <div class="max-w-(--breakpoint-lg) mx-auto px-5 mt-20 pb-20">
        <div class="text-lg p-10 bg-[var(--bg-secondary)] bg-linear-to-t from-slate-600 text-white rounded-3xl">
          <div class="font-semibold text-2xl">Open Source</div>
          Including important parts of Jule such as the reference compiler, standards library and API, is developed completely open source and free of charge, and its source code open at <a class="underline" href="https://github.com/julelang/jule">GitHub repository</a>, open to contributions from the entire community.
          Many regular and non-regular contributors work together to make Jule more effective and stable.
          <br><br>
          <div class="font-semibold text-2xl">Cross Platform</div>
          Jule has a cross-platform implementation, supports popular operating systems such as macOS, Linux, Windows and can generate code for popular architectures such as arm64, amd64, and intel 386.
          It is actively designed to implement all competencies cross-platform and focuses on a homogeneous experience.
          We're excited for it to have broader platform support in the future.
          <br><br>
          <div class="font-semibold text-2xl">Well Documented</div>
          Jule has a well written and detailed manual.
          With each change on Jule, the manual is often updated at the same time, and documentation of even the newest updates is made available to the community immediately.
        </div>
      </div>
      <div class="font-bold mt-20 text-center text-white text-2xl">What's possible with Jule</div>
      <div class="max-w-(--breakpoint-lg) mx-auto py-20 px-5 grid grid-cols-2 max-lg:grid-cols-1 gap-y-8 gap-x-10 leading-5">
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">General Purpose Programming</div>
        <div class="text-lg ml-4 mr-4">Develop command line applications or automation, do financial calculations, work with io, analysis data, use C/C++ code, whatever you want, Jule is flexible enough to keep up.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/std/bufio" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/bufio</a>
          <a href="https://manual.jule.dev/std/math-big" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/math/big</a>
          <a href="https://github.com/mertcandav/julenum" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">mertcandav/julenum</a>
          <a href="https://github.com/adamperkowski/jpu" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">adamperkowski/jpu</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Network Programming</div>
        <div class="text-lg ml-4 mr-4">Easily develop network programs with built-in concurrency, easy multithreading, and a standard library with powerful implementations for I/O, socket, URL, concurrency and more.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/std/net" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/net</a>
          <a href="https://manual.jule.dev/std/sync" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/sync</a>
          <a href="https://github.com/adamperkowski/snapbox" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">adamperkowski/snapbox</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Systems Programming</div>
        <div class="text-lg ml-4 mr-4">Program many system software such as game engines and compilers with the ease of low-level programming and powerful cross-platform standard library.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/tools/julec" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">julec</a>
          <a href="https://manual.jule.dev/tools/julefmt" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">julefmt</a>
          <a href="https://manual.jule.dev/std/os" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/os</a>
          <a href="https://manual.jule.dev/std/sys" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/sys</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Compile-Time Empowered</div>
        <div class="text-lg ml-4 mr-4">Thanks to the powerful compile time, perform tasks such as reflection, evaluation and type matching at compile time for fast data processing, and more.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
            <a href="https://manual.jule.dev/std/comptime" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/comptime</a>
            <a href="https://manual.jule.dev/std/encoding-json" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/encoding/json</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[cadetblue] text-white pt-20 pb-20">
      <div class="font-bold text-center text-2xl">Community and Support</div>
      <Heart class="h-8 mt-2 text-center mx-auto"></Heart>
      <div class="max-w-md mx-auto leading-7 mt-8 text-center text-xl">
      The Jule community is active on Discord and GitHub Discussions. Ready to help.
      <br><br>
      Jule is distributed as completely open source on GitHub under the terms of the BSD 3-Clause license. Contribute to source code or just give a star to support Jule.</div>
      <div class="mx-auto mt-4">
        <div class="flex justify-center">
          <a href="https://github.com/julelang/jule"><GitHubLogo class="text-white mr-4 h-7"></GitHubLogo></a>
          <a href="https://discord.gg/XNSUUDuGGQ"><font-awesome-icon icon="fa-brands fa-discord" class="mt-1 text-xl"/></a>
        </div>
      </div>
    </div>
  </main>
</template>
