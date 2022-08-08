// Copyright 2022 The X Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const page_title = `X - Documentations`;

const the_xlangHTML = `
<div class="title">The <x style="color: rgb(180, 52, 235);">X</x> Programming Language</div>
<br>
<div class="text">
  <br><br>
  This version of the text assumes you're using X compiler (compiled from source) 3.10.2021 (DD/MM/YYYY) or later.
  <br><br><br><br>
  X is a statically typed compiled programming language designed for system development, building maintainable and reliable software.
  It has syntax similar to today's programming languages.
  So if you already know a language, it probably won't take you long to get used to X.
  <br><br>
  X is a very simple language.
  You will not have much difficulty in learning.
  It is a suitable language for developers of all levels.
  <br><br>
  The fact that X is simple does not diminish its power. X is a pretty powerful language.
  The fact that it evolves directly to C++ and compiles from C++ means an environment familiar to C++ developers.
  <br><br>
  X is also a good choice for the simpler way to write C++.
  At the developer's request, X can be translated or compiled into C++.
  This choice is the developer's.
  <br><br>
  The purpose of X is to keep functionality high while maintaining a simple form and readability.
  It guarantees memory safety and does not contain undefined behavior.
</div>
`;

const forewordHTML = `
<div class="title" style="margin-bottom: 20px;">Foreword</div>
<div class="text">
  This documentation is updated following the source code according to the latest version of X.
  Some content maybe is not released yet, so it may be here, but not in the compiler you have.
  <br><br>
  X syntactically and structurally encourages code to be readable.
  It aims to transform C++ code as safely as possible.
  Optimizes for a secure code.
  With this documentation you will see the basics and some subtleties of X and you will understand X.
  You don't actually need to know C++ to learn and understand X.
  <br><br>
  X is plain and simple.
  Suitable for developers of all levels.
  It also takes a very short time to learn.
  If you're not learning a language for the first time, it probably won't take much of your time.
  <br><br>
  With this documentation, it is possible to improve your X knowledge, programming and analytical thinking skills.
  If you're just starting out to programming, it could be a pretty good start for you.
  <br><br>
  Welcome to X community!
</div>
`;

const introductionHTML = `
<div class="title" style="margin-bottom: 20px;">Introduction</div>
<div class="text">
  <div class="sub-title">Who Documentation is For</div>
  The explanations in this documentation assume that you already know programming.
  Therefore, everything is not explained from the very beginning.
  If you are completely new to programming, it may be better to learn programming from the most basic sources.
  If you already know programming, you can easily learn X with this documentation.

  <div class="title-separator"></div>
  <div class="sub-title">Who X is For</div>
  X is good for a few groups of developers for many reasons. Some of those;

  <div class="title-separator"></div>
  <div class="sub-sub-title">System Developers</div>
  X was designed as a system programming language.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Students</div>
  X is suitable for learning programming.
  X's simple structure and easy-to-understand, readable code encourage both effortless writing and understanding.
  In this way, students can learn without difficulty.
  Confusing syntax does not stand in their way.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Open Source Developers</div>
  X is a project open to community contributions.
  Thank you for every tool, library, framework and program you make open source.

  <div class="title-separator"></div>
  <div class="sub-sub-title">Developers Who Value Performance, Stability and Simplicity</div>
  X is a good choice for those looking for simplicity, stability and performance.
  When you develop with X, you use a simple and straightforward syntax.
</div>
`;

const getting_startedHTML = `
<div class="title" style="margin-bottom: 20px;">Getting Started</div>
<div class="text">
  You are about to start X.
  Fasten the belts.
  Maybe a popcorn.
</div>
`;

const getting_started_downloadsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Downloads</div>
<div class="text">
  <div class="sub-title">Releases</div>
  You can see X compiler in easy setup form at <a target="_blank" href="https://github.com/the-xlang/xxc/releases">releases</a>.

  <div class="title-separator"></div>
  <div class="sub-title">Source Code</div>
  You can download source code of the X compiler at <a target="_blank" href="https://github.com/the-xlang/xxc">repository</a>.
</div>
`;

const getting_started_install_from_sourceHTML = `
<div class="page-title" style="margin-bottom: 20px;">Install from Source</div>
<div class="text">
  Ok! We install X compiler from source code.
  Actually, we just compile project.
  <br>
  Getting the most up-to-date version is a good way to try.
  <br><br>
  We accept you have already X source code.

  <div class="title-separator"></div>
  <div class="sub-title">Build Scripts</div>
  Project has scripts for build/compile project.
  You can use them.
  This scripts written for compile the X compiler.
  If you execute script, result is be compilation error or complete message.

  <div class="warn">These examples assume you are in the root directory of the X project.</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Windows</div>
  <div class="info">
    Ideal scripts for Windows: usally batchfiles (.bat).
  </div>
  Using example for PowerShell;
  <div class="code">PS @DIR> scripts/build.bat</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Linux</div>
  <div class="info">
    Ideal scripts for Windows: usally shellscripts (.sh).
  </div>
  Using example for Bash;
  <div class="code">$ sudo sh scripts/build.sh</div>

  <div class="title-separator"></div>
  <div class="sub-title">Manual</div>
  X compiler is written in Go, for now!

  <div class="warn">You should have Go compiler for this option.</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Windows</div>
  Using example for PowerShell;
  <div class="code">PS @DIR> go build -o xxc.exe -v cmd/xxc/main.go</div>

  <div class="title-separator"></div>
  <div class="sub-sub-title">Linux</div>
  Using example for Bash;
  <div class="code">$ go build -o xxc -v cmd/xxc/main.go</div>
</div>
`;

const compilerHTML = `
<div class="title" style="margin-bottom: 20px;">Compiler</div>
<div class="text">
  In this part of the documentation you will explore the compiler and understand how to compile X code.
  After this section, you will learn and use compiler commands.
  You will also be able to customize your settings file to configure your projects.
</div>
`;

const compiler_basic_commandsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Basic Commands</div>
<div class="text">
The basics of compiler commands.

<div class="title-separator"></div>
<div class="sub-title">help</div>
Shows help about of commands.
<div class="code">$ xxc help</div>

<div class="title-separator"></div>
<div class="sub-title">version</div>
Shows version of the X compiler.
<div class="code">$ xxc version</div>

<div class="title-separator"></div>
<div class="sub-title">doc</div>
Documentize X source code.
See the Documenting for more information.
<div class="code">$ xxc doc main.xx</div>

<div class="title-separator"></div>
<div class="sub-title">init</div>
Initialize new project in working directory.
<div class="code">$ xxc init</div>

</div>
`;

const compiler_config_filesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Config Files</div>
<div class="text">
Your config file shows your X compiler how it will work and lets you choose things for yourself.
<br>
The name of the configuration file should be <x class="inline_code">x.set</x>.
<br><br>
In fact, you can start working right away, leaving it as default.
Generally you don't need to do any special configuration here.
<br><br>
Configuration format is JSON, and you can delete any key for use default value.
<br><br>
Fields in configuration files have specific purposes.
<br><br>
<table class="table">
  <tr>
    <th style="text-align: center;">Field</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">out_name</td>
    <td>Name of compiled machine code output file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">cpp_out_dir</td>
    <td>Directory of transpiled C++ file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">cpp_out_name</td>
    <td>Name of transpiled C++ file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">language</td>
    <td>
      Name of language-pack to use.
      Set empty for default language-pack.
    </td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">mode</td>
    <td>
      Set the mod of compiler as <x class="inline_code">compile</x> or <x class="inline_code">transpile</x>.
    </td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">post_commands</td>
    <td>
    Terminal commands to be executed after compilation.
    All processes are separated by a space, and the first part is the process name, the next ones are treated as arguments.
    </td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">indent</td>
    <td>Indention string.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">indent_count</td>
    <td>Indention string repetition count per one indention.</td>
  </tr>
</table>
</div>
`;

const compiler_compilingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Compiling</div>
<div class="text">
Let's start with a simple hello world program and learn compiling from this program.
<br><br>
We have a <x class="inline_code">main.xx</x> file:
<div class="code">main() {
    outln("Hello, World!")
}</div>

We will use already created settings file with <x class="inline_code">x init</x> command.
<br>
<br>
For compile X code, we just give filename to compiler:
<div class="code">xxc main.xx</div>
And compiler is transpile our X code to C++ code. <br>
Result is created by settings file and compile if mode setted as <x class="inline_code">compile</x>.
<br><br>
As result we have a executable machine code or C++ result of our program.
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
Recommended work pattern and use of project directories for X;

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
  <li><x class="inline_code">doc</x></li>
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
    <td>file.xx, my_file.xx</td>
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
<div class="sub-title">Specifications</div>
Certain specifications can be made to include only certain files in the compilation.
For this, simply give a matching specification after the underscore.
<br><br>
For example: <x class="inline_code">example_amd64.xx</x>

<div class="title-separator"></div>
<div class="sub-sub-title">Operating System Specification</div>

Supported operating systems; <br>
<li class="inline_code">windows</li>
<li class="inline_code">darwin</li>
<li class="inline_code">linux</li>

<div class="title-separator"></div>
<div class="sub-sub-title">Architecture Specification</div>
Supported architectures; <br>
<li class="inline_code">i386</li>
<li class="inline_code">amd64</li>
<li class="inline_code">arm</li>
<li class="inline_code">arm64</li>

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
<div class="code">main() {
    a: int
}</div>
The variable <x class="inline_code">a</x> seen is declared but unused.
This will cause you to get an error by the compiler and not be able to compile the code.
</div>
`;

