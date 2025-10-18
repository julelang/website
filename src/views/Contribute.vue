<template>
  <main class="max-w-(--breakpoint-lg) mx-auto px-5 py-30">
    <div class="text-4xl font-bold text-center">Contributing</div>
    <br /><br />
    <div>Thank you for considering contributing to the Jule project.</div>
    <div>
      There are many ways to contribute, and even the smallest contribution is
      appreciated.
    </div>
    <div class="my-2 p-1.5 border border-l-4 rounded-md border-yellow-500 bg-yellow-700">
      Read our <router-link to="/code-of-conduct">Code of Conduct</router-link> and
      <a href="https://github.com/julelang/jule/security/policy" target="_blank"
        >Security Policy</a
      >
      before doing anything.
    </div>
    <div><b>The most common ways to contribute are:</b></div>
    <ul>
      <li>Contribution to the Ecosystem and Community</li>
      <ul class="ml-8">
        <li>Open-source community projects</li>
        <li>Community documentation</li>
        <li>Ecosystem contributions</li>
      </ul>
    </ul>
    <ul>
      <li>Contribution to the Jule Project</li>
      <ul class="ml-8">
        <li>Give us a star on GitHub</li>
        <li>Proposals and issues</li>
        <li>Typos corrections</li>
        <li>Contributions to The Manual</li>
        <li>Codebase documentation contributions</li>
        <li>Standard library contributions</li>
        <li>Compiler contributions</li>
        <li>Contribution to official ecosystem tools</li>
      </ul>
    </ul>
    <br />
    <div class="text-2xl mb-2">Contribution to The Ecosystem and Community</div>
    <div>
      This title covers contributions made with projects and other things that are not
      directly part of the Jule project.
    </div>
    <br />
    <div>
      If your contribution is appropriate, it can be added to the
      <a href="https://github.com/julelang/awesome-jule" target="_blank">Awesome Jule</a>
      list upon your request. Simply open an `issue` in the repository, mention your
      project, and request its addition.
    </div>
    <div class="text-xl mt-6 mb-2">Open-Source Community Projects</div>
    <div>
      One of the most common and easiest ways to support is to develop open-source
      projects related to your field. Every project you develop with Jule contributes to
      the growth of the ecosystem.
    </div>
    <div class="text-xl mt-6 mb-2">Community Documentation</div>
    <div>
      Although the Jule project has an official handbook, documentation written by the
      community is also highly valued. Contributions such as a dedicated handbook for Jule
      or documentation for different languages are greatly appreciated.
    </div>
    <div class="text-xl mt-6 mb-2">Ecosystem Contributions</div>
    <div>
      Developing direct language ecosystem tools is something done by the community in
      many programming language ecosystems. Contributions such as developing alternatives
      to official ecosystem tools or developing tools that do not yet exist are highly
      valuable.
    </div>
    <div class="text-2xl mb-2 mt-6">Contribution to The Jule Project</div>
    <div>
      Ecosystem Contributions This section covers contributions to all official Jule
      project and its components. The main repository includes the official reference
      compiler, standard library, and API. There are also different official projects
      available under the GitHub organization besides this main repository. <br /><br />
      If you are considering contributing to the main repository, it is important to first
      become familiar with the working directories. The tree below briefly describes the
      structure of the project:
    </div>
    <ul>
      <li>
        <a
          href="https://github.com/julelang/jule/blob/master/api"
          target="_blank"
          class="text-lg font-code"
          >api/</a
        >
        <div>API of JuleC.</div>
        <div>
          Implemented in C++ and provides interoperability helpers for the Jule programs.
        </div>
      </li>
      <li>
        <a
          href="https://github.com/julelang/jule/blob/master/docs"
          target="_blank"
          class="text-lg font-code"
          >docs/</a
        >
        <div>Documentations.</div>
        <div>
          They are the documentation of JuleC (the Jule programming language, naturally).
        </div>
        <div>
          Since this section is completely devoted to the manual, please do what you need
          to add by contributing to the
          <a href="https://github.com/julelang/manual" target="_blank">manual.</a>
        </div>
      </li>
      <li>
        <a
          href="https://github.com/julelang/jule/blob/master/src/julec"
          target="_blank"
          class="text-lg font-code"
          >src/julec/</a
        >
        <div>Source codes of JuleC.</div>
        <div>The README.md includes developer reference documentations.</div>
      </li>
      <li>
        <a
          href="https://github.com/julelang/jule/blob/master/std"
          target="_blank"
          class="text-lg font-code"
          >std/</a
        >
        <div>Source code of the standard library.</div>

        <ul class="ml-8">
          <li>
            <a
              href="https://github.com/julelang/jule/blob/master/std/jule"
              target="_blank"
              class="text-lg font-code"
              >jule/</a
            >
            <div>Public packages of the compiler and tools.</div>
            <div>The README.md includes developer reference documentations.</div>
            <ul class="ml-8">
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/ast"
                  target="_blank"
                  class="text-lg font-code"
                  >ast/</a
                >
                <div>The AST objects and tree.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/build"
                  target="_blank"
                  class="text-lg font-code"
                  >build/</a
                >
                <div>Environment and elementary helpers for the compilation process.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/constant"
                  target="_blank"
                  class="text-lg font-code"
                  >constant/</a
                >
                <div>Elementary package to handle and eval constant expressions.</div>
                <ul class="ml-8">
                  <li>
                    <a
                      href="https://github.com/julelang/jule/blob/master/std/jule/constant/lit"
                      target="_blank"
                      class="text-lg font-code"
                      >lit/</a
                    >
                    <div>Literal handling such as rune or string literals.</div>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/directive"
                  target="_blank"
                  class="text-lg font-code"
                  >directive/</a
                >
                <div>Elementary package for directives.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/dist"
                  target="_blank"
                  class="text-lg font-code"
                  >dist/</a
                >
                <div>Elementary package for targets.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/importer"
                  target="_blank"
                  class="text-lg font-code"
                  >importer/</a
                >
                <div>Default Jule importer.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/log"
                  target="_blank"
                  class="text-lg font-code"
                  >log/</a
                >
                <div>Elementary package for logs.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/mod"
                  target="_blank"
                  class="text-lg font-code"
                  >mod/</a
                >
                <div>Module file parsing and module handling.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/parser"
                  target="_blank"
                  class="text-lg font-code"
                  >parser/</a
                >
                <div>Parser.</div>
                <div>Makes syntax analysis, builds AST.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/sema"
                  target="_blank"
                  class="text-lg font-code"
                  >sema/</a
                >
                <div>
                  Semantic analyzer and HIR (High-Level Intermediate Representation)
                  components.
                </div>
                <div>Makes type checking, object binding.</div>
                <div>Builds symbol table and HIR.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/token"
                  target="_blank"
                  class="text-lg font-code"
                  >token/</a
                >
                <div>Lexer (lexical analysis) and token helpers.</div>
                <div>Segments Jule source code into tokens.</div>
              </li>
              <li>
                <a
                  href="https://github.com/julelang/jule/blob/master/std/jule/types"
                  target="_blank"
                  class="text-lg font-code"
                  >types/</a
                >
                <div>Elementary package for types.</div>
                <div>Functionalities for static type system.</div>
                <div>Limit constants and type compatibility or etc.</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="https://github.com/julelang/jule/blob/master/tests"
          target="_blank"
          class="text-lg font-code"
          >tests/</a
        >
        <div>Jule source codes to test JuleC.</div>
      </li>
    </ul>
    <br />
    <div class="text-xl mb-2">Proposals and Issues</div>
    <div>
      The best contributions to the Jule project come through various proposal and issue
      reports. Issue reports make it easier to detect problems and speed up their
      resolution, which is why reporting them is very important.
      <br /><br />
      Proposals are often very effective in recognizing what the community needs. When you
      submit a proposal, you also start a discussion, and if it is received favorably, the
      developer team or volunteer community members begin working on the implementation.
    </div>
    <div class="text-xl mt-6 mb-2">Contributions to The Manual</div>
    <div>
      The manual is a detailed and educational official content about the Jule programming
      language. It is the primary and recommended source for learning the language in
      depth. Contributions to the manual take place through its dedicated repository.
    </div>
    <div class="text-xl mt-6 mb-2">Codebase documentation contributions</div>
    <div>
      The codebase is documented using two separate methods: code-level comments and
      separate documentation. These two documentations are interwoven. The primary
      documentation is done within the codebase using comment lines. Separate
      documentation is usually used for more detailed or repetitive documentation needs.
      Explanations in the separate documentation are referenced in the codebase.
      <br /><br />
      The project has two main separate documentations. These are for the public compiler
      packages located within the standard library and for the official reference
      compiler.
    </div>
    <div class="text-xl mt-6 mb-2">Standard library contributions</div>
    <div>
      Standard library contributions mostly involve changes to the codebase and
      documentation in existing packages. Contributions to existing packages are reviewed
      and concluded faster because the evaluation process is based on one fundamental
      question: are these changes appropriate and necessary for this package?
      <br /><br />
      If you are adding a new package, its evaluation may take longer. If you are planning
      to add a new package, it is recommended that you first open a proposal issue for it.
      This topic is discussed under the issue, and if accepted, you can work on the PR.
    </div>
    <div class="text-xl mt-6 mb-2">Compiler contributions</div>
    <div>
      Compiler contributions are contributions made to the official reference compiler.
      These contributions can directly cover the compiler's internal (i.e., not publicly
      shared) code or the public packages included in the standard library.
      <br /><br />
      There is separate documentation for both parts. The tree showing the project
      structure indicates where this documentation is located.
      <br /><br />
      If your contribution introduces changes to the documentation or requires
      documentation, please ensure that you do them correctly, otherwise, it is quite
      likely that your PR process will be extended, as you will be expected to make these
      changes.
      <div class="text-lg mt-6 mb-2">Developer Environment and Scripts</div>
      <div>
        When developing the compiler, you typically need to recompile and test a temporary
        version of your compiler to experience the changes. There are some ready-made
        developer scripts to facilitate this. Your working directory should be
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          src/julec
        </div>
        . At this point, you can use two different types of scripts:
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          build
        </div>
        and
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          brun
        </div>
        scripts. <br /><br />
        The `build` scripts only compile a developer version of the compiler. The
        developer version is obtained with a quick compilation at the minimum optimization
        level compared to a production build. It is created as
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          julec_dev
        </div>
        in the
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          bin
        </div>
        directory, where the compiler executable is located. At this point,
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          julec_dev
        </div>
        is your developer build compilation. You use this to test. <br /><br />
        The
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          brun
        </div>
        scripts work exactly like the
        <div
          class="inline-block pl-1 pr-1 w-max border rounded-md border-gray-500 bg-gray-700"
        >
          build
        </div>
        scripts. Additionally, they take arguments and pass them directly to the generated
        developer version of the compiler, allowing you to test immediately with a quick
        command after compiling.
      </div>
    </div>
    <div class="text-xl mt-6 mb-2">Contribution to Official Ecosystem Tools</div>
    <div>
      Official ecosystem tools are officially supported and developed tools included in
      the Jule project. The most obvious examples of these are the julefmt and juledoc
      tools. Contributions to these tools are also made through their specific
      repositories.
    </div>
    <div class="text-2xl mt-6 mb-2">Contribution Process</div>
    <div>
      This section covers contributions made to the official repositories belonging to the
      Jule project. If you are making a community contribution, you will mostly follow
      your own process.
    </div>
    <div class="text-xl mt-6 mb-2">How to Read and Write Developer Documentation</div>
    <div>
      Before contributing, if you are making a change to the codebase, it is essential to
      read the developer documentation. It is also very important to know how to read them
      and how to write them when necessary.
      <br /><br />
      Developer documentation contains information that is very important, especially for
      beginners. Any change you make in the codebase without reading them may lead to
      unexpected things. If you are only improving the documentation, you need to know how
      the documented parts work. Therefore, please read the necessary documentation first.
      <br /><br />
      Most of the documentation is done within the codebase, but in some cases, separate
      documentations are used. These separate documentations are written with a specific
      numbering and are referenced where needed within the codebase.
      <br /><br />
      For example, a reference in the codebase would look like this:
      <div
        class="my-2 p-1.5 w-max border border-l-4 rounded-md border-gray-500 bg-gray-700"
      >
        // See developer reference (4).
      </div>
      This indicates that you should look at the separate developer documentation numbered
      4 and its sub-documentations, if any.
      <br /><br />
      Another example:
      <div
        class="my-2 p-1.5 w-max border border-l-4 rounded-md border-gray-500 bg-gray-700"
      >
        // See developer reference (3.8).
      </div>
      This indicates that you should look at the sub-documentation numbered 8 of the
      separate developer documentation numbered 3.
      <br /><br />
      Sub-documentations mostly address different topics, and it is usually necessary to
      read the main documentation as well. Therefore, references are mostly made to the
      main documentation number.
    </div>
    <div class="text-xl mt-6 mb-2">PR Process</div>
    <div>
      If you are ready, you can work on the repository you plan to contribute to and open
      a PR to submit your contribution to the development team.
    </div>
    <div class="text-lg mt-6 mb-2">Setting up your Workspace</div>
    <div>
      First, you should create a fork for the relevant repository. This gives you a copy
      to work on. Then, you need to create a new branch on your fork. This branch should
      be created with the change you are making and your username.
      <br /><br />
      Like the examples below:
      <div
        class="my-2 p-1.5 w-max border border-l-4 rounded-md border-gray-500 bg-gray-700"
      >
        mertcandav/update-memory-model
        <br />
        adamperkowski/fix-typo
      </div>
      You should make your changes on this branch and not go outside the scope. Try to
      work on only one topic at a time.
      <div class="mt-6 mb-2"><b>Maintainers Special</b></div>
      <div>
        If you are a maintainer, you can open a branch directly on the relevant
        repository. Maintainers will not delete the branch you created after the PR is
        finalized; if it is not needed, you must delete it yourself. If you think it
        should remain, explain this in the relevant issue or PR text.
        <br /><br />
        If you do not delete it and it has not been decided that it is necessary, the
        relevant branch may be deleted later at any time by a maintainer.
      </div>
    </div>
    <div class="text-lg mt-6 mb-2">Commit Messages</div>
    <div>
      Your commit messages should be descriptive and clean. It is recommended to follow
      the existing standard.
      <br /><br />
      If you are contributing to the main repository, you should label your changes
      according to their scope:
      <ul>
        <li class="ml-6">
          If you are working on the compiler's public packages or the runtime package, use
          the package name as the label.
        </li>
        <li class="ml-6">
          If you are working on a standard library package other than those, use the
          package path directly.
        </li>
        <li class="ml-6">
          If you are working on the internal compiler codebase, use compiler.
        </li>
        <li class="ml-6">
          If you are significantly changing multiple public and internal compiler
          packages, use compiler.
        </li>
        <li class="ml-6">
          If you are contributing to the std/jule package, use the package path.
        </li>
        <li class="ml-6">
          If you are making a change that concerns multiple packages, specify all packages
          with a comma and the package path.
        </li>
      </ul>
      <div class="mt-6">
        Here are a few examples:
        <div
          class="my-2 p-1.5 w-max border border-l-4 rounded-md border-gray-500 bg-gray-700"
        >
          ast: rename Goto.Name as Goto.Label
          <br />
          sema: improve missing return statement analysis for infinite iterations
          <br />
          compiler: improve deadcode analysis for generic functions
          <br />
          runtime: optimize runtime map hasher
          <br />
          std/jule: update version
          <br />
          std/math/big: add Int
          <br />
          std/strings, std/bytes: add Contains
        </div>
      </div>
    </div>
    <div class="text-lg mt-6 mb-2">Review Process and Finalization</div>
    <div>
      Finally, when you are ready, open a PR and wait for it to be reviewed. Maintainers
      will review your PR and request changes if necessary. Very large PRs have a high
      probability of being rejected, so if you have to make a very large PR, discussing it
      first with an issue is a good idea.
      <br /><br />
      If there are related issues, tag them in the PR text. Clearly explain what you
      changed and exactly what you did in your PR text.
      <br /><br />
      Ultimately, your PR will either be accepted or definitively rejected. If you opened
      a PR based on an already discussed issue, it is usually not rejected; if necessary
      changes are requested, they are made, and then it is accepted.
    </div>
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
