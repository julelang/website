<script>
import { RouterLink } from 'vue-router';
import Code from '../components/CodeBlock.vue'
import hljs from 'highlight.js';
import jule from '../jule';

hljs.registerLanguage('jule', jule.jule);

export default {
  components: {
    Code,
  },
  async mounted() {
    document.getElementById('test-code').innerHTML = hljs.highlight(
`use "std/testing"

fn reverse(mut s: []int) {
    mut i := 0
    for i < len(s) / 2; i++ {
        s[i], s[len(s)-i-1] = s[len(s)-i-1], s[i]
    }
}

#test
fn testReverse(t: &testing::T) {
    mut s := [1, 2, 3, 4, 5]
    r := [5, 4, 3, 2, 1]
    reverse(s)
    for i in s {
        if s[i] != r[i] {
            t.Errorf("index {} is not equal", i)
        }
    }
}`, { language: 'jule' }).value;

    document.getElementById('comptime-code').innerHTML = hljs.highlight(
`use "std/fmt"

fn max[S: []E, E: comparable](s: S): E {
    if len(s) == 0 {
        const match type E {
        | int | uint | f64:
            ret 0
        |:
            panic("len(s) == 0")
        }
    }
    mut m := s[0]
    for _, e in s[1:] {
        if m < e {
            m = e
        }
    }
    ret m
}

fn main() {
    s := [90, 2, 5, 23, 87, 89, 49, 66, 97]
    m := max(s)
    fmt::Println(m)
}`, { language: 'jule' }).value;

    document.getElementById('memory-code').innerHTML = hljs.highlight(
`use "std/bytes"
use "std/fmt"
use "std/os"

fn main() {
	args := os::Args()
	if len(args) == 1 {
		ret
	}
	path := args[1]
	mut buf := os::File.Read(path) else {
		println("path could not read: " + path)
		ret
	}
	mut n := 0
	for _, part in bytes::Split(buf, [' '], -1) {
		if len(part) != 0 {
			n++
		}
	}
	fmt::Printf("{} contains {} word\n", path, n)
}`, { language: 'jule' }).value;
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://raw.githubusercontent.com/Yukaii/github-highlightjs-themes/master/themes/github-dark-default.css">
  <main>
    <div class="bg-[var(--bg-primary)] text-white">
      <div class="max-w-screen-lg mx-auto py-7 px-5 justify-between items-center gap-2">
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

    <div class="max-w-screen-lg mx-auto py-20 px-5 grid grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-10 leading-5">
      <div class="rounded-xl border-[2.8px] border-[slateblue] p-4">
        <div class="font-semibold text-2xl mb-2 text-[slateblue]">Performance</div>
        <div class="text-lg">Jule is extremely fast and memory efficient thanks to its efficient design and optimizing compiler.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[darkviolet] p-4">
        <div class="font-semibold text-2xl mb-2 text-[darkviolet]">Safe</div>
        <div class="text-lg">Jule's static type system and principles disallows many errors during compile-time, and you have memory safety at runtime.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[teal] p-4">
        <div class="font-semibold text-2xl mb-2 text-[teal]">Collaborative</div>
        <div class="text-lg">Jule has an API written in C++ to develop C++ extensions for Jule and integrates beautifully with C, C++, Objective-C, and Objective-C++.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[olive] p-4">
        <div class="font-semibold text-2xl mb-2 text-[olive]">Effective</div>
        <div class="text-lg">Jule has built-in concurrency and supported by a cross-platform implemented standard library.</div>
      </div>
    </div>

    <div class="bg-[var(--bg-primary)] h-20 rounded-tl-full ml-[50%] w-[50%]" />
    <div class="bg-[var(--bg-primary)] h-20 rounded-tl-full" />
    <div class="bg-[var(--bg-primary)]">
      <div class="max-w-screen-lg mx-auto px-5 py-20 text-lg text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Empowered Compile Time</div>
            <div class="flex grid grid-cols-2 max-lg:grid-cols-1">
              <div class="mr-5 mb-5">
                The Jule compiler can do a lot of cool things at compile time.
                Evaluation of constant expressions, pattern matching for generic types, compile-time panics and more.
                <br><br>
                Generics are checked at compile time and have no runtime costs, and provide pattern matching support for generic types.
                Evaluates compile-time panic calls to provide a custom error message to the compiler when your desired match is not met.
                <br><br>
                The compiler supports cross code generation.
                This means that you can produce code for a different platform other than the platform you are working on.
                Not only that, your compiler emulates the target platform at compile time.
                This means that all of them, including platform-dependent types, will be based on the target platform, even for constant evaluation.
                <br><br>
                <li>Zero runtime cost generics</li>
                <li>Evaluate constants at compile-time</li>
                <li>Match generics at compile-time</li>
                <li>Imitate target platform at compile-time</li>
                <li>Generate object code for another platform</li>
                <li>Compile-time reflection</li>
              </div>
            <pre id="comptime-code" class="code text-base"></pre>
          </div>
        </div>
      </div>

      <div class="max-w-screen-lg mx-auto px-5 py-20 text-lg text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Managing Memory, Hands Free by Default</div>
            <div class="flex grid grid-cols-2 max-lg:grid-cols-1">
              <div class="mr-5 mb-5">
                Jule manages memory automatically at runtime.
                It uses reference counting by default.
                As a developer, you don't have to worry about memory leaks or not being able to predict memory management.
                Jule provides completely deterministic and automatic memory management.
                Just program freely.
                <br><br>
                Optionally, the standard library includes some implementations for managing memory.
                You can also access C/C++ memory management functions with Integrated Jule.
                <br><br>
                <li>Reference Counting by Default</li>
                <li>Supported by Standard Library</li>
              </div>
            <pre id="memory-code" class="code text-base"></pre>
          </div>
        </div>
      </div>

      <div class="max-w-screen-lg mx-auto px-5 py-20 text-lg text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Built-in Testing Support</div>
            <div class="flex grid grid-cols-2 max-lg:grid-cols-1">
              <div class="mr-5 mb-5">
                Jule provides built-in testing support.
                When compiled for testing, it performs a special compilation and test functions are run when the executable is executed.
                Test functions are ignored outside of test compilations.
                <br><br>
                Each testing function is powered and supported by tools provided by the standard library.
                At the same time, different libraries can be used in test functions.
                In this way, all kinds of algorithms can be programmed into test functions and additional tools can be developed.
                <br><br>
                <li>Empowered with Standard Library</li>
                <li>Ignored from Normal Compilations</li>
              </div>
            <pre id="test-code" class="code text-base"></pre>
          </div>
        </div>
      </div>

    </div>
    <div class="bg-[var(--bg-primary)] h-20 rounded-br-full" />
    <div class="bg-[var(--bg-primary)] h-20 rounded-br-full w-[50%]" />

    <div class="max-w-screen-lg mx-auto px-5 py-20">
      <div class="text-lg p-10 bg-[var(--bg-secondary)] bg-gradient-to-t from-slate-600 text-white rounded-3xl">
        <div class="font-semibold text-2xl">Open Source</div>
        Including important parts of Jule such as the reference compiler, standards library and API, is developed completely open source and free of charge, and its source code open at <a class="underline" href="https://github.com/julelang/jule">GitHub respository</a>, open to the contribution of the entire community.
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

    <div class="transition-all duration-200 bg-clip-text max-w-screen-lg mx-auto px-5 mb-20 bg-gradient-to-r from-blue-600 w-fit via-purple-500 to-orange-400 hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-orange-500">
      <a href="/future-of-jule" class="text-transparent hover:cursor-pointer text-center font-semibold text-4xl">Future of Jule</a>
    </div>

    <div class="bg-[steelblue] text-white">
      <div class="max-w-screen-lg mx-auto p-5">
        <div class="text-3xl text-center font-semibold">Get Started</div>
        <br>
        <div class="text-xl text-center">
          Download Jule's compiler and start to program.<br>
          The manual will help you find your way.
        </div>
        <br><br>
        <div class="flex justify-center">
          <router-link to="/downloads" class="select-none py-2 px-7 bg-[var(--color-secondary)] hover:bg-[goldenrod] duration-[0.3s] text-lg" style="border-top-left-radius: 6px; border-bottom-left-radius: 6px;">Download</router-link>
          <a href="https://manual.jule.dev" class="select-none py-2 px-7 bg-[lightseagreen] hover:bg-[darkturquoise] duration-[0.3s] text-lg" style="border-top-right-radius: 6px; border-bottom-right-radius: 6px;">Manual</a>
        </div>
      </div>
    </div>

    <div>
      <div class="max-w-screen-sm mx-auto p-5 mt-20 mb-10">
        <div class="text-3xl text-center font-semibold">Looking for Source Code?</div>
        <br>
        <div class="text-lg text-center">
          Jule is distributed as completely open source on GitHub under the terms of the BSD 3-Clause license.
          Contribute to source code or just give a star to support Jule.
        </div>
        <br><br>
        <div class="flex justify-center">
          <a href="https://github.com/julelang/jule" class="select-none py-2 px-7 text-white bg-[--color-primary] hover:bg-[--bg-primary] duration-[0.3s] text-lg rounded-lg">GitHub Repository</a>
        </div>
      </div>
    </div>

  </main>
</template>