const project_definesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Defines</div>
<div class="text">
Definitions only allow the use of declarations that have been declared before them.
<br><br>
You might see something similar in some programming languages;
<div class="code">This is a pseudocode!

DEFINE A = B + 100
DEFINE B = 100
</div>

In the above example, the <x class="inline_code">A</x> variable uses the <x class="inline_code">B</x> variable while getting the value.
As can be seen, the <x class="inline_code">B</x> variable is declared after the <x class="inline_code">A</x> variable.
In this case, the X compiler will throw an error.
In the X source code, <x class="inline_code">B</x> must have been declared before.

<div class="title-separator"></div>
<div class="sub-title">Define Order</div>
The example seen above is due to the definition order logic.
X has a priority queue that it uses to process definitions.
It is useful to pay attention to this.
<br><br>
<strong>Order (High to Low);</strong>
<div style="margin-top: 5px;"></div>
<li>Use Declarations</li>
<li>Type Aliases, Globals, Structures, Enums</li>
<li>Functions</li>
</div>
`;

const basicsHTML = `
<div class="title" style="margin-bottom: 20px;">Basics</div>
<div class="text">
  The basics of the X programming language. <br>
  Comments, operators and more. Knowledge for next steps.
</div>
`;

const basics_commentsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Comments</div>
<div class="text">
  Comments are useful for understanding code, making comments and explanations, taking notes, and sometimes writing little jokes.
  <br><br>
  In general, two types of comment lines appear in programming languages: inline comment and multiline comment.
  Some programming languages only support one.
  X supports both of these common approaches.

  <div class="title-separator"></div>
  <div class="sub-title">Inline Comments</div>
  <div class="code">// Inline comment</div>

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
  X's entry point function is <x class="inline_code">main</x> function. <br>
  Entry point is should be void and not have any parameter.

  <div class="title-separator"></div>
  <div class="sub-sub-title">For Example</div>
  <div class="code">main() {
    // Your entry point function body.
}</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Initialize Function</div>
It is a one-time initialize function when a package is imported.<br>
If you use it in your main program package, it will be executed before the entry point.
<br><br>
X's initialize function is <x class="inline_code">init</x> function. <br>
Initialize function is should be void and not have any parameter.

<div class="title-separator"></div>
  <div class="sub-sub-title">For Example</div>
  <div class="code">init() {
    // Your initialize function body.
}</div>

</div>
`;

const basics_data_typesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Data Types</div>
<div class="text">
  X is designed strongly typed.
  Therefore, the data-types of all values must be specified during compilation.
  In this section we will look at the built-in types offered by the compiler.

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
      <td>Any.</td>
    </tr>
  </table>

  <div class="title-separator"></div>
  <div class="sub-title">Integers</div>
  <div class="sub-sub-title">Decimal</div>
  <div class="code">12345</div>
  <div class="sub-sub-title">Binary</div>
  <div class="code">0b0001010101</div>
  <div class="sub-sub-title">Octal</div>
  <div class="code">0455</div>
  <div class="sub-sub-title">Hexadecimal</div>
  <div class="code">0xDFF90</div>

  <div class="title-separator"></div>
  <div class="sub-title">Floats</div>
  <div class="code">3.14</div>
  <div class="code">3.148797963502462594e+005</div>

  <div class="title-separator"></div>
  <div class="sub-title">Strings</div>
  <div class="sub-sub-title">String Literals</div>
  <div class="code">"String literal of X."</div>
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
  <div class="code">\`Raw String literal of X.\`</div>
  <div class="code">\`Raw String literal of X
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
  <x class="inline_code">x == y</x>: true if x and y has same data type
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
Each attribute is defined with <x class="inline_code">@</x>, the attribute itself must come immediately after this operator.
<br><br>
For example:
<div class="code">@attribute_a
cube(s int) int {
    // Body ...
}</div>
</div>
<br><br>
If you are giving more than one attribute, you should write each one in the same format.
Note that an attribute cannot be given repeatedly.
<br><br>
For example:
<div class="code">@attribute_a @attribute_b
cube(s int) int {
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
The statement terminator of X is the semicolon (<x class="inline_code">;</x>).
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
<div class="code">main() {
    [STATEMENT_1]; [STATEMENT_2]
    [STATEMENT_3]
    [STATEMENT_4]
}</div>

</div>
`;

const common_conceptsHTML = `
<div class="title" style="margin-bottom: 20px;">Common Concepts</div>
<div class="text">
  Common programming concepts. <br>
  Approaches that be found in every code. <br>
  Variables, functions...
</div>
`;

const common_concepts_variablesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Variables</div>
<div class="text">
There is more than one way in X to define a variable.
<br><br>
X is not use any keyword for declaring variable.
X uses the <x class="inline_code">:</x> operator.
When you just use <x class="inline_code">:</x> you report you want the type to be detect automatically.
The type is set by the X compiler based on the data.
<br><br>
For example:
<div class="code">age: = 18</div>
The data type of the above variable is defaulted to <x class="inline_code">int</x>.
<div class="warn">
In this method, the variable must be given a value, otherwise the X compiler will show an error.
</div>

<div class="title-separator"></div>
<div class="sub-title">Type Annotation</div>
You may want to annotate the type, it is possible.
It also brings you advantages.
<br><br>
For example:
<div class="code">age: int = 18</div>
This is equivalent to the one shown above.
However, you annotated the type.
So what exactly is the difference?
We mentioned that it has advantages, let's take a look;
<ul>
  <li>
  When you follow this method, you do not have to give a value during the creation of the variable.
  According to the data type you have defined, the X compiler initializes that variable with the default value of the given data type if you have not given a value.
  </li>
  <br>
  <li>
  This is better than automatic assignment if the variable's data type is important.
  Because in automatic assignment, the data type is detected automatically, but since the value given here must be compatible with the given data type, the X compiler will not accept any incompatible value.
  </li>
  <br>
  <li>
  You know more precisely which data type you are working with.
  It can help avoid possible confusion.
  </li>
</ul>

<div class="title-separator"></div>
<div class="sub-title">Assignment</div>
The values of the variables can be changed later.
The value given must be the same as the data type of the variable.
<br><br>
For example:
<div class="code">example() {
    a: int = 10 // Value is 10.
    a = 200    // New value is 200.
}</div>

<div class="title-separator"></div>
<div class="sub-title">Constant Variable</div>
Constant variables are declared same method, the only difference being that the keyword <x class="inline_code">const</x> is used when defining them.
<br><br>
For example:
<div class="code">const age: = 18</div>
<div class="code">const age: int = 18</div>
<div class="warn">
  <li>No matter which method the constant variables are defined by, a value must be given.</li>
</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Differences Between Variables and Constants Variables</div>
The value of the variables can change, then they can be updated with a different value to match the data type.
Constants take a constant expressions and never change again.
Constant expressions do not exist as a variable in memory at runtime.
Constant expressions used are copied exactly where they are used.
Constant expressions are all evaluated at compile time.

<div class="title-separator"></div>
<div class="sub-title">Multiple Assignment / Declaration</div>
You can multiple variable update or declaration.
What? Sure, you can use two type in same statement.
You know how to declare variable, okay it is same.
The single difference, identifiers and expressions separate with comma.
<br><br>
For example:
<div class="code">x:, y:, z: = true, 1, -400</div>
Yes, there is we declare three new variable named as <x class="inline_code">x</x>, <x class="inline_code">y</x> and <x class="inline_code">z</x> with auto-type detection.
Variable values are; <x class="inline_code">x</x> is <x class="inline_code">true</x>, <x class="inline_code">y</x> is <x class="inline_code">1</x> and <x class="inline_code">y</x> is <x class="inline_code">-400</x>.
As you can see, the order in which the variable is defined is associated with the expression in the same order.
Remember that if you have given a data type, the value you have shown must also be compatible with this data type.
<br><br>
So how do we do the update thing?
<br>
We're essentially just removing the colon operator (and type representation, if any) that indicates that the variable is a new variable.
Actually, only the name of the variable needs to remain, remember value update statement.
<br><br>
For example:
<div class="code">x, y, z = true, 1, -400</div>
The logic remains the same. Let's not forget that these variables must already exist, of course, due to static type principles, the value you show to it must be compatible with the data type of the variable.
<br><br>
Well, how to we use combined the update and declaration?
<br>
You learned update and declaration statements. Okay, combine.
<br><br>
For example:
<div class="code">x, y:, z = true, 1, -400</div>
Here is the combination of these two methods.
<br><br>
Additionally, you can skip some values with ignore operator.
<br>
For example:
<div class="code">x, _, z = true, 1, -400</div>
This way you ignore some values.

