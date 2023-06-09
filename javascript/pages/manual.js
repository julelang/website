// Copyright 2022 The Jule Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const jule_langHTML = `
<div class="title">The <x style="color: #5F7389;">Jule</x> Programming Language</div>
<br>
<div class="text">
  <br><br>
  This version of the text assumes you're using latest JuleC compiler (compiled from source).
  <br><br><br><br>
  Jule is a statically typed compiled programming language designed for system development, building maintainable and reliable software.
  It has syntax similar to today's programming languages.
  So if you already know a language, it probably won't take you long to get used to Jule.
  <br><br>
  Jule is a very simple language.
  You will not have much difficulty in learning.
  It is a suitable language for developers of all levels.
  <br><br>
  The fact that Jule is simple does not diminish its power. Jule is a pretty powerful language.
  The fact that it evolves directly to C++ and compiles from C++ means an environment familiar to C++ developers.
  <br><br>
  Jule is also a good choice for the simpler way to write C++.
  At the developer's request, Jule can be translated or compiled into C++.
  This choice is the developer's.
  <br><br>
  The purpose of Jule is to keep functionality high while maintaining a simple form and readability.
  It guarantees memory safety and does not contain undefined behavior.
</div>
`;

const forewordHTML = `
<div class="title" style="margin-bottom: 20px;">Foreword</div>
<div class="text">
  This documentation is updated following the source code according to the latest version of Jule.
  Some content maybe is not released yet, so it may be here, but not in the compiler you have.
  <br><br>
  Jule syntactically and structurally encourages code to be readable.
  It aims to transform C++ code as safely as possible.
  Optimizes for a secure code.
  With this documentation you will see the basics and some subtleties of Jule and you will understand Jule.
  You don't actually need to know C++ to learn and understand Jule.
  <br><br>
  Jule is plain and simple.
  Suitable for developers of all levels.
  It also takes a very short time to learn.
  If you're not learning a language for the first time, it probably won't take much of your time.
  <br><br>
  With this documentation, it is possible to improve your Jule knowledge, programming and analytical thinking skills.
  If you're just starting out to programming, it could be a pretty good start for you.
  <br><br>
  Welcome to Jule community!
</div>
`;

const introductionHTML = `
<div class="title" style="margin-bottom: 20px;">Introduction</div>
<div class="text">
  <div class="sub-title">Who Documentation is For</div>
  The explanations in this documentation assume that you already know programming.
  Therefore, everything is not explained from the very beginning.
  If you are completely new to programming, it may be better to learn programming from the most basic sources.
  If you already know programming, you can easily learn Jule with this documentation.

  <div class="title-separator"></div>
  <div class="sub-title">Who Jule is For</div>
  Jule is good for a few groups of developers for many reasons. Some of those;

  <div class="title-separator"></div>
  <div class="sub-sub-title">System Developers</div>
  Jule was designed as a system programming language.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Students</div>
  Jule is suitable for learning programming.
  Jule's simple structure and easy-to-understand, readable code encourage both effortless writing and understanding.
  In this way, students can learn without difficulty.
  Confusing syntax does not stand in their way.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Open Source Developers</div>
  Jule is a project open to community contributions.
  Thank you for every tool, library, framework and program you make open source.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Developers Who Value Performance, Stability and Simplicity</div>
  Jule is a good choice for those looking for simplicity, stability and performance.
  When you develop with Jule, you use a simple and straightforward syntax.
</div>
`;

const getting_startedHTML = `
<div class="title" style="margin-bottom: 20px;">Getting Started</div>
<div class="text">
  You are about to start Jule.
  Fasten the belts.
  Maybe a popcorn.
</div>
`;

const getting_started_downloadsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Downloads</div>
<div class="text">
  <div class="sub-title">Releases</div>
  You can see JuleC in easy setup form at <a target="_blank" href="https://github.com/julelang/jule/releases">releases</a>.

  <div class="title-separator"></div>
  <div class="sub-title">Source Code</div>
  You can download source code of the JuleC at <a target="_blank" href="https://github.com/julelang/jule">repository</a>.
</div>
`;

const getting_started_install_from_sourceHTML = `
<div class="page-title" style="margin-bottom: 20px;">Install from Source</div>
<div class="text">
  <div class="warn">You should have Go compiler for this option.</div>
  Ok! We will install JuleC from source code.
  Actually, we will just compile project.
  Getting the latest version is a good way to try.
  We accept you have already Jule source code.

  <div class="title-separator"></div>
  <div class="sub-title">Build Scripts</div>
  The JuleC project has scripts for build/compile compiler.
  You can use them.
  This scripts written for compile the JuleC.
  If you execute script, result is be compilation error or complete message.

  <div class="warn">These examples assume you are in the source code (<x class="inline_code">src</x>) directory of the JuleC.</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Windows</div>
  <div class="info">
    Ideal scripts for Windows: usally batchfiles (.bat).
  </div>
  Using example for PowerShell;
  <div class="code">$ build.bat</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Linux</div>
  <div class="info">
    Ideal scripts for Linux: usally shellscripts (.sh).
  </div>
  Using example for Bash;
  <div class="code">$ sh build.sh</div>

  <div class="title-separator"></div>
  <div class="sub-title">Manual</div>
  JuleC is written in Go, for now!
  <div class="warn">These examples assume you are in the source code (<x class="inline_code">src</x>) directory of the JuleC.</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Windows</div>
  Using example for PowerShell;
  <div class="code">$ go build -o julec.exe -v cmd\\julec\\main.go</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Linux</div>
  Using example for Bash;
  <div class="code">$ go build -o julec -v cmd/julec/main.go</div>
</div>
`;

const compilerHTML = `
<div class="title" style="margin-bottom: 20px;">Compiler</div>
<div class="text">
  In this part of the documentation you will explore the compiler and understand how to compile Jule code.
  After this section, you will learn and use compiler commands and compiler arguments.
</div>
`;

const compiler_basic_commandsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Basic Commands</div>
<div class="text">
The basics of compiler commands.

<div class="title-separator"></div>
<div class="sub-title">help</div>
Shows help about of commands.
<div class="code">$ julec help</div>

<div class="title-separator"></div>
<div class="sub-title">version</div>
Shows version of the JuleC.
<div class="code">$ julec version</div>

<div class="title-separator"></div>
<div class="sub-title">tool</div>
Tools for effective Jule.
It includes tools that can add to your Jule experience.
<br>
See the command's help table for more information:
<div class="code">$ julec tool</div>

</div>
`;

const compiler_platform_supportHTML = `
<div class="page-title" style="margin-bottom: 20px;">Platform Support</div>
<div class="text">
Jule supports multiple platforms.
JuleC undertakes that the code and standard library it produces will be compatible with all these platforms.
When you try to compile for a platform other than officially supported platforms, it is not guaranteed that it will be supported and the code will work correctly.

<div class="title-separator"></div>
<div class="sub-sub-title">Supported Operating Systems</div>
<x class="inline_code">windows</x>
<x class="inline_code">darwin</x>
<x class="inline_code">linux</x>
<br><br>
The <x class="inline_code">unix</x> includes:
<x class="inline_code">darwin</x>
<x class="inline_code">linux</x>

<div class="title-separator"></div>
<div class="sub-sub-title">Supported Architectures</div>
<x class="inline_code">i386</x>
<x class="inline_code">amd64</x>
<x class="inline_code">arm</x>
<x class="inline_code">arm64</x>
<br><br>
The <x class="inline_code">64bit</x> includes:
<x class="inline_code">amd64</x>
<x class="inline_code">arm64</x>
<br><br>
The <x class="inline_code">32bit</x> includes:
<x class="inline_code">i386</x>
<x class="inline_code">arm</x>

</div>
`;

const compiler_compiler_optionsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Compiler Options</div>
<div class="text">

Compiler options (aka arguments) let you tell your compiler a set of preferences.
Accordingly, the behavior and outputs of the compiler may differ.
<br><br>
Arguments are indicated in their full form using two hyphens <x class="inline_code">--</x>.
However, some arguments may have abbreviations (usually one letter), denoted by a single hyphen <x class="inline_code">-</x>.
<br><br>
Some options may require value.

<div class="title-separator"></div>
<div class="sub-title">Using Options</div>
<br>
Options are written as command-line arguments when executing the compiler.
Some options are only used, but an option may have to take value.
Options that receive value must see its value after it. So, after JuleC sees an option that should take a value, it evaluates the following command-line argument as the option's value.
<br><br>
It doesn't matter if the options are in mixed order.
They can be completely at the end of the command, at the beginning, in the middle, or in a complex way.
The recommended order is to write the options first and then give the compiler inputs.

<br><br>
For example;
<div class="code">$ julec -t --compiler clang .</div>
The example code above means: "Hey compiler, transpile main.jule's content using the clang compiler standard."

<div class="title-separator"></div>
<div class="sub-title">--options</div>
<br>

<x class="inline_code">-c</x> <x class="inline_code">--compile</x> <br>
Compiles source code.
Actually this is not necessary because compiler's default option is compile.

<div class="topic-separator"></div>

<x class="inline_code">-t</x> <x class="inline_code">--transpile</x> <br>
Just transpile source code.

<div class="topic-separator"></div>

<x class="inline_code">--compiler &lt;value&gt;</x> <br>
Set the preferred compiler.
Specify the compiler standard you will use for compilation from among the supported compilers.
<br><br>
Values: <x class="inline_code">gcc</x>
        <x class="inline_code">clang</x>

<div class="topic-separator"></div>

<x class="inline_code">-o &lt;file&gt;</x> <x class="inline_code">--out &lt;file&gt;</x> <br>
Write output to <x class="inline_code">&lt;file&gt;</x>.
<br><br>

</div>
`;

const compiler_compilingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Compiling</div>
<div class="text">
<div class="title-separator"></div>
<div class="sub-title">Compiler and C++ Standard Support</div>
JuleC commits that the codes it produces can be successfully compiled by the GNU Compiler Collection and Clang.
Likewise, JuleC undertakes that the API it has and openly offers can be compiled with these compilers.
While this preference is entirely left to the developers, JuleC has primarily embraced generating Clang compatible code, so it is recommended that Clang be the primary choice.
<br><br>
Even if you can compile code generated outside of official support compilers with a different compiler, it is not under official support and there is no commitment that the code will be compiled.
Regardless of whether you use Clang to compile the code or a compiler with or without official support, make sure that you either support or use a version of compiler that does support the C++ standard that Jule created.
<br><br>
Jule aims to generate code in accordance with the most ideal C++ standard supported by the C++ compilers it offers official support, and is committed to compiling it with compilers that fully comply with this standard.
As a result of our tests, the most suitable standard seems to be C++14.
The C++14 standard has full support on officially supported compilers and is the default compilation standard.
For this reason, Jule aims to produce code in accordance with the C++14 standard.
<br><br>
When we tested it, Clang successfully compiled the API and a simple code output in the C++17 and C++20 standard.
However, when we tested with GCC, we encountered compiler errors in the C++20 standard with the same parameters.
<br><br>
These tests were performed on Linux. When we tested GCC compilation on Windows with MinGW, we encountered different results.
If you're working on a cross-platform project and your code must be compilable on supported operating systems, consider platform-dependent differences if you're trying to compile with a standard other than the officially supported C++ standard.

<div class="title-separator"></div>
<div class="sub-title">Using C++ Compiler</div>
JuleC has multiple officially supported C++ compilers.
For this reason, it does not contain a specific C++ compiler in itself to keep your download sizes small and leave the choice to you.
If you're using Linux or a similar operating system, you can usually already have an officially supported C++ compiler.
Once you've decided on the C++ compiler you want to use, JuleC can take care of the rest for you.
Before that, you need to give JuleC a few simple instructions.
<br><br>
JuleC will automatically choose the recommended C++ compiler when compiling your code.
If the recommended compiler is your preferred compiler, you don't need to take an action.
But if not, you need to set your compiler using the related compiler option(s).
<br><br>
If you need a special configuration for your build, it is recommended to create a script file for it or write compile command in a document such as a readme files.
This makes it clearer and easier how to compile the project, as well as a faster and more comfortable development experience.

<div class="title-separator"></div>
<div class="sub-title">Using JuleC</div>
Let's start with a simple hello world program and learn compiling from this program.
<br><br>
We have a <x class="inline_code">main.jule</x> file:
<div class="code">fn main() {
    outln("Hello, World!")
}</div>

<br>
<br>
For compile Jule code, we just give current directory path to JuleC:
<div class="code">julec .</div>
And compiler is transpile our Jule code to C++ code. <br>
Result is created by settings file and compile if mode setted as <x class="inline_code">compile</x>.
In build mode, JuleC will show you the build command itself on the command line, which is used during compilation.
You can also set the mod to <x class="inline_code">transpile</x> and choose to compile manually, or you can write a script that compiles the code after you have it in C++ form using the transpile mode to experience compile mode.
<br><br>
As result we have a executable machine code result of our program.

<div class="title-separator"></div>
<div class="sub-sub-title">Why JuleC Needs Directory Path Instead File Path?</div>
In Jule, each program is also a package.
Jule source codes in the directory are accepted within the package.
Accordingly, every directory is actually a potential Jule package.
The directory of the program you will compile should be the main package of your program.
<br><br>
This also eliminates the need to link individual source codes to the compiler and significantly avoids the occurrence of long compiler commands.
It makes it easy to understand which of the source codes are in the main program, the answer is simple: all the Jule source codes in the directory.
Because of this approach, each Jule program is kept in a separate directory as a package, causing optimistic pressure on the project organization.

</div>
`;

const projectHTML = `
<div class="title" style="margin-bottom: 20px;">Project</div>
<div class="text">
In this chapter you understand the proposed project layout, their names and the purpose of the directories.
Then you will be able to develop your projects by following this order.
These are recommendations and are not obligatory to follow.
</div>
`;

const project_directory_orderHTML = `
<div class="page-title" style="margin-bottom: 20px;">Directory Order</div>
<div class="text">
Recommended work pattern and use of project directories for Jule;

<div class="title-separator"></div>
<div class="sub-title">Source files</div>
Nice names for source of your project; <br>
<ul>
  <li><x class="inline_code">src</x></li>
  <li><x class="inline_code">source</x></li>
</ul>

The source directory is the directory where your project's source codes are located.
It is recommended that you keep the source code of the language or languages you are using in this directory.
If your project has more than one language, you can separate the languages in different directories in this directory.
The same method can be applied if you have more than one program.
<br><br>
You can place your source code files directly in this directory.
But if there is more than one program source code from your project, you can create a new directory under this directory for each program.
In addition, if you wish, you can store the source code in a directory specific to your program, even though it is your only program.

<div class="title-separator"></div>
<div class="sub-title">Scripts</div>
Nice names for scripts of your project; <br>
<ul>
  <li><x class="inline_code">script</x></li>
  <li><x class="inline_code">scripts</x></li>
</ul>

It is very natural for you to write some scripts for your project.
It's better to have these scripts in a directory rather than having them cluttered around.
If your scripts are applied for different directories, you can create a sub-order by creating those directories inside the script directory.
Or you can create a new script directory in the corresponding directory.

<div class="title-separator"></div>
<div class="sub-title">Documentations</div>
Nice names for documentations of your project; <br>
<ul>
  <li><x class="inline_code">docs</x></li>
  <li><x class="inline_code">documentation</x></li>
  <li><x class="inline_code">documentations</x></li>
</ul>

It is recommended to keep the documents and explanations of your projects in this directory.

<div class="title-separator"></div>
<div class="sub-title">Resources</div>
Nice names for resources of your project; <br>
<ul>
  <li><x class="inline_code">res</x></li>
  <li><x class="inline_code">resources</x></li>
</ul>

If you have resources for your project (png, jpg, gif etc.), it is recommended to keep them in this directory.

</div>
`;

const project_namingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Naming</div>
<div class="text">

<div class="warn">These examples are the recommended style, not mandatory.</div>

<div class="title-separator"></div>
<div class="sub-title">Styles</div>
<table class="table">
  <tr>
    <th style="text-align: center;">Type</th>
    <th>Naming Case</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td style="text-align: center;">Source File</td>
    <td>snake_case</td>
    <td>file.jule, my_file.jule</td>
  </tr>
  <tr>
    <td style="text-align: center;">Constant</td>
    <td>Capital letters and underscore separator</td>
    <td>CONSTANT, MY_CONSTANT</td>
  </tr>
  <tr>
    <td style="text-align: center;">Pub Global Variable</td>
    <td>Capital letters and underscore separator</td>
    <td>GLOBAL, MY_GLOBAL</td>
  </tr>
  <tr>
    <td style="text-align: center;">Not Pub Global Variable</td>
    <td>Capital letters and underscore separator, snake_case or notsplitted</td>
    <td>GLOBAL, my_global, myglobal</td>
  </tr>
  <tr>
    <td style="text-align: center;">Local Variable</td>
    <td>camelCase</td>
    <td>variable, my_variable</td>
  </tr>
  <tr>
    <td style="text-align: center;">Function</td>
    <td>camelCase</td>
    <td>function, my_function</td>
  </tr>
  <tr>
    <td style="text-align: center;">Struct</td>
    <td>PascalCase</td>
    <td>Struct, MyStruct</td>
  </tr>
  <tr>
    <td style="text-align: center;">Method</td>
    <td>camelCase</td>
    <td>method, my_method</td>
  </tr>
  <tr>
    <td style="text-align: center;">Field</td>
    <td>camelCase</td>
    <td>field, my_field</td>
  </tr>
  <tr>
    <td style="text-align: center;">Enum</td>
    <td>PascalCase</td>
    <td>Enum, MyEnum</td>
  </tr>
  <tr>
    <td style="text-align: center;">Enum Variants</td>
    <td>PascalCase</td>
    <td>Variand, MyVariant</td>
  </tr>
  <tr>
    <td style="text-align: center;">Type</td>
    <td>Full lowercase and not separated or PascalCase</td>
    <td>mytype, Type, MyType</td>
  </tr>
  <tr>
    <td style="text-align: center;">Generic Type</td>
    <td>PascalCase and _T extension, starts with T and continue with numbers or PascalCase</td>
    <td>Generic_T, MyGeneric_T, T1, T2, T, Generic, GenericType</td>
  </tr>
</table>

<div class="title-separator"></div>
<div class="sub-title">File Annotation</div>
File Annotation enables a source file to be classified by operating system or architecture at compile time.
If there is a platform or operating system that does not comply with Annotation, the source file is not included in the compilation.
This is a compiler feature that can help with platform specific development.
These annotations are available for all supported operating systems and architects.
Check out <a href="manual.html?page=compiler-platform-support">these documents</a> to see the supported operating systems and architectures.
<br><br>
Attachments should be placed at the end and separated by underscore.
Up to two annotations can be used.
If you use a single annotation, this annotation can be both an operating system and an archtitecture annotation.
If you use two annotations, the first annotation must be the operating system and the second annotation must be architecture.
If there is no underscore, the entire name can also be matched.

<br><br>
For example:
<div class="code">darwin.jule</div>
<div class="code">arm64.jule</div>
<div class="code">unix_amd64.jule</div>
<div class="code">example_amd64.jule</div>
<div class="code">example_windows_amd64.jule</div>
<div class="code">example_darwin_arm64.jule</div>
<div class="code">example_linux.jule</div>

</div>
`;

