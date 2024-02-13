<template>
  <main class="max-w-screen-lg mx-auto px-5 py-20">
    <div class="text-4xl font-bold text-center">Contributing</div>
    <br><br>
    <div class="text-2xl font-semibold">Before the Start</div>
    <div class="underline">This guide is about contributing to JuleC.</div>
    <br>
    <div>All contributions to Jule, no matter how small or large, are welcome.</div>
    <div>From a simple typo correction to a contribution to the code, all contributions are welcome and appreciated.</div>
    <div>Before you start contributing, you should familiarize yourself with the following repository structure:</div>
    <div class="my-2 p-1.5 border border-l-4 rounded-md border-yellow-500 bg-yellow-100">Read our <router-link to="/code-of-conduct">Code of Conduct</router-link> and <a
        href="https://github.com/julelang/jule/security/policy" target="_blank">Security Policy</a> before doing anything.
    </div>
    <ul>
      <li>
        <a href="https://github.com/julelang/jule/blob/master/api" target="_blank" class="text-xl font-code">api/</a>
        <div>C++ API of JuleC.</div>
      </li>
      <li>
        <a href="https://github.com/julelang/jule/blob/master/docs" target="_blank" class="text-xl font-code">docs/</a>
        <div>Documentations.</div>
        <div>They are the documentation of JuleC (the Jule programming language, naturally).</div>
        <div>Since this section is completely devoted to the website, please do what you need to add by contributing
          to the <a href="https://github.com/julelang/website" target="_blank">website.</a></div>
      </li>
      <li>
        <a href="https://github.com/julelang/jule/blob/master/src/julec" target="_blank"
          class="text-xl font-code">src/julec/</a>
        <div>Source codes of JuleC.</div>
      </li>
      <li>
        <a href="https://github.com/julelang/jule/blob/master/std" target="_blank" class="text-xl font-code">std/</a>
        <div class="mb-2">Standard library.</div>

        <ul class="ml-8">
          <li>
            <a href="https://github.com/julelang/jule/blob/master/std/jule" target="_blank"
              class="text-xl font-code">jule/</a>
            <div class="mb-2">Compiler packages.</div>
            <ul class="ml-8">
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/ast" target="_blank"
                  class="text-xl font-code">ast/</a>
                <div>The AST objects and tree.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/build" target="_blank"
                  class="text-xl font-code">build/</a>
                <div>Constants, functions or etc. for build steps and platforms.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/cmd" target="_blank"
                  class="text-xl font-code">cmd/</a>
                <div>Main source files.</div>
                <div>The main source files of JuleC and other programs, if any, are located here.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/constant" target="_blank"
                  class="text-xl font-code">constants/</a>
                <div>Functionalities for constant eval.</div>
                <ul class="ml-8">
                  <li>
                    <a href="https://github.com/julelang/jule/blob/master/std/jule/constant/lit" target="_blank"
                      class="text-xl font-code">lit/</a>
                    <div>Functionalities for literal eval.</div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/lex" target="_blank"
                  class="text-xl font-code">lex/</a>
                <div>Lexer (lexical analysis).</div>
                <div>Segments Jule source code into tokens.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/parser" target="_blank"
                  class="text-xl font-code">parser/</a>
                <div>Parser.</div>
                <div>Makes syntax analysis, builds AST.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/sema" target="_blank"
                  class="text-xl font-code">sema/</a>
                <div>Semantic analysis.</div>
                <div>Makes type checking, object binding.</div>
                <div>Builds symbol table and IR tree.</div>
              </li>
              <li>
                <a href="https://github.com/julelang/jule/blob/master/std/jule/types" target="_blank"
                  class="text-xl font-code">types/</a>
                <div>Functionalities for static type system.</div>
                <div>Limit constants and type compatibility or etc.</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://github.com/julelang/jule/blob/master/tests" target="_blank" class="text-xl font-code">tests/</a>
        <div>Jule source codes for testing JuleC.</div>
      </li>
    </ul>
    <br>
    <div class="text-2xl font-semibold">Rules</div>
    <ul>
      <li>It is important that the code is written and properly formatted.</li>
      <li>Description lines should be legible and meaningful.</li>
      <li>The code must be properly documented.</li>
      <li>Commit messages should be understandable and expressive.</li>
    </ul>
    <br>
    <div class="text-2xl font-semibold">Get Fork</div>
    <div>Once you have your fork, you can work directly. But to make things easier, you can open a branch in your own name. After making the changes in the fork you want to work with, you can throw a pull request.</div>
    <ul class="ml-8">
      <li>Very large changes are difficult to control and understand. Therefore, avoid excessively large PR requests
        as much as possible.</li>
      <li>Try not to make multiple changes within a single PR, a PR request should only serve one change.</li>
    </ul>
    <br>
    <div class="text-2xl font-semibold">Send Pull Request</div>
    <div>After making the contribution you want to make, you have reached the stage of sending it as a PR request.</div>
    <div>Before send a PR:</div>
    <ul class="ml-8">
      <li>Be sure to document the necessary places in the code.</li>
      <li>Make sure the code is readable.</li>
    </ul>
    <div>There are some points to be considered for an understandable PR:</div>
    <ul class=" ml-8">
      <li>The PR title should be short and concise and give information about the PR.</li>
      <li>Changes should be noted in the PR statement, reviewers should understand the purpose of PR.</li>
      <li>If there are, possible errors and conflicts that may occur in the case of combining the PR should be
        mentioned.</li>
    </ul>
  </main>
</template>

<style scoped>
a {
  text-decoration: underline;
}

li > a {
  font-family: monospace;
}

ul {
  list-style: inside;
}
</style>