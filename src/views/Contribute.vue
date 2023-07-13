<script>
import { RouterLink } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
    <Navbar theme="dark" />
    <main class="bg-jule-darkest text-white pb-20 sm:px-24 max-sm:px-10">
        <h1 class="text-4xl font-bold text-center mb-10">Contributing</h1>
        <h3 class="text-2xl font-bold">Before the Start</h3>
        <br>
        <p class="underline">This guide is about contributing to JuleC.</p>
        <br>
        <p>All contributions to Jule, no matter how small or large, are welcome.</p>
        <p>From a simple typo correction to a contribution to the code, all contributions are welcome and appreciated.</p>
        <p>Before you start contributing, you should familiarize yourself with the following repository structure;</p>
        <div class="warn">Read our <router-link to="/code-of-conduct">Code of Conduct</router-link> and <a
                href="https://github.com/julelang/jule/security/policy" target="_blank">Security Policy</a> before doing anything.</div>
        <ul class="list-disc list-inside space-y-2">
            <li>
                <a href="https://github.com/julelang/jule/blob/master/api" target="_blank" class="text-xl font-code">api/</a>
                <p>C++ API of JuleC.</p>
            </li>
            <li>
                <a href="https://github.com/julelang/jule/blob/master/docs" target="_blank" class="text-xl font-code">docs/</a>
                <p>Documentations.</p>
                <p>They are the documentation of JuleC (the Jule programming language, naturally).</p>
                <p>Since this section is completely devoted to the website, please do what you need to add by contributing
                    to the <a href="https://github.com/julelang/website" target="_blank">website.</a></p>
            </li>
            <li>
                <a href="https://github.com/julelang/jule/blob/master/src/julec" target="_blank" class="text-xl font-code">src/julec/</a>
                <p>Source codes of JuleC.</p>
            </li>
            <li>
                <a href="https://github.com/julelang/jule/blob/master/std" target="_blank" class="text-xl font-code">std/</a>
                <p class="mb-2"> Standard library.</p>

                <ul class="list-disc list-inside space-y-2 ml-8">
                    <li>
                        <a href="https://github.com/julelang/jule/blob/master/std/jule" target="_blank" class="text-xl font-code">jule/</a>
                        <p class="mb-2">Compiler packages.</p>
                        <ul class="list-disc list-inside space-y-2 ml-8">
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/ast" target="_blank" class="text-xl font-code">ast/</a>
                                <p>The AST objects and tree.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/build" target="_blank" class="text-xl font-code">build/</a>
                                <p>Constants, functions or etc. for build steps and platforms.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/cmd" target="_blank" class="text-xl font-code">cmd/</a>
                                <p>Main source files.</p>
                                <p>The main source files of JuleC and other programs, if any, are located here.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/constant" target="_blank" class="text-xl font-code">constants/</a>
                                <p class="mb-2">Functionalities for constant eval.</p>
                                <ul class="list-disc list-inside space-y-2 ml-8">
                                    <li>
                                        <a href="https://github.com/julelang/jule/blob/master/std/jule/constant/lit" target="_blank" class="text-xl font-code">lit/</a>
                                        <p>Functionalities for literal eval.</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/lex" target="_blank" class="text-xl font-code">lex/</a>
                                <p>Lexer (lexical analysis).</p>
                                <p>Segments Jule source code into tokens.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/parser" target="_blank" class="text-xl font-code">parser/</a>
                                <p>Parser.</p>
                                <p>Makes syntax analysis, builds AST.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/sema" target="_blank" class="text-xl font-code">sema/</a>
                                <p>Semantic analysis.</p>
                                <p>Makes type checking, object binding.</p>
                                <p>Builds symbol table and IR tree.</p>
                            </li>
                            <li>
                                <a href="https://github.com/julelang/jule/blob/master/std/jule/types" target="_blank" class="text-xl font-code">types/</a>
                                <p>Functionalities for static type system.</p>
                                <p>Limit constants and type compatibility or etc.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://github.com/julelang/jule/blob/master/tests" target="_blank" class="text-xl font-code">tests/</a>
                <p>Jule source codes for testing JuleC.</p>
            </li>
        </ul>
        <br><br>
        <h3 class="text-2xl font-bold">Rules</h3>
        <br>
        <ul class="list-disc list-inside space-y-2 ml-8">
            <li>It is important that the code is written and properly formatted.</li>
            <li>Description lines should be legible and meaningful.</li>
            <li>The code must be properly documented.</li>
            <li>Commit messages should be understandable and expressive.</li>
        </ul>
        <br><br>
        <h3 class="text-2xl font-bold">Get Fork</h3>
        <br>
        <a href="https://github.com/julelang/jule/fork" target="_blank" class="btn-jule">Fork</a>
        <br><br><br>
        <p>Once you have your fork, you can work directly. But to make things easier, you can open a branch in your own
            name. After making the changes in the fork you want to work with, you can throw a pull request.</p>
        <br>
        <ul class="list-disc list-inside space-y-2 ml-8">
            <li>Very large changes are difficult to control and understand. Therefore, avoid excessively large PR requests
                as much as possible.</li>
            <li>Try not to make multiple changes within a single PR, a PR request should only serve one change.</li>
        </ul>
        <br><br>
        <h3 class="text-2xl font-bold">Send Pull Request</h3>
        <br>
        <p>After making the contribution you want to make, you have reached the stage of sending it as a PR request.</p>
        <br>
        <p>Before send a PR:</p>
        <br>
        <ul class="list-disc list-inside space-y-2 ml-8">
            <li>Be sure to document the necessary places in the code.</li>
            <li>Make sure the code is readable.</li>
        </ul>
        <br>
        <p>There are some points to be considered for an understandable PR:</p>
        <br>
        <ul class="list-disc list-inside space-y-2 ml-8">
            <li>The PR title should be short and concise and give information about the PR.</li>
            <li>Changes should be noted in the PR statement, reviewers should understand the purpose of PR.</li>
            <li>If there are, possible errors and conflicts that may occur in the case of combining the PR should be
                mentioned.</li>
        </ul>
    </main>
    <Footer />
</template>

<style scoped>
a {
    color: var(--jule);
    transition: 0.3s;
}

a:hover {
    color: var(--jule-light);
}
</style>