const project_declarationsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Declarations</div>
<div class="text">
Each unused statement is tried not to be included in the C++ output.
This does not pose much of a problem with global declarations and should not be a hindrance to compilation.
But you have to use the declarations you make in your code blocks, if you don't the compiler will throw an error for each one.
<br><br>
For example:
<div class="code">fn main() {
    let a: int = 0
}</div>
The variable <x class="inline_code">a</x> seen is declared but unused.
This will cause you to get an error by the compiler and not be able to compile the code.
</div>
`;

const project_cyclesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Cycles</div>
<div class="text">
Illegal cycles occur when the program will have an invalid runtime cycle.
<br><br>
For example:
<div class="code">struct A {
    b: B
}

struct B {
    a: A
}</div>
In the example above, both structures refer directly to each other. This is an illegal cycle.

<div class="topic-separator"></div>

<div class="code">struct A {
  a: A
}</div>
In the example above, structure refers directly to itself. This is an illegal cycle.

</div>
`;

const basicsHTML = `
<div class="title" style="margin-bottom: 20px;">Basics</div>
<div class="text">
  The basics of the Jule programming language. <br>
  Comments, operators and more. Knowledge for next steps.
</div>
`;

const basics_commentsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Comments</div>
<div class="text">
  Comments are useful for understanding code, making comments and explanations, taking notes, and sometimes writing little jokes.
  <br><br>
  In general, two types of comment lines appear in programming languages: singleline comment and multiline comment.
  Some programming languages only support one.
  Jule supports both of these common approaches.

  <div class="title-separator"></div>
  <div class="sub-title">Singleline Comments</div>
  <div class="code">// Singleline comment</div>

  <div class="title-separator"></div>
  <div class="sub-title">Multiline Comments</div>
  <div class="code">/*
  Multiline
  Comment
*/</div>
</div>
`;

const basics_reserved_functionsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Reserved Functions</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Entry Point</div>
<div class="text">
  The entry point is the first routine that starts running when the program runs. <br>
  You must have a entry point. If you not have, code does not compile.
  <br><br>
  Jule's entry point function is <x class="inline_code">main</x> function. <br>
  Entry point is should be void and not have any parameter.

  <div class="title-separator"></div>
  <div class="sub-sub-title">For Example</div>
  <div class="code">fn main() {
    // Your entry point function body.
}</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Initialize Function</div>
It is a one-time initialize function when a package is imported.<br>
If you use it in your main program package, it will be executed before the entry point.
<br><br>
Jule's initialize function is <x class="inline_code">init</x> function. <br>
Initialize function is should be void and not have any parameter.

<div class="title-separator"></div>
  <div class="sub-sub-title">For Example</div>
  <div class="code">fn init() {
    // Your initialize function body.
}</div>

</div>
`;

const basics_data_typesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Data Types</div>
<div class="text">
  Jule is designed strongly typed.
  Therefore, the data-types of all values must be specified during compilation.
  In this section we will look at the builtin types offered by the compiler.

  <div class="title-separator"></div>
  <div class="sub-title">Primitive Types</div>
  <table class="table">
    <tr>
      <th>Type</th>
      <th>Typical Bit Width</th>
      <th>Typical Range</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i8</td>
      <td style="text-align: center;">1 byte</td>
      <td>-127 to 127</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">16</td>
      <td style="text-align: center;">2 bytes</td>
    <td>-32768 to 32767</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i32</td>
      <td style="text-align: center;">4 bytes</td>
      <td>-2147483648 to 2147483647</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i64</td>
      <td style="text-align: center;">8 bytes</td>
      <td>-9223372036854775808 to 9223372036854775807</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int</td>
      <td style="text-align: center;">Platform dependent</td>
      <td>Platform dependent (signed)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u8</td>
      <td style="text-align: center;">1 byte</td>
      <td>0 to 255</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u16</td>
      <td style="text-align: center;">2 bytes</td>
      <td>0 to 65535</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u32</td>
      <td style="text-align: center;">4 bytes</td>
      <td>0 to 4294967295</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u64</td>
      <td style="text-align: center;">8 bytes</td>
      <td>0 to 18446744073709551615</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint</td>
      <td style="text-align: center;">Platform dependent</td>
      <td>Platform dependent (unsigned)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uintptr</td>
      <td style="text-align: center;">Platform dependent</td>
      <td>It is a unsigned integer type that is big enough to hold a pointer.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f32</td>
      <td style="text-align: center;">4 bytes</td>
    <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f64</td>
      <td style="text-align: center;">8 bytes</td>
      <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td style="text-align: center;">1 byte</td>
      <td>true or false</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">str</td>
      <td style="text-align: center;">-</td>
      <td>UTF-8 byte encoded character string.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">any</td>
      <td style="text-align: center;">-</td>
      <td>Any data.</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Type Compability</div>
  <table class="table">
    <tr>
      <th>Type</th>
      <th>Compatible Types</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i8</td>
      <td>i8</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i16</td>
      <td>i8, i16, u8</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i32</td>
      <td>i8, i16, i32, u8, u16</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i64</td>
      <td>i8, i16, i32, i64, u8, u16, u32</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int</td>
      <td>Platform dependent (signed)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">intptr</td>
      <td>Platform dependent (signed)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u8</td>
      <td>u8</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u16</td>
      <td>u8, u16</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u32</td>
      <td>u8, u16, u32</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u64</td>
      <td>u8, u16, u32, u64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint</td>
      <td>Platform dependent (unsigned)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uintptr</td>
      <td>Platform dependent (unsigned)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f32</td>
      <td>f32, i8, i16, i32, i64, u8, u16, u32, u64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f64</td>
      <td>f32, f64, i8, i16, i32, i64, u8, u16, u32, u64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td>bool</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">str</td>
      <td>str</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">any</td>
      <td>Any type.</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Integer Literals</div>
  <div class="sub-sub-title">Decimal</div>
  <div class="code">12345</div>
  <div class="sub-sub-title">Binary</div>
  <div class="code">0b0001010101</div>
  <div class="sub-sub-title">Octal</div>
  <div class="code">0455</div>
  <div class="sub-sub-title">Hexadecimal</div>
  <div class="code">0xDFF90</div>

  <div class="title-separator"></div>
  <div class="sub-title">Floating-Point Literals</div>
  <div class="code">3.14</div>
  <div class="code">32.60</div>
  <div class="code">032.60</div>
  <div class="code">3.</div>
  <div class="code">0.3</div>
  <div class="code">1E2</div>
  <div class="code">.12345E+6</div>
  <div class="code">1.e+0</div>
  <div class="code">0x1p-2</div>
  <div class="code">0x2.p10</div>
  <div class="code">0x1.Fp+0</div>
  <div class="code">0X.8p-0</div>
  <div class="code">0x1fffp-16</div>
  <div class="code">0x15e-2</div>

  <div class="title-separator"></div>
  <div class="sub-title">Strings</div>
  <div class="sub-sub-title">String Literals</div>
  <div class="code">"String literal of Jule."</div>
  String literals have a escape sequences.
  <br><br>
  <table class="table">
    <tr>
      <th style="text-align: center;">Escape</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\\\</td>
      <td>Backslash.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\a</td>
      <td>ASCII Bell.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\b</td>
      <td>ASCII Backspace.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\f</td>
      <td>ASCII Formfeed.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\n</td>
      <td>ASCII Linefeed.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\r</td>
      <td>Carriage return.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\t</td>
      <td>ASCII Horizontal tab.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\v</td>
      <td>ASCII Vertical tab.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\'</td>
      <td>Single quote.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\"</td>
      <td>Double quote.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\x<i>hh</i></td>
      <td>The byte whose numerical value is given by hh… interpreted as a hexadecimal number.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\u<i>hhhh</i></td>
      <td>Unicode code point below 10000 hexadecimal.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\U<i>hhhhhhhh</i></td>
      <td>Unicode code point where </i>h</i> is a hexadecimal digit.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\<i>nnn</i></td>
      <td>The byte whose numerical value is given by nnn interpreted as an octal number.</td>
    </tr>
  </table>
  <div class="title-separator"></div>
  <div class="sub-sub-title">Raw String Literals</div>
  Raw strings do not contain escape sequences and are not required to be defined in a single line.
  They are represents with <x class="inline_code">\`</x>.
  <div class="code">\`Raw String literal of Jule.\`</div>
  <div class="code">\`Raw String literal of Jule
with
new
    lines.\`</div>

  <div class="title-separator"></div>
  <div class="sub-title">Nil</div>
  Zero value for pointers and function data typed defines.
  <div class="code">nil</div>

  <div class="title-separator"></div>
  <div class="sub-title">any</div>
  It can be hold any data type and nil.
  Only supports equals (==) and not equals (!=) operators.
  <br><br>
  <x class="inline_code">x == y</x>: true if x and y is nil <br>
  <x class="inline_code">x == y</x>: true if x and y has same data type and returns true of equals operator of data type for two value
</div>
`;

const basics_operatorsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Operators</div>
<div class="text">
  Operators are symbols that describe and specify arithmetic or logical tasks.

  <div class="title-separator"></div>
  <div class="sub-title">Arithmetic Operators</div>
  Arithmetic operators are used to perform common mathematical operations.
  And some times it is also used for non-numeric types.
  <br><br>
  <table class="table">
    <tr>
      <th style="text-align: center;">Operator</th>
      <th>Description</th>
      <th>Supported Type(s)</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">+</td>
      <td>Addition</td>
      <td>integers, floats, strings</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">-</td>
      <td>Subtraction</td>
      <td>integers, floats</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">*</td>
      <td>Multiplication</td>
      <td>integer, floats</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">/</td>
      <td>Division</td>
      <td>integer, floats</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">%</td>
      <td>Modulus</td>
      <td>integers</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';"><<</td>
      <td>Left shift</td>
      <td>integer << unsigned integer</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">>></td>
      <td>Right shift</td>
      <td>integer >> unsigned integer</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">++</td>
      <td>Equals to += 1 as suffix</td>
      <td>lvalue arithmetic++</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';"> --</td>
      <td>Equals to -= 1 as suffix</td>
      <td>lvalue arithmetic--</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Comparison Operators</div>
  <table class="table">
    <tr>
      <th style="text-align: center; font-family: 'Code';">Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">==</td>
      <td>Equal to</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">!=</td>
      <td>Not equal</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">></td>
      <td>Greater than</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';"><</td>
      <td>Less than</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">>=</td>
      <td>Greater than or equal to</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';"><=</td>
      <td>Less than or equal to</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Bitwise Operators</div>
  <table class="table">
    <tr>
      <th style="text-align: center;">Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">&</td>
      <td>Bitwise AND</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">|</td>
      <td>Bitwise OR</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">^</td>
      <td>Bitwise XOR, Bitwise NOT</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Comparison Operators</div>
  <table class="table">
    <tr>
      <th style="text-align: center;">Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">&&</td>
      <td>Logical and</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">||</td>
      <td>Logical or</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">!</td>
      <td>Logical not</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Precedences</div>
  <table class="table">
    <tr>
      <th style="text-align: center">Precedence (Descending)</th>
      <th style="text-align: center;">Operator(s)</th>
    </tr>
    <tr>
      <td style="text-align: center;">5</td>
      <td style="text-align: center; font-family: 'Code';"> * % / << >> & </td>
    </tr>
    <tr>
      <td style="text-align: center;">4</td>
      <td style="text-align: center; font-family: 'Code';"> + - | ^ </td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center; font-family: 'Code';"> == != < <= > >= </td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center; font-family: 'Code';"> && </td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center; font-family: 'Code';"> || </td>
    </tr>
  </table>
</div>
`;

const basics_attributesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Attributes</div>
<div class="text">
Attributes are used to mark definitions for specific reasons and to report them to the compiler.
Each attribute is defined with comment pragma (<x class="inline_code">jule:</x>), the attribute itself must come immediately after pragma.
<br><br>
For example:
<div class="code">//jule:attribute_a
fn my_func(): int {
    // Body ...
}</div>
</div>
<br><br>
If you are giving more than one attribute, you should write each one in the same format.
Note that an attribute cannot be given repeatedly.
<br><br>
For example:
<div class="code">//jule:attribute_a
//jule:attribute_b
fn my_func(): int {
    // Body...
}</div>
<div class="warn">
Not all attributes can be applied to all definitions.
Each definition has valid attributes for it.
</div>
`;

const basics_statementsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Statements</div>
<div class="text">
Statements separates with statement terminator.
<br>
The statement terminator of Jule is the semicolon (<x class="inline_code">;</x>).
<br>
Also, we sayed each statement separates with statement terminator and it is true.
But statement terminator is always necessary? No.
<br>
You can use statement terminator if you want write two or more statement as side-by-side.
Except that, not necessary.
<br>
Well, how we separate statements? Easy, please skip to next line or finish write.
<br><br>
For example:
<div class="code">fn main() {
    [STATEMENT_1]; [STATEMENT_2]
    [STATEMENT_3]
    [STATEMENT_4]
}</div>

</div>
`;

const basics_blocksHTML = `
<div class="page-title" style="margin-bottom: 20px;">Blocks</div>
<div class="text">
Blocks are indicated by braces, except in exceptional cases.
Each block represents a scope.
Although a block is often used to denote an algorithm domain, it is also used for other purposes.

<div class="title-separator"></div>
<div class="sub-title">Anonymous Blocks</div>
Anonymous blocks are blocks that do not belong to a definition (function, etc.).
<br><br>
For example:
<div class="code">fn main() {
    {
      // Anonymous block
    }
}</div>
The above example shows an anonymous block (scope) contained within the block (scope) of the <x class="inline_code">main</x> function.

<div class="title-separator"></div>
<div class="sub-title">Deferred Blocks</div>
Deferred blocks are blocks whose execution is deferred until the scope they are in expires.
Declares with the <x class="inline_code">defer</x> keyword.
<br><br>
For example:
<div class="code">fn main() {
    defer {
        outln("Hello Defer")
    }
    outln("Hello World")
}</div>
In the example above, the output <x class="inline_code">Hello World</x> appears before.
This is because the deferred block is defined in the scope of the function and its execution is deferred until the scope of the function exits.

<div class="title-separator"></div>
<div class="sub-title">Unsafe Blocks</div>
Unsafe blocks allows to use Unsafe Jule.
Declares with the <x class="inline_code">unsafe</x> keyword.
<br><br>
For example:
<div class="code">fn main() {
    unsafe {
      // Unsafe anonymous block
    }
}</div>

<a href="manual.html?page=unsafe-jule">See more information about Unsafe Jule</a>

<div class="title-separator"></div>
<div class="sub-title">Deferred Unsafe Blocks</div>
You may want to use Unsafe Jule and deferred blocks at the same time.
You can do this.
<br><br>
For example:
<div class="code">fn main() {
    unsafe defer {
      // Deferred unsafe anonymous block
    }
}</div>

</div>
`;

const common_conceptsHTML = `
<div class="title" style="margin-bottom: 20px;">Common Concepts</div>
<div class="text">
  Common programming concepts. <br>
  Approaches that be found in every code. <br>
  Variables, functions...
  <br><br>
  Some examples of the subtopics of this section and the following sections require knowledge of immutability of Jule.
  Please if you don't have any idea abot immutability of Jule, read the <a href="manual.html?page=memory-immutability">immutability</a> documentations.