<div class="title-separator"></div>
<div class="sub-title">Shadowing</div>
Normally, shading allows to suppress previous definitions with the same name for each block.
But X does not adopt it.
Agrees that this is an approach that degrades security.
<br><br>
So does X support shading?
<br>
Yes! However, there are minor changes.
If you give the name of one of the global definitions to the function's parameter or to a variable within the block, that definition is shaded.
However, a global definition that you define or shadow once within the block cannot be shaded within the block and in sub-blocks.
<br><br>
For example:
<div class="code">a: = 100

my_func(a bool) {
    outln(a)
}
</div>
In the code above, the function's parameter is the same as the name of a global definition.
In this case, the parameter name is valid and the global definition is shaded.
<br><br>
Well, we said that a definition that is already defined or shadowed in the block and sub-blocks cannot be shadowed again.
What exactly does this mean?
<br><br>
For example:
<div class="code">a: = 100

my_func(a bool) {
    a: = 0.10
    outln(a)
}
</div>
Let's go over the previous example. In the block, the parameter <x class="inline_code">a</x> was taken with shadowing.
It is no longer a definition that can be shaded, but is assumed to be defined within the block.
So this code will result in compiler error.
</div>
`;

const common_concepts_functionsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Functions</div>
<div class="text">
Functions are common in X code.
Previously, the entry point function was mentioned in the basics.
We have seen partially there how to define a function.
<br><br>
To remember:
<div class="code">example() {
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
<div class="code">print_int(i int) {
    outln(i)
}

main() {
    print_int(50)
}</div>
It is similar to normal function definition.
Parameters are written between parentheses
If there is more than one parameter, they are separated by commas.
The name of the parameter is written first, followed by the data-type.
<br><br>
When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas.
The given arguments must be compatible with the data-type of the corresponding parameters.

<div class="topic-separator"></div>
There is alternative syntax for specifying parameters and data types.
<br>
For example:
<div class="code">print_sum(a, b int) {
    add: = a + b
    outln(add)
}</div>
As seen in the example above, if there is more than one parameter that must have the same data-type, the data-type can be specified in the last parameter.
When this is done, all parameters that have not been given the previous data-type will have the same data-type.

<div class="title-separator"></div>
<div class="sub-sub-title">Variadic Parameters</div>
Variadic parameters can contain more than one value.
The <x class="inline_code">...</x> operator is used for this.
<br>
For example:
<div class="code">str_out(...values str) {
    for _, s: in values {
        out(s)
    }
}

main() {
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
<div class="code">main() {
    outln(div(10, 2))
}

div(a, b f64) f64 {
    ret a / b
}</div>
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
<div class="code">my_function: (int, int) int</div>
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
<div class="code">main() {
    make_hello: = (name str) str {
    	ret "Hello " + name + "!"
    };
    outln(make_hello("X"))
}</div>

<div class="topic-separator"></div>
Anonymous functions can access the definitions of the block in which they are defined.
<br><br>
For example:
<div class="code">main() {
    message: = "Hello, World!"
    func: = () { outln(message) };
    func();
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
<div class="code">my_func() [int, int] { ret 18, 96 }</div>
Brackets are used to specify multiple data types, seen as example at above.
This option, only valid for function returns.

<div class="topic-separator"></div>
What happens when specified single data-type with brackets?
Nothing, you not see compiler error.
But not compile as multi-type, compiles single data-type.
<br><br>
For example:
<div class="code">less_than(x, y int) [bool] { ret x < y }</div>
The example at above, accepted as one type return.

<div class="title-separator"></div>
<div class="sub-sub-title">Return Type Identifiers</div>
To give an identifier to the return types, it's enough to make them look like multiple returns.
The only addition is to give that return value an identifier before the return type.
<br><br>
For example:
<div class="code">example() [x int, y int] {
  x = 10
  y = 20
  ret x, y
}</div>
As in the example above.
These identifiers also cause a variable to be created.
For each identifier, the function has a variable initialized in its scope.

<div class="topic-separator"></div>
Also, a function that has at least one return type identifier does not have to have a return expression.
<br><br>
For example:
<div class="code">example() [x int, y int] {
  x = 10
  y = 20
  ret
}</div>
Respectively the related variables will be treated as the return statement.

<div class="topic-separator"></div>
If you provide a return expression while there are return identifiers, the expressions you provide as the expression of the identifiers will be accepted.

<br><br>
For example:
<div class="code">example() [x, y int] {
  ret 90, 100
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Multiple Assignment with Multiple Returned Functions</div>
It's too similar to normal assignment.
Give much identifier same count with function return values and give function call as value.
<br><br>
For example:
<div class="code">compare_int(x, y int) [bool, bool] { ret x < y, x == y }

main() {
    less:, equals: = compare_int(10, 20)
    outln(less)
    outln(equals)
}</div>
<div class="warn">You can't use multiple returnable functions combined with normal multiple assignments.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Multiple Returns as Argument(s)</div>
When you have a function that returns more than one value and you want to send these return values to another matching function, it is not a necessity but a preference to assign the variable one by one and then give it as an argument to the function.
X automatically maps the returned values as arguments to the corresponding function call, respectively, if the arguments match the parameters. <br>
For example:
<div class="code">multi_ret_func() [int, str, byte] { ret 143, "STR", 'W' }

my_print(a int, b str, c byte) {
    outln(a)
    outln(b)
    outln(c)
}

main() {
    my_print(multi_ret_func())
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Multiple Returns as Multiple Return</div>
When you have a function that returns more than one value, and to use these return values as a return value in another function that returns exactly the same, using a variable too is not a necessity but a preference.
X allows you to use the return values of a multi-return function as the return value and automatically maps the values if the return values and data types match exactly. <br>
For example:
<div class="code">example1() [int, str, byte] { ret 143, "STR", 'W' }
example2() [int, str, byte] { ret example1() }

main() {
    a:, b:, c: = test2()
    outln(a)
    outln(b)
    outln(c)
}</div>

<div class="title-separator"></div>
<div class="sub-title">Argumet Targeting</div>
Argument targeting, while the arguments are given during the function call, target the parameter to which they are sent separately for each parameter.
To target, a syntax similar to assignment is used. <br>
For example:
<div class="code">sub(a, b int) int { ret a-b }

main() {
    outln(sub(190, 10))     // Prints 180
    outln(sub(b=190, a=10)) // Prints -180
}</div>

<div class="title-separator"></div>
<div class="sub-title">Deferred Calls</div>
Deferred calls are not executed until they go out of scope.
Calls are invoked in reverse.
The keyword <x class="inline_code">defer</x> is used for a deferred call.
<br><br>
For example:
<div class="code">main() {
    defer outln("Defer 1")
    defer outln("Defer 2")
    outln("Hello Deferred Calls")
}

// OUTPUT
// Hello Deferred Calls
// Defer 2
// Defer 1</div>
As seen in the example above, the effect of a normal call is seen first in the output.
This is because calls made before it is deferred.
In the continuation of the output, a reverse execution is seen from the last deferred call to the first deferred call.
This is exactly why.
Deferred calls when out of scope are executed from the most recent deferred call to the first deferred call.

<div class="title-separator"></div>
<div class="sub-title">Concurrent Calls</div>
Concurrency works on performing multiple tasks at the same time.
This means that you are working on multiple tasks simultaneously in one time frame.
However, you can only do one task for the same time.
This tends to happen in programs where a task is waiting and the program has determined to run another task at idle time.
<br><br>
The keyword <x class="inline_code">co</x> is used to do a concurrent call. <br>
For exmaple;
<div class="code">hello_world() {
    outln("Hello World")
}

main() {
    co hello_world()
}</div>

<div class="warn">The program does not automatically wait for the execution of concurrent calls to terminate.</div>

<div class="title-separator"></div>
<div class="sub-title">Attributes</div>
<div class="sub-sub-title"><x class="inline_code">inline</x></div>
Function calls has a cost.
Inline functions, if function body small, can be a good way to avoid this call cost.
Inline functions are expanded or modified where they are called.
So the function is not actually called.
However, it should be noted that this is not a command, it is a request to the compiler.
The compiler can choose not to compile it inline even if the function is marked as inline.
Of course this has advantages and disadvantages.
<br><br>
<strong style="font-family: 'OpenSans-Light'">Advantages;</strong>
<ul>
  <li>Function call overhead doesn't occur.</li>
  <li>Saves overhead of a return call from a function.</li>
  <li>Saves the overhead of push/pop variables on the stack when function is called.</li>
</ul>
<strong style="font-family: 'OpenSans-Light'">Disadvantages;</strong>
<ul>
  <li>If you use too many inline functions then the size of the binary executable file will be more large than normally, because of the duplication of same code.</li>
  <li>Too much inlining can also reduce your instruction cache hit rate, thus reducing the speed of instruction fetch from that of cache memory to that of primary memory.</li>
  <li>Inline functions may not be useful for many embedded systems. Because code size is often more important than speed in embedded systems.</li>
</ul>

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">typearg</x></div>
This accepts generic types as parameter of function.
This attribute only used for functions with generics.
<br><br>
<strong style="font-family: 'OpenSans-Light'">Advantages;</strong>
<ul>
  <li>Increase readability.</li>
</ul>
<strong style="font-family: 'OpenSans-Light'">Disadvantages;</strong>
<ul>
  <li>Function cannot have parameters.</li>
</ul>

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
<div class="code">[...]int{1, 2, 3, 4, 5} // [5]int</div>

<div class="title-separator"></div>
<div class="sub-title">Access to Elements and Indexing</div>
Index system is simple.
Starts at <x class="inline_code">0</x> and continue step by step, it is never not be negative and float.
<br><br>
Arrays is use indexes to access elements and assignment.
<br>
For example:
<div class="code">main() {
    my_array: = [3]str{"Hello", "arrays", "indexes"}
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
[Hi, arrays, indexes]</div>

<div class="title-separator"></div>
<div class="sub-title">Multidimensional Arrays</div>
Multidimensional arrays is array storing arrays.
<br>
For example:
<div class="code">main() {
    my_array: = [2][2]str{
        [2]str{"Apple", "Banana"},
        [2]str{"Bred", "Cheese"},
    }
    outln(my_array)
}</div>
<br>
Output of program;
<div class="code">[[Apple, Banana], [Bred, Cheese]]</div>

</div>
`;

