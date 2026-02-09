<script>
import { RouterLink } from "vue-router";
import Code from "../components/CodeBlock.vue";
import JuleLogo from "../components/JuleLogo.vue";
import hljs from "highlight.js";
import jule from "../jule";

hljs.registerLanguage("jule", jule.jule);

export default {
  components: {
    Code,
    JuleLogo,
  },
  async mounted() {
    document.getElementById("responsive-mutability-1").innerHTML = hljs.highlight(
      `struct Foo {
    buf: []byte
}

impl Foo {
    fn Buffer(mut~ self): (mut~ []byte) {
        ret self.buf
    }
}`,
      { language: "jule" }
    ).value;

    document.getElementById("responsive-mutability-2").innerHTML = hljs.highlight(
      `let a = foo.Buffer()
let mut b = foo.Buffer()`,
      { language: "jule" }
    ).value;
  },
};
</script>

<template>
  <main class="max-w-(--breakpoint-lg) mx-auto px-5 py-30">
    <center>
      <JuleLogo class="text-[gainsboro] h-52 mb-10"></JuleLogo>
      <div class="mx-auto mb-52 px-5 text-8xl max-sm:text-6xl max-md:text-7xl font-bold">
        Future of Jule
      </div>
    </center>
    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Introduction</div>
      Jule is in beta versions, changing and evolving rapidly. Our main priority right now
      is for Jule to become more stable and have a robust standard library. To make it
      easier for the community and official developers to develop any tools for Jule, a
      significant portion of Jule's official compiler is included in the standard library.
      The standard library has important stages such as lexer, parser, and semantic
      analyzer, and is suitable for use in tool development.
      <br /><br />
      The syntax and language design of the Jule programming language have emerged and are
      not expected to undergo major changes. Expecting Jule developers not to make massive
      updates to their old code between releases. However, no commitment for that.
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Stability</div>
      Since Jule is still in beta, there is no stability commitment. Each new version may
      break the previous code and incompatibilities may occur. However, efforts are made
      to ensure that these are as few as possible. Thus, the aim is to keep the need for
      beta users to review their code for compatibility between versions to a minimum.
      <br /><br />
      Once Jule reaches a stable release, these are intended to be guaranteed from the
      first stable release; Code between versions is guaranteed to be compatible. In other
      words, a release cannot break the code written in previous versions. It has the same
      unbreakability guarantee as the standard library compiler. If existing packages are
      redesigned, the same public functions should be provided as much as possible, and
      the underlying implicit implementation should be changed. If this is not possible,
      versions such as V2 should be released.
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Compile Time</div>
      Compile-time is important to Jule. Built-in facilities should be provided to provide
      developers with many opportunities at compile time. These opportunities should be at
      a level that allows many gains, especially performance, when possible.
      <br /><br />
      It has been decided that the comptime functions provided by Jule must comply with
      some rules:
      <div class="mt-4 ml-4">
        <li>Avoid adding new syntax/keywords to the language.</li>
        <li>
          Writing/reading comptime code should provide a similar experience as plain Jule
          code as possible.
        </li>
        <li>
          Supported by a sufficiently distinguishable semantics, and does not compromise
          the clarity of the code.
        </li>
        <li>The effort required to distinguish comptime code should be minimal.</li>
      </div>
      <br />
      It has been decided that the comptime functions implemented within the scope of
      these rules will be implemented within existing syntax structures in minimal,
      easy-to-understand semantic ways and that the functionalities will be largely
      provided by the standard library. This standard library is available as the
      <b><u>std/comptime</u></b
      >. <br /><br />
      Jule actively provides comptime and, in some cases, uses it as one of the main
      design elements. For example, in the <b><u>std/encoding/json</u></b> standard
      library package, it provides a JSON encoding/decoding algorithm designed entirely
      based on comptime. <br /><br />
      <b>List of Planned Features</b>
      <div class="mt-4 ml-4">
        Legend: [✔] implemented, [✕] Not-In-WIP
        <br /><br />
        <li><b>Imitation of The Target Platform at Comptime</b> [✔]</li>
        <li><b>Evaluation of Constant Expressions at Comptime</b> [✔]</li>
        <li><b>Generic Type Matching at Comptime</b> [✔]</li>
        <li><b>Conditional Matching at Comptime</b> [✔]</li>
        <li><b>Comptime Iterations</b> [✔]</li>
        <li><b>Comptime Reflection</b> [✔]</li>
        <li><b>Comptime Evaluated Functions</b> [✕]</li>
      </div>
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Memory Management</div>
      <div class="mb-1 font-bold">Reference Counting</div>
      Jule currently uses an RC (reference counting) based memory approach by default.
      There is no other option, but RC can be turned off as an option. But this causes
      memory leaks, especially in code that uses standard library packages, because the
      standard library relies heavily on GC.
      <br /><br />
      The current RC implementation includes some atomicity, but in most cases, no serious
      impact on program performance is expected. To make this better, it is planned to
      remove atomics but introduce non-annoying measures to prevent developers from making
      the least mistakes in this regard. In addition, if it is possible to understand the
      scopes of types that exhibit RC at compile time, there is an additional idea of
      compiler optimization that would eliminate the RC overhead.
      <div class="mt-7 mb-1 font-bold">Memory Allocations</div>
      Currently, memory allocations are like simple malloc and free calls in C. In the
      future, it is planned to improve these with special algorithms that are more
      performance-oriented and optimized for Jule. There are already different libraries
      that do this for different languages. To give an example, libraries such as TCMalloc
      for C/C++ can be given as an example.
      <br /><br />
      Of course, according to Jule's development principles, we will not directly use any
      compatible libraries for the relevant back-end. Even if inspiration is taken, the
      expectation is to implement allocation management optimized for Jule (and written in
      Jule, probably included in the runtime library).
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Concurrency</div>
      With Jule 0.2.0, coroutines were introduced. They operate in a stackless manner and
      are managed by the runtime. The Jule runtime ships with an internal async runtime
      and executes coroutines using a cooperative scheduler.
      <br /><br />
      Previously, operating system threads were the fundamental unit of concurrency. They
      are now used internally by the scheduler to execute coroutines concurrently. No
      public OS thread API is exposed to developers.
      <br /><br />
      From this point on, our primary goal is to further optimize the scheduler. We aim to
      improve stability and make using coroutines as easy as possible.
      <br /><br />
      <b>List of Planned Features</b>
      <div class="mt-4 ml-4">
        Legend: [✔] implemented, [✕] Not-In-WIP
        <br /><br />
        <li><b>Coroutines</b> [✔]</li>
        <li><b>Native Threads</b> [✔] (not directly, managed by the runtime)</li>
        <li><b>Channels</b> (Like Go) [✔]</li>
        <li><b>WaitGroup</b> (Like Go) [✔]</li>
        <li><b>Atomics</b> [✔]</li>
        <li><b>Mutex</b> [✔]</li>
        <li><b>Cond</b> (condition variable) [✔]</li>
        <li><b>RWMutex</b> [✔]</li>
      </div>
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Archs & Platforms</div>
      Jule currently supports some popular architectures and platforms. We are working for
      more support in the future and to improve support for already supported
      architectures and platforms.
      <br /><br />
      <b>List of Planned Architectures</b>
      <div class="mt-4 ml-4">
        Legend: [✔] implemented, [✕] Not-In-WIP
        <br /><br />
        <li><b>AMD64</b> (aka x86_64) [✔]</li>
        <li><b>intel 386</b> (aka i386, x86) [✔]</li>
        <li><b>ARM64</b> (aka AArch64) [✔]</li>
        <li><b>ARM</b> [✕]</li>
        <li><b>PPC64</b> [✕]</li>
        <li><b>RISCV64</b> [✕]</li>
      </div>
      <br />
      <b>List of Planned Operating Systems</b>
      <div class="mt-4 ml-4">
        Legend: [✔] implemented, [✕] Not-In-WIP
        <br /><br />
        <li><b>Windows</b> [✔]</li>
        <li><b>Linux</b> [✔]</li>
        <li><b>Darwin</b> [✔]</li>
        <li><b>Solaris</b> [✕]</li>
        <li><b>FreeBSD</b> [✕]</li>
        <li><b>NetBSD</b> [✕]</li>
        <li><b>OpenBSD</b> [✕]</li>
        <li><b>DragonFlyBSD</b> [✕]</li>
      </div>
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Packages</div>
      There is also the idea of adding a package manager that ships with the official
      compiler at some stage. Jule's modern understanding of language and convenience
      suggests that there should be a package manager that comes with the compiler. This
      package manager will provide management of non-standard library packages developed
      and published by the community.
      <br /><br />
      Packages are important structures for Jule because they help developers organize
      their code, manage dependencies, and create libraries. In the current
      implementation, there are two types of packages available to developers: packages
      from the standard library and packages developed by Jule developers.
      <br /><br />
      Standard packages are built into the compiler and are official packages. Developers
      can easily import standard packages in any Jule source code.
      <br /><br />
      But 3rd party packages require some effort. Modules are required to develop and use
      subpackages. Modules help better organize developed packages. To use 3rd party
      packages, developers must create modules and place the package source code in an
      appropriate directory in their project. Although this is a currently working
      implementation, it has some difficulties, such as dependency management.
      <br /><br />
      To avoid this, we aim to develop an official package manager, either included with
      the compiler or as a separate tool. This package manager should help developers by
      making it easier to obtain and manage packages. Although it is not a clearly planned
      approach, the package manager should avoid bloating the code base by adding direct
      dependencies to projects unless there are specific dependencies, and should position
      the packages in a general area, such as the standard library, where the compiler can
      access them, thus making importing easier.
      <br /><br />
      Some issues are unclear, as issues such as how to distinguish packages from each
      other have not yet been discussed. Therefore, it is not possible to say anything
      about how the packages will be downloaded or whether there will be a platform site.
      <br /><br />
      <b>List of Planned Design Choices</b>
      <div class="mt-4 ml-4">
        <li>A package manager comes integrated with the compiler.</li>
        <li>
          Unless stated otherwise, dependencies are downloaded in a public directory and
          made available from there. Dependencies for each project should not be
          downloaded in the project directory.
        </li>
        <li>
          Packages that are not in the public directory should be kept under the
          <b>vendor</b> directory for each project.
        </li>
      </div>
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Tools & Utilities</div>
      Once Jule is mature enough and relatively stable, we want to provide some tools to
      developers. It is planned to develop these tools independently of the compiler. So
      they will not be distributed internally to the compiler.
      <br /><br />
      Since developing tools for Jule is relatively easy, thanks to compiler packages in
      the standard library, we think the community can also develop various tools and
      plugins for Jule and expand the ecosystem. To achieve this, we are trying to make
      the compiler packages in the standard library as easy to use as possible.
      <br /><br />
      <b>List of Planned Tools</b>
      <div class="mt-4 ml-4">
        Legend: [✔] implemented, [✕] Not-In-WIP
        <br /><br />
        <li><b>julefmt</b> [✔]: Jule source code formatter</li>
        <li>
          <b>juledoc</b> [✔]: documentation generator from source code and comment lines
        </li>
        <li><b>jls</b> [✕]: language server implementation for the Jule</li>
        <li>Deadcode elimination tool [✕]</li>
        <li>Cyclomatic complexity calculator tool [✕]</li>
      </div>
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">Compilation Process</div>
      Jule currently compiles and analyzes the source code from scratch every time.
      Although it is optimized to do this fairly quickly, compiling the entire code base
      from scratch every time can be tiring.
      <br /><br />
      There is a built-in optimization idea to speed up the compilation process. This idea
      is based on avoiding recompiling files that have already been compiled, so
      incremental compilation. By compiling only modified packages, the compiler will skip
      packages that have already been compiled and have not been modified, which can
      significantly increase compilation time.
      <br /><br />
      While this feature will one day be tried and tested, there is no prediction as to
      when. The main priority is to develop the compiler and improve stability without
      increasing Jule's compilation time as much as possible.
    </div>

    <div class="text-xl mb-14">
      <div class="text-4xl mb-4 font-semibold">List of Planned Changes</div>
      Here is a list of some ideas that have not been explained in detail, but are in the
      plans. The changes in this list include major changes such as syntax, semantics, and
      the standard library. These plans are not strictly accepted and exist only as ideas;
      they may be canceled or changed in the future for some reasons. The items in the
      list are not ordered according to any criteria.
      <div class="mt-4 ml-4">
        <li>Conditional Compiler Directives</li>
        <li>Unions</li>
        <li>Extension Methods</li>
        <li>Default Implemented Methods for Traits</li>
        <li>Generic Traits</li>
        <li>Generic Methods for Traits</li>
        <li>Generic Strict Type Aliases</li>
        <li>Inheritance Support for Structures</li>
        <li>
          The "Self" Named Type Alias for Owner Structure Instance Available in Methods
        </li>
        <li>Pattern Support to Select Executed Tests for Test Compilations</li>
        <li>Test package and sub-packages via single test command</li>
        <li>Stdlib package to encode/decode XML data</li>
        <li>Stdlib package for region-based memory management</li>
        <li>Stdlib package for regular expressions</li>
        <li>Stdlib package that provides functionality for SQL databases</li>
        <li>Stdlib package that provides Jule-special encoding/decoding functionality</li>
        <li>std/time: add StopWatch</li>
        <li>std/net: add HTTP support</li>
        <li>std/net: add SMTP support</li>
        <li>std/net: add gRPC support</li>
        <li>std/math/big: arbitrary-precision floating-point support</li>
        <li>add stacktrace support</li>
        <li>use common stack-size for all platforms</li>
        <li>
          support for linking dynamic libraries (like Windows DLL support) on UNIX-like
          systems
        </li>
        <li>Add verbose mode to the compiler</li>
      </div>
    </div>

    <div class="text-xl mb-14 pt-6 border-t-2 border-[var(--color-primary)]">
      <div class="text-4xl mb-4 font-semibold">Experimental & Theory</div>
      This section contains experimental ideas, designs, and theories. Whether they will
      be implemented is uncertain and experimental, it needs to be well designed,
      implemented, and tested before implementation.

      <div class="text-xl mt-8 mb-14">
        <div class="text-3xl mb-4 font-semibold">Responsive Mutability</div>
        <b>Status: </b> In theory, not in WIP. <br /><br />
        Jule adopts immutability by default and allows conscious mutability. There is some
        intuitiveness in the current design. For example, if a structure literal is
        created to be assigned to an immutable variable, your compiler will not complain
        about the mutability risk regarding immutable variables assigned to structure
        fields. However, if it were to be assigned to a mutable variable, your compiler
        would not be happy with it.
        <br /><br />
        This experimental design focuses on an approach that takes this intuition further.
        The main design focus is on structure methods. In the current implementation, a
        method that returns a value must return a mutable value. If the returned value is
        a structure field, the self variable used must also be mutable. This may lead to
        the need for an immutable variable to be mutable because of a method that only
        returns a value.
        <br /><br />
        To prevent this, the design addresses adding the necessary responsiveness to the
        methods as elegantly as possible, and designs syntax/semantic improvement. After
        implementing this design, when a structure method returns a value to be used in an
        immutable variable, it should be able to return even fields with a mutable type.
        <br /><br />
        <b>Example Implementation</b>
        <br /><br />
        <pre id="responsive-mutability-1" class="code text-base code-region mb-5"></pre>
        In the code above, the structure <b>Foo</b> is defined and it has a field of type
        slice, which is a mutable type. It has a <b>Buffer</b> method that returns this
        field. In the example above, the <b>~</b> token is used after the
        <b>mut</b> keyword to emphasize that it is within the scope of responsive
        mutability. <br /><br />
        According to the theoretical design, when the <b>Buffer</b> method is used, the
        compiler should be able to intuitively understand whether there is a mutability
        problem. If the return value is assigned to a mutable memory area and the receiver
        is not mutable, the compiler should log an error. However, if the receiver is not
        mutable and the return value is not assigned to a mutable memory area, the
        compiler should allow this. <br /><br />
        For example:
        <br /><br />
        <pre id="responsive-mutability-2" class="code text-base code-region mb-5"></pre>
        For the example code above, let's assume that there is an immutable variable
        <b>foo</b>. This variable is an instance of <b>Foo</b>. The variable
        <b>a</b> defined in the code is immutable, the variable <b>b</b> is mutable.
        According to theory, the compiler should cause problems for <b>b</b> because the
        returned value is of mutable type and <b>b</b> can change, which breaks the
        immutability of the variable <b>foo</b>, but since variable <b>a</b> does not pose
        a problem, the compiler should not complain about variable <b>a</b>. <br /><br />
        <b>Rules of Responsive Mutability</b>
        <div class="mt-4 ml-4">
          <li>
            Responsive mutability only applies to methods with receivers; definitions
            without risky dependencies such as static methods, cannot be included in this
            scope.
          </li>
          <li>
            Responsive mutability can only be applied to receiver parameters and not to
            any other parameters.
          </li>
          <li>
            Methods defined within the scope of responsive mutability are immutable
            methods by default. That is, they cannot contain algorithms that will make
            changes to them because of immutable receiver, except for Interior Mutability.
          </li>
          <li>
            Responsive mutability only applies to return values. It should be allowed to
            return even if return values pose a risk of mutability. Risky situations
            should be checked at points where the return value is used, such as
            assignments. Thus, responsiveness will be gained.
          </li>
        </div>
        <br />
        <b>Challenges of Responsive Mutability</b>
        <br /><br />
        Implementing Responsive Mutability can provide many advantages. One of these is
        that it will enable developers to write more flexible code and maintain
        immutability more easily. However, implementation has some difficulties, and these
        gains must be achieved without significantly increasing compilation time.
        <br /><br />
        Here are some cases that can significantly affect compilation time:
        <div class="mt-4 ml-4">
          <li>
            If the return parameters have identifiers, they should be allowed to be
            assigned, but no other mutable operations should be allowed.
          </li>
          <li>
            If the return parameters have identifiers, the assignments must be followed to
            detect which ones should be responsive. Treating this as a direct analysis can
            be quite costly. For this reason, it is debatable that every responsive return
            expression should be marked with `mut~`. This can greatly ease the analysis
            burden.
          </li>
          <li>
            For returns statements, the compiler must perform additional analysis to
            understand which returned values are risky and which should be responsive.
          </li>
        </div>
        <br />
        Some restrictions could be introduced to solve these problems, but these
        restrictions would likely require sacrificing some capabilities of the language,
        such as return parameters with identifiers. To make the analysis faster and to
        ease the burden on the compiler, it is necessary to reduce and alleviate the
        conditions that need to be checked.
        <br /><br />
        <b>Pros of Responsive Mutability</b>
        <div class="mt-4 ml-4">
          <li>Structures will be able to return their fields more flexibly.</li>
          <li>
            It allows internal mutable data of structures to be shared safely from a
            single point.
          </li>
          <li>
            When developers work with mutable data for some immutable operations, they
            will not have to declare their methods or variables as mutable, even if they
            do not need to.
          </li>
        </div>
        <br />
        <b>Cons of Responsive Mutability</b>
        <div class="mt-4 ml-4">
          <li>It is not clear whether developers need such responsiveness.</li>
          <li>
            When the developer wants the value it returns to always be immutable, whether
            the struct is mutable or immutable, responsive mutability does not provide
            this.
          </li>
        </div>
      </div>
    </div>

    <div class="text-xl mb-14 pt-6 border-t-2 border-[var(--color-primary)]">
      <div class="text-3xl mb-4 font-semibold">Development Approach</div>
      There is no implementation date for when the planned features will be implemented.
      We don't want to implement a lot of things before Jule becomes stable and reliable
      enough, as this would result in a lot of very fragile & buggy implementations. We
      want to have as many well-implemented features and libraries as possible. The
      development process can be slow because we are not competent in everything, and for
      a good implementation, we first need to make sure that we have enough knowledge. It
      is better to gain well-implemented libraries and features with time cost than to
      have fragile and buggy implementations and get a lot of things quickly.
      <br /><br />
      Although our goal is well-implemented, we may make mistakes. You can join the
      community, report issues, or open a PR to speed up the development process, fix
      bugs, and contribute to other matters.
      <br /><br />
      Although Jule has C/C++ interoperability, our priority is to develop the standard
      library packages and compiler with Pure Jule as much as possible. Integrating an
      existing C/C++ library for a feature is not a welcome idea. Instead, it is preferred
      to design it as a 3rd-party binding library package.
    </div>

    <div class="text-xl mb-14 pt-6 border-t-2 border-[var(--color-primary)]">
      <div class="text-3xl mb-4 font-semibold">Support & Contributing</div>
      If you want to contribute, any proposal, update or anything is appreciated. You can
      join one of the community channels to discuss the topic which is on your mind.
      <br /><br />
      See <a href="/contribute">Contribution Guidelines</a> to contribute Jule.
    </div>
  </main>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