</div>
`;

const common_concepts_variablesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Variables</div>
<div class="text">
There is more than one way in Jule to define a variable.
<br><br>
Jule is uses the <x class="inline_code">let</x> and <x class="inline_code">const</x> keywords for variable declarations.
Jule uses the <x class="inline_code">:</x> operator for type annotations.
When you don't use <x class="inline_code">:</x> operator, you report you want the type to be detect automatically by compiler.
The type is set by the compiler based on the data.
<br><br>
For example:
<div class="code">let age = 18</div>
The data type of the above variable is defaulted to <x class="inline_code">int</x>.

<div class="title-separator"></div>
<div class="sub-title">Type Annotation</div>
You may want to annotate the type, it is possible.
It also brings you advantages.
<br><br>
For example:
<div class="code">let age: int = 18</div>
This is equivalent to the one shown above.
However, you annotated the type.
So what exactly is the difference?
We mentioned that it has advantages, let's take a look;
<ul>
  <li>
  When you follow this method, you do not have to give a value during the creation of the variable.
  According to the data type you have defined, the compiler initializes that variable with the default value of the given data type if you have not given a value.
  </li>
  <li>
  This is better than automatic assignment if the variable's data type is important.
  Because in automatic assignment, the data type is detected automatically, but since the value given here must be compatible with the given data type, the Jule compiler will not accept any incompatible value.
  </li>
  <li>
  You know more precisely which data type you are working with.
  It can help avoid possible confusion.
  </li>
</ul>

<div class="title-separator"></div>
<div class="sub-sub-title">Auto Initialization</div>
In case of type annotation, the default value is initialized by the compiler.
Variables do not need to be explicitly initialized when the type is annotated.
<br><br>
For example:
<div class="code">let a: int</div>


<div class="title-separator"></div>
<div class="sub-title">Assignment</div>
The values of the variables can be changed later.
The value given must be the same as the data type of the variable.
<br><br>
For example:
<div class="code">fn example() {
    let mut a: int = 10 // Value is 10.
    a = 200             // New value is 200.
}</div>

<div class="title-separator"></div>
<div class="sub-title">Constant Variable</div>
Constant variables are declared same method, the only difference being that the keyword <x class="inline_code">const</x> is used when defining them.
<br><br>
For example:
<div class="code">const age = 18</div>
<div class="code">const age: int = 18</div>
<div class="warn">
  No matter which method the constant variables are defined by, a value must be given.
</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Differences Between Variables and Constants Variables</div>
The value of the variables can change (with mutability), then they can be updated with a different value to match the data type.
Constants take a constant expressions and never change again.
Constant expressions do not exist as a variable in memory at runtime.
Constant expressions used are copied exactly where they are used.
Constant expressions are all evaluated at compile time.

<div class="title-separator"></div>
<div class="sub-title">Multiple Assignment / Declaration</div>
You can multiple variable assignment or declaration.
What? Sure, you can use two type in same statement.
You know how to declare variable, okay it is same.
The single difference, identifiers and expressions separate with comma.
<br><br>
For example:
<div class="code">let (x, y, z) = true, 1, -400</div>
Yes, there is we declare three new variable named as <x class="inline_code">x</x>, <x class="inline_code">y</x> and <x class="inline_code">z</x> with auto-type detection.
Variable values are; <x class="inline_code">x</x> is <x class="inline_code">true</x>, <x class="inline_code">y</x> is <x class="inline_code">1</x> and <x class="inline_code">y</x> is <x class="inline_code">-400</x>.
As you can see, the order in which the variable is defined is associated with the expression in the same order.
Remember that, you can't use type annotation in this case.
<br><br>
Use the <x class="inline_code">mut</x> keyword for mutable declaration.
<br><br>
For example:
<div class="code">let (mut x, y, mut z) = true, 1, -400</div>
The <x class="inline_code">x</x> and <x class="inline_code">z</x> variables are mutable.
<br><br>
So how do we do the assignment thing?
<br>
We're essentially just removing the declaration things that indicates that the variable is a new variable.
Actually, only the name of the variable needs to remain, remember value assignment statement.
<br><br>
For example:
<div class="code">x, y, z = true, 1, -400</div>
The logic remains the same.
Let's not forget that these variables must already exist, of course, due to static type principles, the value you show to it must be compatible with the data type of the variable.
<br><br>
Additionally, you can skip some values with ignore operator.
<br>
For example:
<div class="code">x, _, z = true, 1, -400</div>
<div class="code">let (x, _, z) = true, 1, -400</div>
This way you ignore some values.

<div class="title-separator"></div>
<div class="sub-sub-title">Assignment and Definition Simultaneously</div>
Script: You have multiple assignments, but some of your variables need to be defined for the first time while some of your variables are assigned.
<br><br>
Jule's approach in this regard is that both can occur simultaneously if certain rules are met.
If you are using a variable defined in the same scope, the variable will not be evaluated according to the definition rules.
This will not cause you to get an error about it.
Your variable is handled according to the assignment rules.
So the errors we can get will be typical assignment errors like mutability or type safety.
<br><br>
For example:
<div class="code">fn main() {
    let (mut x, y) = 10, 20
    let (x, z) = 100, 30
    outln(x) // 100
    outln(y) // 20
    outln(z) // 30
}</div>
In the example above, the variable <x class="inline_code">x</x> is set to mutable.
Since it is again in a multiple assignment within the same scope, it is treated according to the assignment rules, not the rebuild rules.
While assigning to the <x class="inline_code">x</x> variable, the <x class="inline_code">z</x> variable does not exist, so it is newly created.
<br><br>
The point that should not be missed is that the relevant variable must be in exactly the same scope.
If a variable from the global scope is used, it will not be considered as assignment.
Likewise, if the variable comes from parent scopes, it is still not considered an assignment.
<br><br>
For example:
<div class="code">fn main() {
    let (x, y) = 100, 200
    {
        let (x, z) = 10, 20
        outln(x) // 10
        outln(y) // 200
        outln(z) // 20
    }
    outln(x) / 100
}</div>
In the above example, the variable <x class="inline_code">x</x> is not considered an assignment because it comes from the parent scope.
If you want to perform an assignment, you must use a clean assignment statement.
<br><br>
Also if you want to perform an assignment, but not to a variable but to a pointer etc.
If you want to do it, your statements must be in parentheses.
Expressions enclosed in parentheses are clean assignment expressions, the brackets are evaluated and the value is assigned.
<br><br>
For example:
<div class="code">fn main() {
    let mut a = [1, 2, 3, 4]
    let ((a[0]), b) = 20, 30
    outln(a) // [20 2 3 4]
    outln(b) // 30
}</div>

<div class="warn">
This can make the statement very complex and impair readability.
For this reason, it is recommended not to use too complex expressions in parentheses.
</div>

<div class="title-separator"></div>
<div class="sub-title">Shadowing</div>
In the basic sense, shadowing is when a definition with the same identifier shadows a define with the same identifier before it in scope.
This is made possible by performing a new definition in subscopes of a scope with the name of a definition defined in that parent scope, or by using the identifier of a global definition in the main scope of a function.



<br><br>
For example:
<div class="code">let a = 100

fn my_func(a: bool) {
    outln(a)
}
</div>
In the code above, the function's parameter is the same as the name of a global definition.
In this case, the parameter name is valid and the global definition is shaded.
<br><br>
So how does this work in child scopes?
<br><br>
For example:
<div class="code">let a = 100

fn my_func() {
    let a = 10
    {
        let a = 200
        outln(a)
    }
    outln(a)
}
</div>
In the above example, the main scope of the function has a child scope.
This scope has a variable with the same identifier as the variable <x class="inline_code">a</x> in the main scope.
This variable replaces and shadows the parent scope's variable <x class="inline_code">a</x> in it and its child scopes.
<br><br>
Can a definition in the same scope be shadowed, how does the compiler behave about it?
Obviously, you can't.
The compiler will never allow two identifiers in the same scope.
Therefore, you cannot have definitions with the same identifier in the same scope.

</div>
`;

const common_concepts_functionsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Functions</div>
<div class="text">
Functions are common in Jule code.
Previously, the entry point function was mentioned in the basics.
We have seen partially there how to define a function.
<br><br>
To remember:
<div class="code">fn example() {
    // ...
}</div>
For functions, the name of the function comes first, followed by the parentheses.
The braces indicate the block of the function.
<br><br>
So how can we call this function? <br>
For example:
<div class="code">example()</div>
The name of the function comes first and then the parentheses again.

<div class="title-separator"></div>
<div class="sub-title">Function Parameters</div>
Functions can have parameters.
These parameters must be specified with arguments at the time the function is called.
<br><br>
For example:
<div class="code">fn print_int(i: int) {
    outln(i)
}

fn main() {
    print_int(50)
}</div>
It is similar to normal function definition.
Parameters are written between parentheses
If there is more than one parameter, they are separated by commas.
The name of the parameter is written first, followed by the data-type.
<br><br>
When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas.
The given arguments must be compatible with the data-type of the corresponding parameters.

<div class="title-separator"></div>
<div class="sub-sub-title">Mutable Parameters</div>
Parameters are immutable by default.
For mutability, use the <x class="inline_code">mut</x> keyword.
<br><br>
For example:
<div class="code">fn my_func(mut i: int) { /* ... */ }</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Variadic Parameters</div>
Variadic parameters can contain more than one value.
The <x class="inline_code">...</x> operator is used for this.
<br>
For example:
<div class="code">fn str_out(values: ...str) {
    for _, s in values {
        out(s)
    }
}

fn main() {
    str_out("Hello", "World", "Variadic")
}</div>
As seen in the example above, many arguments could be given to the function even though it was a single parameter.
This is a result of the variadic parameter.
Putting the <x class="inline_code">...</x> operator before its name makes parameter variadic.

<div class="info">
  <li>Each variadic parameter, actually is an slice.</li>
  <li>Variadic parameters is not must have an argument in calling.</li>
</div>

<div class="warn">
  <li>A function, can have only one variadic parameter.</li>
  <li>Variadic parameters must be defined as last parameter.</li>
</div>

<div class="title-separator"></div>
<div class="sub-title">Functions with Return Values</div>
Functions can return values.
<br><br>
For example:
<div class="code">fn main() {
    outln(div(10, 2))
}

fn div(a: f64, b: f64): f64 { ret a / b }</div>
The <x class="inline_code">div</x> function divides the two parameters and returns the result as a value.
To return a value, the function must have the data type for the return.
Otherwise, it is considered a function that does not return data.
The returned data must also be compatible with the return data type.
<br><br>
Return values are written with the <x class="inline_code">ret</x> keyword.
Although the keyword <x class="inline_code">return</x> is widely used, <x class="inline_code">ret</x> was considered as an alternative to this keyword, which is both shorter and without losing its meaning.

<div class="title-separator"></div>
<div class="sub-title">Using Function as Data Type</div>
Functions can be used as data type.
It is similar to defining a function.
Just parameters and return value are necessary.
<br><br>
For example:
<div class="code">let my_function: fn(int, int): int</div>
The example at above, is a variable definition with function data type.
The compatible function values is a have two <x class="inline_code">int</x> parameter and returns <x class="inline_code">int</x> value.

<div class="title-separator"></div>
<div class="sub-title">Anonymous Functions</div>
Anonymous functions are like standard functions, but they are anonymous and are usually defined as a value.
Anonymous functions is not have any name.
Defining anonymous function is like declaring a function as a value type.
Just in addition, the block of the function must be written.
<br><br>
For example:
<div class="code">fn main() {
    let make_hello = fn(name: str): str {
        ret "Hello " + name + "!"
    };
    outln(make_hello("Jule"))
}</div>

<div class="topic-separator"></div>
Anonymous functions can access the definitions of the block in which they are defined.
<br><br>
For example:
<div class="code">fn main() {
    let message = "Hello, World!"
    let func = fn() { outln(message) }
    func()
}</div>
The anonymous function defined in the example above uses the <x class="inline_code">message</x> variable belonging to the block it is defined in.
Definitions used from outer blocks can be shadowed within the anonymous function.
</div>

<div class="title-separator"></div>
<div class="sub-title">Multiple Returnable Functions</div>
Functions can returns more then one values.
For that, specify return data-type with multiple type.
<br><br>
For example:
<div class="code">my_func(): (int, int) { ret 18, 96 }</div>
Parentheses are used to specify multiple data types, seen as example at above.
This option, only valid for function returns.

<div class="topic-separator"></div>
What happens when specified single data type with parentheses?
Nothing, you not see compiler error.
But not compile as multi type, compiles single data type.
<br><br>
For example:
<div class="code">fn less_than(x: int, y: int): (bool) { ret x < y }</div>
The example at above, accepted as one type return.

<div class="title-separator"></div>
<div class="sub-sub-title">Return Type Identifiers</div>
To give an identifier to the return types, it's enough to make them look like multiple returns.
The only addition is to give that return value an identifier before the return type.
<br><br>
For example:
<div class="code">fn example(): (x: int, y: int) {
    x = 10
    y = 20
    ret x, y
}</div>
As in the example above.
These identifiers also cause a variable to be created.
For each identifier, the function has a variable initialized in its scope.
<br><br>
As noticed, they are mutable variables by default.
This is because of some of compiler obsessions.
Please refer to the <a href="manual.html?page=memory-immutability">immutability documentations</a> if you don't know anything about it.

<div class="topic-separator"></div>
Also, a function that has at least one return type identifier does not have to have a return expression.
<br><br>
For example:
<div class="code">fn example(): (x: int, y: int) {
    x = 10
    y = 20
    ret
}</div>
Respectively the related variables will be treated as the return statement.

<div class="topic-separator"></div>
If you provide a return expression while there are return identifiers, the expressions you provide as the expression of the identifiers will be accepted.

<br><br>
For example:
<div class="code">fn example(): (x: int, y: int) { ret 90, 100 }</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Multiple Assignment with Multiple Returned Functions</div>
It's too similar to normal assignment.
Give much identifier same count with function return values and give function call as value.
<br><br>
For example:
<div class="code">fn compare_int(x: int, y: int): (bool, bool) { ret x < y, x == y }

fn main() {
    let (less, equals) = compare_int(10, 20)
    outln(less)
    outln(equals)
}</div>
<div class="warn">You can't use multiple returnable functions combined with normal multiple assignments.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Multiple Returns as Multiple Return</div>
When you have a function that returns more than one value, and to use these return values as a return value in another function that returns exactly the same, using a variable too is not a necessity but a preference.
Jule allows you to use the return values of a multi-return function as the return value and automatically maps the values if the return values and data types match exactly. <br>
For example:
<div class="code">fn example1(): (int, str, byte) { ret 143, "STR", 'W' }
fn example2(): (int, str, byte) { ret example1() }

fn main() {
    let (a, b, c) = test2()
    outln(a)
    outln(b)
    outln(c)
}</div>

<div class="title-separator"></div>
<div class="sub-title">Concurrent Calls</div>
Concurrency works on performing multiple tasks at the same time.
This means that you are working on multiple tasks simultaneously in one time frame.
However, you can only do one task for the same time.
This tends to happen in programs where a task is waiting and the program has determined to run another task at idle time.
<br><br>
The keyword <x class="inline_code">co</x> is used to do a concurrent call. <br>
For exmaple;
<div class="code">fn hello_world() { outln("Hello World") }

fn main() {
    co hello_world()
}</div>

<div class="warn">The program does not automatically wait for the execution of concurrent calls to terminate.</div>

<div class="title-separator"></div>
<div class="sub-title">Valid Return Statements</div>
A return expression need not always be specified in the main scope of the function.
The only criterion is that the function returns under all conditions.
Return statements in inner scopes are considered valid if they guarantee the return under all conditions.
<br><br>
For example:
<div class="code">fn get_rate(x: int): int {
    match {
    | x <= 30:
        ret 0
    | x <= 50
        ret 1
    | x <= 100:
        ret 3
    |:
        ret 8
    }
}</div>
The function does not have to return in the main scope, as the match expression above returns a return for every condition.

</div>
`;

const common_concepts_arraysHTML = `
<div class="page-title" style="margin-bottom: 20px;">Arrays</div>
<div class="text">
The array for storing a fixed size sequence of elements.

<br><br>
<div class="sub-title">Syntax</div>
<div class="code">[CONST_SIZE_EXPRESSION]DATA_TYPE</div>
For example:
<div class="code">[50]int</div>

<br><br>
<div class="sub-title">Triple Dot for Auto Computing Size of Array Literals</div>
You can use <x class="inline_code">...</x> for auto computing size of array literal at compile time.
<br><br>
For example:
<div class="code">let x: [...]int = [1, 2, 3, 4, 5] // [5]int</div>

<div class="title-separator"></div>
<div class="sub-title">Access to Elements and Indexing</div>
Index system is simple.
Starts at <x class="inline_code">0</x> and continue step by step, it is never not be negative and float.
<br><br>
Arrays is use indexes to access elements and assignment.
<br>
For example:
<div class="code">fn main() {
    let mut my_array: [3]str = ["Hello", "arrays", "indexes"]
    outln(my_array[0])
    my_array[0] = "Hi"
    outln(my_array)
}</div>
For element access, index is written between brackets (<x class="inline_code">[]</x>).
First statement is declares our array.
Second statement prints first element of our array.
Next statement sets first element of our array as <x class="inline_code">"Hi"</x>.
The last statement prints our array to console.
<br><br>
Output of program;
<div class="code">Hello
[Hi arrays indexes]</div>

<div class="title-separator"></div>
<div class="sub-title">Multidimensional Arrays</div>
Multidimensional arrays is array storing arrays.
<br>
For example:
<div class="code">fn main() {
    let my_array: [2][2]str = [
        ["Apple", "Banana"],
        ["Bred", "Cheese"],
    ]
    outln(my_array)
}</div>
<br>
Output of program;
<div class="code">[[Apple Banana] [Bred Cheese]]</div>

</div>
`;

const common_concepts_slicesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Slices</div>
<div class="text">
Slices is a dynamic allocated array, for this reason not has constant size expression.
Slices are heap allocated and use Jule's reference counting memory management.
A slice can be <x class="inline_code">nil</x> and its default value is <x class="inline_code">nil</x>.
Slices are mutable.
<br><br>
Slices are defined using <x class="inline_code">[ ]</x>.
Actually, you might remember this from the array section of documentation.
They actually mean slice by default.
When used in arrays, so examples always use type annotation, which indicates that it's an array.
If no type annotation is given, A slice literal defaults to the data type of its first element as element type.
<br><br>
Example to slices;
<div class="code">fn main() {
    let mut my_slice: []str = nil
    my_slice = ["Hello", "Jule", "slices!"]
    outln(my_slice)
}</div>
The nil is the default value of slices.
<br><br>
Second statement is set value of <x class="inline_code">my_slice</x> variable as <x class="inline_code">["Hello", "Jule", "slices!"]</x>.
Seen at second statement, slices is should be define with data type.
Last statement is prints to console the <x class="inline_code">my_slice</x> variable.
<br><br>
Output of program;
<div class="code">[Hello Jule slices!]</div>
</div>

<div class="title-separator"></div>
<div class="sub-title">Passing Slices to Variadic Parameter</div>
We know that <x class="inline_code">...</x> is used for Variadic parameters.
We also know that each variadic parameter is actually an slices.
<br>
So can we pass an slice to a variadic parameter?
Yes.
Again, the <x class="inline_code">...</x> operator is used for this.
<br>
<br>
For example:
<div class="code">fn sum(values: ...int) int {
    let mut total: int = 0
    for _, i in values {
        total += i
    }
    ret total
}

fn main() {
    let my_slice = [90, 32, 6, 53]
    let result = sum(my_slice...)
    outln(result)
}</div>
As seen in the example above, the owned variable <x class="inline_code">my_arr</x> holds an slice.
Its elements are compatible with the variadic parameter.
To send, it is sufficient to follow the <x class="inline_code">...</x> operator.

<div class="warn">If you pass slice to variadic parameter, you can't pass more value.</div>

<div class="title-separator"></div>
<div class="sub-title">Slicing</div>
You can slice compatible types with indexing.
As a result of slicing a slice, a new allocation is not created, no copying is performed.
The relevant memory section of the sliced slice is referenced and its length is limited by the length of the slice.
<br><br>
<div class="sub-sub-title">Syntax</div>
<div class="code">EXPRESSION[START_EXPRESSION:TO_EXPRESSION]</div>
For example:
<div class="code">my_slice[2:10]</div>
The example at above, slices items starts at <x class="inline_code">2</x> to <x class="inline_code">10</x>
The <x class="inline_code">10</x> index is not included.
So if you want slice all components of slice after the index <x class="inline_code">2</x>, give length of slice.

<br><br>
<div class="sub-sub-title">Auto Indexing</div>
If you don't give the start index expression, accepts as <x class="inline_code">0</x>. <br>
If you don't give the to index expression, accepts as length.
<br><br>
For exmaple;
<div class="code">fn main() {
    let my_slice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[2:5]) // [3, 4, 5]
    outln(my_slice[:])   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[:10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[4:])  // [5, 6, 7, 8, 9, 10]
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Supported Types</div>
Arrays, slices and strings.

<div class="title-separator"></div>
<div class="sub-title">Allocating Slices</div>
A certain size slice can be allocated with the builtin <x class="inline_code">make</x> function.
<br><br>
For example:
<div class="code">fn main() {
    let s = make([]int, 20)
    outln(s)
}</div>
The example at above, the <x class="inline_code">s</x> variable is 20 sized slice.

`;