const common_concepts_slicesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Slices</div>
<div class="text">
Slices is a dynamic allocated array, for this reason not has constant size expression.
Slices are heap allocated and use X's reference counting memory management.
A slice can be <x class="inline_code">nil</x> and its default value is <x class="inline_code">nil</x>.
Slices are mutable.
<br><br>
Example to slices;
<div class="code">main() {
    my_slice:[]str
    my_slice = []str{"Hello", "X", "slices!"}
    outln(my_slice)
}</div>
The nil is the default value of slices.
But the important point: empty slice and nil setted slice is the same thing.
The example at above, auto value is given (so nil) at first statement.
<x class="inline_code">my_slice</x> is equals to <x class="inline_code">nil</x> or <x class="inline_code">[]str{}</x>.
<br><br>
Second statement is set value of <x class="inline_code">my_slice</x> variable as <x class="inline_code">[]str{"Hello", "X", "slices!"}</x>.
Seen at second statement, slices is should be define with data type.
Last statement is prints to console the <x class="inline_code">my_slice</x> variable.
<br><br>
Output of program;
<div class="code">[Hello, X, slices!]</div>
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
<div class="code">sum(...values int) int {
    total: int
    for _, i: in values {
        total += i
    }
    total
}

main() {
    my_arr: = []int{90, 32, 6, 53}
    result: = sum(my_arr...)
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
<div class="code">main() {
    my_slice: = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    outln(my_slice[2:5]) // [3, 4, 5]
    outln(my_slice[:])   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[:10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[4:])  // [5, 6, 7, 8, 9, 10]
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Supported Types</div>
Arrays, slices and strings.
`;

const common_concepts_mapsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Maps</div>
<div class="text">
Maps is a hashmap. Maps a unique key value to a value.
<br><br>
Example to maps;
<div class="code">main() {
    mymap:[i8:str] = [i8:str]{
        0: "CPU",
        1: "RAM",
        2: "GPU"
    }
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
    Eead  = 35,
    Write = 89,
    Both,
}

main() {
    outln(FileMode.Read)
}</div>
As seen in the example above, there is an enumeration definition.
If you do not assign a value to the enumeration elements, the index value is automatically assigned.
In this case, the element <x class="inline_code">both</x> in the example above has the value <x class="inline_code">2</x>.

<div class="info">
  <li>You can use an element before them as a value in enumerations.</li>
  <li>Enumerations has <x class="inline_code">i64</x> data-type by default.</li>
</div>
<div class="warn">You can't use any global, function or etc. in custom value expressions.</div>

<div class="title-separator"></div>
<div class="sub-title">Custom Data-Types</div>
If you want to give enums a data-type other than the default, it is possible to do so. <br>
For example:
<div class="code">enum FileMode:u8 {
    Read  = 35,
    Write = 89,
    Both,
}

main() {
    outln(FileMode.Read)
}</div>
The above enumeration has the data-type <x class="inline_code">u8</x>.

<div class="warn">You can use only integer data-types.</div>

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
    name  : str
    age   : u8
    title : str
    salary: u32
}</div>
Members of structures are the same as a variable definition except <x class="inline_code">const</x> keyword.

<div class="title-separator"></div>
<div class="sub-title">Assigning Default Values to Members</div>
When instances of struct members are initialized, they are initialized using the default value of the data-type.
But you can custom default values. <br>
For example:
<div class="code">struct Employee {
    name  : str = "Anonymous"
    age   : u8  = 18
    title : str = "Engineer"
    salary: u32 = 6750
}</div>

<div class="title-separator"></div>
<div class="sub-title">Creating a Instances of Structures</div>
To instantiate structs, you can either give the values of the fields using braces after the struct name, or create them with their default values.
<br><br>
For example:
<div class="code">struct Character {
    name : str = "Anonymous"
    age  : u8  = 18
    title: str = "-"
}

main() {
    anon: = Character{}
    frodo: = Character{"Frodo", 50, "Hobbit"}
    gandalf: = Character{
        name:  "Gandalf",
        age:   24000,
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

<br>
For example:
<div class="code">impl Position {
    is_origin() bool {
      ret .x == 0 && .y == 0
    }
}</div>
Implements <x class="is_origin() bool"> method to <x class="inline_code">Position</x> structure.

<div class="title-separator"></div>
<div class="sub-sub-title">Receivers</div>
Receivers indicate how instance the function will use.
<br><br>
There are two types of receivers;
<br><br>
<strong>Pointer Receiver</strong> <br>
The value receiver is using a pointer to the instance from which the function was called.
You can changes on original instance.
<br><br>
<strong>Value Receiver</strong> <br>
The value receiver is using a copy of the instance from which the function was called.
<div class="warn">Not deep copy.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Syntax</div>

<div class="code">[RECEIVER_OPERATOR]IDENTIFIER(PARAMETERS) RET_TYPE {
    // Body
}</div>

<br><br>
For examples;
<div class="code">// Pointer Receiver
&method() str { /* Body */ }</div>
<div class="code">// Value Receiver
method() str { /* Body */ }</div>

<div class="title-separator"></div>
<div class="sub-sub-title">The <x class="inline_code">self</x> Keyword</div>
The <x class="inline_code">self</x> keyword represents the receiver a receiver function has.
It is used to access and use the members of the structure.
The data type is the same as the data type of the receiver.

<br><br>
For example:
<div class="code">impl Person {
    &get_name() str {
        // self: *Person
        ret self.name
    }
}</div>
In the example above, the <x class="inline_code">name</x> field of the "<x class="inline_code">Employee</x> structure instance is accessed with the <x class="inline_code">self</x> keyword.

<div class="topic-separator"></div>
A expression starting with dot can be used to access the fields and functions of the structure, without using the <x class="inline_code">self</x> keyword.
The dot is <x class="inline_code">self.</x> evaluated as.
<br><br>
For example:
<div class="code">impl Person {
    &get_name() str {
        ret .name
    }
}</div>

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
    name() str
    age() u8
}</div>

All constructs that implement the trait above must have the methods <x class="inline_code">name() str</x> and <x class="inline_code">age() u8</x>.

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
<div class="code">const PI: = 3.14159265359

trait Shape {
    area() int
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    @inline
    &area() int {
        ret .width * .height
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    @inline
    &area() int {
        ret PI * .r * .r
    }
}

main() {
    rect: Shape = Rectangle{90, 5}
    circ: Shape = Circle{90.5}
    outln(rect.area())
    outln(circ.area())
}</div>

</div>
`

const memoryHTML = `
<div class="title" style="margin-bottom: 20px;">Memory</div>
<div class="text">
  Memory skills of X. <br><br>
  Pointers, memory management, allocations...
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
<div class="code">x:*int</div>
That's pointer for <x class="inline_code">int</x> type.
<div class="info">Default value of pointers is nil.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Getting Pointer of Variables</div>
The <x class="inline_code">&</x> operator used to get pointer of variable.
<br>
For example:
<div class="code">main() {
    x: int = 10
    y: *int = &x
}</div>
The <x class="inline_code">y</x> variable is now store memory address of <x class="inline_code">x</x> variable.

<div class="title-separator"></div>
<div class="sub-sub-title">Accessing Values on Pointers</div>
The <x class="inline_code">*</x> operator is used to access the value in the memory address that the pointer store.
For example:
<div class="code">main() {
    x: int = 10
    y: *int = &x
    outln(y)  // Prints stored address
    outln(*y) // Prints value at address (so 10)
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Assign Values to Pointers</div>
Pointers can take on value assignment just like a variable, with values of the appropriate data type, because they are already variables.
<br>
For example:
<div class="code">main() {
    x: int = 10
    z: *int = &x // The 'z' store now memory address of the 'x' variable.
    y: int = 98
    z = &y      // The 'z' store now memory address of the 'y' variable.
}</div>
<div class="topic-separator"></div>
Additionally, pointers can assign the value of the memory address they store.
<br>
The <x class="inline_code">*</x> operator used for that too.
<br>
For example:
<div class="code">main() {
    x: int = 10
    y: *int = &x
    *y = 59  // Assign value
    outln(x) // Prints 59
}</div>
</div>
`;

const memory_memory_managementHTML = `
<div class="title" style="margin-bottom: 20px;">Memory Management</div>
<div class="text">
X does the memory management itself.
It guarantees memory safety.
It uses reference counting for heap allocations.
It is automatically released when the reference count of the pointer reaches zero, that is, when it is certain that the heap allocation is no longer used.
It is guaranteed that no allocation goes unnoticed and is also not released while the allocation is still in use.

<div class="title-separator"></div>
<div class="sub-title">Heap Allocation</div>
The <x class="inline_code">new</x> function is used to perform a heap allocation. <br>
It is a function of the <x class="inline_code">std::mem</x> stdlib. <br>
Please refer to the <a href="stdlib/mem.html">std::mem</a> standard library documentation for this function.
<br><br>
For example:
<div class="code">use std::mem

main() {
    ptr: = std::mem::new(int)
    outln(ptr)
}</div>
The <x class="inline_code">ptr</x> variable is a heap allocated pointer.

<div class="title-separator"></div>
<div class="sub-title">Understanding Reference Counting</div>
Only heap allocated pointers perform reference counting.
A reference counting heap counts each time it gets a reference to a dedicated pointer.
It is deducted from the count when it loses its references.
When the reference count reaches zero, it releases the allocation as it is no longer used.
<br><br>
For example:
<div class="code">use std::mem

main() {
    my_int: = 100

    // Takes address of my_int but doesn't ref counting
    ptr: = &my_int

    // Not free cause my_int is not heap-allocated
    ptr = nil


    // Make heap-allocation, returns heap-allocated *int
    // Ref count is 1
    ptr = std::mem::new(int)
    
    // Assign 100 expression to allocation
    *ptr = 100

    // Prints 100
    outln(*ptr)

    // Make new heap-allocation, ref count is 1
    // Frees old allocation cause ref count is 0 now
    ptr = std::mem::new(int)

    // Ref count is 2 now of current allocation
    // The ptr_a referencing to allocation of ptr
    ptr_a: = ptr

    // Just assign as nil, not frees. Ref count is 1 now
    ptr = nil

    // Frees allocation, ref count is 0 now
    ptr_a = nil
}</div>

<div class="title-separator"></div>
<div class="sub-title">When does XXC perform immutability?</div>
Definitions that anonymous functions get from within the block are copied into the anonymous function instead of being referenced.
This means that anonymous functions cannot change the definitions of the block they are defined in.
A heap guaranteed pointer with pre-guaranteed is required to be effective.

<div class="title-separator"></div>
<div class="sub-title">Heap Guarantee Approach</div>
Due to the heap guarantee approach of XXC, the compiler performs heap allocation and moves the relevant pointer to the stack whenever the heap allocation must be guaranteed while compiling the code.

<div class="title-separator"></div>
<div class="sub-sub-title">When does XXC perform heap guarantee?</div>
<li>When returned pointers</li>
<li>When anonymous functions copy pointers from block</li>
<li>When struct has a pointer member</li>

<div class="title-separator"></div>
<div class="sub-sub-title">How does XXC handle its allocation?</div>
Pointers to a pure point create and point to a new allocation for itself when the heap is guaranteed.
Guaranteed pointers always point to the new allocation, not the old one.
They are common if a pointer points to a place using a different pointer. When one heap is guaranteed, all public pointers used in the same way are moved to the same allocation and the heap is guaranteed.

</div>
`;

const memory_referencesHTML = `
<div class="title" style="margin-bottom: 20px;">References</div>
<div class="text">
References are like pointers but less powerful.
References are definitions that refer to a definition.
The <x class="inline_code">&</x> operator must be used to represent a reference.

<div class="title-separator"></div>
<div class="sub-title">Reference Paramaters</div>
Example for referenced parameters;
<div class="code">sum(&i, val int) { i += val }

main() {
    a: = 10
    sum(a, 100)
    outln(a)
}</div>
The example at above, prints <x class="inline_code">110</x>.
Since the reference of the variable is used, it acts directly on the parent value.

</div>
`;

const error_handlingHTML = `
<div class="title" style="margin-bottom: 20px;">Error Handling</div>
<div class="text">

The program should naturally generate and check for errors in some cases.
This core topic deals with error handling.
X uses panics and the error structure.
Catching panics and handling errors happens through them. It is plain and simple.

</div>
`;

const error_handling_error_traitHTML = `
<div class="page-title" style="margin-bottom: 20px;">Error Trait</div>
<div class="text">

The Error trait is a built-in definition.
It is a way of handling errors.
While the program is executing, if the functions are designed to return this structure when a problem occurs, providing error handling.
<br><br>
If a function does not panic when there is an error, it can return the error with the Error trait and provides handle it.
Returns nil when there is no error.
<br><br>
For example:
<div class="code">use std::errors

my_div(a, b f64) [f64, Error] {
    if a == 0 || b == 0 {
        ret 0, std::errors::new("divided with zero")
    }
    ret a/b, nil
}

main() {
    result:, err: = my_div(5, 0)
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
    &error() str {
        ret .message
    }
}

my_div(a, b f64) [f64, Error] {
    if a == 0 || b == 0 {
        ret 0, MyError{"divided by zero"}
    }
    ret a/b, nil
}

main() {
    result:, err: = my_div(10, 0)
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
You can only panic with error structure.
<br><br>
For example:
<div class="code">use errors

add_pointer(rate int, ptr *int) {
    if !ptr {
        panic(errors::new("pointer is nil"))
    }
    *ptr += rate
}

main() {
    add_pointer(nil, 10)
}</div>
The code above is an example of panicking.

</div>
`;

const error_handling_handling_panicsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Handling Panics</div>
<div class="text">

There is a built-in function that allows you to catch panics and keep your program running.
The built-in <x class="inline_code">recover</x> function once used, it catches panics of ongoing codes.
It just catch panics the codes of the scope it is in.
It just catch panics of the codes of the scope it is in.

<br><br>
For example:
<div class="code">use errors

may_panic() {
    panic(errors::new("a problem"))
}

main() {
    may_panic()
}</div>
The example code above will panic.
To be recovered it must be editing using the <x class="inline_code">recover</x> function.

<br><br>
For example:
<div class="code">use errors

may_panic() {
    panic(errors::new("a problem"))
}

main() {
    recover((e Error) {
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
<div class="code">handler(e Error) {
    // ...
}

main() {
    recover(handler)
    // ...
}</div>

</div>
`;

const typesHTML = `
<div class="title" style="margin-bottom: 20px;">Types</div>
<div class="text">
  Types and type manuplation in X.
</div>
`;

const types_aliasingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Aliasing</div>
<div class="text">
Type aliases is an alias for existing types defined by developer.
When these aliases are used, they qualify the types they represent.
<br>
For example:
<div class="code">type int32 i32

main() {
    my_int: int32 = 100
    outln(my_int)
}</div>
As seen in the example above, there is an alias definition of <x class="inline_code">int32</x> for the <x class="inline_code">i32</x> data type.
The keyword <x class="inline_code">type</x> comes first to define an alias.
Then comes the name you want to give and which type it will represent.
This alias will now represent <x class="inline_code">i32</x> when used.
<br><br>
In addition, it seems that this alias is used in variable definition.
This is because the X compiler recognizes the default types built-in.
If your type alias represents a built-in definition, your type alias will not be detected as a type.
For this reason, it is a more useful approach to specify specifically.
<div class="title-separator"></div>
When defining a type alias, only the following types can be given as the type to represent:
<ul>
  <li>Built-in Data Types</li>
  <li>Type Aliases</li>
</ul>
</div>
`;

const types_strHTML = `
<div class="page-title" style="margin-bottom: 20px;">The <x class="inline_code">str</x> Type</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-str-constructor" class="tab" onclick="select_tab_event(0)">Constructor</div>
  <div id="tab-types-str-constants" class="tab" onclick="select_tab_event(1)">Constants</div>
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
  <div id="tab-types-arrays-methods" class="tab" onclick="select_tab_event(1)">Methods</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const types_slicesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Slices</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-slices-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
  <div id="tab-types-slices-methods" class="tab" onclick="select_tab_event(1)">Methods</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const types_mapsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Maps</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-maps-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
  <div id="tab-types-maps-methods" class="tab" onclick="select_tab_event(1)">Methods</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const type_staticsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Type Statics</div>
<div class="text">

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
  <div id="tab-type-statics-f32_constants" class="tab" onclick="select_tab_event(0)">Constants</div>
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
C++ documentations of X.
<br><br>
In this section, the information necessary to use X and C++ effectively and the possibilities offered by X are included.
<br><br>
<div class="warn">This documentation is accepts you know basic C++.</div>
</div>
`;

const cpp_apiHTML = `
<div class="title" style="margin-bottom: 20px;">API</div>
<div class="text">
API of XXC for C++. <br><br>
XXC presents all the C++ content it implements and owns for X in header files.
These header files come automatically imported in every code compiled by XXC.
<br><br>
With this API, you can use the definitions of XXC in C++ codes and adapt functions written for C++ to X.
<br><br>
<a href="https://github.com/the-xlang/xxc/tree/main/api">See API</a<

</div>
`;

const cpp_interoperabilityHTML = `
<div class="title" style="margin-bottom: 20px;">Interoperability</div>
<div class="text">
X can work with C++.
A code written in C++ compatible with X can be transferred to X, used and compiled without any problems.
Everything needed is readily available, as XXC imports APIs by default to every generated code.

<div class="title-separator"></div>
<div class="sub-title">Including C++ Headers into X</div>
The use declarations of X are used to include C++ headers in the X code to be generated.
It's just a little different.
A use declaration should be told that this is a C++ include and the path should be given as a string.
<br><br>
For example:
<div class="code">use cpp "my_header.hpp"</div>
The correctness and validity of the file path is checked by the compiler. <br>
Valid header extensions; <x class="inline_code">.h</x>, <x class="inline_code">.hh</x>, <x class="inline_code">.hpp</x>, <x class="inline_code">.hxx</x>

<div class="title-separator"></div>
<div class="sub-title">Linking C++ Functions to X</div>
After the header file containing the C++ functions is passed to X, C++ functions must be declared to X.
Not all, just the ones you will use.
But remember, XXC does not check header files.
Your declarations are reliable.
The compiler assumes that the definitions exist and are correctly defined.
<br><br>
To declare a C++ function, it must be stated that it is a C++ declaration.
Then just represent the prototype of the function.
<br><br>
For example:
<div class="code">cpp my_function(int, int) f64</div>
Linked functions can only be used within the respective file and can't overload.

<div class="title-separator"></div>
<div class="sub-title">Calling Linked Functions</div>
To call a linked function, the keyword <x class="inline_code">cpp</x> is used.
All linked functions are available as method of this keyword.
<br><br>
For example:
<div class="code">cpp.my_function(x, y, z)</div>

<div class="title-separator"></div>
<div class="sub-title">Example to Interoperability</div>
<strong>sum_integers.hpp</strong>
<div class="code">i64_xt sum_integers(const slice&lt;int_xt&gt; &_Slice) {
    i64_xt total{0};
    for (const int_xt &x: _Slice) {
        total += x;
    }
    return total;
}</div>

<strong>main.xx</strong>
<div class="code">use cpp "sum_integers.hpp"

cpp sum_integers(slice []int) i64

main() {
    slice: = []int{90, 34, 63, -34, 3246, -95, 734, 0, 3}
    total: = cpp.sum_integers(slice)
    outln(total)
}
</div>

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
<div class="code">main() {
    x: f32 = 3.14
    y: int = (int)(x) // Casting
    outln(x)          // Prints 3.14
    outln(y)          // Prints 3
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
<br>
For example:
<div class="code">type[T]
sum(a, b T) T {
    x: T = a + b
    x
}

main() {
    outln(sum[int](10, 20))  // 30
    outln(sum[f32](10, 4.2)) // 14.2
    outln(sum[f64](4.67, 2)) // 6.67
}</div>

There is a use for a generic type annotation, as seen in the example above.
Use the <x class="inline_code">type</x> keyword with brackets and write the identifier of the generic type.
To specify a type for a generic type, you specify the data type in brackets.

<div class="topic-separator"></div>

To specify multiple different generic types, sequential specification or comma-separation syntaxes are available;
<div class="code">type[T1]
type[T2]
example_func(a T1, b T2) {}</div>

<div class="code">type[T1, T2]
example_func1(a T1, b T2) {}</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Generics for Structure</div>
Structures support generics.
There is no additional syntax to use it. Combine only what you know with the struct declaration.
<br><br>
For example:
<div class="code">type[T]
struct Position {
    x: T
    y: T
}</div>

<div class="info">
Calling the constructor method will be no different than calling a function that uses generics.
</div>

<div class="title-separator"></div>
<div class="sub-sub-title" style="margin-bottom: 20px;">Genericed Structure Type Representation</div>
Generic types must also be specified to specify an instance of a specific type of the position structure.
Doing this is like calling a function.
<br><br>
For example:
<div class="code">pos: Position[int]</div>

<div class="title-separator"></div>
<div class="sub-title" style="margin-bottom: 20px;">Dynamic Generic Type Annotation</div>
Dynamic generic annotation can be used if all generic types are detectable by the compiler.
<br><br>
For example:
<div class="code">type[Key, Value]
print_map(map [Key:Value]) {
    for key:, value: in map {
        out(key)
        out(": ")
        outln(value)
    }
}

main() {
    mymap: = [int:str]{
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

const documentingHTML = `
<div class="title" style="margin-bottom: 20px;">Documenting</div>
<div class="text">
It is important to document the code.
X makes it easy to have documented code.
The <x class="inline_code">doc</x> command comes internally to the compiler and takes over the task of documenting your X source code.
<br><br>
The <x class="inline_code">doc</x> command creates the documentation it creates in the <x class="inline_code">cpp_out_dir</x> field.
The extensions of the files are <x class="inline_code">$SOURCE_FILE_NAME.xdoc</x>.
<br><br>
The <x class="inline_code">xdoc</x> file is in JSON format and contains only metadata about definitions.
</div>
`;

const documenting_documentation_commentsHTML = `
<div class="title" style="margin-bottom: 20px;">Documentation Comments</div>
<div class="text">
If you want your personal comments to be in the output created with the <x class="inline_code">doc</x> command, you can do this with the documentation comments.
<br><br>
To create a documentation comment, simply start it with <x class="inline_code">doc:</x>.
The documenter will treat that and subsequent comment lines as documentation comments.
<br><br>
For example:
<div class="code">// doc:
// Divides specified floats.
// THIS FUNCTION DOESN'T CHECK ZERO DIVISION!
div(a, b f64) f64 { a/b }</div>

<div class="warn">
    <li>The documentation comments should be single-line comments.</li>
    <li>The documentation comments should be full line.</li>
</div>
</div>
`;

const documenting_using_documenterHTML = `
<div class="title" style="margin-bottom: 20px;">Using Documenter</div>
<div class="text">
The <x class="inline_code">doc</x> command is used to use the documenter.
<br><br>
The <x class="inline_code">doc</x> command works quite simply.
Show only the X source files you want to document.
<br><br>
For example:
<div class="code">$ xxc doc main.xx</div>
Documentize the <x class="inline_code">main.xx</x> file.
<br><br>
<div class="code">$ xxc doc main.xx test.xx</div>
Documentize the <x class="inline_code">main.xx</x> and <x class="inline_code">test.xx</x> files.

<div class="title-separator"></div>
<div class="warn">
The <x class="inline_code">doc</x> command does not document if the source code contains a non-logical (syntax, etc.) error.
</div>
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

main() {
    std::pkg::a_function()
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Full Use Declarations</div>
It is sufficient to add <x class="inline_code">::*</x> to the end of the use declaration that you want to import fully.
The definitions of packages imported in this way can be used directly or optionally accessed with the classic namespace notation.
<br><br>
For example:
<div class="code">use std::pkg::*

main() {
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

main() {
    a_function()
}</div>

<div class="topic-separator"></div>
If you want to import with Namespace but want to make some definitions directly available, use the <x class="inline_code">self</x> keyword.
<div class="code">use std::pkg::{self, a_function}

main() {
    a_function()
    std::pkg::a_function()
}</div>

<div class="title-separator"></div>
<div class="sub-title">Shadowing</div>
When you import, definitions using the same identifier are shaded.
When there is a conflict, the compiler will use the first imported definition.
When a definition made and an imported definition have the same identifier, you will get a compiler error if it is not shadowable.
One solution might be to use the namespace notation to access shaded definitions.

<div class="title-separator"></div>
<div class="sub-title">Packages</div>
X treats each directory as a package.
Each package has the ability to use its own defines.
<br><br>
For example:
<div class="code">// file: ./hello_print.xx

@inline
hello_print(name str) {
    outln("Hello " + name)
}</div>
<div class="code">// file: ./main.xx

main() {
    hello_print("Packages")
}</div>
As shown in the example above, since both files are located in the same directory, they are considered the same package and therefore have access to each other's definitions.

<div class="warn">Be careful to design the packages according to their definition order, otherwise you may not get the result you expect.</div>
</div>
`;

const preprocessorHTML = `
<div class="title" style="margin-bottom: 20px;">Preprocessor</div>
<div class="text">
The compile's preprocessor processes the source code before the parser.
Before the compiler parses the code, the preprocessor processes the preprocessor instructions above the code, and the parser parses the code processed by this preprocessor.
</div>
`;

const preprocessor_directivesHTML = `
<div class="title" style="margin-bottom: 20px;">Directives</div>
<div class="text">
Directives tell the compiler how to process the code. <br>
Directives are denoted by <x class="inline_code">pragma</x> identifier to preprocessor. <br>
For example:
<div class="code">#pragma enofi</div>

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">enofi</x></div>
When importing a package or local package, this directive ensures that the code is split on import.
When the preprocessor sees this directive, it discards the rest of the code.
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
  At below, you can see all content of standard library of the X programming language;
  <br><br><br>
  <li><a href="../pages/stdlib/builtin.html">Builtin</a></li>
  <li><a href="../pages/stdlib/debug.html">std::debug</a></li>
  <li><a href="../pages/stdlib/debug_assert.html">std::debug::assert</a></li>
  <li><a href="../pages/stdlib/errors.html">std::errors</a></li>
  <li><a href="../pages/stdlib/io.html">std::io</a></li>
  <li><a href="../pages/stdlib/math.html">std::math</a></li>
  <li><a href="../pages/stdlib/math_bits.html">std::math::bits</a></li>
  <li><a href="../pages/stdlib/mem.html">std::mem</a></li>
  <li><a href="../pages/stdlib/os.html">std::os</a></li>
  <li><a href="../pages/stdlib/reflect.html">std::reflect</a></li>
  <li><a href="../pages/stdlib/slice.html">std::slice</a></li>
  <li><a href="../pages/stdlib/sync_atomic.html">std::sync::atomic</a></li>
  <li><a href="../pages/stdlib/unsafe.html">std::unsafe</a></li>
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
<a href="https://github.com/the-xlang/website/issues/new/choose">Open Issue</a> <br>
<a href="https://github.com/the-xlang/website/fork">Fork project</a>

<div class="title-separator"></div>
  <div class="sub-title">Source Code this Website</div>
  The source code files is accessible from <a href="https://github.com/the-xlang/website">GitHub</a> website repository.
</div>
`;

// ------------------------------------------------------------------------------

const TAB_types_str_constructor = `
<div class="sub-sub-title"><x class="inline_code">str(obj any) str</x></div>
Returns string value of given object.
`;

const TAB_types_str_constants = `
<div class="sub-sub-title"><x class="inline_code">const len: int</x></div>
Character count of string.
`;

const TAB_types_str_methods = `
<div class="sub-sub-title"><x class="inline_code">empty() bool</x></div>
Reports string is empty or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">has_prefix(sub str) bool</x></div>
Reports string has prefix as specified substring or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">has_suffix(sub str) bool</x></div>
Reports string has suffix as specified substring or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">find(sub str) int</x></div>
Returns index of first matched item with specified substring, returns <x class="inline_code">-1</x> if not exist any match. <br>
Starts searching at left of string to right.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">rfind(sub str) int</x></div>
Returns index of first matched item with specified substring, returns <x class="inline_code">-1</x> if not exist any match. <br>
Starts searching at right of string to left.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">trim(bytes str) str</x></div>
Trims string by specified bytes at left.
Each character is each byte.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">rtrim(bytes str) str</x></div>
Trims string by specified bytes at right.
Each character is each byte.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">split(sub str, n inr) []str</x></div>
Splits the string into the specified number of parts to the specified substring. <br>
Returns empty slice if <x class="inline_code">n</x> is equals to zero. <br>
Returns all parts if <x class="inline_code">n</x> less than zero.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">replace(sub str, new str, n int) str</x></div>
Replaces all substrings matching <x class="inline_code">sub</x> in the string with <x class="inline_code">new</x>. <br>
Returns same string if <x class="inline_code">n</x> is equals to zero. <br>
Replaces all matches if <x class="inline_code">n</x> less than zero.
`;

const TAB_types_arrays_constants = `
<div class="sub-sub-title"><x class="inline_code">const len: int</x></div>
Length of array.
`;

const TAB_types_arrays_methods = `
<div class="sub-sub-title"><x class="inline_code">empty() bool</x></div>
Reports array is empty or not.
`;

const TAB_types_slices_constants = `
<div class="sub-sub-title"><x class="inline_code">const len: int</x></div>
Length of slice.
`;

const TAB_types_slices_methods = `
<div class="sub-sub-title"><x class="inline_code">empty() bool</x></div>
Reports slice is empty or not.
`;

const TAB_types_maps_constants = `
<div class="sub-sub-title"><x class="inline_code">const len: int</x></div>
Length of key-value pairs.
`;

const TAB_types_maps_methods = `
<div class="sub-sub-title"><x class="inline_code">empty() bool</x></div>
Reports map is empty or not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">clear()</x></div>
Removes all key-value pairs.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">has(key KEY_TYPE) bool</x></div>
Returns true if specified key value is exist in map, returns false if not.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">del(key KEY_TYPE)</x></div>
Deletes key if exist.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">keys() []KEY_TYPE</x></div>
Returns keys of key-value pairs as slice.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">values() []VALUE_TYPE</x></div>
Returns values of key-value pairs as slice.
`;

const TAB_type_statics_i8_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: i8</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: i8</x></div>
Minimum value of type.
`;

const TAB_type_statics_i16_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: i16</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: i16</x></div>
Minimum value of type.
`;

const TAB_type_statics_i32_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: i32</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: i32</x></div>
Minimum value of type.
`;

const TAB_type_statics_i64_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: i64</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: i64</x></div>
Minimum value of type.
`;

const TAB_type_statics_u8_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: u8</x></div>
Maximum value of type.
`;

const TAB_type_statics_u16_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: u16</x></div>
Maximum value of type.
`;

const TAB_type_statics_u32_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: u32</x></div>
Maximum value of type.
`;

const TAB_type_statics_u64_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: u64</x></div>
Maximum value of type.
`;

const TAB_type_statics_f32_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: f32</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: f32</x></div>
Minimum value of type.
`;

const TAB_type_statics_f64_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: f64</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: f64</x></div>
Minimum value of type.
`;

const TAB_type_statics_int_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: int</x></div>
Maximum value of type.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">const min: int</x></div>
Minimum value of type.
`;

const TAB_type_statics_uint_constants = `
<div class="sub-sub-title"><x class="inline_code">const max: uint</x></div>
Maximum value of type.
`;

const TAB_common_concepts_iterations = `
Iterations allow you to repeat the algorithm according to certain conditions.
The <x class="inline_code">for</x> keyword use for iterations in X.

<div class="title-separator"></div>
<div class="sub-sub-title">Infinity Iterations</div>
Infinite iterations keep repeating endlessly until the loop is somehow broken.
<br>
For example:
<div class="code">main() {
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
<div class="code">main() {
    counter: = 0
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
<div class="sub-sub-title">Foreach Iterations</div>
Foreach or for-each can be summarized as an iteration standard for collections.
It repeats itself by looping through the elements of the collection.
<br>
For example:
<div class="code">main() {
    mystr: str = "Hello"
    for index: in mystr {
        outln(index)
    }
}

// OUTPUT
// 0
// 1
// 2
// 3
// 4</div>
Seen as the example at above, this is a foreach iteration.
The <x class="inline_code">index:</x> part of iteration, declares a new variable for iteration.
<br>
Iterations can have two variables: Current index and current element.
<br><br>
This example, just shows index. Let's see foreach iteration with element.
<br>
For example:
<div class="code">main() {
    mystr: str = "Hello"
    for _, c: byte in mystr {
        outln(c)
    }
}

// OUTPUT
// H
// e
// l
// l
// o</div>
As you can see, it is possible to use the ignore operator for unused fields.

<div class="info">If you don't use declaration with data-type, X assign variables data-types by automatically by collection.
Similar to auto-type variables.
If the index variable is be numeric, X's auto data-type is <x class="inline_code">int</x> type.</div>

<div class="title-separator"></div>
<div class="sub-sub-title">For Iterations</div>
The for loop is a good choice for iterations from one point to another.
<div class="title-separator"></div>
<strong>Syntax</strong>
<div class="code">for STATEMENT1, EXPRESSION, STATEMENT2 { /* Body */ }</div>

<strong>STATEMENT1</strong>: Executed once before block.
<br>
<strong>EXPRESSION</strong>: Iteration condition expression, it is should be bool expression.
<br>
<strong>STATEMENT2</strong>: Executes every time after the block executed.

<br><br>
For example:
<div class="code">main() {
    for i: = 0, i < 10, i++ {
        outln(i)
    }
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title">Iteration Controlling</div>
We may want to check for iterations, this is normal and common.
There are two ways to do this in X; The <x class="inline_code">continue</x> and <x class="inline_code">break</x> keywords.
<br><br>
If you want break the iteration, use the <x class="inline_code">break</x> keyword.
<br>
For example:
<div class="code">main() {
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
<div class="code">main() {
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
The <x class="inline_code">if</x> and <x class="inline_code">else</x> keywords use for if expressions in X.

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">if</x> Expressions</div>
If the provided condition is <x class="inline_code">true</x> the block is executed, otherwise it is not executed.
It is also the beginning of a new chain of conditions.
<br><br>
For example:
<div class="code">main() {
    x: = new(int)
    if x == nil {
        outln("memory allocation is failed")
    }
}</div>

<div class="title-separator"></div>
<div class="sub-sub-title"><x class="inline_code">else if</x> Expressions</div>
If the preceding <x class="inline_code">if</x> and <x class="inline_code">else if</x> expressions have not been fulfilled, it is a condition presented as an alternative to them.
<br><br>
For example:
<div class="code">main() {
    x: = 100
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
<div class="code">main() {
    x: = new(int)
    if x == nil {
        outln("memory allocation is failed")
    } else {
        outln("memory allocation is success")
    }
}</div>
`;

const TAB_common_concepts_match_expression = `
If you need to make a selection and run an algorithm based on that selection, <x class="inline_code">match</x> is a good choice.
The keyword <x class="inline_code">case</x> is used for each case.
For a block to be executed if not exist any match, the optional keyword <x class="inline_code">default</x> can be used.
<br><br>

<strong>Syntax</strong>
<div class="code">match EXPRESSION {
case CASE_EXPRESSION1:
    // Body
case CASE_EXPRESSION2:
    // Body
case CASE_EXPRESSION3:
    // Body
default:
    // Body
}</div>

<strong>EXPRESSION</strong>: Expression to match.
<br>
<strong>CASE_EXPRESSION1</strong>: Expression for case.
<br>
<strong>CASE_EXPRESSION2</strong>: Expression for another case.
<br>
<strong>CASE_EXPRESSION3</strong>: Expression for another case.
<br>
<strong>default</strong>: Default block.

<br><br>
For example:
<div class="code">match my_integer {
case MY_INTEGER_MIN:
    outln("Minimum")
case MY_INTEGER_MAX:
    outln("Maximum")
default:
    outln("Between or not")
}</div>

<div class="title-separator"><div>
<div class="sub-title">Breaking Execution</div>
As with iterations, you can break the execution of the block.
The keyword <x class="inline_code">break</x> is sufficient for this.

<br><br>
For example:
<div class="code">match X {
case Y:
    if Y == A {
        break
    }
    // ...
case Z:
    // ...
}</div>

<div class="title-separator"><div>
<div class="sub-title">Condition Chain</div>
If a match expression is not given, match acts like an if-else chain.
This might be a more readable option on long condition chains.

<br><br>
For example:
<div class="code">match {
case x > 10 || x < 90:
    // Body
case my_bool:
    // Body
case y == 100:
    // Body
default:
    // Body
}</div>

<div class="title-separator"><div>
<div class="sub-title">Multiple Case Expression</div>
You can have a single algorithm for multiple cases.
For this, you can give more than one expression for a case.
The only addition in syntax is commas between statements.

<br><br>
For example:
<div class="code">match X {
case Y, Z, V:
    // Body
case A, B:
    // Body
case C:
    // Body
default:
    // Body
}</div>

<div class="title-separator"><div>
<div class="sub-title">The <x class="inline_code">fallthrough</x> Keyword</div>
The fallthrough keyword can only useable into case scopes and end of the scopes. It continues to next scope.

<br><br>
For example:
<div class="code">match {
case false:
    outln("Case1")
case true:
    outln("Case2")
    fallthrough
case false:
    outln("Case3")
    fallthrough
default:
    outln("Default")
}</div>

Output:
<div class="code">Case2
Case3
Default</div>

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
`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

// Navigation.
const NAV_the_xlang                           = document.getElementById('the-xlang');
const NAV_foreword                            = document.getElementById('foreword');
const NAV_introduction                        = document.getElementById('introduction');
const NAV_getting_started                     = document.getElementById('getting-started');
const NAV_getting_started_downloads           = document.getElementById('getting-started-downloads');
const NAV_getting_started_install_from_source = document.getElementById('getting-started-install-from-source');
const NAV_compiler                            = document.getElementById('compiler');
const NAV_compiler_basic_commands             = document.getElementById('compiler-basic-commands');
const NAV_compiler_config_files               = document.getElementById('compiler-config-files');
const NAV_compiler_compiling                  = document.getElementById('compiler-compiling');
const NAV_project                             = document.getElementById('project');
const NAV_project_directory_order             = document.getElementById('project-directory-order');
const NAV_project_naming                      = document.getElementById('project-naming');
const NAV_project_declarations                = document.getElementById("project-declarations");
const NAV_project_defines                     = document.getElementById("project-defines");
const NAV_basics                              = document.getElementById('basics');
const NAV_basics_comments                     = document.getElementById('basics-comments');
const NAV_basics_reserved_functions           = document.getElementById('basics-reserved-functions');
const NAV_basics_data_types                   = document.getElementById('basics-data-types');
const NAV_basics_operators                    = document.getElementById('basics-operators');
const NAV_basics_attributes                   = document.getElementById('basics-attributes');
const NAV_basics_statements                   = document.getElementById('basics-statements');
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
const NAV_memory_pointers                     = document.getElementById('memory-pointers');
const NAV_memory_memory_management            = document.getElementById('memory-memory-management');
const NAV_memory_references                   = document.getElementById("memory-references");
const NAV_error_handling                      = document.getElementById("error-handling");
const NAV_error_handling_error_trait         = document.getElementById("error-handling-error-trait");
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
const NAV_documenting                         = document.getElementById("documenting");
const NAV_documenting_documentation_comments  = document.getElementById("documenting-documentation-comments");
const NAV_documenting_using_documenter        = document.getElementById("documenting-using-documenter");
const NAV_use_declarations                    = document.getElementById("use-declarations");
const NAV_preprocessor                        = document.getElementById("preprocessor");
const NAV_preprocessor_directives             = document.getElementById("preprocessor-directives");
const NAV_stdlib                              = document.getElementById("stdlib");
const NAV_end                                 = document.getElementById("end");

const side_navigation = document.getElementById("side-navigation");

//#endregion GET_ELEMENTS

const nav = new SideNavigator();
nav.navigations = [
  [NAV_the_xlang,                           the_xlangHTML],
  [NAV_foreword,                            forewordHTML],
  [NAV_introduction,                        introductionHTML],
  [NAV_getting_started,                     getting_startedHTML],
  [NAV_getting_started_downloads,           getting_started_downloadsHTML],
  [NAV_getting_started_install_from_source, getting_started_install_from_sourceHTML],
  [NAV_compiler,                            compilerHTML],
  [NAV_compiler_basic_commands,             compiler_basic_commandsHTML],
  [NAV_compiler_config_files,               compiler_config_filesHTML],
  [NAV_compiler_compiling,                  compiler_compilingHTML],
  [NAV_project,                             projectHTML],
  [NAV_project_directory_order,             project_directory_orderHTML],
  [NAV_project_naming,                      project_namingHTML],
  [NAV_project_declarations,                project_declarationsHTML],
  [NAV_project_defines,                     project_definesHTML],
  [NAV_basics,                              basicsHTML],
  [NAV_basics_comments,                     basics_commentsHTML],
  [NAV_basics_reserved_functions,           basics_reserved_functionsHTML],
  [NAV_basics_data_types,                   basics_data_typesHTML],
  [NAV_basics_operators,                    basics_operatorsHTML],
  [NAV_basics_attributes,                   basics_attributesHTML],
  [NAV_basics_statements,                   basics_statementsHTML],
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
  [NAV_memory_pointers,                     memory_pointersHTML],
  [NAV_memory_memory_management,            memory_memory_managementHTML],
  [NAV_memory_references,                   memory_referencesHTML],
  [NAV_error_handling,                      error_handlingHTML],
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
  [NAV_documenting,                         documentingHTML],
  [NAV_documenting_documentation_comments,  documenting_documentation_commentsHTML],
  [NAV_documenting_using_documenter,        documenting_using_documenterHTML],
  [NAV_use_declarations,                    use_declarationsHTML],
  [NAV_preprocessor,                        preprocessorHTML],
  [NAV_preprocessor_directives,             preprocessor_directivesHTML],
  [NAV_stdlib,                              stdlibHTML],
  [NAV_end,                                 endHTML],
];

const tabs = [
  // ID - HTML
  ["tab-types-str-constructor",             TAB_types_str_constructor],
  ["tab-types-str-constants",               TAB_types_str_constants],
  ["tab-types-str-methods",                 TAB_types_str_methods],
  ["tab-types-arrays-constants",            TAB_types_arrays_constants],
  ["tab-types-arrays-methods",              TAB_types_arrays_methods],
  ["tab-types-slices-constants",            TAB_types_slices_constants],
  ["tab-types-slices-methods",              TAB_types_slices_methods],
  ["tab-types-maps-constants",              TAB_types_maps_constants],
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
