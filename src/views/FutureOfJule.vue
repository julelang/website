<template>
  <main class="max-w-screen-lg mx-auto px-5 py-20">
    <center>
      <div class="mb-20 transition-all duration-200 bg-clip-text max-w-screen-lg mx-auto px-5 bg-gradient-to-r from-blue-600 w-fit via-purple-500 to-orange-400">
        <div class="text-8xl max-sm:text-6xl max-md:text-7xl font-bold text-transparent">Future of Jule</div>
      </div>
      <img class="mb-52 w-48 max-md:w-36 max-sm:w-32" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png">
    </center>
    <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Introduction</div>
        Jule is in beta versions, changing and evolving rapidly. Our main priority right now is for Jule to become more stable and have a robust standard library. To make it easier for the community and official developers to develop any tools for Jule, a significant portion of Jule's official compiler is included in the standard library. The standard library has important stages such as lexer, parser and semantic analyzer and is suitable for use in tool development.
        <br><br>
        The syntax and language design of the Jule programming language has emerged and is not expected to undergo major changes. Expecting Jule developers not to make massive updates to their old code between releases. However, no commitment for that.
        <br><br>
        There is also the idea of ​​adding a package manager that ships with the official compiler at some stage. Jule's modern understanding of language and convenience suggest that there should be a package manager that comes with the compiler. This package manager will provide management of non-standard library packages developed and published by the community. Jule's standard library only gets updates with compiler releases.
        <br><br>
        In addition to the currently supported C++ compilers, the official compiler may get support or improve support for more compilers and development environments in the future. Expecting that Jule's platform support will expand further in areas such as backend compiler, CPU architecture, and operating system.
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Compile Time</div>
        Jule has some functionalities for compile-time. The most important of these is the evaluation of constant expressions, constant matching and standard comptime library provies much more.
        However, it is planned that Jule will have a better and improved compile-time capability in the future.
        <br><br>
        Most of this functionality is planned to be designed as a package in the standard comptime library.
        Planned features include functionality such as reflection-like metadata collection, lookup in compiler structures, compile-time JSON encoding/decoding helper algorithms, and compiler metadata collection.
        <br><br>
        In addition to improving the existing compile-time functionalities as much as possible, some new features can also be added. For example, in addition to evaluating constant expressions, constant functions can be designed that can be evaluated at compile-time.
        But this is not a primary idea.
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Concurrency</div>
        Jule's concurrency is built-in in the current implementation and uses native threads.
        Jule's concurrency support is intended to improve over time. The current implementation is supported by functionalities such as Mutex and WaitGroup in the standard library.
        In addition, it is planned to add channels implemented as built-in types or as a structure in the standard library.
        <br><br>
        There is no implementation for coroutine or green threads.
        Although there is no plan for coroutines, the implementation of green threads is welcomed and a study on this may be initiated in the future.
        The strictest idea is that if green threads are added, the built-in concurrent calls will be updated to start using green threads instead of native threads and a functionality continues to be offered in the standard library for native threads.
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Archs & Platforms</div>
        Jule currently supports popular architectures such as i386 (aka intel 80386), AMD64 (aka x86-64), ARM64 (aka AArch64), popular operating systems such as Windows, macOS, and many Linux.
        <br><br>
        In the future, we want to support operating systems such as FreeBSD, Solaris, DragonFlyBSD and architectures such as PowerPC and Arm.
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Packages</div>
        Packages are important structures for Jule because they help developers organize their code, manage dependencies, and create libraries.
        In the current implementation, there are two types of packages available to developers: packages from the standard library and packages developed from Jule developers.
        <br><br>
        Standard packages are built-in by the compiler and are official packages. Developers can easily import standard packages in any Jule source code.
        <br><br>
        But 3rd party packages require some effort.
        Modules are required to develop and use subpackages.
        Modules help better organize developed packages.
        To use 3rd party packages, developers must create modules and place the package source codes in an appropriate directory in their project.
        Although this is a currently working implementation, it has some difficulties such as dependency management.
        <br><br>
        To avoid this, we aim to develop an official package manager, either included with the compiler or as a separate tool.
        This package manager should help developers by making it easier to obtain and manage packages.
        Although it is not a clearly planned approach, the package manager should avoid bloating the code base by adding direct dependencies to projects unless there are specific dependencies, and should position the packages in a general area such as the standard library where the compiler can access them, thus making importing easier.
        <br><br>
        Some issues are unclear, as issues such as how to distinguish packages from each other have not yet been discussed.
        Therefore, it is not possible to say anything about how the packages will be downloaded or whether there will be a platform site.
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">List of Planned Changes</div>
        Here is a list of some ideas that have not been explained in detail but are in the plans.
        These plans are not strictly accepted and exist only as ideas, they may be canceled or changed in the future for some reasons.
        The items in the list are not ranked according to any criteria.
        <div class="mt-4 ml-4">
            <li>Conditional Compiler Directives</li>
            <li>Unions</li>
            <li>Static Structure Fields</li>
            <li>Structure Properties</li>
            <li>Extension Methods</li>
            <li>Field Support for Traits</li>
            <li>Default Implemented Methods for Traits</li>
            <li>Generic Traits</li>
            <li>Generic Methods for Traits</li>
            <li>Generic Type-Matching with Type Patterns</li>
            <li>Testing package and sub-packages via single test command</li>
            <li>Stdlib package to encode/decode JSON data</li>
            <li>Stdlib package to encode/decode XML data</li>
            <li>Stdlib package for region-based memory management</li>
            <li>Stdlib package for regular expressions</li>
            <li>Stdlib package for StopWatch functionality</li>
            <li>Stdlib package that provides tiny data store</li>
            <li>Stdlib package that provides functionality for SQL databases</li>
            <li>Stdlib package that provides Jule-special encoding/decoding functionality</li>
            <li>std::net: add HTTP and more utilities</li>
            <li>std::math::big: arbitrary-precision floating-point support</li>
        </div>
      </div>

      <div class="text-xl mb-14">
        <div class="text-4xl mb-4 font-semibold">Tools & Utilities</div>
        Once Jule is mature enough and relatively stable, we want to provide some tools to developers.
        We developed julefmt which is code formatter for Jule source code written in Jule.
        Planned tools include ideas such as codename juledoc (a code documentation generator from source code and comment lines).
        <br><br>
        Since developing tools for Jule is relatively easy, thanks to compiler packages in standard library, we think the community can also develop various tools and plugins for Jule and expand the ecosystem.
        To achieve this, we are trying to make the compiler packages in the standard library as easy to use as possible.
      </div>

      <div class="text-xl mb-14 pt-6 border-t-2 border-[var(--color-primary)]">
        <div class="text-4xl mb-4 font-semibold">Experimental & Theory</div>
        This section contains experimental ideas, designs and theories.
        Whether they will be implemented is uncertain and experimental, it needs to be well designed, implemented and tested before implementation.

        <div class="text-xl mt-8 mb-14">
        <div class="text-3xl mb-4 font-semibold">Responsive Mutability</div>
          Jule adopts immutability by default and allows conscious mutability.
          There is some intuitiveness in the current design.
          For example, if a structure literal is created to be assigned to an immutable variable, your compiler will not complain about the mutability risk regarding immutable variables assigned to structure fields.
          However, if it were to be assigned to a mutable variable, your compiler would not be happy with it.
          <br><br>
          This experimental design focuses on an approach that takes this intuition further.
          The main design focus is on structure methods.
          In current implementation, a method that returns a value must return mutable value.
          If the returned value is a structure field, the self variable used must also be mutable.
          This may lead to the need for an immutable variable to be mutable because of a method that only returns a value.
          <br><br>
          To prevent this, the design addresses adding the necessary responsiveness to the methods through elegantly as far as possible designed syntax/semantic improvement.
          After implementing this design, when a structure method returns a value to be used in an immutable variable, it should be able to return even fields of mutable type.
        </div>
      </div>

      <div class="text-xl mb-14 pt-6 border-t-2 border-[var(--color-primary)]">
        <div class="text-3xl mb-4 font-semibold">Development Approach</div>
        There is no implementation date for when the planned features will be implemented.
        We don't want to implement a lot of things before Jule becomes stable and reliable enough, this would result as end up with a lot of very fragile & buggy implementations.
        We want to have as many well-implemented features and libraries as possible, therefore the development process can be slow because of We are not competent in everything, and for a good implementation, we first need to make sure that we have enough knowledge.
        It is better to gain well-implemented libraries and features with time cost, than to have fragile and buggy implementations and get a lot of things quickly.
        <br><br>
        Although our goal is well-implemented, we may make mistakes.
        You can join the community, report issues, or open a PR to speed up the development process, fix bugs, and contribute in other matters.
        <br><br>
        Although Jule has C/C++ interoperability, our priority is to develop the standard library packages and compiler with Pure Jule as much as possible.
        Integrating an existing C/C++ library for a feature is not a welcomed idea.
        Instead, it is preferred to design it as a 3rd-party binding library package.

        <div class="text-3xl mt-10 mb-4 font-semibold">Support & Contributing</div>
        If you want to contribute, any proposal, update or anything is appreciated.
        You can join one of the community channels to discuss the topic which is on your mind.
        <br><br>
        See <a href="/contribute">Contribution Guidelines</a> to contribute Jule.
      </div>
  </main>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