const common_concepts_mapsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Maps</div>
<div class="text">
Maps is a hashmap. Maps a unique key value to a value.
<br><br>
Example to maps;
<div class="code">fn main() {
    let mut mymap: [i8:str] = {
        0: "CPU",
        1: "RAM",
        2: "GPU"
    }
    outln(mymap)
}</div>
The example above shows how a map is defined and its data-type representation.
To describe a map, curly braces are opened after the data type.
Each key-value pair is separated by a comma.
Keys and values are separated by colons, the key comes first, then the value.
<div class="info">In iterations, the first variable is the key and the second variable is the value.</div>

<div class="title-separator"></div>
<div class="sub-title">Access to Elements and Indexing</div>
To get the value of a key, it is sufficient to index it with the key. <br>
For example:
<div class="code">mymap[1]</div>
The example at above, gives <x class="inline_code">"RAM"</x> value. <br>
If you try to access a key that does not exist, it will return the default value.

<div class="topic-separator"></div>
To change the value of a key, it is sufficient to do a classic assignment by indexing the key. <br>
For example:
<div class="code">mymap[1] = "SSD"</div>
<br><br>
To add a key-value pair that doesn't exist, it's still just a classic assignment. <br>
For example:
<div class="code">mymap[3] = "HDD"</div>
If the key does not exist when you assign it, the key is generated and matched with the value you assigned.
</div>
`;

const common_concepts_control_flowHTML = `
<div class="title" style="margin-bottom: 20px;">Control Flow</div>
<div class="text">
We may want to guide the progress of the program with various conditions or repeat certain commands.
That's what control flowers are for.
Many programming languages have their control flows.

<div class="tabcontrol" style="margin-top: 50px;">
  <div id="tab-common-concepts-iterations" class="tab" onclick="select_tab_event(0)">Iterations</div>
  <div id="tab-common-concepts-if-expressions" class="tab" onclick="select_tab_event(1)">If Expressions</div>
  <div id="tab-common-concepts-match-expressions" class="tab" onclick="select_tab_event(2)">Match Expressions</div>
  <div id="tab-common-concepts-goto-statements" class="tab" onclick="select_tab_event(3)">Goto Statements</div>
</div>
<div class="tabcontrol-content">
</div>
</div>
`;

const common_concepts_enumsHTML = `
<div class="title" style="margin-bottom: 20px;">Enums</div>
<div class="text">
Enumerations are a structure that allows to collect numeric constant values together.
This increases the readability of the code and makes it easier to maintain.
The keyword <x class="inline_code">enum</x> is used to declare an enum. <br>
For exmaple;
<div class="code">enum FileMode {
    Read  = 35,
    Write = 89,
    Both,
}

fn main() {
    outln(FileMode.Read)
}</div>
As seen in the example above, there is an enumeration definition.
If you do not assign a value to the enumeration elements, the index value is automatically assigned.
In this case, the element <x class="inline_code">both</x> in the example above has the value <x class="inline_code">2</x>.

<div class="info">
  <li>You can use an element before them as a value in enumerations.</li>
  <li>Enumerations has <x class="inline_code">int</x> data type by default.</li>
</div>
<div class="warn">You can't use any global, function or etc. in custom value expressions.</div>

<div class="title-separator"></div>
<div class="sub-title">Custom Data Types</div>
If you want to give enums a data type other than the default, it is possible to do so. <br>
For example:
<div class="code">enum FileMode: u8 {
    Read,
    Write,
    Both,
}

fn main() {
    outln(FileMode.Read)
}</div>
The above enumeration has the data type <x class="inline_code">u8</x>.

<div class="warn">You can use only integer or str data types.</div>

<div class="title-separator"></div>
<div class="sub-title">Default Values</div>
The default values ​​of enums are always what is the default value of the data type they use.
For example, <x class="inline_code">0</x> for <x class="inline_code">int</x> and empty string for <x class="inline_code">str</x>.
If your enum definition should always define a default field, set its first field to the default value.
In this way, your compiler-initiated enum value will be exist in fields.
If you don't do this, the developers will not be able to match the enum value in code at all if the default value is not present in the fields.

<div class="title-separator"></div>
<div class="sub-title">Casting</div>
You may want to cast your enum for various reasons.
Normal casting rules apply here. When casting an enum value, it is based on the enum value type.
<br><br>
<div class="code">enum MyEnum {
    MyVal = 10
}

fn main() {
    _ = (int)(MyEnum.MyVal)
    _ = (u8)(MyEnum.MyVal)
}</div>

<div class="title-separator"></div>
<div class="sub-title">Type Safety</div>

Enums consider themselves a data type.
Therefore, even an enum with an int data type cannot be handled directly with an int data type.
Enum type only considers itself as a valid type.
<br><br>
It must be cast in order to be processed with different types, but due to type safety.
However, you also cannot cast an integer value to an enum that uses the integer type.
Assignments should always be of their own type.
<br><br>
Enum basically supports <x class="inline_code">==</x> and <x class="inline_code">!=</x> operators. But for enum types using integer, you can also use the <x class="inline_code">|</x> and <x class="inline_code">&</x> operators.

</div>
`;

const common_concepts_structuresHTML = `
<div class="title" style="margin-bottom: 20px;">Structures</div>
<div class="text">
Structures (aka structs) are a good way to collect many variables in one spot.
Every declaration within the structure is called a member (aka field).
The difference from a slice or aray is that contain values of the same data-type, while each of the struct fields can have a different data type.
Also, the fields of structures are accessed with an identifier.
<br><br>
For example to declaration a struct;
<div class="code">struct Employee {
    name: str
    age: u8
    title: str
    salary: u32
}</div>
Members of structures are the same as a variable definition except <x class="inline_code">const</x> keyword.

<div class="title-separator"></div>
<div class="sub-title">Creating a Instances of Structures</div>
To instantiate structs, you can either give the values of the fields using braces after the struct name, or create them with their default values.
<br><br>
For example:
<div class="code">struct Character {
    name: str
    age: u8
    title: str
}

fn main() {
    let anon = Character{}
    let frodo = Character{"Frodo", 50, "Hobbit"}
    let gandalf = Character{
        name: "Gandalf",
        age: 24000,
        title: "Wizard",
    }
    outln(anon)
    outln(frodo)
    outln(gandalf)
}</div>

<div class="title-separator"></div>
<div class="sub-title">Methods for Structures</div>
Structures can have special functions for themselves.
Similar to class methods of object oriented programming.
You can use structure generics in function and have generics for your function.

<div class="warn">You can't shadow generics.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Implementing Methods</div>
To implement method(s) to structure, the following syntax is applied;
<div class="code">impl STRUCT_IDENTIFIER {
    // Methods
}</div>

<div class="warn">Just give structure identifier as receiver. Not generics or type alias.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Receiver Parameters</div>
Receivers indicate how instance the function will use.
Receiver parameters must be the first parameter of each method.
<br><br>
There are two types of receiver parameters;
<br><br>
<strong>Reference Receiver Parameter</strong> <br>
Reference receivers require the function to be a reference.
The function can only be called from a reference instance of the structure.
<br><br>
<strong>Copy Receiver Parameter</strong> <br>
Copy receivers, on the other hand, allow changes made within the function to be reflected in the structure if receiver is mutable.
However, when the structure is given as arguments to different functions, or in a different state, it is copied.
That is, it is only variable within itself.
<div class="warn">Not deep copy.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Syntax</div>

<div class="code">fn IDENTIFIER([RECEIVER_PARAMETER], PARAMETERS...): RET_TYPE {
    // Body
}</div>

<br><br>
For example to receiver parameters:
<div class="code">// Immutable Reference Receiver
fn method(&self): str { /* Body */ }</div>
<div class="code">// Mutable Reference Receiver
fn method(mut &self): str { /* Body */ }</div>
<div class="code">// Immutable Copy Receiver
fn method(self): str { /* Body */ }</div>
<div class="code">// Mutable Copy Receiver
fn method(mut self): str { /* Body */ }</div>

<br>
For example to implementing method to structure:
<div class="code">impl Position {
    fn is_origin(self): bool {
        ret self.x == 0 && self.y == 0
    }
}</div>
He example at above, implements <x class="inline_code">is_origin(): bool</x> method to <x class="inline_code">Position</x> structure.

<div class="title-separator"></div>
<div class="sub-sub-title">The <x class="inline_code">self</x> Keyword</div>
The <x class="inline_code">self</x> keyword represents the receiver a receiver function has.
It is used to access and use the members of the structure.
The data type is the same as the data type of the receiver.

<br><br>
For example:
<div class="code">impl Person {
    fn get_name(self): str {
        ret self.name
    }
}</div>
In the example above, the <x class="inline_code">name</x> field of the "<x class="inline_code">Employee</x> structure instance is accessed with the <x class="inline_code">self</x> keyword.

<div class="title-separator"></div>
<div class="sub-title">Reference Literal Instances</div>
You can heap-allocated structure instancing.
The unary <x class="inline_code">&</x> operator returns reference to if you use at instancing.
<br><br>
For example:
<div class="code">let pos = &Position{x: 10, y: 20}</div>
<x class="inline_code">pos</x> variable is the reference points to heap-allocated <x class="inline_code">Position</x> structure instance.

<div class="warn">
If you not have any idea about references, check the <a href="./manual.html?page=memory-memory-management">memory management documentations</a>.
</div>

</div>
`;

const traitsHTML = `
<div class="title" style="margin-bottom: 20px;">Traits</div>
<div class="text">
Traits can be used to represent common behaviors.
As a result of the implementation of a trait by one or more structures that exhibit common behavior, the trait it applies becomes usable wherever it is used.
Trait can only contain functions.
Every definition it contains is marked as <x class="inline_code">pub</x>.
A trait can be <x class="inline_code">nil</x>

<div class="title-separator"></div>
<div class="sub-title">Define a Trait</div>

Functions in trait should only exist as prototypes.
<br><br>
For example:
<div class="code">trait Person {
    fn name(): str
    fn age(): u8
}</div>

All constructs that implement the trait above must have the methods <x class="inline_code">name() str</x> and <x class="inline_code">age() u8</x>.

<div class="title-separator"></div>
<div class="sub-title">Comparing Traits</div>
Equals to comparisons returns true if two traits uses same allocation (so, same pointer address), false if not.

</div>
`

const traits_implementingHTML = `
<div class="title" style="margin-bottom: 20px;">Implementing</div>
<div class="text">
To implement a trait to structure, the following syntax is applied;
<div class="code">impl TRAIT for STRUCT {
    // Implementations...
}</div>

<x class="inline_code">TRAIT</x>: Trait to implement<br>
<x class="inline_code">STRUCT</x>: Structure to implement<br>

<br>
For example:
<div class="code">const PI = 3.14159265359

trait Shape {
    fn area(self): f32
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    fn area(self): f32 {
        ret self.width * self.height
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    fn area(self): f32 {
        ret PI * self.r * self.r
    }
}

fn main() {
    let rect: Shape = Rectangle{90, 5}
    let circ: Shape = Circle{90.5}
    outln(rect.area())
    outln(circ.area())
}</div>

</div>
`

const memoryHTML = `
<div class="title" style="margin-bottom: 20px;">Memory</div>
<div class="text">
  Memory skills of Jule. <br><br>
  Pointers, memory management, allocations...
  <br><br> 
  The Jule compiler is very obsessed with some things.
  One of these is the memory safety.
  In this section, we'll explore the compiler's  obsessions.
  These obsessions are for the developers.
</div>
`;

const memory_immutabilityHTML = `
<div class="title" style="margin-bottom: 20px;">Immutability</div>
<div class="text">
  One approach of the compiler from its security obsessions is that by default variables are immutable.
  You've probably seen in the structure documentations that the compiler insists on using a reference to the reference receiver.
  This is just one of the compiler's security obsessions.
  But right now, we're taking a look at another similar obsession: immutability by default!
  <br><br>
  <div class="info">You can also see this approach in Rust.</div>
  <br><br>
  The fact that a variable is immutable by default requires that you do so consciously if you want to change it.
  Let's see why this is a security obsession for the compiler:
  <br><br>
  Jule has data types in which it is mutable. These are:
  <ul>
    <li>Pointer</li>
    <li>Slice</li>
  </ul>
  These are types that point to commonalities among the variables with which they are shared.
  You may want to ensure that one of these types has not changed.
  You are safe about this as variables are immutable by default.
  This is possible if you want it to be mutable.
  But before we get into how this is done, let's take a look at how obsessed the compiler is with immutability.
  <br><br>
  If you are using a mutable data type and your data type is in an immutable variable, the compiler will never allow you to assign it to a mutable variable.
  If the compiler allows it, you will lose its immutability.
  The value of the immutable variable can be changed with the new mutable variable.
  <br><br>
  For the same reason, the compiler will force you to return a mutable variable if you also have one of these data types as a return expression.
  This is precisely because this variable can change.
  The compiler has no idea whether a data type is mutable.
  All are basically immutable, with the exception of the ones listed above.
  <br><br>
  An immutable variable with mutable data type returned from the function then poses a unsafety.
  Because it is not possible to specify it as immutable in return data type.
  That's why the compiler assumes that the return value can change, and shows you one of its strict obsessions about it: if you're returning, please use a mutable variable.
  Even if you're just returning the variable, the compiler doesn't want to understand it.
  According to the compiler, if that variable is an immutable and is also used within the function, the immutable obtained instance obtained from the return value may break this immutability.
  Even if there is no such thing, the compiler will continue to insist on this.
  <br><br>
  Okay, so why doesn't the compiler implement immutability by default only for those data types?
  This is a good question. The answer lies in the compiler wanting to be stable.
  It is a mental overhead during the development phase that the developer has to constantly consider these data types.
  This stability of the compiler ensures that the developer always knows that all variables are immutable by default.
  This also helps the developer to understand what he or she is changing and will change while developing and reading algorithms.
  It is more obvious which variables should be paid attention to, especially when using concurrency.
  
  <div class="title-separator"></div>
  <div class="sub-title">Mutability</div>
  Let's learn to say how we want a variable that is immutable by default to be mutable.
  The keyword <x class="inline_code">mut</x> is used for this.
  Before defining a variable, declare it mutable with this keyword.
  Then you will have a mutable variable.
  <br><br>
  But before that, let's make a deliberate mistake to better understand immutability:
  <div class="code">fn main() {
    let x = 20
    x++
    outln(x)
}</div>
  The example above is absolutely wrong.
  Because the variable <x class="inline_code">x</x> we have is an immutable variable.
  And the <x class="inline_code">x++</x> statement definitely breaks immutability.
  In this case, compiler will give error.
  Now let's repeat the same example using a mutable variable.
  <div class="code">fn main() {
    let mut x = 20
    x++
    outln(x)
}</div>
Currently we want our variable as mutable so the compiler doesn't object to anything.

<div class="info">All literals and received pointers are considered mutable.</div>

<div class="title-separator"></div>
<div class="sub-title">Interior Mutability</div>
When an instance of a struct is immutable, you cannot use it with mutable methods because this compromises its immutability guarantee.
However, you may still need to change the fields of an immutable structure.
For this you need to use interior mutability.
Since you cannot call a mutable method, your method will remain immutable, but thanks to interior mutability, you will be able to obtain the fields you want as mutable.
<br><br>
It is recommended that fields within interior mutability not be public, although the compiler leaves this to the discretion of the developer.
Because when interior mutability fields vary in an immutable instance, the developer using this immutable copy may encounter a change even though he or she does not expect a change on the copy.
Therefore, if fields within interior mutability need to be accessible, it is recommended to use wrapper methods.
<br><br>
Now let's take a look at how interior mutability is achieved.
Actually, this is a pretty simple.
If you are a developer who has used C++ before, you may be familiar with the <x class="inline_code">mutable</x> keyword in this regard.
Similarly, Jule uses the already existing keyword <x class="inline_code">mut</x> for mutability.
For interior mutability, the relevant field must be declared with the <x class="inline_code">mut</x> keyword.
This means that field can exhibit interior mutability.
<br><br>
For example:
<div class="code">struct MyStruct {
    mut x: int
    y: int
}</div>
In this example, the mutability of the <x class="inline_code">y</x> field is fully responsive.
However, the variable <x class="inline_code">x</x> exhibits interior mutability.
That's why it can be changed in methods without the need for <x class="inline_code">mut self</x> receiver parameter.
<br><br>
The point that should not be forgotten in this regard is that even if there is interior mutability, this field cannot be changed from outside the structure with an immutable instance.
Interior mutability only applies inside the structure itself.

</div>
`;

const memory_pointersHTML = `
<div class="title" style="margin-bottom: 20px;">Pointers</div>
<div class="text">
<div class="title-separator"></div>
Each location at memory have an address.
These addresses points to location at memory.
Pointers are variables can store this memory addresses.
<br><br>
To declare a pointer data-type, use <x class="inline_code">*</x> operator.
<br>
Example;
<div class="code">let x: *int = nil</div>
That's pointer for <x class="inline_code">int</x> type.

<div class="title-separator"></div>
<div class="sub-sub-title">Getting Pointer of Variables</div>
The <x class="inline_code">&</x> operator used to get pointer of variable.
<br>
For example:
<div class="code">fn main() {
    let x: int = 10
    let y: *int = &x
    outln(y)
}</div>
The <x class="inline_code">y</x> variable is now store memory address of <x class="inline_code">x</x> variable.

<div class="warn">
Pointers are taken as each mutable.
</div>

<div class="topic-separator"></div>

<div class="warn">
What follows is related to Unsafe Jule.
If you're not familiar with this topic, check out the <a href="manual.html?page=unsafe-jule">Unsafe Jule documentations</a>.
</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Accessing Values on Pointers</div>
The <x class="inline_code">*</x> operator is used to access the value in the memory address that the pointer store.
<br><br>
For example:
<div class="code">fn main() {
    let x: int = 10
    let y: *int = &x
    outln(y)            // Prints stored address
    unsafe { outln(*y) } // Prints value at address (so 10)
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Assign Values to Pointers</div>
Pointers can take on value assignment just like a variable, with values of the appropriate data type, because they are already variables.
<br><br>
For example:
<div class="code">fn main() {
    let x: int = 10
    let z: *int = &x // The 'z' store now memory address of the 'x' variable.
    let y: int = 98
    z = &y           // The 'z' store now memory address of the 'y' variable.
}</div>
<div class="topic-separator"></div>
Additionally, pointers can assign the value of the memory address they store.
<br>
The <x class="inline_code">*</x> operator used for that too.
<br><br>
For example:
<div class="code">fn main() {
    let x: int = 10
    let y: *int = &x
    unsafe { *y = 59 } // Assign value
    outln(x)          // Prints 59
}</div>

<div class="title-separator"></div>
<div class="sub-title">Unsafe Pointers</div>
Developers who have previously worked with programming languages such as C and C++ are probably familiar with void pointers.
Jule has void pointers.
To obtain a void pointer, an unsafe pointer is used.
Unsafe pointers can receive assignments from any pointer type.
It is general purpose.
Unsafe pointer is not an explicit pointer, it cannot be used with postfix and cannot be deferenced.
<br><br>
These pointers are known as unsafe pointers in Jule because they are actually more unsafe than regular pointers.
This is mainly because they are not a pointer to a data type.
It is assumed that they simply point to a memory location.
Therefore, there is no guarantee that it is correct, even if cast to a datatype pointer.
The developer must know the data type at the pointed address.
Unsafe pointers are not helpful in this regard.
<br><br>
For example:
<div class="code">fn main() {
    let a: int = 20
    let ptr: *unsafe = &a
    unsafe { outln(*( (*int)(ptr) )) }
}</div>
In this example, the variable <x class="inline_code">ptr</x> is an unsafe pointer and points to the variable <x class="inline_code">a</x>.
Then we see that this pointer is cast to the <x class="inline_code">int</x> pointer and deferenced.
As a result, we get the value the <x class="inline_code">20</x> because was done right.

</div>
`;

const memory_memory_managementHTML = `
<div class="title" style="margin-bottom: 20px;">Memory Management</div>
<div class="text">
Jule does the memory management itself.
But it's not fully automatic.
You decide where and when to allocate, and it's self-evident which variables are heap-allocated.
It guarantees memory safety.
<br><br>
Jule uses reference counting for heap allocations.
It is automatically released when the reference count of the pointer reaches zero, that is, when it is certain that the heap allocation is no longer used.
It is guaranteed that no allocation goes unnoticed and is also not released while the allocation is still in use.

<div class="title-separator"></div>
<div class="sub-title">References</div>
References are heap allocation data types.
A reference is annotated by an <x class="inline_code">&</x> operator.
<br><br>
A reference is always heap-allocation and is always within the reference counting.
When a pointer to a reference is taken, you don't get a pointer to the reference.
You get a pointer to the address of the heap allocation that the reference is using.
<br><br>
Because: <br><br>
<strong>Reference Pointer is Unnecessary</strong> <br>
It is unnecessary for a pointer to point to a reference.
You're probably doing this to share the same address.
The truth is, references already do that.
So instead of getting a pointer to a reference, using the reference directly gives the same experience.
Therefore, pointers to a reference are not supported.
<br><br>
<strong>More Productive</strong> </br>
As explained above, you are probably doing this to share the same address.
Getting a pointer to a reference and getting a pointer pointing to the address that reference is pointing to should then be the same for you.
If you had a pointer to a reference, that would raise issues for you.
Because the references you point to are also variables, for example, when using the atomicity functions in the standard library, instead of performing an atomic operation for the allocation of that reference, you have to perform an atomic operation for the reference itself.
This atomicity is unnecessary because what you need is the atomicity that is above the allocation of the reference.

<br><br>
Example to reference data type anotations:
<div class="code">&int</div>
<div class="code">&MyStruct</div>
<br><br>
You can't use as reference these types:
<ul>
  <li>Enum</li>
  <li>Pointer</li>
  <li>Reference</li>
  <li>Array</li>
</ul>

<div class="title-separator"></div>
<div class="sub-sub-title">Initialization</div>
The built-in <x class="inline_code">new</x> function is used to make the reference.
Please refer to the <a href="stdlib/builtin.html">builtin</a> library documentation for this function.
<br><br>
It can be used in two ways.
The first type allows you to get only one reference, but that reference is an uninitialized reference, meaning it does not point to any allocation and does not perform reference counting.
<br><br>
For example:
<div class="code">fn main() {
    let x = new(int, 100)
    outln(x)
}</div>
The <x class="inline_code">x</x> variable is integer reference, but not have allocation.
<br><br>
The second type is references initialized with a value.
These references are initialized with an allocation when they are created and perform reference counting, the given value is assigned to the created allocation.
<br><br>
For example:
<div class="code">fn main() {
    let x = new(int, 100)
    outln(x)
}</div>
The <x class="inline_code">x</x> variable is a heap-allocated reference initialized with 100.

<div class="topic-separator"></div>
References that are automatically initialized by the compiler are created as null references.
<br><br>
For example:
<div class="code">fn main() {
    let x = make([]&int, 1)
    outln(real(x[0])) // false
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Allocation Management</div>
References can be <x class="inline_code">nil</x> (aka null). 
This is safe, when a <x class="inline_code">nil</x> reference is used unsafe it will give you a panic that it is nil.
When a reference is set to nil, the reference count continues to run.
So when you assign to nil any reference, this reference countdown by reference count and deallocates if necessary.
<br><br>
Classic assignment cannot be made to assign a reference to nil.
Classic assignments are always assignments to the data carried by the reference.
If the data type carried by the reference is nil compatible, the nil assignment is made to the data it contains.
<br><br>
Assigning a reference to nil does not make all references to be set to nil.
It simply ensures that the relevant reference no longer performs reference counting and disposes of ownership of the allocation.
<br><br>
The built-in <x class="inline_code">drop</x> function drops allocation and reference counting, sets reference to nil.
If you want to check if the reference is zero and has allocation, use the built-in <x class="real">real</x> function.
The <x class="real">real</x> function returns boolean.
<br><br>
For example:
<div class="code">fn main() {
    let mut x = new(int, 20)
    outln(real(x)) // true
    drop(x)
    outln(real(x)) // false
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Understanding Reference Counting</div>
A reference counting heap counts each time it gets a reference to a dedicated pointer.
It is deducted from the count when it loses its references.
When the reference count reaches zero, it releases the allocation as it is no longer used.
<br><br>
Reference counting is not a program running in the background.
Therefore, it does not host variable loads at runtime like the garbage collector and its release times are always specific.
Reference counting offers the developer a deterministic memory management.
<br><br>
For example:
<div class="code">fn test() {

    // Make heap-allocation, returns heap-allocated &int initialized with 100
    // Ref count is 1
    let mut x = new(int, 100)

    // Prints 100
    outln(x)

    // Make new heap-allocation with 50, ref count is 1
    // Frees old allocation because ref count is 0 now
    x = new(int, 50)

    // Ref count is 2 now of current allocation
    // The y referencing to allocation of x
    let y = x

    // Prints 50
    outln(y)

} // Frees allocation because ref count is 0, destroyed all references</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Critical Points</div>
Jule has language-integrated concurrency and for concurrency, reference counting should be atomic.
Reference counting may not occur correctly if there is no atomicity in concurrency.
That is, when a reference is referenced by a different reference, it must do so in an atomic way.
But the fact that this happens all the time raises a problem: the critical impact on performance.
<br><br>
Atomic operations are essential for references to be thread-safe, but in cases where this is not necessary?
Atomicity means overhead, which means loss of performance.
It is inherently unnecessary to have atomicity when atomicity is not required.
Jule references works atomic because thread-safe must be guaranteed.
<br><br>
This means that references will use atomicity for reference counting on each copy.
This atomicity creates an atomicity overhead in memory with each copy operation.
Obviously this shouldn't be a major cause of performance degradation in your runtime in most cases.
However, references also contain a memory footprint.
This memory footprint is the memory space allocated separately for the counter used in reference counting.
<br><br>
All of these are minor overheads, but for performance-critical software, the developer may want to eliminate them.
There is no way to do this using references as the runtime paradigm of references cannot be changed.
Therefore, the developer should use to the less safe manual memory management.

<div class="topic-separator"></div>
Some data types of Jule also use references in the background.
This is because they reference each other the space they allocate.
This is why some types use background references to minimize the amount of allocations.
Therefore, they have additional overhead such as the additional atomicity of references and the memory space allocated for reference counting.
<br><br>
List of all types which is performs reference counting:
<ul>
  <li>Reference</li>
  <li>Slice</li>
  <li>Any</li>
  <li>Trait</li>
</ul>

<div class="title-separator"></div>
<div class="sub-sub-title">Using References with Reference-Counted Types</div>
Data types that already perform reference counting can be used with references if supported.
This does not pose any problem.
References perform a reference counting in themselves, if the data they carry has a reference counting, it does not interfere with them.
<br><br>
If the reference count of the migrated data has not reached zero, but the reference carrying it has now released its allocation, there is no problem.
This is because the reference counting and allocation control of the data it carries take place independently.
<br><br>
For example:
<div class="code">fn main() {
    let ref = new([]int, [1, 2, 3, 4])
    let s: []int = ref
    drop(ref)
    outln(s)
}</div>
The <x class="inline_code">ref</x> variable holds a slice.
Slices are data types that perform reference counting in themselves.
The slice carried by the reference is assigned to the variable <x class="inline_code">s</x> and then the reference is dropped, this reference will make the counting zero, so the allocation of the reference is freed.
<br><br>
This does not pose any problem.
Everything works normally when the variable <x class="inline_code">s</x> is printed.
The reference count of the slice did not reach zero and therefore its allocation was not released.
The allocation of the reference passed to the variable <x class="inline_code">s</x> as a copy, not a pointer.
For this reason, slice continued to protect its own allocation.

<div class="info">
This happens the same for all reference-counted data types supported by references.
</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Reference Cycles</div>

Jule does not handle reference cycles.
Obviously this can create a significant overhead at runtime and is a negative factor in program runtime for performance-critical software development processes.
Therefore, reference cycles should be considered by the developer.
What makes cycles so important is not that they cause any errors at runtime, it's that they can leak memory.
<br><br>
If the references point to each other or to themselves, a cycle occurs, and even if it goes out of use, the allocation is not freed, so memory leaks can occur.
The best way to avoid this is to consider cycles in the programming phase.
<br><br>
For example:
<div class="code">struct A {
    b: &B
}

struct B {
    a: &A
}

fn main() {
    let mut a = &A{}
    let mut b = &B{}
    a.b = b
    b.a = a
}</div>

There is a cycle in the above code.
Obviously this cycle is creates a memory leak.
If there is such a cycle risk, the easiest and shortest solution is to drop the references so that the cycle will break.
<br><br>
For example:
<div class="code">struct A {
  b: &B
}

struct B {
  a: &A
}

fn main() {
  let mut a = &A{}
  let mut b = &B{}
  a.b = b
  b.a = a
  drop(b.a)
}</div>

The reference count cycle is broken as one of the parties causing the cycle is removed, so there shouldn't be any memory leaks in the above code.
<br><br>
Software developers may not always have code that they can cycle through.
But when cycles do occur, they can be difficult to spot and locate.
So just being a little more careful when there are potential cycle situations can make things a lot safer.

</div>

<div class="title-separator"></div>
<div class="sub-title">Slices</div>
Slices have a capacity, but don't free unused capacities.
This capacity can be used during slicing.
If you have a slice with a length of 5 but its capacity is 8, you can expand the slice to use all the capacity by giving 8 during slicing.
<br><br>
For example;

<div class="code">fn main() {
    let mut s = [1, 2, 3]
    s = append(s, 4, 5)
    s = s[:s.len-2]
    outln(s)  // [1 2 3]
    s = s[:]
    outln(s)  // [1 2 3]
    s = s[:5] // [1 2 3 4 5]
    outln(s)
}</div>
`;

const unsafe_juleHTML = `
<div class="title" style="margin-bottom: 20px;">Unsafe Jule</div>
<div class="text">
We know, Jule is safe.
But you are a developer who knows what you are doing, you are confident.
There is the <x class="inline_code">unsafe</x> keyword for you.
With this keyword, you can circumvent Jule's safety and engage in unsafe behavior.
This is understandably insecure and can compromise your program's safety.
All responsibility in this matter belongs to you as the developer.
<br><br>
The reason for the unsafe Jule is that the computer is basically unsafe by nature.
Sometimes you need this unsafety.
If Jule didn't provide this, it would take more effort to solve some things with Jule.
Maybe you could take an approach like using C++ interoperability, but is the effort really necessary?
C++ interoperability is a nice feature and in some cases provides significant benefits.
But having a C++ dependency of your Jule code exposed isn't always a good thing.
It is very important that you can write pure Jule.
As a developer, the only time you should feel like you should use C++ interoperability is when you really need to use C++ code.
<br><br>
Unsafe Jule can also allow you to get performance gains and better memory optimization.
For example, if you are sure that a pointer never, ever needs to be guaranteed, you can achieve significant gains by obtaining this pointer with Unsafe Jule.
Because that means there will be no new memory allocations and reference counting.

<div class="title-separator"></div>
<div class="sub-title">Unsafe Benefits</div>
The mentioned <x class="inline_code">unsafe</x> keyword allows us to use these powers.
If you don't switch to insecure Jule, secure Jule will not allow you to engage in unsafe behavior.
<br><br>
Benefits of Unsafe Jule:
<ul>
  <li>Break immutability</li>
  <li>Deference a raw pointer</li>
  <li>Postfixes for raw pointers</li>
  <li>Indexing with raw pointers</li>
  <li>Cast raw pointers</li>
  <li>Call unsafe functions or methods</li>
</ul>

Note that this does not lead to a completely unsafe use of Jule.
Other than the listed unsafe behaviors, Safe Jule will continue to show itself.
This means you get a level of safety even with unsafe blocks.
<br><br>
Let's take a look at the unsafe behaviors listed above:

<div class="title-separator"></div>
<div class="sub-title">Break Immutability</div>
If a variable is immutable and has mutable data type, Safe Jule does not allow assigning it to a mutable variable.
Memory safety on this is mentioned in the <a href="manual.html?page=memory-immutability">immutability</a> documentations.
There is a way to break it. It naturally means breaking safety as well, but you are conscious of it.
Unsafe Jule does not encourage you to be safe about it.
<br><br>
The knowledge that the pointers are obtained as mutable when they are received is important in this regard.
So if you take the pointer of an immutable variable and use it mutable, you can change the data of the immutable variable.
Since you can only assign to pointers with Unsafe Jule, you will be aware that this is already an action that can create unsafety.
<br><br>
For example:
<div class="code">fn main() {
    let x = 10
    let mut xp = &x
    unsafe { *xp += 20 }
    outln(x) // 30
}</div>

<div class="title-separator"></div>
<div class="sub-title">Derefence a Raw Pointer</div>
Unsafe Jule allows deference raw pointers.
<br><br>
For example:
<div class="code">fn main() {
    let x = 200
    let ptr = &x
    unsafe { outln(*ptr) }
}</div>
Note that no safety is provided in this regard.
Pointers can benefit you, but you have to provide safety yourself.
You need to be wary of dangling pointers, buffer overflows, and similar memory issues.


<div class="title-separator"></div>
<div class="sub-title">Postfixes for Raw Pointers</div>
Unsafe Jule supports postfixes for raw pointers.
<br><br>
For example:
<div class="code">fn print_slice_components_with_unsafe(slc: []int) {
    unsafe {
        let mut ptr = &slc[0]
        let mut end = &slc[slc.len-1]
        end++
        for ptr < end {
            outln(*ptr)
            ptr++
        }
    }
}</div>
<div class="title-separator"></div>
<div class="sub-title">Indexing with Raw Pointers</div>
This is especially true if you have a pointer to an array (for example, an array pointer allocated with <x class="inline_code">std::mem::c</x> package), which allows you to use the pointer just like an array.
Maybe you would prefer to use a wrapper to help with the length for the offset, as they are just raw pointers and don't have a way to get the lengths right away like in Jule's slice or array structures.
<br><br>
The fact that this operation is covered by Unsafe Jule is not only because it has widespread pointer unsafety, but also because there is a possibility of overflow and this is not checked.
For example, slice and array are safe and controlled in this regard.
<br><br>
When you have an array of pointers, it can be interpreted semantically like this:
It is a pointer to the component type, as the pointer usually points to one of the memory areas.
So think of it like a pointer to the field of an element of an array.
Indexing is sensitive to the data type according to the offset, skipping that much space in the memory, finding the position of the offset and selecting that area.
<br><br>
To better understand data type sampling, array pointers can be interpreted as:
<ul>
    <li> <x class="inline_code">*int</x> = <x class="inline_code">[]int</x> </li>
    <li> <x class="inline_code">*str</x> = <x class="inline_code">[]str</x> </li>
</ul>
For example:
<div class="code">ptr[9]</div>
Suppose the variable <x class="inline_code">ptr</x> is <x class="inline_code">*int</x>.
Let this pointer be an array pointer.
The above expression takes the data at index 9 of this array.

<div class="title-separator"></div>
<div class="sub-title">Cast Raw Pointers</div>
You can cast a pointer to an integer with valid integer types or cast a raw pointer from an integer.
However, you can also cast a pointer to a pointer of different type.
<br><br>
For example:
<div class="code">let ptr: int = 0
let unsafe_ptr = unsafe { (*str)(ptr) }</div>

<div class="title-separator"></div>
<div class="sub-title">Call Unsafe Functions or Methods</div>
You can call unsafe functions with Unsafe Jule.
Functions or methods that qualify as unsafe can only be called with Unsafe Jule.
Functions that qualify as unsafe can only be called with an Unsafe Jule and have an Unsafe Jule throughout their entire body.
<br><br>
For exmaple:
<div class="code">unsafe fn my_unsafe_fn() { /* ... */ }</div>

<div class="info">
Before qualifying a function or method as unsafe, make sure that the function is not safe all time.
Even if it performs unsafe operations, it is better for the function to act as a safe wrapper than to qualify as unsafe if safety is guaranteed.
<br><br>
If safety depends on parameters and other external factors then it is better to qualify as unsafe.
</div>

</div>
`;

const error_handlingHTML = `
<div class="title" style="margin-bottom: 20px;">Error Handling</div>
<div class="text">

The program should naturally generate and check for errors in some cases.
This core topic deals with error handling.
Jule uses panics and the error structure.
Catching panics and handling errors happens through them. It is plain and simple.

</div>
`;

const error_handling_error_codingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Error Coding</div>
<div class="text">

Error coding is Jule's primary recommended method for error handling.
In this method, integer constants are used to encode errors.
Each integer is arranged to represent a unique error.
The best way to accomplish this is to use an enum, a constant variable can be used depending on the developer's design preference.

<br><br>
For example:
<div class="code">enum DivError {
    Ok,
    DividedByZero,
}

fn my_div(a: f64, b: f64): (f64, DivError) {
    if a == 0 || b == 0 {
        ret 0, DivError.DividedByZero
    }
    ret a/b, DivError.Ok
}

fn main() {
    let (result, err) = my_div(5, 0)
    if err != DivError.Ok {
        outln("division failed, error code is: " + str(err))
        ret
    }
    outln(result)
}</div>

</div>
`;


const error_handling_error_traitHTML = `
<div class="page-title" style="margin-bottom: 20px;">Error Trait</div>
<div class="text">

The Error trait is a builtin definition.
It is a way of handling errors.
While the program is executing, if the functions are designed to return this structure when a problem occurs, providing error handling.
<br><br>
If a function does not panic when there is an error, it can return the error with the Error trait and provides handle it.
Returns nil when there is no error.
<br><br>
For example:
<div class="code">use std::errors

fn my_div(a: f64, b: f64): (f64, Error) {
    if a == 0 || b == 0 {
        ret 0, std::errors::new("divided with zero")
    }
    ret a/b, nil
}

fn main() {
    let (result, err) = my_div(5, 0)
    if err != nil {
        outln(err)
        ret
    }
    outln(result)
}</div>
In the example above, a potential error is handled with the Error trait.

<div class="title-separator"></div>
<div class="sub-title">Creating Custom Errors</div>
You can create your own error structure for error handling by implementing the Error trait.
<br>
For example:
<div class="code">struct MyError {
    message: str
}

impl Error in MyError {
    fn error(): str {
        ret .message
    }
}

fn my_div(a: f64, b: f64): (f64, Error) {
    if a == 0 || b == 0 {
        ret 0, MyError{"divided by zero"}
    }
    ret a/b, nil
}

fn main() {
    let (result, err) = my_div(10, 0)
    if err != nil {
        outln(err.error())
        ret
    }
    outln(result)
}</div>

</div>
`;

const error_handling_panicsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Panics</div>
<div class="text">

Panics abruptly stop program execution and "abort" it.
If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice.
The <x class="inline_code">panic</x> function is the builtin function.
See the <a href="./stdlib/builtin.html">builtin</a> documentations.
<br><br>
For example:
<div class="code">fn add_pointer(rate: int, mut ptr: *int) {
    if ptr == nil {
        panic("pointer is nil")
    }
    unsafe { *ptr += rate }
}

fn main() {
    add_pointer(10, nil)
}</div>
The code above is an example of panicking.

</div>
`;

const error_handling_handling_panicsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Handling Panics</div>
<div class="text">

There is a builtin function that allows you to catch panics and keep your program running.
The buil-in <x class="inline_code">recover</x> function once used, it catches panics of ongoing codes.
It just catch panics the codes of the scope it is in.
It just catch panics of the codes of the scope it is in.

<br><br>
For example:
<div class="code">fn may_panic() {
    panic("a problem")
}

fn main() {
    may_panic()
}</div>
The example code above will panic.
To be recovered it must be editing using the <x class="inline_code">recover</x> function.

<br><br>
For example:
<div class="code">fn may_panic() {
    panic("a problem")
}

fn main() {
    recover(fn(e: Error) {
        outln(e.error())
    })
    may_panic()
}</div>
Since the <x class="inline_code">recover</x> function is used,
the panic of the <x class="inline_code">may_panic</x> function will be recovered.
If the <x class="inline_code">recover</x> function had been used after <x class="inline_code">may_panic</x> was called,
the <x class="inline_code">recover</x> function would not have recover the panic as it captures the codes that came after it was used.

<div class="topic-separator"></div>
You can use a function as recover handler. <br>
For example:
<div class="code">fn handler(e: Error) {
    // ...
}

fn main() {
    recover(handler)
    // ...
}</div>

</div>
`;

const typesHTML = `
<div class="title" style="margin-bottom: 20px;">Types</div>
<div class="text">
  Types and type manuplation in Jule.
</div>
`;

const types_aliasingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Aliasing</div>
<div class="text">
Type aliases is an alias for existing types defined by developer.
When these aliases are used, they qualify the types they represent.
<br>
For example:
<div class="code">type int32: i32

fn main() {
    let my_int: int32 = 100
    outln(my_int)
}</div>
As seen in the example above, there is an alias definition of <x class="inline_code">int32</x> for the <x class="inline_code">i32</x> data type.
The keyword <x class="inline_code">type</x> comes first to define an alias.
Then comes the name you want to give and which type it will represent.
This alias will now represent <x class="inline_code">i32</x> when used.
<br><br>
In addition, it seems that this alias is used in variable definition.
This is because the compiler recognizes the default types builtin.
If your type alias represents a builtin definition, your type alias will not be detected as a type.
For this reason, it is a more useful approach to specify specifically.
<div class="title-separator"></div>
When defining a type alias, only the following types can be given as the type to represent:
<ul>
  <li>Builtin Data Types</li>
  <li>Type Aliases</li>
</ul>
</div>
`;

const types_strHTML = `
<div class="page-title" style="margin-bottom: 20px;">The <x class="inline_code">str</x> Type</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-str-constructor" class="tab" onclick="select_tab_event(0)">Constructor</div>
  <div id="tab-types-str-fields" class="tab" onclick="select_tab_event(1)">Fields</div>
  <div id="tab-types-str-methods" class="tab" onclick="select_tab_event(2)">Methods</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const types_arraysHTML = `
<div class="page-title" style="margin-bottom: 20px;">Arrays</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-arrays-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const types_slicesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Slices</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-slices-fields" class="tab" onclick="select_tab_event(0)">Fields</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const types_mapsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Maps</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-maps-fields" class="tab" onclick="select_tab_event(0)">Fields</div>
  <div id="tab-types-maps-methods" class="tab" onclick="select_tab_event(1)">Methods</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_staticsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Type Statics</div>
<div class="text">

Type statics are types-specific static definitions. <br>
They can be accessed by double colons.
<br><br>
For example:
<div class="code">int.MAX</div>

</div>
`;

const type_statics_i8HTML = `
<div class="page-title" style="margin-bottom: 20px;">i8</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-i8-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_i16HTML = `
<div class="page-title" style="margin-bottom: 20px;">i16</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-i16-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_i32HTML = `
<div class="page-title" style="margin-bottom: 20px;">i32</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-i32-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_i64HTML = `
<div class="page-title" style="margin-bottom: 20px;">i64</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-i64-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_u8HTML = `
<div class="page-title" style="margin-bottom: 20px;">u8</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-u8-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_u16HTML = `
<div class="page-title" style="margin-bottom: 20px;">u16</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-u16-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_u32HTML = `
<div class="page-title" style="margin-bottom: 20px;">u32</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-u32-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_u64HTML = `
<div class="page-title" style="margin-bottom: 20px;">u64</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-u64-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_f32HTML = `
<div class="page-title" style="margin-bottom: 20px;">f32</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-f32-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_f64HTML = `
<div class="page-title" style="margin-bottom: 20px;">f64</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-f64-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_intHTML = `
<div class="page-title" style="margin-bottom: 20px;">int</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-int-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_statics_uintHTML = `
<div class="page-title" style="margin-bottom: 20px;">uint</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-type-statics-uint-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const cppHTML = `
<div class="title" style="margin-bottom: 20px;">Cpp</div>
<div class="text">
C++ documentations of Jule.
<br><br>
In this section, the information necessary to use Jule and C++ effectively and the possibilities offered by JuleC are included.
<br><br>
<div class="warn">This documentation is accepts you know basic C++.</div>
</div>
`;

const cpp_apiHTML = `
<div class="title" style="margin-bottom: 20px;">API</div>
<div class="text">
API of JuleC for C++. <br><br>
JuleC presents all the C++ content it implements and owns for Jule in header files.
These header files come automatically imported in every code compiled by JuleC.
<br><br>
With this API, you can use the definitions of JuleC in C++ codes and adapt functions written for C++ to Jule.
<br><br>
<a href="https://github.com/julelang/jule/tree/master/api">See API</a<

</div>
`;

const cpp_interoperabilityHTML = `
<div class="title" style="margin-bottom: 20px;">Interoperability</div>
<div class="text">
Jule can interop with C++.
A code written in C++ compatible with Jule can be transferred to Jule, used and compiled without any problems.
Everything needed is readily available, as JuleC imports APIs by default to every generated code.

<div class="title-separator"></div>
<div class="sub-title">Including C++ Headers into Jule</div>
The use declarations of Jule are used to include C++ headers in the Jule code to be generated.
It's just a little different.
A use declaration should be told that this is a C++ include and the path should be given as a string.
<br><br>
For example:
<div class="code">use cpp "&lt;stdlib.h&gt;"</div>
<div class="code">use cpp "&lt;iostream&gt;"</div>
<div class="code">use cpp "header.hpp"</div>
The correctness and validity of the file path is checked by the compiler. <br>
Valid header extensions; <x class="inline_code">.h</x>, <x class="inline_code">.hh</x>, <x class="inline_code">.hpp</x>, <x class="inline_code">.hxx</x>

<div class="title-separator"></div>
<div class="sub-title">Linking C++ Variables to Jule</div>
After the header file containing the C++ variables is passed to Jule, C++ variables must be declared to Jule.
Not all, just the ones you will use.
But remember, JuleC does not check header files.
Your declarations are reliable.
The compiler assumes that the definitions exist and are correctly defined.
<br><br>
For example:
<div class="code">cpp let tickrate: int</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Linking Macro Defines to Jule</div>
Macro definitions are declared just like variables.
Let's assume that the tickrate variable is macro define literal.
<br><br>
For example:<br>
<strong>tickrate.hpp</strong>
<div class="code">#define TICKRATE 256</div>

<strong>sum.jule</strong>
<div class="code">use cpp "tickrate.hpp"

cpp let tickrate: int</div>

<div class="topic-separator"></div>
A few points:
<ul>
  <li>The data type must be specified when linking a variable</li>
  <li>Cannot give expression when linking a variable</li>
  <li>All variables linkings are immutable by default</li>
  <li>They cannot be constant, leave immutable if linking a constant variable</li>
  <li>Take macro definition literals as constants and leave them immutable</li>
</ul>

<div class="title-separator"></div>
<div class="sub-title">Linking C++ Functions to Jule</div>
Like variable linking, after the header file containing the C++ functions is passed to Jule, C++ functions must be declared to Jule.
Not all, just the ones you will use.
But remember, JuleC does not check header files still.
<br><br>
To declare a C++ function, it must be stated that it is a C++ declaration.
Then just represent the prototype of the function.
<br><br>
For example:
<div class="code">cpp fn my_function(int, int): f64</div>
Linked functions can only be used within the respective package and can't overload.

<div class="title-separator"></div>
<div class="sub-sub-title">Linking Function-Like Macros to Jule</div>
It is possible report macros to Jule.
However, type protection must be provided exactly.
Function-like macros must be declared as a function.
<br><br>
For example:<br>
<strong>sum.hpp</strong>
<div class="code">#define SUM(X, Y) (X+Y)</div>

<strong>sum.jule</strong>
<div class="code">use cpp "sum.hpp"

//jule:cdef
cpp fn SUM(int, int): int</div>

The <x class="inline_code">cdef</x> attribute must be used for correct parsing of preprocessor defines.

<div class="title-separator"></div>
<div class="sub-title">Linking C++ Structures to Jule</div>
As always, your links are reliable.
Generics are supported in linking a structure.
Not all fields have to be specified.
If you're only going to use the struct by name, you can also declare it without the fields.
The requirements here are limited to your needs and what needs to be declared for compliance.
<br><br>
For example:
<div class="code">cpp struct my_struct{}</div>
<div class="code">cpp struct my_struct {
    x: int
    y: str
}</div>
<div class="topic-separator"></div>
If the struct is a typedef, say it's a typedef with attribute <x class="inline_code">typedef</x> for correct linking:
<div class="code">//jule:typedef
cpp struct my_struct {}</div>

<div class="title-separator"></div>
<div class="sub-title">Linking C++ Types to Jule</div>
Although it is possible to link any typedef, these type aliases are not like standard aliases, for example they cannot be used as an alias for a struct if you use them in an expression.
These type aliases are for linking unavoidable types to Jule.
<br><br>
For example:
<div class="code">cpp type wchar_t: u16</div>

<div class="warn">
You bind bound types from C++ in accordance with the types they target.
But that doesn't mean you can use them directly in that type.
Linked types are internally compatible.
They must be cast when they are intended to be used with the type they are targeted when linking.
</div>

<div class="title-separator"></div>
<div class="sub-title">Using Linked Definitions</div>
C++ links are stored separately.
So to access C++ definitions it is necessary to use the C++ scope.
The keyword <x class="inline_code">cpp</x> is used to use the C++ scope.
The linked identifier can be used after the expression <x class="inline_code">cpp.</x>.
<br><br>
For example:
<div class="code">cpp.my_variable</div>
<div class="code">cpp.my_struct{}</div>
<div class="code">cpp.my_function(x, y, z)</div>

<div class="title-separator"></div>
<div class="sub-title">Example to Interoperability</div>
File: <strong>sum.hpp</strong>
<div class="code">using namespace jule;

Int sum(const Slice&lt;Int&gt; slice) {
    Int total{ 0 };
    for (const Int x: slice)
        total += x;
    return total;
}</div>

File: <strong>main.jule</strong>
<div class="code">use cpp "sum.hpp"

cpp fn sum([]int): int

fn main() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    let total = cpp.sum(numbers)
    outln(total)
}</div>

The above example demonstrates the interoperability of Jule with a C++ function that returns total of all values of an integer slice.
The C++ header file is written entirely using the Jule API.
The <x class="inline_code">Int</x>, and <x class="inline_code">Slice</x> types used are part of the API.
The <x class="inline_code">Int</x> data type is equally sensitive to system architecture as in Jule.
The Jule source code declares to use <x class="inline_code">sum.hpp</x> first and binds the C++ function in it to Jule accordingly.
Then a call is made from Jule and the result of the function is written to the command line.


</div>
`;

const types_castingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Casting</div>
<div class="text">
Casting is an explicit conversion from one type to another between supported types.
<br><br>
To make a cast, you need to write the target data type you want to cast in parentheses, then you need to write the expression you want to cast.
The expression to be cast should be declared in parentheses.
A casting expression evaluates expression of between parentheses for itself.
<br>
Example: <x class="inline_code">(int)(3.14)</x>
<br><br>
For code example; <br>
<div class="code">fn main() {
    let x: f32 = 3.14
    let y: int = (int)(x) // Casting
    outln(x)              // Prints 3.14
    outln(y)              // Prints 3
}</div>
</div>
As you can see, the variable <x class="inline_code">x</x> is of type <x class="inline_code">f32</x> and the variable <x class="inline_code">y</x> is of type <x class="inline_code">int</x>.
Normally, variable <x class="inline_code">y</x> cannot take variable <x class="inline_code">x</x> as a value.
However, as seen for example, we can accept the value as <x class="inline_code">int</x> by explicitly casting.

<div class="topic-separator"></div>
There is an alternative syntax for single data types.
It consists of using it like a constructor.
<br><br>
For example: <x class="inline_code">u64(10)</x>

<div class="warn">If the data type has a constructor, its constructor is called instead of being considered casting.</div>

</div>
`;

const types_genericsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Generics</div>
<div class="text">
Generic programming is an approach that offers instantiation for more than one type, using a generic static type system.
The compiler checks the script for every combination you use and checks for errors.
<br><br>
If you don't use a generic function at all, you'll only get AST generation errors and will not be included in compilation like other unused definitions.
<br><br>
There are no restrictions; variadic parameters or recursive calls.
It behaves like a normal function.
<br><br>
No new keyword has been introduced to denote generic types, it is possible to add generic types with the syntax difference of an existing feature type aliases.
<br><br>

<div class="info">
Generic types are also assumed to be local in-scope type aliases.
Therefore, they can be used for type annotation in variable and similar definitions in scope.
</div>

<div class="warn">Generics are never supports shadowing.</div>


<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Generics for Functions</div>

<div class="warn">Genericed functions never can used as anonymous function or type annotation!</div>

<div class="code">fn sum[T](a: T, b: T) T {
    let x: T = a + b
    ret x
}

fn main() {
    outln(sum[int](10, 20))  // 30
    outln(sum[f32](10, 4.2)) // 14.2
    outln(sum[f64](4.67, 2)) // 6.67
}</div>

There is a use for a generic type annotation, as seen in the example above.
Use the brackets and write the identifier of the generic type.
To specify a type for a generic type, you specify the data type in brackets.

<div class="topic-separator"></div>

To specify multiple different generic types, comma-separation syntax are available;
<div class="code">fn example_func[T1, T2](a: T1, b: T2) {}</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Generics for Structure</div>
Structures support generics.
There is no additional syntax to use it.
Combine only what you know with the struct declaration.
<br><br>
For example:
<div class="code">struct Position[T] {
    x: T
    y: T
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title" style="margin-bottom: 20px;">Genericed Structure Type Representation</div>
Generic types must also be specified to specify an instance of a specific type of the position structure.
Doing this is like calling a function.
<br><br>
For example:
<div class="code">let pos: Position[int]</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Dynamic Generic Type Annotation</div>
Dynamic generic annotation can be used if all generic types are detectable by the compiler.
<br><br>
For example:
<div class="code">fn print_map[Key, Value](map: [Key:Value]) {
    for key, value in map {
        out(key)
        out(": ")
        outln(value)
    }
}

fn main() {
    ket mymap = [int:str]{
        0: "A",
        1: "B",
        2: "C",
    }
    print_map(mymap)
}</div>
Dynamic generic annotation is used in the above example.
Generic types are automatically detected from the data type of argument by compiler.

</div>
`;

const use_declarationsHTML = `
<div class="title" style="margin-bottom: 20px;">Use Declarations</div>
<div class="text">
The use declarations act as importing other packages for use in your code. <br>
Declared with the <x class="inline_code">use</x> keyword.

<div class="title-separator"></div>
<div class="sub-sub-title">Use Declaration for Standard Library</div>
To use standard library, standard path is used.
It is quite plain and simple.
You write the name of a package you want to use, if you want to use a sub-package, you separate it with a doouble colon.
A reference to the standard library must begin with <x class="inline_code">std::</x>.
<br><br>
For example:
<div class="code">use std::pkg</div>
<div class="code">use std::pkg::subpkg</div>

<div class="warn">
  <li>You can't use already used packages.</li>
  <li>You must declare uses at the beginning of code.</li>
</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Using Use Declarations</div>
The definitions that come with the use declaration are accessible with the namespaces.
The namespace is same with use declaration.
<br><br>
For example:
<div class="code">use std::pkg

fn main() {
    std::pkg::a_function()
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Full Use Declarations</div>
It is sufficient to add <x class="inline_code">::*</x> to the end of the use declaration that you want to import fully.
The definitions of packages imported in this way can be used directly or optionally accessed with the classic namespace notation.
<br><br>
For example:
<div class="code">use std::pkg::*

fn main() {
    a_function()
    std::pkg::a_function()
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Selector Use Declarations</div>
You can only import identifiers for the definitions you want imported.
If you don't provide an identifier, nothing is imported.
Imported definitions can be used directly.
By default, there is no namespace representation.
<br><br>
For example:
<div class="code">use std::pkg::{a_function}

fn main() {
    a_function()
}</div>

<div class="topic-separator"></div>
If you want to import with Namespace but want to make some definitions directly available, use the <x class="inline_code">self</x> keyword.
<div class="code">use std::pkg::{self, a_function}

fn main() {
    a_function()
    std::pkg::a_function()
}</div>

<div class="warn">You can't select same identifier with other use declarations.</div>

<div class="title-separator"></div>
<div class="sub-title">Shadowing</div>
When you import, definitions using the same identifier are shaded.
When there is a conflict, the compiler will use the first imported definition.
One solution might be to use the namespace notation to access shaded definitions.
<br><br>
For example:
<div class="code">use std::foo::* // Includes run function
use std::bar::* // Includes run function

fn main() {
    run()           // Calls std::foo::run
    std::foo::run() // Calls std::foo::run
    std::bar::run() // Calls std::bar::run
}</div>

<div class="topic-separator"></div>

However, directly imported definitions can be shaded.
<br><br>
For example:
<div class="code">use std::foo::* // Includes pow function

fn pow() {}

fn main() {
    pow() // Calls pow, not std::foo:pow
}</div>

But, any definition you explicitly import is treated as a native definition. A definition with the same identifier cannot be included in your source code in that file.
<br><br>
For example:
<div class="code">use std::foo::{pow}

fn pow() {} // Error: duplicated identifier

fn main() {}</div>

Likewise, you cannot shade definitions that you have explicitly imported before during import.
<br><br>
For example:
<div class="code">use std::foo::{run}
use std::bar::{run} // Error: duplicated identifier

fn main() {}</div>


<div class="title-separator"></div>
<div class="sub-title">Packages</div>
Jule treats each directory as a package.
Each package has the ability to use its own defines.
<br><br>
For example:
<div class="code">// file: ./hello_print.jule

fn hello_print(name: str) {
    outln("Hello " + name)
}</div>
<div class="code">// file: ./main.jule

fn main() {
    hello_print("Packages")
}</div>
As shown in the example above, since both files are located in the same directory, they are considered the same package and therefore have access to each other's definitions.

<div class="warn">Be careful to design the packages according to their definition order, otherwise you may not get the result you expect.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Cycles</div>

Import cycles are dependency cycles that shouldn't be, they are dependencies that don't make sense technically.
When one or more packages exhibit an infinite state of interdependence, this is indicated by a compiler message.
The compiler captures and handles these cycles, allowing the developer to understand and remediate logic errors of package dependencies.
<br><br>
It is an illegal cycle when a package tries to import itself within itself. <br>
Logically, a package cannot be self-dependent.
<br><br>
This invalid dependency status is also valid if the package has dependencies on itself from different packages.
For example, if one of the package's dependencies is dependent on the package itself, it's still an invalid cycle.
This also applies to nested dependencies.

</div>
`;

const stdlibHTML = `
<div class="title" style="margin-bottom: 20px;">Standard Libray</div>
<div class="text">
  The standard library is language's own library.
  Usually each programming language have a standard library.
  This libraries, provides common functions to developer.
  Free time!
  <br><br>
  Developers can write functions of standard library if they want.
  But they usually prefer to use the standard library.
  Because usually every developer learns the standard library while learning a language.
  For this reason, standard library provides readability for developers.
  Since developers do not rewrite their functions every time, developers who already know the standard library can understand the code more easily.
  <br><br>
  At below, you can see all content of standard library of the Jule programming language;
  <br><br><br>
  <li><a href="../pages/stdlib/builtin.html">builtin</a></li>
  <li><a href="../pages/stdlib/conv.html">std::conv</a></li>
  <li><a href="../pages/stdlib/debug.html">std::debug</a></li>
  <li><a href="../pages/stdlib/debug_assert.html">std::debug::assert</a></li>
  <li><a href="../pages/stdlib/errors.html">std::errors</a></li>
  <li><a href="../pages/stdlib/fs.html">std::fs</a></li>
  <li><a href="../pages/stdlib/fs_path.html">std::fs::path</a></li>
  <li><a href="../pages/stdlib/io.html">std::io</a></li>
  <li><a href="../pages/stdlib/jule.html">std::jule</a></li>
  <li><a href="../pages/stdlib/math.html">std::math</a></li>
  <li><a href="../pages/stdlib/math_bits.html">std::math::bits</a></li>
  <li><a href="../pages/stdlib/mem.html">std::mem</a></li>
  <li><a href="../pages/stdlib/mem_c.html">std::mem::c</a></li>  
  <li><a href="../pages/stdlib/os.html">std::os</a></li>
  <li><a href="../pages/stdlib/reflect.html">std::reflect</a></li>
  <li><a href="../pages/stdlib/runtime.html">std::runtime</a></li>
  <li><a href="../pages/stdlib/sync.html">std::sync</a></li>
  <li><a href="../pages/stdlib/sync_atomic.html">std::sync::atomic</a></li>
  <li><a href="../pages/stdlib/sys.html">std::sys</a></li>
  <li><a href="../pages/stdlib/unicode.html">std::unicode</a></li>
  <li><a href="../pages/stdlib/unicode_utf16.html">std::unicode::utf16</a></li>
  <li><a href="../pages/stdlib/unicode_utf8.html">std::unicode::utf8</a></li>
</div>
`;

const endHTML = `
<div class="title" style="margin-bottom: 20px;">End</div>
<div class="text">
Thanks for reading.

<div class="title-separator"></div>
<div class="sub-title">Feedback</div>
Please tell us, share with us your ideas and experiences.
<br>
Support us to improve the documentation.
<br>
<br>
<a href="https://github.com/julelang/website/issues/new/choose">Open Issue</a> <br>
<a href="https://github.com/julelang/website/fork">Fork project</a>

<div class="title-separator"></div>
  <div class="sub-title">Source Code this Website</div>
  The source code files is accessible from <a href="https://github.com/julelang/website">GitHub</a> website repository.
</div>
`;

// ------------------------------------------------------------------------------

const TAB_types_str_constructor = `
<div class="sub-sub-title"><x class="inline_code">fn str(obj: any): str</x></div>
Returns string value of given object.
`;

const TAB_types_str_fields = `
<div class="sub-sub-title"><x class="inline_code">len: int</x></div>
Character count of string. <br>
It is can constant if string is literal.
`;

const TAB_types_str_methods = `
<div class="sub-sub-title"><x class="inline_code">fn has_prefix(sub: str): bool</x></div>
Reports string has prefix as specified substring or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn has_suffix(sub: str): bool</x></div>
Reports string has suffix as specified substring or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn find(sub: str): int</x></div>
Returns index of first matched item with specified substring, returns <x class="inline_code">-1</x> if not exist any match. <br>
Starts searching at left of string to right.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn rfind(sub: str): int</x></div>
Returns index of first matched item with specified substring, returns <x class="inline_code">-1</x> if not exist any match. <br>
Starts searching at right of string to left.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn trim(bytes: str): str</x></div>
Trims string by specified bytes at left.
Each character is each byte.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn rtrim(bytes: str): str</x></div>
Trims string by specified bytes at right.
Each character is each byte.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn split(sub: str, n: int): []str</x></div>
Splits the string into the specified number of parts to the specified substring. <br>
Returns empty slice if <x class="inline_code">n</x> is equals to zero. <br>
Returns all parts if <x class="inline_code">n</x> less than zero.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn replace(sub: str, new: str, n: int): str</x></div>
Replaces all substrings matching <x class="inline_code">sub</x> in the string with <x class="inline_code">new</x>. <br>
Returns same string if <x class="inline_code">n</x> is equals to zero. <br>
Replaces all matches if <x class="inline_code">n</x> less than zero.
`;

const TAB_types_arrays_constants = `
<div class="sub-sub-title"><x class="inline_code">const len: int</x></div>
Length of array.
`;

const TAB_types_slices_fields = `
<div class="sub-sub-title"><x class="inline_code">len: int</x></div>
Length of slice.
`;

const TAB_types_maps_fields = `
<div class="sub-sub-title"><x class="inline_code">len: int</x></div>
Length of key-value pairs.
`;

const TAB_types_maps_methods = `
<div class="sub-sub-title"><x class="inline_code">fn clear()</x></div>
Removes all key-value pairs.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn has(key: KEY_TYPE): bool</x></div>
Returns true if specified key value is exist in map, returns false if not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn del(key: KEY_TYPE)</x></div>
Deletes key if exist.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn keys(): []KEY_TYPE</x></div>
Returns keys of key-value pairs as slice.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">fn values(): []VALUE_TYPE</x></div>
Returns values of key-value pairs as slice.
`;

const TAB_type_statics_i8_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: i8</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: i8</x></div>
Minimum value of type.
`;

const TAB_type_statics_i16_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: i16</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: i16</x></div>
Minimum value of type.
`;

const TAB_type_statics_i32_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: i32</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: i32</x></div>
Minimum value of type.
`;

const TAB_type_statics_i64_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: i64</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: i64</x></div>
Minimum value of type.
`;

const TAB_type_statics_u8_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: u8</x></div>
Maximum value of type.
`;

const TAB_type_statics_u16_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: u16</x></div>
Maximum value of type.
`;

const TAB_type_statics_u32_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: u32</x></div>
Maximum value of type.
`;

const TAB_type_statics_u64_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: u64</x></div>
Maximum value of type.
`;

const TAB_type_statics_f32_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: f32</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: f32</x></div>
Minimum value of type.
`;

const TAB_type_statics_f64_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: f64</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: f64</x></div>
Minimum value of type.
`;

const TAB_type_statics_int_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: int</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const MIN: int</x></div>
Minimum value of type.
`;

const TAB_type_statics_uint_constants = `
<div class="sub-sub-title"><x class="inline_code">const MAX: uint</x></div>
Maximum value of type.
`;

const TAB_common_concepts_iterations = `
Iterations allow you to repeat the algorithm according to certain conditions.
The <x class="inline_code">for</x> keyword use for iterations in Jule.

<div class="title-separator"></div>
<div class="sub-sub-title">Infinity Iterations</div>
Infinite iterations keep repeating endlessly until the loop is somehow broken.
<br>
For example:
<div class="code">fn main() {
    for {
        outln("Hello, iterations")
    }
}</div>
The above example prints <x class="inline_code">Hello, iterations</x> repeatedly.

<div class="title-separator"></div>
<div class="sub-sub-title">While Iterations</div>
The while iterations are iterations that repeat as long as a certain condition is met.
It is not much different from defining an infinite iteration.
<br>
For example:
<div class="code">fn main() {
    let mut counter = 0
    for counter <= 5 {
        outln(counter)
        counter += 10
    }
}</div>
The While loops use boolean expressions.
As seen in the example above, the expression is written between the keyword and the block.
This expression is evaluated before each loop, and if it returns true, the loop is iterated.
This example just prints <x class="inline_code">0</x>.

<div class="title-separator"></div>
<div class="sub-title">While-Next Iterations</div>
If you've ever used a programming language, you're probably familiar with for loops.
Jule doesn't have the classic for loops.
The main reason for this is that it does not look stylish and is not readable.
The first of the three iteration statements almost always serves to define a scope-specific variable.
The main reason for use is a conditional iteration and a post-iteration step.
For this reason, Jule has a different iteration that is more readable and is thought to serve the purpose better: while-next
<br><br>
While-next is almost the same as a classic while iteration.
In this, the only addition is to be able to write an expression that will happen after the iteration step.
While-next's statement is separated by the statement terminator.
First comes the condition expression, then statement.
<br><br>
For example:
<div class="code">fn main() {
    let mut i = 1
    for i <= 5; i++ {
        outln(i)
    }
}</div>
The while-next iteration above executes first if the condition is met.
After execution, the statement is executed.
Then the scope executes if the condition is met, so on.

<div class="title-separator"></div>
<div class="sub-sub-title">Foreach Iterations</div>
Foreach or for-each can be summarized as an iteration standard for collections.
It repeats itself by looping through the elements of the collection.
<br><br>
Each identifier used for foreach is used to create a new variable.
So if there is a definition that already has this identifier, it will be shaded.
<br><br>
For example:
<div class="code">fn main() {
    let s = "Hello"
    for i in s {
        outln(i)
    }
}

// OUTPUT
// 0
// 1
// 2
// 3
// 4</div>
Seen as the example at above, this is a foreach iteration.
<br>
Iterations can have two variables: Current index and current element.
<br><br>
This example, just shows index. Let's see foreach iteration with content.
<br>
For example:
<div class="code">fn main() {
    let s = "Hello"
    for _, b in s {
        outln(b)
    }
}

// OUTPUT
// 72
// 101
// 108
// 108
// 111</div>
As you can see, it is possible to use the ignore operator for unused fields.

<div class="info">Jule assign variables data types by automatically by collection.
Similar to auto type variables.
If the index variable is be numeric, Jule's auto data type is <x class="inline_code">int</x> type.</div>

<div class="topic-separator"></div>
Foreach iterations have immutable variables by default.
But you may want to get them as mutable.
For this, enclose the identifiers in parentheses and qualify the variable you want to be mutable as mutable.
<br><br>
For example:
<div class="code">fn main() {
    let s = "Hello"
    for (_, mut b) in s {
        outln(b)
    }
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Iteration Controlling</div>
We may want to check for iterations, this is normal and common.
There are two ways to do this in Jule; The <x class="inline_code">continue</x> and <x class="inline_code">break</x> keywords.
<br><br>
If you want break the iteration, use the <x class="inline_code">break</x> keyword.
<br>
For example:
<div class="code">fn main() {
    for {
        outln("Hello, World")
        break
    }
}</div>
The example at above, normally prints <x class="inline_code">Hello, World</x> again and again.
But just prints one time, because <x class="inline_code">break</x> keyword is breaks iteration.

<div class="topic-separator"></div>
If you want continue to next iteration, use the <x class="inline_code">continue</x> keyword.
<br>
For example:
<div class="code">fn main() {
    for {
        continue
        outln("Hello, World")
    }
}</div>
The example at above, normally prints <x class="inline_code">Hello, World</x> again and again.
But prints nothing, because <x class="inline_code">continue</x> keyword is continue to next iteration.
(So print operation is the unreachable code.
`;

const TAB_common_concepts_if_expression = `
If expressions allow you to manipulate the algorithm according to certain conditions.
The <x class="inline_code">if</x> and <x class="inline_code">else</x> keywords use for if expressions in Jule.

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">if</x> Expressions</div>
If the provided condition is <x class="inline_code">true</x> the block is executed, otherwise it is not executed.
It is also the beginning of a new chain of conditions.
<br><br>
For example:
<div class="code">fn main() {
    let x: Error
    if x == nil {
        outln("error is not initialized")
    }
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">else if</x> Expressions</div>
If the preceding <x class="inline_code">if</x> and <x class="inline_code">else if</x> expressions have not been fulfilled, it is a condition presented as an alternative to them.
<br><br>
For example:
<div class="code">fn main() {
    let x = 100
    if x > 1000 {
        outln("greater than thousand")
    } else if x < 100 {
        outln("less than hundred")
    } else if x == 100 {
        outln("equals to hundred")
    }
}

// OUTPUT: equals to hundred</div>

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">else</x> Blocks</div>
It is the block that will be executed unconditionally if the previous <x class="inline_code">if</x> and <x class="inline_code">else if</x> expressions are not fulfilled.
<br><br>
For example:
<div class="code">use std::errors

fn main() {
    let x: Error = std::errors::new("my error message")
    if x == nil {
        outln("error is not initialized")
    } else {
        outln("error is initialized")
    }
}</div>
`;

const TAB_common_concepts_match_expression = `
If you need to make a selection and run an algorithm based on that selection, <x class="inline_code">match</x> is a good choice.
The operator <x class="inline_code">|</x> is used for each case.
For a block to be executed if not exist any match, don't give any expression to one case.
<br><br>

<strong>Syntax</strong>
<div class="code">match EXPRESSION {
| CASE_EXPRESSION1: // Body
| CASE_EXPRESSION2: // Body
| CASE_EXPRESSION3: // Body
|:                  // Body
}</div>

<strong>EXPRESSION</strong>: Expression to match.
<br>
<strong>CASE_EXPRESSION1</strong>: Expression for case.
<br>
<strong>CASE_EXPRESSION2</strong>: Expression for another case.
<br>
<strong>CASE_EXPRESSION3</strong>: Expression for another case.
<br>
<strong>No expression case</strong>: Default block.

<br><br>
For example:
<div class="code">match my_integer {
| MY_INTEGER_MIN: outln("Minimum")
| MY_INTEGER_MAX: outln("Maximum")
|:                outln("Between or not")
}</div>

<div class="title-separator"><div>
<div class="sub-title">Breaking Execution</div>
As with iterations, you can break the execution of the block.
The keyword <x class="inline_code">break</x> is sufficient for this.

<br><br>
For example:
<div class="code">match X {
| Y:
    if Y == A {
        break
    }
    // ...
| Z:
    // ...
}</div>

<div class="title-separator"><div>
<div class="sub-title">Condition Chain</div>
If a match expression is not given, match acts like an if-else chain.
This might be a more readable option on long condition chains.

<br><br>
For example:
<div class="code">match {
| x > 10 || x < 90:
    // Body
| my_bool:
    // Body
| y == 100:
    // Body
|:
    // Body
}</div>

<div class="title-separator"><div>
<div class="sub-title">Multiple Case Expression</div>
You can have a single algorithm for multiple cases.
For this, you can give more than one expression for a case.
The only addition in syntax is vline operator (<x class="inline_code">|</x>) between expressions.

<br><br>
For example:
<div class="code">match X {
| Y | Z | V:
    // Body
| A | B:
    // Body
| C:
    // Body
|:
    // Body
}</div>

<div class="title-separator"><div>
<div class="sub-title">The <x class="inline_code">fall</x> Keyword</div>
The fall keyword can only useable into case scopes and end of the scopes.
It continues to next scope.

<br><br>
For example:
<div class="code">match {
| false:
    outln("Case1")
| true:
    outln("Case2")
    fall
| false:
    outln("Case3")
    fall
|:
    outln("Default")
}</div>

Output:
<div class="code">Case2
Case3
Default</div>

<div class="title-separator"><div>
<div class="sub-title">Type Matching</div>
The <x class="inline_code">any</x> data type may contain any data and you may want to execute different algorithms based on this data, in which case type matching is useful.
Type matching is easy.
Just use the keyword <x class="inline_code">type</x> and then use the data type in case to match.
<br><br>
For example:
<div class="code">fn main() {
    let x: any = 10
    match type x {
    | int:
        outln("integer")
    | f32 | f64:
        outln("floating-point")
    |:
        outln("other")
    }
}</div>

`;

const TAB_common_concepts_goto_statements = `
The goto statements allow you to jump to any part of the algorithm.

<div class="title-separator"></div>
<div class="sub-title">Labels</div>
Goto statements need labels to jump somewhere in the algorithm.
To declare a label, simply put the name of the tag followed by a colon. <br>
For example: <x class="inline_code">repeat:</x>

<div class="title-separator"></div>
<div class="sub-title">Going to Labels</div>
The <x class="inline_code">goto</x> keyword is used for a goto statement.
Jumping to a label is as simple as defining a label.
First comes the keyword, then the label you want to jump to. <br>
For example: <x class="inline_code">goto repeat</x>
<div class="info">
<li>You can jump to any label without breaking the rules.</li>
<li>Labels are only valid for the function block you are in.</li>
</div>
<div class="warn">
<li>If your jumps over any declaration you will get a compiler error.</li>
<li>Each label declared and not used causes a compiler error.</li>
</div>

<div class="title-separator"></div>
<div class="sub-title">Labels for <x class="inline_code">break</x> and <x class="inline_code">continue</x> Keywords</div>
When using nested iterations or match expressions, the keywords <x class="inline_code">break</x> and <x class="inline_code">continue</x> are targeted to the last valid block.
This makes it harder to target outer loops or the match expression.
<br><br>
For example:
<div class="code">fn main() {
    for {
        match {
        | true:
            break
        }
    }
}</div>
An infinite iteration appears in this example.
The <x class="inline_code">break</x> keyword inside the match expression breaks the match expression.
This way there is no way to break the infinite loop.
Maybe alternative solutions like using a goto label outside of the iteration could be adopted but this is confusion.
<br><br>
Again, label can be used to clear up this confusion.
This is a more maintainable and clearer solution.
Labels defined before an iteration and match expression can be used for targeting.
<br><br>
For example:
<div class="code">fn main() {
loop:
    for {
        match {
        | true:
            break loop
        }
    }
}</div>
The above example will break the iteration outside.
Because the "loop" label used by the <x class="inline_code">break</x> keyword indicates that iteration.

<div class="info">These labels are not special for that, so <x class="inline_code">goto</x> keyword can use these labels.</div>
`;

//#region GET_ELEMENTS

// Navigation.
const NAV_jule_lang                           = document.getElementById('jule-lang');
const NAV_foreword                            = document.getElementById('foreword');
const NAV_introduction                        = document.getElementById('introduction');
const NAV_getting_started                     = document.getElementById('getting-started');
const NAV_getting_started_downloads           = document.getElementById('getting-started-downloads');
const NAV_getting_started_install_from_source = document.getElementById('getting-started-install-from-source');
const NAV_compiler                            = document.getElementById('compiler');
const NAV_compiler_platform_support           = document.getElementById("compiler-platform-support");
const NAV_compiler_basic_commands             = document.getElementById('compiler-basic-commands');
const NAV_compiler_compiler_options           = document.getElementById('compiler-compiler-options');
const NAV_compiler_compiling                  = document.getElementById('compiler-compiling');
const NAV_project                             = document.getElementById('project');
const NAV_project_directory_order             = document.getElementById('project-directory-order');
const NAV_project_naming                      = document.getElementById('project-naming');
const NAV_project_declarations                = document.getElementById("project-declarations");
const NAV_project_cycles                      = document.getElementById("project-cycles");
const NAV_basics                              = document.getElementById('basics');
const NAV_basics_comments                     = document.getElementById('basics-comments');
const NAV_basics_reserved_functions           = document.getElementById('basics-reserved-functions');
const NAV_basics_data_types                   = document.getElementById('basics-data-types');
const NAV_basics_operators                    = document.getElementById('basics-operators');
const NAV_basics_attributes                   = document.getElementById('basics-attributes');
const NAV_basics_statements                   = document.getElementById('basics-statements');
const NAV_basics_blocks                       = document.getElementById("basics-blocks");
const NAV_common_concepts                     = document.getElementById('common-concepts');
const NAV_common_concepts_variables           = document.getElementById('common-concepts-variables');
const NAV_common_concepts_functions           = document.getElementById('common-concepts-functions');
const NAV_common_concepts_arrays              = document.getElementById('common-concepts-arrays');
const NAV_common_concepts_slices              = document.getElementById('common-concepts-slices');
const NAV_common_concepts_maps                = document.getElementById("common-concepts-maps");
const NAV_common_concepts_control_flow        = document.getElementById('common-concepts-control-flow');
const NAV_common_concepts_enums               = document.getElementById("common-concepts-enums");
const NAV_common_concepts_structures          = document.getElementById("common-concepts-structures");
const NAV_traits                              = document.getElementById("traits");
const NAV_traits_implementing                 = document.getElementById("traits-implementing");
const NAV_memory                              = document.getElementById('memory');
const NAV_memory_immutability                 = document.getElementById("memory-immutability");
const NAV_memory_pointers                     = document.getElementById('memory-pointers');
const NAV_memory_memory_management            = document.getElementById('memory-memory-management');
const NAV_unsafe_jule                         = document.getElementById("unsafe-jule");
const NAV_error_handling                      = document.getElementById("error-handling");
const NAV_error_handling_error_coding         = document.getElementById("error-handling-error-coding");
const NAV_error_handling_error_trait          = document.getElementById("error-handling-error-trait");
const NAV_error_handling_panics               = document.getElementById("error-handling-panics");
const NAV_error_handling_handling_panics      = document.getElementById("error-handling-handling-panics");
const NAV_types                               = document.getElementById('types');
const NAV_types_aliasing                      = document.getElementById('types-aliasing');
const NAV_types_casting                       = document.getElementById('types-casting');
const NAV_types_generics                      = document.getElementById("types-generics");
const NAV_types_str                           = document.getElementById("types-str");
const NAV_types_arrays                        = document.getElementById("types-arrays");
const NAV_types_slices                        = document.getElementById("types-slices");
const NAV_types_maps                          = document.getElementById("types-maps");
const NAV_type_statics                        = document.getElementById("type-statics");
const NAV_type_statics_i8                     = document.getElementById("type-statics-i8");
const NAV_type_statics_i16                    = document.getElementById("type-statics-i16");
const NAV_type_statics_i32                    = document.getElementById("type-statics-i32");
const NAV_type_statics_i64                    = document.getElementById("type-statics-i64");
const NAV_type_statics_u8                     = document.getElementById("type-statics-u8");
const NAV_type_statics_u16                    = document.getElementById("type-statics-u16");
const NAV_type_statics_u32                    = document.getElementById("type-statics-u32");
const NAV_type_statics_u64                    = document.getElementById("type-statics-u64");
const NAV_type_statics_f32                    = document.getElementById("type-statics-f32");
const NAV_type_statics_f64                    = document.getElementById("type-statics-f64");
const NAV_type_statics_int                    = document.getElementById("type-statics-int");
const NAV_type_statics_uint                   = document.getElementById("type-statics-uint");
const NAV_cpp                                 = document.getElementById("cpp");
const NAV_cpp_api                             = document.getElementById("cpp-api");
const NAV_cpp_interoperability                = document.getElementById("cpp-interoperability");
const NAV_use_declarations                    = document.getElementById("use-declarations");
const NAV_stdlib                              = document.getElementById("stdlib");
const NAV_end                                 = document.getElementById("end");

const side_navigation = document.getElementById("side-navigation");

//#endregion GET_ELEMENTS

const nav = new SideNavigator();
nav.navigations = [
  [NAV_jule_lang,                           jule_langHTML],
  [NAV_foreword,                            forewordHTML],
  [NAV_introduction,                        introductionHTML],
  [NAV_getting_started,                     getting_startedHTML],
  [NAV_getting_started_downloads,           getting_started_downloadsHTML],
  [NAV_getting_started_install_from_source, getting_started_install_from_sourceHTML],
  [NAV_compiler,                            compilerHTML],
  [NAV_compiler_platform_support,           compiler_platform_supportHTML],
  [NAV_compiler_basic_commands,             compiler_basic_commandsHTML],
  [NAV_compiler_compiler_options,           compiler_compiler_optionsHTML],
  [NAV_compiler_compiling,                  compiler_compilingHTML],
  [NAV_project,                             projectHTML],
  [NAV_project_directory_order,             project_directory_orderHTML],
  [NAV_project_naming,                      project_namingHTML],
  [NAV_project_declarations,                project_declarationsHTML],
  [NAV_project_cycles,                      project_cyclesHTML],
  [NAV_basics,                              basicsHTML],
  [NAV_basics_comments,                     basics_commentsHTML],
  [NAV_basics_reserved_functions,           basics_reserved_functionsHTML],
  [NAV_basics_data_types,                   basics_data_typesHTML],
  [NAV_basics_operators,                    basics_operatorsHTML],
  [NAV_basics_attributes,                   basics_attributesHTML],
  [NAV_basics_statements,                   basics_statementsHTML],
  [NAV_basics_blocks,                       basics_blocksHTML],
  [NAV_common_concepts,                     common_conceptsHTML],
  [NAV_common_concepts_variables,           common_concepts_variablesHTML],
  [NAV_common_concepts_functions,           common_concepts_functionsHTML],
  [NAV_common_concepts_arrays,              common_concepts_arraysHTML],
  [NAV_common_concepts_slices,              common_concepts_slicesHTML],
  [NAV_common_concepts_maps,                common_concepts_mapsHTML],
  [NAV_common_concepts_control_flow,        common_concepts_control_flowHTML],
  [NAV_common_concepts_enums,               common_concepts_enumsHTML],
  [NAV_common_concepts_structures,          common_concepts_structuresHTML],
  [NAV_traits,                              traitsHTML],
  [NAV_traits_implementing,                 traits_implementingHTML],
  [NAV_memory,                              memoryHTML],
  [NAV_memory_immutability,                 memory_immutabilityHTML],
  [NAV_memory_pointers,                     memory_pointersHTML],
  [NAV_memory_memory_management,            memory_memory_managementHTML],
  [NAV_unsafe_jule,                         unsafe_juleHTML],
  [NAV_error_handling,                      error_handlingHTML],
  [NAV_error_handling_error_coding,         error_handling_error_codingHTML],
  [NAV_error_handling_error_trait,          error_handling_error_traitHTML],
  [NAV_error_handling_panics,               error_handling_panicsHTML],
  [NAV_error_handling_handling_panics,      error_handling_handling_panicsHTML],
  [NAV_types,                               typesHTML],
  [NAV_types_aliasing,                      types_aliasingHTML],
  [NAV_types_casting,                       types_castingHTML],
  [NAV_types_generics,                      types_genericsHTML],
  [NAV_types_str,                           types_strHTML],
  [NAV_types_arrays,                        types_arraysHTML],
  [NAV_types_slices,                        types_slicesHTML],
  [NAV_types_maps,                          types_mapsHTML],
  [NAV_type_statics,                        type_staticsHTML],
  [NAV_type_statics_i8,                     type_statics_i8HTML],
  [NAV_type_statics_i16,                    type_statics_i16HTML],
  [NAV_type_statics_i32,                    type_statics_i32HTML],
  [NAV_type_statics_i64,                    type_statics_i64HTML],
  [NAV_type_statics_u8,                     type_statics_u8HTML],
  [NAV_type_statics_u16,                    type_statics_u16HTML],
  [NAV_type_statics_u32,                    type_statics_u32HTML],
  [NAV_type_statics_u64,                    type_statics_u64HTML],
  [NAV_type_statics_f32,                    type_statics_f32HTML],
  [NAV_type_statics_f64,                    type_statics_f64HTML],
  [NAV_type_statics_int,                    type_statics_intHTML],
  [NAV_type_statics_uint,                   type_statics_uintHTML],
  [NAV_cpp,                                 cppHTML],
  [NAV_cpp_api,                             cpp_apiHTML],
  [NAV_cpp_interoperability,                cpp_interoperabilityHTML],
  [NAV_use_declarations,                    use_declarationsHTML],
  [NAV_stdlib,                              stdlibHTML],
  [NAV_end,                                 endHTML],
];

const tabs = [
  // ID - HTML
  ["tab-types-str-constructor",             TAB_types_str_constructor],
  ["tab-types-str-fields",                  TAB_types_str_fields],
  ["tab-types-str-methods",                 TAB_types_str_methods],
  ["tab-types-arrays-constants",            TAB_types_arrays_constants],
  ["tab-types-slices-fields",               TAB_types_slices_fields],
  ["tab-types-maps-fields",                 TAB_types_maps_fields],
  ["tab-types-maps-methods",                TAB_types_maps_methods],
  ["tab-type-statics-i8-constants",         TAB_type_statics_i8_constants],
  ["tab-type-statics-i16-constants",        TAB_type_statics_i16_constants],
  ["tab-type-statics-i32-constants",        TAB_type_statics_i32_constants],
  ["tab-type-statics-i64-constants",        TAB_type_statics_i64_constants],
  ["tab-type-statics-u8-constants",         TAB_type_statics_u8_constants],
  ["tab-type-statics-u16-constants",        TAB_type_statics_u16_constants],
  ["tab-type-statics-u32-constants",        TAB_type_statics_u32_constants],
  ["tab-type-statics-u64-constants",        TAB_type_statics_u64_constants],
  ["tab-type-statics-f32-constants",        TAB_type_statics_f32_constants],
  ["tab-type-statics-f64-constants",        TAB_type_statics_f64_constants],
  ["tab-type-statics-int-constants",        TAB_type_statics_int_constants],
  ["tab-type-statics-uint-constants",       TAB_type_statics_uint_constants],
  ["tab-common-concepts-iterations",        TAB_common_concepts_iterations],
  ["tab-common-concepts-if-expressions",    TAB_common_concepts_if_expression],
  ["tab-common-concepts-match-expressions", TAB_common_concepts_match_expression],
  ["tab-common-concepts-goto-statements",   TAB_common_concepts_goto_statements],
]

nav.set_events();
nav.set_content_url();

//#endregion SET_CONTENT

function select_tab_index(tabcontrol, index) {
  let divs = tabcontrol.getElementsByTagName('div');
  for (let index = 0; index < divs.length; ++index) {
    let element = divs[index];
    element.classList.remove('active');
  }
  let element = divs[index];
  element.classList.add('active');
  let content;
  for (let index = 0; index < tabs.length; ++index) {
    let tab = tabs[index];
    let id = tab[0];
    if (id != element.id) { continue; }
    content = tab[1];
    break;
  };
  divs = document.getElementsByClassName('tabcontrol-content');
  for (let index = 0; index < divs.length; ++index) {
    let element = divs[index];
    element.innerHTML = content;
  }
}

function select_tab_event(index) {
  let tabcontrol = document.getElementsByClassName('tabcontrol')[0];
  select_tab_index(tabcontrol, index);
}
