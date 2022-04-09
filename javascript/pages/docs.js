// Copyright 2021 The X Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const navigation_avtive_color = 'rgb(200, 116, 221)';

const page_title = `X - Documentations`;

const prev_page = `
<button onclick="prev_page_click()" style="float: left; padding: 15px;">
  <x class="arrow left" style="margin-top: 5px; margin-left: 5px;"></x>
</button>
`;

const next_page = `
<button onclick="next_page_click()" style="float: right; padding: 15px;">
  <x class="arrow right" style="margin-top: 5px; margin-right: 5px;"></x>
</button>
`;

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
  The fact that it evolves directly to Cxx and compiles from Cxx means an environment familiar to C/Cxx developers.
  <br><br>
  X is also a good choice for the simpler way to write Cxx.
  At the developer's request, X can be translated or compiled into Cxx.
  This choice is the developer's.
</div>
`;

const forewordHTML = `
<div class="title" style="margin-bottom: 20px;">Foreword</div>
<div class="text">
  The X programming language facilitates Cxx development in general.
  In addition, this language is actually more than an interface.
  Although it acts as a bridge between two languages, it is designed as a language itself.
  <br><br>
  This documentation is updated following the source code according to the latest version of X.
  Some content maybe is not released yet, so it may be here, but not in the compiler you have.
  <br><br>
  X syntactically and structurally encourages code to be readable.
  It aims to transform Cxx code as safely as possible.
  Optimizes for a secure code.
  With this documentation you will see the basics and some subtleties of X and you will understand X.
  You don't actually need to know Cxx to learn and understand X.
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

  <div class="title-seperator"></div>
  <div class="sub-title">Who X is For</div>
  X is good for a few groups of developers for many reasons. Some of those;

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Students</div>
  X is suitable both for learning programming and for learning Cxx.
  X's simple structure and easy-to-understand, readable code encourage both effortless writing and understanding.
  In this way, students can learn without difficulty.
  Confusing syntax does not stand in their way.

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Open Source Developers</div>
  X is a project open to community contributions.
  Thank you for every tool, library, framework and program you make open source.

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Developers Who Value Speed, Stability and Simplicity</div>
  X is a good choice for those looking for simplicity, stability and performance.
  When you develop with X, you use a simple and straightforward syntax.
  The X code is then converted to stable and safe Cxx code.
  Everything happens much more easily and comfortably.
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

  <div class="title-seperator"></div>
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

  <div class="title-seperator"></div>
  <div class="sub-title">Build Scripts</div>
  Project has scripts for build/compile project.
  You can use them.
  This scripts written for compile the X compiler.
  If you execute script, result is be compilation error or complete message.
  If you have a compilation errors, probably source code is in active development.

  <div class="warn">These examples assume you are in the root directory of the X project.</div>

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Windows</div>
  <div class="info">
    Ideal scripts for Windows: usally batchfiles (.bat).
  </div>
  Using example for PowerShell;
  <div class="code">PS @DIR> scripts/build.bat</div>

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Linux</div>
  <div class="info">
    Ideal scripts for Windows: usally shellscripts (.sh).
  </div>
  Using example for Bash;
  <div class="code">$ scripts/build.sh</div>

  <div class="title-seperator"></div>
  <div class="sub-title">Manuel</div>
  X compiler is written in Go, for now!

  <div class="warn">You should have Go compiler for this option.</div>

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Windows</div>
  Using example for PowerShell;
  <div class="code">PS @DIR> go build -o xxc.exe -v cmd/xxc/main.go</div>

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Linux</div>
  Using example for Bash;
  <div class="code">$ go build -o xxc.out -v cmd/xxc/main.go</div>
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

<div class="title-seperator"></div>
<div class="sub-title">help</div>
Shows help about of commands.
<div class="code">$ xxc help</div>

<div class="title-seperator"></div>
<div class="sub-title">version</div>
Shows version of the X compiler.
<div class="code">$ xxc version</div>

<div class="title-seperator"></div>
<div class="sub-title">doc</div>
Documentize X source code.
See the Documenting for more information.
<div class="code">$ xxc doc main.xx</div>

<div class="title-seperator"></div>
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
    <td style="text-align: center; font-family: 'Code';">cxx_out_dir</td>
    <td>Directory of transpiled Cxx file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">cxx_out_name</td>
    <td>Name of transpiled Cxx file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">language</td>
    <td>
      Name of language-pack to use.
      Set empty for default language-pack.
    </td>
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
And compiler is transpile our X code to Cxx code. <br>
Result is created by settings file and compile if mode setted as <x class="inline_code">compile</x>.
<br><br>
As result we have a executable machine code or Cxx result of our program.
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

<div class="title-seperator"></div>
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

<div class="title-seperator"></div>
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

<div class="title-seperator"></div>
<div class="sub-title">Documentations</div>
Nice names for documentations of your project; <br>
<ul>
  <li><x class="inline_code">doc</x></li>
  <li><x class="inline_code">docs</x></li>
  <li><x class="inline_code">documentation</x></li>
  <li><x class="inline_code">documentations</x></li>
</ul>

It is recommended to keep the documents and explanations of your projects in this directory.

<div class="title-seperator"></div>
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
It is recommended to name your files and directories in your projects with the snake_case standard.
You might also consider following X's naming conventions.
It is in the interest of you and other developers that any name you give is relevant and understandable.
<br>
<br>
Additionally, a directory is considered a module.
Therefore, when imported, all source code files in the directory will be imported.
With that in mind, it's also preferable to adopt splitting each function and other things into files one by one.

<div class="title-seperator"></div>
<div class="sub-title">Naming Examples</div>
<div class="code">push</div>
<div class="code">get_env</div>
<div class="code">save_as_article</div>
</div>
`;

const project_declarationsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Declarations</div>
<div class="text">
Each unused statement is tried not to be included in the cxx output.
This does not pose much of a problem with global declarations and should not be a hindrance to compilation.
But you have to use the declarations you make in your code blocks, if you don't the compiler will throw an error for each one.
<br><br>
For example;
<div class="code">main() {
  a:i32
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

<div class="title-seperator"></div>
<div class="sub-title">Define Order</div>
The example seen above is due to the definition order logic.
X has a priority queue that it uses to process definitions.
It is useful to pay attention to this.
<br><br>
<strong>Order (High to Low);</strong>
<div style="margin-top: 5px;"></div>
<li>Use Declarations</li>
<li>Type Aliases, Globals</li>
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

  <div class="title-seperator"></div>
  <div class="sub-title">Inline Comments</div>
  <div class="code">// Inline comment</div>

  <div class="title-seperator"></div>
  <div class="sub-title">Multiline Comments</div>
  <div class="code">/*
  Multiline
  Comment
*/</div>
</div>
`;

const basics_entry_pointHTML = `
<div class="page-title" style="margin-bottom: 20px;">Entry Point</div>
<div class="text">
  The entry point is the first routine that starts running when the program runs. <br>
  You must have a entry point. If you not have, code does not compile.
  <br><br>
  X's entry point function is <x class="inline_code">main</x> function. <br>
  Entry point is should be void and not have any parameter.

  <div class="title-seperator"></div>
  <div class="sub-title">For Example</div>
  <div class="code">main() {
  // Your entry point function body.
}</div>
</div>
`;

const basics_data_typesHTML = `
<div class="page-title" style="margin-bottom: 20px;">Data Types</div>
<div class="text">
  X is designed strongly typed.
  Therefore, the data types of all values must be specified during compilation.
  In this section we will look at the built-in types offered by the compiler.

  <div class="title-seperator"></div>
  <div class="sub-title">Primitive Types</div>
  <table class="table">
    <tr>
      <th>Type</th>
      <th>Typical Bit Width</th>
      <th>Typical Range</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i8</td>
      <td style="text-align: center;">1byte</td>
      <td>-127 to 127</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">sbyte</td>
      <td style="text-align: center;">- alias for i8 -</td>
      <td>- alias for i8 -</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">16</td>
      <td style="text-align: center;">2bytes</td>
    <td>-32768 to 32767</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i32</td>
      <td style="text-align: center;">4bytes</td>
      <td>-2147483648 to 2147483647</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i64</td>
      <td style="text-align: center;">8bytes</td>
      <td>-9223372036854775808 to 9223372036854775807</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u8</td>
      <td style="text-align: center;">1byte</td>
      <td>0 to 255</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">byte</td>
      <td style="text-align: center;">- alias for u8 -</td>
      <td>- alias for u8 -</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u16</td>
      <td style="text-align: center;">2bytes</td>
      <td>0 to 65535</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u32</td>
      <td style="text-align: center;">4bytes</td>
      <td>0 to 4294967295</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u64</td>
      <td style="text-align: center;">8bytes</td>
      <td>0 to 18446744073709551615</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">size</td>
      <td style="text-align: center;">Platform dependent</td>
      <td>Platform dependent (unsigned)</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f32</td>
      <td style="text-align: center;">4bytes</td>
    <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f64</td>
      <td style="text-align: center;">8bytes</td>
      <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td style="text-align: center;">1bytes</td>
      <td>true or false</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">char</td>
      <td style="text-align: center;">4bytes</td>
      <td>Single ASCII character.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">str</td>
      <td style="text-align: center;">-</td>
      <td>UTF-8 character array.</td>
    </tr>
  </table>

  <div class="title-seperator"></div>
  <div class="sub-title">Type Compability</div>
  <table class="table">
    <tr>
      <th>Type</th>
      <th>Compatible Types</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i8</td>
      <td>i8, i16, i32, i64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">sbyte</td>
      <td>- alias for i8 -</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i16</td>
      <td>i16, i32, i64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i32</td>
      <td>i32, i64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">i64</td>
      <td>i64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u8</td>
      <td>u8, u16, u32, u64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">byte</td>
      <td>- alias for u8 -</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u16</td>
      <td>u16, u32, u64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u32</td>
      <td>u32, u64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">u64</td>
      <td>u64, f32, f64, size</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f32</td>
      <td>f32, f64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">f64</td>
      <td>f64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td>bool</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">char</td>
      <td>char</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">str</td>
      <td>str</td>
    </tr>
  </table>

  <div class="title-seperator"></div>
  <div class="sub-title">Integers</div>
  <div class="sub-sub-title">Classic - Decimal</div>
  <div class="code">12345</div>
  <div class="sub-sub-title">Hexadecimal</div>
  <div class="code">0xDFF90</div>

  <div class="title-seperator"></div>
  <div class="sub-title">Floats</div>
  <div class="sub-sub-title">Classic - Decimal</div>
  <div class="code">3.14</div>
  <div class="sub-sub-title">Scientific</div>
  <div class="code">3.148797963502462594e+005</div>

  <div class="title-seperator"></div>
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
      <td style="text-align: center; font-family: 'Code';">\\xA4</td>
      <td>2-digit hex</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\uDDF0</td>
      <td>4-digit hex</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\U903UB2FF</td>
      <td>8-digit hex</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">\\278</td>
      <td>Octal</td>
    </tr>
  </table>
  <div class="title-seperator"></div>
  <div class="sub-sub-title">Raw String Literals</div>
  Raw strings do not contain escape sequences and are not required to be defined in a single line.
  They are represents with <x class="inline_code">\`</x>.
  <div class="code">\`Raw String literal of X.\`</div>
  <div class="code">\`Raw String literal of X
with
new
    lines.\`</div>

  <div class="title-seperator"></div>
  <div class="sub-title">Nil</div>
  Zero value for pointers and function data typed defines.
  <div class="code">nil</div>
</div>
`;

const basics_operatorsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Operators</div>
<div class="text">
  Operators are symbols that describe and specify arithmetic or logical tasks.

  <div class="title-seperator"></div>
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
  </table>

  <div class="title-seperator"></div>
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

  <div class="title-seperator"></div>
  <div class="sub-title">Bitwise Operators</div>
  <table class="table">
    <tr>
      <th style="text-align: center;">Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">&</td>
      <td>Bitwise and</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">|</td>
      <td>Bitwise or</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">^</td>
      <td>Bitwise XOR</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">~</td>
      <td>Bitwise not</td>
    </tr>
  </table>

  <div class="title-seperator"></div>
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

  <div class="title-seperator"></div>
  <div class="sub-title">Precedences</div>
  <table class="table">
    <tr>
      <th style="text-align: center;">Precedence</th>
      <th>Operator(s)</th>
    </tr>
    <tr>
      <td style="text-align: center;">5</td>
      <td style="font-family: 'Code';">* / % << >> &</td>
    </tr>
    <tr>
      <td style="text-align: center;">4</td>
      <td style="font-family: 'Code';">+ - | ^</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="font-family: 'Code';">== != < <= > >=</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="font-family: 'Code';">&&</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="font-family: 'Code';">||</td>
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
cube(s i32) i32 {
  // Body ...
}</div>
</div>
<br><br>
If you are giving more than one attribute, you should write each one in the same format.
Note that an attribute cannot be given repeatedly.
<br><br>
For example:
<div class="code">@attribute_a @attribute_b
cube(s i32) i32 {
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
For example;
<div class="code">main() {
  [STATEMENT_1]; [STATEMENT_2]
  [STATEMENT_3]
  [STATEMENT_4]
}</div>


<div class="title-seperator"></div>
<div class="sub-title">Expressions as Statement</div>
You may want to write an expression as a statement for several reasons.
It is possible.
X tends to treat every statement it can't classify on a subject as an expression.
<br><br>
For example;
<div class="code">main() {
  100
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
When you just use <x class="inline_code">:</x> you report you want the data type to be detect automatically.
The data type is set by the X compiler based on the data.
<br><br>
For example;
<div class="code">age: = 18</div>
The data type of the above variable is defaulted to <x class="inline_code">i32</x>.
<div class="warn">
In this method, the variable must be given a value, otherwise the X compiler will show an error.
</div>

<div class="title-seperator"></div>
<div class="sub-title">Manuel Data Type Specification</div>
You may want to specify the data type, it is possible.
It also brings you advantages.
<br><br>
For example;
<div class="code">age:i32 = 18</div>
This is equivalent to the one shown above.
However, you specified the data type.
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

<div class="title-seperator"></div>
<div class="sub-title">Assignment</div>
The values of the variables can be changed later.
The value given must be the same as the data type of the variable.
<br><br>
For example;
<div class="code">example() {
  a:i32 = 10 // Value is 10.
  a = 200    // New value is 200.
}</div>

<div class="title-seperator"></div>
<div class="sub-title">Constant Variable</div>
Constant variables are declared same method, the only difference being that the keyword <x class="inline_code">const</x> is used when defining them.
<br><br>
For example;
<div class="code">const age: = 18</div>
<div class="code">const age:i32 = 18</div>
<div class="warn">
No matter which method the constant variables are defined by, a value must be given.
</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Differences Between Variables and Constants Variables</div>
The value of the variables can change, then they can be updated with a different value to match the data type.
Constants take a single value and never change again.

<div class="title-seperator"></div>
<div class="sub-title">Volatile Variable</div>
The <x class="inline_code">volatile</x> keyword makes memory access atomic.
An important point here is that it doesn't make operations to memory atomic, only access to it.
While writing and reading data, they see the old or last value, but never the intermediate value.
<br><br>
For example;
<div class="code">volatile tickrate: = 128</div>

<div class="title-seperator"></div>
<div class="sub-title">Multiple Assignment / Declaration</div>
You can multiple variable update or declaration.
What? Sure, you can use two type in same statement.
You know how to declare variable, okay it is same.
The single difference, identifiers and expressions separate with comma.
<br><br>
For example;
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
For example;
<div class="code">x, y, z = true, 1, -400</div>
The logic remains the same. Let's not forget that these variables must already exist, of course, due to static type principles, the value you show to it must be compatible with the data type of the variable.
<br><br>
Well, how to we use combined the update and declaration?
<br>
You learned update and declaration statements. Okay, combine.
<br><br>
For example;
<div class="code">x, y:, z = true, 1, -400</div>
Here is the combination of these two methods.
<br><br>
Additionally, you can skip some values with ignore operator.
<br>
For example;
<div class="code">x, _, z = true, 1, -400</div>
This way you ignore some values.

<div class="title-seperator"></div>
<div class="sub-title">Assignment Expressions</div>
You can perform an assignment in an expressions.
<br><br>
For example;
<div class="code">main() {
  x: = 10
  outln((x*=10)) // Prints 100
  outln(x)       // Prints 100 because x assigned as 100
}</div>
To assign in Expression, the entire assignment statement must be in parentheses.
The value it affects Expression is evaluated after the assignment has taken place.
<div class="warn">
  <li>You can't multiple assignment</li>
  <li>You can't declaration</li>
</div>

<div class="title-seperator"></div>
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
For example;
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
For example;
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
For Example;
<div class="code">example()</div>
The name of the function comes first and then the parentheses again.

<div class="title-seperator"></div>
<div class="sub-title">Function Parameters</div>
Functions can have parameters.
These parameters must be specified with arguments at the time the function is called.
<br><br>
For example;
<div class="code">main() {
  print_int(50)
}

print_int(i i32) {
  outln(i)
}</div>
It is similar to normal function definition.
Parameters are written between parentheses
If there is more than one parameter, they are separated by commas.
The name of the parameter is written first, followed by the data-type.
<br><br>
When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas.
The given arguments must be compatible with the data-type of the corresponding parameters.

<div class="topic-seperator"></div>
There is alternative syntax for specifying parameters and data types.
<br>
For example;
<div class="code">print_sum(a, b i32) {
  add: = a + b
  outln(add)
}</div>
As seen in the example above, if there is more than one parameter that must have the same data-type, the data-type can be specified in the last parameter.
When this is done, all parameters that have not been given the previous data-type will have the same data-type.


<div class="title-seperator"></div>
<div class="sub-sub-title">Constant and Volatile Parameters</div>
The function parameters can constant and volatile.
These parameters is similar to variable versions, actually they are same, acts same.
<br><br>
For example;
<div class="code">print_sum(const a, volatile const b i32) {
  sum: = a + b
  outln(sum)
}</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Variadic Parameters</div>
Variadic parameters can contain more than one value.
The <x class="inline_code">...</x> operator is used for this.
<br>
For example;
<div class="code">str_out(...values str) {
  iter _, s: in values {
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
  <li>Each variadic parameter, actually is an array.</li>
  <li>Variadic parameters is not must have an argument in calling.</li>
</div>

<div class="warn">
  <li>A function, can have only one variadic parameter.</li>
  <li>Variadic parameters must be defined as last parameter.</li>
</div>

<div class="title-seperator"></div>
<div class="sub-title">Functions with Return Values</div>
Functions can return values.
<br><br>
For example;
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
<br><br>
However, there is an additional alternative syntax.
An alternative use is offered with a small operator, since writing the return value directly will not be good for readability.
<div class="code">div(a, b f64) f64 {
  < a / b
}</div>
The alternative use of the above code is as follows. The <x class="inline_code">ret</x> keyword is replaced by the <x class="inline_code"><</x> operator.

<div class="title-seperator"></div>
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

<div class="title-seperator"></div>
<div class="sub-title">Using Function as Data Type</div>
Functions can be used as data type.
It is similar to defining a function.
Just parameters and return value are necessary.
<br><br>
For example;
<div class="code">my_function:(i32, i32) i32</div>
The example at above, is a variable definition with function data type.
The compatible function values is a have two <x class="inline_code">int32</x> parameter and returns <x class="inline_code">int32</x> value.

<div class="title-seperator"></div>
<div class="sub-title">Anonymous Functions</div>
Anonymous functions are like standard functions, but they are anonymous and are usually defined as a value.
Anonymous functions is not have any name.
Defining anonymous function is like declaring a function as a value type.
Just in addition, the block of the function must be written.
<br><br>
For example;
<div class="code">main() {
  make_hello: = (name str) str {
    < "Hello " + name + "!"
  };
  outln(make_hello("X"))
}</div>

<div class="topic-seperator"></div>
Anonymous functions can access the definitions of the block in which they are defined.
<br><br>
For example;
<div class="code">main() {
  message: = "Hello, World!"
  func: = () {
    outln(message)
  };
  func();
}</div>
The anonymous function defined in the example above uses the <x class="inline_code">message</x> variable belonging to the block it is defined in.
Definitions used from outer blocks can be shadowed within the anonymous function.
</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Captures</div>
Anonymous functions work a little differently, although they seem to access the block's definitions directly.
Each definition is copied with the same identifier.
Captures becomes important in this case.
<br><br>

There are two captures; copying and referencing.
<li>Copying</li>
The default capture of anonymous functions.
All definitions in Scope are copied with the same identifier.

<li>Referencing</li>
Definitions in scope are copied by referencing.
To make an anonymous function use referencing, the <x class="inline_code">&</x> operator must be used. <br>
For example;
<div class="code">&() { /* body... */ }</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Dangling Capturues</div>
Variables are captured at the point where the anonymous function is defined.
If a variable captured by reference dies before the anonymous function, the anonymous function will be left holding a dangling reference.

<div class="title-seperator"></div>
<div class="sub-title">Multiple Returnable Functions</div>
Functions can returns more then one values.
For that, specify return data-type with multiple type.
<br><br>
For example;
<div class="code">my_func() [i32, i32] {
  < 18, 96
}</div>
Brackets are used to specify multiple data types, seen as example at above.
This option, only valid for function returns.

<div class="topic-seperator"></div>
What happens when specified single data-type with brackets?
Nothing, you not see compiler error.
But not compile as multi-type, compiles single data-type.
<br><br>
For example;
<div class="code">less_than(x, y i32) [bool] {
  ret x < y
}</div>
The example at above, accepted as one type return.

<div class="title-seperator"></div>
<div class="sub-sub-title">Multiple Assignment with Multiple Returned Functions</div>
It's too similar to normal assignment.
Give much identifier same count with function return values and give function call as value.
<br><br>
For example;
<div class="code">compare_int(x, y i32) [bool, bool] {
  return x < y, x == y,
}

main() {
  less:, equals: = compare_int(10, 20)
  outln(less)
  outln(equals)
}</div>
<div class="warn">You can't use multiple returnable functions combined with normal multiple assignments.</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Multiple Returns as Argument(s)</div>
When you have a function that returns more than one value and you want to send these return values to another matching function, it is not a necessity but a preference to assign the variable one by one and then give it as an argument to the function.
X automatically maps the returned values as arguments to the corresponding function call, respectively, if the arguments match the parameters. <br>
For example;
<div class="code">multi_ret_func() [i32, str, char] { < 143, "STR", 'W' }

my_print(a i32, b str, c char) {
  outln(a)
  outln(b)
  outln(c)
}

main() {
  my_print(multi_ret_func())
}</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Multiple Returns as Multiple Return</div>
When you have a function that returns more than one value, and to use these return values as a return value in another function that returns exactly the same, using a variable too is not a necessity but a preference.
X allows you to use the return values of a multi-return function as the return value and automatically maps the values if the return values and data types match exactly. <br>
For example;
<div class="code">example1() [i32, str, char] { < 143, "STR", 'W' }
example2() [i32, str, char] { < example1() }

main() {
  a:, b:, c: = test2()
  outln(a)
  outln(b)
  outln(c)
}</div>

<div class="title-seperator"></div>
<div class="sub-title">Deferred Calls</div>
Deferred calls are not executed until they go out of scope.
Calls are invoked in reverse.
The keyword <x class="inline_code">defer</x> is used for a deferred call.
<br><br>
For example;
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
</div>
`;

const common_concepts_arraysHTML = `
<div class="page-title" style="margin-bottom: 20px;">Arrays</div>
<div class="text">
Arrays is a heap allocated memory fields.
Arrays can store multiple values.
<br><br>
Example to arrays;
<div class="code">main() {
  my_array:[]str
  my_array = []str{"Hello", "X", "arrays!"}
  outln(my_array)
}</div>
The nil is the auto value of arrays.
But the important point: empty array and nil setted array is the same thing.
The example at above, auto value is given (so nil) at first statement.
<x class="inline_code">my_array</x> is equals to <x class="inline_code">nil</x> or <x class="inline_code">[]str{}</x>.
Second statement is set value of <x class="inline_code">my_array</x> variable as <x class="inline_code">[]str{"Hello", "X", "arrays!"}</x>.
Seen at second statement, arrays is should be define with data type.
Last statement is prints to console the <x class="inline_code">my_array</x> variable.
<br><br>
Output of program;
<div class="code">[Hello, X, arrays!]</div>
</div>

<div class="title-seperator"></div>
<div class="sub-title">Access to Elements and Indexing</div>
Index system is simple.
Starts at <x class="inline_code">0</x> and continue step by step, it is never not be negative and float.
<br><br>
Arrays is use indexes for access and elements value setting.
<br>
For example;
<div class="code">main() {
  my_array: = []str{"Hello", "arrays", "indexes"}
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

<div class="title-seperator"></div>
<div class="sub-title">Multidimensional Arrays</div>
Multidimensional arrays is array storing arrays.
<br>
For example;
<div class="code">main() {
  my_array: = [][]str{
    []str{"Apple", "Banana"},
    []str{"Bred", "Cheese"},
  }
  outln(my_array)
}</div>
<br>
Output of program;
<div class="code">[[Apple, Banana], [Bred, Cheese]]</div>

<div class="title-seperator"></div>
<div class="sub-title">Passing Arrays to Variadic Parameter</div>
We know that <x class="inline_code">...</x> is used for Variadic parameters.
We also know that each variadic parameter is actually an array.
<br>
So can we pass an array to a variadic parameter?
Yes.
Again, the <x class="inline_code">...</x> operator is used for this.
<br>
<br>
For example;
<div class="code">sum(...values i32) i32 {
  total:i32
  iter _, i: in values {
    total += i
  }
  < total
}

main() {
  my_arr: = []i32{90, 32, 6, 53}
  result: = sum(my_arr...)
  outln(result)
}</div>
As seen in the example above, the owned variable <x class="inline_code">my_arr</x> holds an array.
Its elements are compatible with the variadic parameter.
To send, it is sufficient to follow the <x class="inline_code">...</x> operator.

<div class="warn">If you pass array to variadic parameter, you can't pass more value.</div>
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

<div class="title-seperator"></div>
<div class="sub-title">Access to Elements and Indexing</div>
To get the value of a key, it is sufficient to index it with the key. <br>
For example;
<div class="code">mymap[1]</div>
The example at above, gives <x class="inline_code">"RAM"</x> value. <br>
If you try to access a key that does not exist, it will return the default value.

<div class="topic-seperator"></div>
To change the value of a key, it is sufficient to do a classic assignment by indexing the key. <br>
For example;
<div class="code">mymap[1] = "SSD"</div>
<br><br>
To add a key-value pair that doesn't exist, it's still just a classic assignment. <br>
For example;
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
  <div id="tab-common-concepts-goto-statements" class="tab" onclick="select_tab_event(2)">Goto Statements</div>
</div>
<div class="tabcontrol-content">
</div>
</div>
`;

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
<div class="title-seperator"></div>
Each location at memory have an address.
These addresses points to location at memory.
Pointers are variables can store this memory addresses.
<br><br>
To declare a pointer data-type, use <x class="inline_code">*</x> operator.
<br>
Example;
<div class="code">x:*i32</div>
That's pointer for <x class="inline_code">i32</x> type.
<div class="info">Default value of pointers is nil.</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Getting Pointer of Variables</div>
The <x class="inline_code">&</x> operator used to get pointer of variable.
<br>
For example;
<div class="code">main() {
  x:i32 = 10
  y:*i32 = &x
}</div>
The <x class="inline_code">y</x> variable is now store memory address of <x class="inline_code">x</x> variable.

<div class="title-seperator"></div>
<div class="sub-sub-title">Accessing Values on Pointers</div>
The <x class="inline_code">*</x> operator is used to access the value in the memory address that the pointer store.
For example;
<div class="code">main() {
  x:i32 = 10
  y:*i32 = &x
  outln(y)  // Prints stored address
  outln(*y) // Prints value at address (so 10)
}</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Assign Values to Pointers</div>
Pointers can take on value assignment just like a variable, with values of the appropriate data type, because they are already variables.
<br>
For example;
<div class="code">main() {
  x:i32 = 10
  z:*i32 = &x // The 'z' store now memory address of the 'x' variable.
  y:i32 = 98
  z = &y      // The 'z' store now memory address of the 'y' variable.
}</div>
<div class="topic-seperator"></div>
Additionally, pointers can set the value of the memory address they store.
<br>
The <x class="inline_code">*</x> operator used for that too.
<br>
For example;
<div class="code">main() {
  x:i32 = 10
  y:*i32 = &x
  *y = 59  // Assign value
  outln(x) // Prints 59
}</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Pointer Arithmetic</div>
Since memory addresses are ultimately numeric data and the pointer holds that address, it supports arithmetic operations.
But not supports all common arithmetic operations like integers or floats, just supports addition and subtraction.
<br><br>
An addition expression for pointer, means next memory location.
<br>
A subtraction expression for pointer, means previous memory location.
<br><br>
For exaple;
<div class="code">main() {
  arr: = []i32{1, 200, 53, 635, 903}
  ptr: = &arr[0]
  outln(*ptr) // 1
  ptr += 1
  outln(*ptr) // 200
}</div>
As seen in the example above, when the pointer pointing to the first element of the array is increased by 1, it becomes pointing to the second element of the array.
</div>
`;

const memory_memory_managementHTML = `
<div class="title" style="margin-bottom: 20px;">Memory Management</div>
<div class="text">
  Memory Management in X.
  <br><br>
  The heap allocations should be free manually because X not have any garbage collector or auto free system.
  For this reason, memory management is important in X.

  <div class="title-seperator"></div>
  <div class="sub-title">Heap Allocations</div>
  The <x class="inline_code">new</x> keyword allocate new section up to size of data-type from heap of system's memory by specified data-type.
  Returns pointer of allocated section, returns <x class="inline_code">nil</x> if allocation failed.
  For example;
  <div class="code">x:*i32 = new i32</div>
  <div class="warn">This allocations isn't frees automatically, must freed by developer with <a href="#free"><x class="inline_code">free</x></a> keyword.</div>

  <div class="title-seperator"></div>
  <div id="free" class="sub-title">Free Allocations</div>
  The <x class="inline_code">free</x> keyword frees heap-allocated allocations.
  You can just free pointers.
  For example;
  <div class="code">main() {
  x: = new i32 // Allocate from heap
  free x       // Free allocation
}</div>
  <div class="warn">If you use stack-allocation pointer, this is a undefined behavior.</div>

  <div class="title-seperator"></div>
  <div class="sub-title">Dangling Pointers</div>
  Dangling pointers are isn't point to valid object at memory.
  <br>
  Example;
  <div class="code">main() {
  x:*i32 = new i32
  *x = 10
  free x  // Frees x, x now becomes a dangling pointer
  x = nil // x is not dangling now
}</div>
  Reason of that after freed allocations pointers isn't setted as nil.
  So data is freed but pointer still points to the address, but address not have any value.
  Set pointer as nil after freed is a good option.
  <div class="topic-seperator"></div>
  Function example;
  <div class="code">get_pointer() *i32 {
  x: = 10
  < &x // Returns address of x
       // but x is out of scope, so pointer is dangling
}

main() {
    p:*i32 = get_pointer()
    outln(*p) // Used dangling pointer
}</div>
  If you want return any pointer of defined at body of function from function, you can return this pointer as heap-allocated.
  <br>
  For example with example at above;
  <div class="code">get_pointer() *i32 {
  x: = 10
  y:*i32 = new i32
  *y = x
  < y
}

main() {
  p:*i32 = get_pointer()
  outln(*p)
  free p
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
For example;
<div class="code">type int32 i32

main() {
  my_int:int32 = 100
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
<div class="title-seperator"></div>
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
  <div id="tab-types-str-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
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

const types_mapsHTML = `
<div class="page-title" style="margin-bottom: 20px;">Maps</div>
<div class="text">
<div class="tabcontrol">
  <div id="tab-types-maps-constants" class="tab" onclick="select_tab_event(0)">Constants</div>
  <div id="tab-types-maps-functions" class="tab" onclick="select_tab_event(1)">Functions</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const cxxHTML = `
<div class="title" style="margin-bottom: 20px;">Cxx</div>
<div class="text">
Cxx documentations of X.
<br><br>
In this section, the information necessary to use X and Cxx effectively and the possibilities offered by X are included.
<br><br>
<div class="warn">This documentation is accepts you know basic cxx.</div>
</div>
`;

const cxx_cxx_embeddingHTML = `
<div class="title" style="margin-bottom: 20px;">Cxx Embedding</div>
<div class="text">
You can embed cxx code in your X code.
For this, show the comment line as a cxx content;
<div class="code">// cxx: #include "my_library.h"

main() {
  // ...
}
</div>
<div class="warn">
  <li>The comments should be single-line comments.</li>
  <li>The comments should be full line.</li>
</div>

<div class="title-seperator"></div>
<div class="sub-title">Using definitions of X</div>
Definitions start with <x class="inline_code">_</x>when translating X.
For example, a variable named <x class="inline_code">rate</x> in X is called <x class="inline_code">_rate</x> in cxx output.
So, using the correct data types and definition names, you can include X definitions in your embed code.
<br><br>
For example;
<div class="code">@inline
cxx_wcout(const msg str) {
  // cxx: std::wcout << _msg << std::endl;
}

main() {
  cxx_wcout("Hello World")
}</div>

<div class="title-seperator"></div>
<div class="topic-seperator"></div>
<div class="title-seperator"></div>
Any cxx code that you don't embed in a code block is appended to the top when transpiled so that all code can use it.

<div class="warn">
  X does not check whether the embed code you write is incorrect or will affect compilation.
  This is entirely the developer's responsibility.
</div>
</div>
`;

const cxx_cxxapiHTML = `
<div class="title" style="margin-bottom: 20px;">CxxAPI</div>
<div class="text">
API of X for Cxx.
You can this API your transpiled X code or cxx embedding code.
<br><br>
This API consists of built-in cxx definitions that can be used inside the transpiled X code.

<div class="tabcontrol" style="margin-top: 50px;">
<div id="cxx-cxxapi-preprocessor-defines" class="tab" onclick="select_tab_event(0)">Preprocessor Defines</div>
<div id="cxx-cxxapi-defines" class="tab" onclick="select_tab_event(1)">Defines</div>
</div>
<div class="tabcontrol-content">
</div>
</div>
`;

const types_castingHTML = `
<div class="page-title" style="margin-bottom: 20px;">Casting</div>
<div class="text">
Casting is an explicit conversion from one type to another between supported types.
<br><br>
To make a cast, you need to write the target data type you want to cast in parentheses, then again you need to write the expression you want to cast in parentheses.
<br>
Example: <x class="inline_code">(i32)(3.14)</x>
<br><br>
For code example; <br>
<div class="code">main() {
  x:f32 = 3.14
  y:i32 = (i32)(x) // Casting
  outln(x)         // Prints 3.14
  outln(y)         // Prints 3
}</div>
</div>
As you can see, the variable <x class="inline_code">x</x> is of type <x class="inline_code">f32</x> and the variable <x class="inline_code">y</x> is of type <x class="inline_code">i32</x>.
Normally, variable <x class="inline_code">y</x> cannot take variable <x class="inline_code">x</x> as a value.
However, as seen for example, we can accept the value as <x class="inline_code">i32</x> by explicitly casting.

<div class="title-seperator"></div>
<div class="sub-title">Constant Ignoring</div>
You can ignore constant with casting.
<br><br>
For example;
<div class="code">main() {
  const ptr0: = new i32
  ptr1: = (*i32)(ptr0)
  *ptr1 = 200
  outln(*ptr0) // Prints 200
}</div>
`;

const documentingHTML = `
<div class="title" style="margin-bottom: 20px;">Documenting</div>
<div class="text">
It is important to document the code.
X makes it easy to have documented code.
The <x class="inline_code">doc</x> command comes internally to the compiler and takes over the task of documenting your X source code.
<br><br>
The <x class="inline_code">doc</x> command creates the documentation it creates in the <x class="inline_code">cxx_out_dir</x> field.
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
For example;
<div class="code">// doc:
// Divides specified floats.
// THIS FUNCTION DOESN'T CHECK ZERO DIVISION!
div(const a, const b f64) f64 { < a / b }</div>

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
For example;
<div class="code">$ xxc doc main.xx</div>
Documentize the <x class="inline_code">main.xx</x> file.
<br><br>
<div class="code">$ xxc doc main.xx test.xx</div>
Documentize the <x class="inline_code">main.xx</x> and <x class="inline_code">test.xx</x> files.

<div class="title-seperator"></div>
<div class="warn">
The <x class="inline_code">doc</x> command does not document if the source code contains a non-logical (syntax, etc.) error.
</div>
</div>
`;

const use_declarationsHTML = `
<div class="title" style="margin-bottom: 20px;">Use Declarations</div>
The use declarations act as importing other packages for use in your code. <br>
Declared with the <x class="inline_code">use</x> keyword.

<div class="text">
<div class="title-seperator"></div>
<div class="sub-sub-title">Use Declaration for Standard Library</div>
To use standard library, standard path is used.
It is quite plain and simple.
You write the name of a package you want to use, if you want to use a sub-package, you separate it with a dot.
<br><br>
For example;
<div class="code">use pkg</div>
<div class="code">use pkg.subpkg</div>

<div class="warn">
  <li>You can't use already used packages.</li>
  <li>You must declare uses at the beginning of code.</li>
  <li>Packages used by used packages are not included for use.</li>
</div>

<div class="title-seperator"></div>
<div class="sub-title">Packages</div>
X treats each directory as a package.
Each package has the ability to use its own defines.
<br><br>
For example;
<div class="code">// file: ./hello_print.xx

@inline hello_print(const name str) {
  outln("Hello " + name)
}</div>
<div class="code">// file: ./main.xx

main() {
  hello_print("Packages")
}</div>
As shown in the example above, since both files are located in the same directory, they are considered the same package and therefore have access to each other's definitions.
<br><br>
Packages' use declarations are common, so collecting all the package's use declarations in a single file like <x class="inline_code">uses.xx</x> can be a good option for readability and easy maintenance.

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
For example;
<div class="code">#pragma enofi</div>

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">enofi</x></div>
When importing a package or local package, this directive ensures that the code is split on import.
When the preprocessor sees this directive, it discards the rest of the code.
</div>
`;

const standard_libraryHTML = `
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
  <li><a onclick="std_builtin_click()">Built-In</a></li>
  <li><a onclick="std_io_click()">io</a></li>
</div>
`;

const standard_library_builtinHTML = `
<div class="title" style="margin-bottom: 20px;">Standard Library: Built-In</div>
<div class="text">
Built-In defines are provided from the language by directly without any import operation.

<div class="tabcontrol" style="margin-top: 50px;">
  <div id="tab-std-builtin-functions" class="tab" onclick="select_tab_event(0)">Functions</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const standard_library_ioHTML = `
<div class="title" style="margin-bottom: 20px;">Standard Library: <x class="inline_code">io</x></div>
<div class="text">
Input/Output operations.

<div class="tabcontrol" style="margin-top: 50px;">
  <div id="tab-std-io-functions" class="tab" onclick="select_tab_event(0)">Functions</div>
</div>
<div class="tabcontrol-content"></div>
</div>
`;

const endHTML = `
<div class="title" style="margin-bottom: 20px;">End</div>
<div class="text">
Thanks for reading.

<div class="title-seperator"></div>
<div class="sub-title">Feedback</div>
Please tell us, share with us your ideas and experiences.
<br>
Support us to improve the documentation.
<br>
<br>
<a href="https://github.com/the-xlang/website/issues/new/choose">Open Issue</a> <br>
<a href="https://github.com/the-xlang/website/fork">Fork project</a>

<div class="title-seperator"></div>
  <div class="sub-title">Source Code this Website</div>
  The source code files is accessible from <a href="https://github.com/the-xlang/website">GitHub</a> website repository.
</div>
`;

// ------------------------------------------------------------------------------

const TAB_types_str_constants = `
<div class="sub-sub-title"><x class="inline_code">const len:size</x></div>
Char count of string.
`;

const TAB_types_arrays_constants = `
<div class="sub-sub-title"><x class="inline_code">const len:size</x></div>
Length of array.
`;

const TAB_types_maps_constants = `
<div class="sub-sub-title"><x class="inline_code">const len:size</x></div>
Length of key-value pairs.
`;

const TAB_types_maps_functions = `
<div class="sub-sub-title"><x class="inline_code">clear()</x></div>
Removes all key-value pairs.

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">has(KEY_TYPE) bool</x></div>
Return true if specified key value is exist in map, returns false if not.

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">keys() []KEY_TYPE</x></div>
Returns keys of key-value pairs as array.

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">values() []VALUE_TYPE</x></div>
Returns values of key-value pairs as array.
`;

const TAB_std_builtin_functions = `
<div class="sub-sub-title"><x class="inline_code">out(value any)</x></div>
Prints value to command line.
Can take any data-type as argument.

<div class="topic-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">outln(value any)</x></div>
This function same with <x class="inline_code">out</x> function.
One difference, prints new line after print.
`;

const TAB_std_io_functions = `
<div class="code">@inline
pub readln() str</div>
Reads full-complete line from command-line.

<div class="topic-seperator"></div>
<div class="code">@inline
pub readin() str</div>
Read first part of line from command-line.
`;

const TAB_common_concepts_iterations = `
Iterations allow you to repeat the algorithm according to certain conditions.
The <x class="inline_code">iter</x> keyword use for iterations in X.

<div class="title-seperator"></div>
<div class="sub-sub-title">Infinity Iterations</div>
Infinite iterations keep repeating endlessly until the loop is somehow broken.
<br>
For example;
<div class="code">main() {
  iter {
    outln("Hello, iterations")
  }
}</div>
The above example prints <x class="inline_code">Hello, iterations</x> repeatedly.

<div class="title-seperator"></div>
<div class="sub-sub-title">While Iterations</div>
The while iterations are iterations that repeat as long as a certain condition is met.
It is not much different from defining an infinite iteration.
<br>
For example;
<div class="code">main() {
  counter: = 0
  iter counter <= 5 {
    outln(counter)
    counter += 10
  }
}</div>
The While loops use boolean expressions.
As seen in the example above, the expression is written between the keyword and the block.
This expression is evaluated before each loop, and if it returns true, the loop is iterated.
This example just prints <x class="inline_code">0</x>.

<div class="title-seperator"></div>
<div class="sub-sub-title">Foreach Iterations</div>
Foreach or for-each can be summarized as an iteration standard for collections.
It repeats itself by looping through the elements of the collection.
<br>
For example;
<div class="code">main() {
  mystr:str = "Hello"
  iter index: in mystr {
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
For example;
<div class="code">main() {
  mystr:str = "Hello"
  iter _, c:char in mystr {
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
If the index variable is be numeric, X's auto data-type is <x class="inline_code">i32</x> type.</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Iteration Controlling</div>
We may want to check for iterations, this is normal and common.
There are two ways to do this in X; The <x class="inline_code">continue</x> and <x class="inline_code">break</x> keywords.
<br><br>
If you want break the iteration, use the <x class="inline_code">break</x> keyword.
<br>
For example;
<div class="code">main() {
  iter {
    outln("Hello, World")
    break
  }
}</div>
The example at above, normally prints <x class="inline_code">Hello, World</x> again and again.
But just prints one time, because <x class="inline_code">break</x> keyword is breaks iteration.

<div class="topic-seperator"></div>
If you want continue to next iteration, use the <x class="inline_code">continue</x> keyword.
<br>
For example;
<div class="code">main() {
  iter {
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

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">if</x> Expressions</div>
If the provided condition is <x class="inline_code">true</x> the block is executed, otherwise it is not executed.
It is also the beginning of a new chain of conditions.
<br><br>
For example;
<div class="code">main() {
  x: = new i32
  if x == nil {
    outln("memory allocation is failed")
  }
}</div>

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">else if</x> Expressions</div>
If the preceding <x class="inline_code">if</x> and <x class="inline_code">else if</x> expressions have not been fulfilled, it is a condition presented as an alternative to them.
<br><br>
For example;
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

<div class="title-seperator"></div>
<div class="sub-sub-title"><x class="inline_code">else</x> Blocks</div>
It is the block that will be executed unconditionally if the previous <x class="inline_code">if</x> and <x class="inline_code">else if</x> expressions are not fulfilled.
<br><br>
For example;
<div class="code">main() {
  x: = new i32
  if x == nil {
    outln("memory allocation is failed")
  } else {
    outln("memory allocation is success")
  }
}</div>
`;

const TAB_common_concepts_goto_statements = `
The goto statements allow you to jump to any part of the algorithm.

<div class="title-seperator"></div>
<div class="sub-title">Labels</div>
Goto statements need labels to jump somewhere in the algorithm.
To declare a label, simply put the name of the tag followed by a colon. <br>
For example; <x class="inline_code">repeat:</x>

<div class="title-seperator"></div>
<div class="sub-title">Going to Labels</div>
The <x class="inline_code">goto</x> keyword is used for a goto statement.
Jumping to a label is as simple as defining a label.
First comes the keyword, then the label you want to jump to. <br>
For example; <x class="inline_code">goto repeat</x>
<div class="info">
<li>You can jump to any label without breaking the rules.</li>
<li>Labels are only valid for the function block you are in.</li>
</div>
<div class="warn">
<li>If your jumps over any declaration you will get a compiler error.</li>
<li>Each label declared and not used causes a compiler error.</li>
</div>
`;

const TAB_cxx_cxxapi_preprocessor_defines = `
<div class="code">func</div>
Like alias for <x class="inline_code">std::function</x>.

<div class="title-seperator"></div>
<div class="code">XID(_Identifier)</div>
Returns the form of the given identifier to use when translating the X code.
<br>
For example: <x class="inline_code">const double XID(PI) = 3.14;</x>

<div class="title-seperator"></div>
<div class="code">XTHROW(_Msg)</div>
Throws X exception.
<br>
For example: <x class="inline_code">XTHROW("operation failed")</x>

<div class="title-seperator"></div>
<div class="code">CONCAT(_A, _B)</div>
Concatenate specified arguments.

<div class="title-seperator"></div>
<div class="code">_CONCAT(_A, _B)</div>
Source define for <x class="inline_code">CONCAT(_A, _B)</x>

<div class="title-seperator"></div>
<div class="code">DEFER(_Expr)</div>
Deferred call specified expression.

<div class="title-seperator"></div>
<div class="code">nil</div>
Built-in <x class="inline_code">nil</x> value of X.
`;

const TAB_cxx_cxxapi_defines = `
<li><a href="#cxxapi-misc">Misc</a></li>
<li><a href="#cxxapi-datatypes">Data-Types</a></li>
<li><a href="#cxxapi-functions">Functions</a></li>

<div class="title-seperator"></div>
<div class="title-seperator"></div>
<div id="cxxapi-misc" class="sub-sub-title">Misc</div>
<div class="code">class exception</div>
Exception instance of X.

<div class="title-seperator"></div>
<div class="code">struct defer</div>
Source struct for deferred calls.

<div class="title-seperator"></div>
<div id="cxxapi-datatypes" class="sub-sub-title">Data-Types</div>
<div class="info">The primitive data-types in X, have same names in cxx output.</div>

<div class="title-seperator"></div>
<div class="code">template&lt;typename _Item_t&gt;
class array</div>
Array type class.

<div class="title-seperator"></div>
<div class="code">template&lt;typename _Key_t, typename _Value_t&gt;
class map</div>
Map type class.

<div class="title-seperator"></div>
<div id="cxxapi-functions" class="sub-sub-title">Functions</div>
<div class="code">template&lt;typename _Alloc_t&gt;
static inline _Alloc_t *xalloc()</div>
Returns pointer of allocation from heap if allocation success, returns <x class="inline_code">nil</x> if failed.

<div class="title-seperator"></div>
<div class="code">template &lt;typename _Enum_t, typename _Index_t, typename _Item_t&gt;
static inline void foreach(const _Enum_t _Enum,
                           const std::function&lt;void(_Index_t, _Item_t)&gt; _Body)</div>
<div class="code">template &lt;typename _Enum_t, typename _Index_t&gt;
static inline void foreach(const _Enum_t _Enum,
                           const std::function&lt;void(_Index_t)&gt; _Body)</div>
<div class="code">template &lt;typename _Key_t, typename _Value_t&gt;
static inline void foreach(const map&lt;_Key_t, _Value_t&gt; _Map,
                           const func&lt;void(_Key_t)&gt; _Body)</div>
<div class="code">template &lt;typename _Key_t, typename _Value_t&gt;
static inline void foreach(const map&lt;_Key_t, _Value_t&gt; _Map,
                           const func&lt;void(_Key_t, _Value_t)&gt; _Body)</div>
Foreach iterations of X that Cxx doesn't support.

<div class="title-seperator"></div>
<div class="code">template&lt;typename _Function_t, typename _Tuple_t, size_t ... _I_t&gt;
inline auto tuple_as_args(const _Function_t _Function,
                          const _Tuple_t _Tuple,
                          const std::index_sequence&lt;_I_t ...&gt;)</div>
<div class="code">template&lt;typename _Function_t, typename _Tuple_t&gt;
inline auto tuple_as_args(const _Function_t _Function, const _Tuple_t _Tuple)</div>
Push tuple as argument(s) to function.

<div class="title-seperator"></div>
<div class="code">template &lt;typename _Obj_t&gt;
static inline void XID(out)(const _Obj_t _Obj) noexcept</div>
Built-in <x class="inline_code">out</x> function of X.

<div class="title-seperator"></div>
<div class="code">template &lt;typename _Obj_t&gt;
static inline void XID(outln)(const _Obj_t _Obj) noexcept</div>
Built-in <x class="inline_code">outln</x> function of X.
`;

//#region SET_PAGE

document.title = page_title;

document.body.style.paddingBottom = "0px";
const navigation = document.getElementById('navigation');
navigation.remove();

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
const NAV_basics_entry_point                  = document.getElementById('basics-entry-point');
const NAV_basics_data_types                   = document.getElementById('basics-data-types');
const NAV_basics_operators                    = document.getElementById('basics-operators');
const NAV_basics_attributes                   = document.getElementById('basics-attributes');
const NAV_basics_statements                   = document.getElementById('basics-statements');
const NAV_common_concepts                     = document.getElementById('common-concepts');
const NAV_common_concepts_variables           = document.getElementById('common-concepts-variables');
const NAV_common_concepts_functions           = document.getElementById('common-concepts-functions');
const NAV_common_concepts_arrays              = document.getElementById('common-concepts-arrays');
const NAV_common_concepts_maps                = document.getElementById("common-concepts-maps");
const NAV_common_concepts_control_flow        = document.getElementById('common-concepts-control-flow');
const NAV_memory                              = document.getElementById('memory');
const NAV_memory_pointers                     = document.getElementById('memory-pointers');
const NAV_memory_memory_management            = document.getElementById('memory-memory-management');
const NAV_types                               = document.getElementById('types');
const NAV_types_aliasing                      = document.getElementById('types-aliasing');
const NAV_types_casting                       = document.getElementById('types-casting');
const NAV_types_str                           = document.getElementById("types-str");
const NAV_types_arrays                        = document.getElementById("types-arrays");
const NAV_types_maps                          = document.getElementById("types-maps");
const NAV_cxx                                 = document.getElementById('cxx');
const NAV_cxx_cxx_embedding                   = document.getElementById("cxx-cxx-embedding");
const NAV_cxx_cxxapi                          = document.getElementById('cxx-cxxapi');
const NAV_documenting                         = document.getElementById("documenting");
const NAV_documenting_documentation_comments  = document.getElementById("documenting-documentation-comments");
const NAV_documenting_using_documenter        = document.getElementById("documenting-using-documenter");
const NAV_use_declarations                    = document.getElementById("use-declarations");
const NAV_preprocessor                        = document.getElementById("preprocessor");
const NAV_preprocessor_directives             = document.getElementById("preprocessor-directives");
const NAV_standard_library                    = document.getElementById('standard-library');
const NAV_standard_library_builtin            = document.getElementById('standard-library-builtin');
const NAV_standard_library_io                 = document.getElementById("standard-library-io");
const NAV_end                                 = document.getElementById('end');

const side_navigation = document.getElementById('side-navigation');
const content_body    = document.getElementById('side-navigation-content-body');

//#endregion GET_ELEMENTS

var navigation_index = 0;
const navigations = [
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
  [NAV_basics_entry_point,                  basics_entry_pointHTML],
  [NAV_basics_data_types,                   basics_data_typesHTML],
  [NAV_basics_operators,                    basics_operatorsHTML],
  [NAV_basics_attributes,                   basics_attributesHTML],
  [NAV_basics_statements,                   basics_statementsHTML],
  [NAV_common_concepts,                     common_conceptsHTML],
  [NAV_common_concepts_variables,           common_concepts_variablesHTML],
  [NAV_common_concepts_functions,           common_concepts_functionsHTML],
  [NAV_common_concepts_arrays,              common_concepts_arraysHTML],
  [NAV_common_concepts_maps,                common_concepts_mapsHTML],
  [NAV_common_concepts_control_flow,        common_concepts_control_flowHTML],
  [NAV_memory,                              memoryHTML],
  [NAV_memory_pointers,                     memory_pointersHTML],
  [NAV_memory_memory_management,            memory_memory_managementHTML],
  [NAV_types,                               typesHTML],
  [NAV_types_aliasing,                      types_aliasingHTML],
  [NAV_types_casting,                       types_castingHTML],
  [NAV_types_str,                           types_strHTML],
  [NAV_types_arrays,                        types_arraysHTML],
  [NAV_types_maps,                          types_mapsHTML],
  [NAV_cxx,                                 cxxHTML],
  [NAV_cxx_cxx_embedding,                   cxx_cxx_embeddingHTML],
  [NAV_cxx_cxxapi,                          cxx_cxxapiHTML],
  [NAV_documenting,                         documentingHTML],
  [NAV_documenting_documentation_comments,  documenting_documentation_commentsHTML],
  [NAV_documenting_using_documenter,        documenting_using_documenterHTML],
  [NAV_use_declarations,                    use_declarationsHTML],
  [NAV_preprocessor,                        preprocessorHTML],
  [NAV_preprocessor_directives,             preprocessor_directivesHTML],
  [NAV_standard_library,                    standard_libraryHTML],
  [NAV_standard_library_builtin,            standard_library_builtinHTML],
  [NAV_standard_library_io,                 standard_library_ioHTML],
  [NAV_end,                                 endHTML],
];

const tabs = [
  // ID - HTML
  ["tab-types-str-constants",             TAB_types_str_constants],
  ["tab-types-arrays-constants",          TAB_types_arrays_constants],
  ["tab-types-maps-constants",            TAB_types_maps_constants],
  ["tab-types-maps-functions",            TAB_types_maps_functions],
  ["tab-std-builtin-functions",           TAB_std_builtin_functions],
  ["tab-std-io-functions",                TAB_std_io_functions],
  ["tab-common-concepts-iterations",      TAB_common_concepts_iterations],
  ["tab-common-concepts-if-expressions",  TAB_common_concepts_if_expression],
  ["tab-common-concepts-goto-statements", TAB_common_concepts_goto_statements],
  ["cxx-cxxapi-preprocessor-defines",     TAB_cxx_cxxapi_preprocessor_defines],
  ["cxx-cxxapi-defines",                  TAB_cxx_cxxapi_defines],
]

//#region EVENTS

function next_page_click()   { select_topic_index(navigation_index+1); }
function prev_page_click()   { select_topic_index(navigation_index-1); }
function std_builtin_click() { select_topic(NAV_standard_library_builtin); }
function std_io_click()      { select_topic(NAV_standard_library_io); }

navigations.forEach((element, index) => {
  element[0].addEventListener('click', () => { select_topic_index(index); });
});

//#endregion EVENTS

//#region SET_CONTENT

//#region SET_CONTENT QUERIES
const url = new URL(window.location.href);
const query_page = url.searchParams.get('page');
if (query_page != null) {
  const selected_page = document.getElementById(query_page);
  if (selected_page != null) { selected_page.click(); }
  else                       { select_topic_index(0); }
} else {
  select_topic_index(0);
}
//#endregion SET_CONTENT QUERIES

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

function select_topic(nav) {
  navigations.forEach((element, index) => {
    if (element[0] == nav) {
      select_topic_index(index);
      return;
    }
  });
}

function select_topic_index(index) {
  let nav = navigations[index][0];
  let html = navigations[index][1];
  let old = navigations[navigation_index][0];
  old.style = nav.style;
  nav.style.color = navigation_avtive_color;
  nav.style.fontWeight = "bold";
  navigation_index = index;
  html += `<div style="margin-top: 150px;">`;
  if (index == 0) {
    html += next_page;
  } else if (index == navigations.length-1) {
    html += prev_page;
  } else {
    html += prev_page;
    html += next_page;
  }
  html += `</div>`;
  content_body.innerHTML = html;
  let tabcontrols = document.getElementsByClassName('tabcontrol');
  for (let index = 0; index < tabcontrols.length; ++index) {
    let tabcontrol = tabcontrols[index];
    select_tab_index(tabcontrol, 0);
  }
  url.searchParams.set('page', nav.id);
  window.history.replaceState(null, null, "?" +url.searchParams.toString());
  nav.scrollIntoView();
  window.scrollTo(0, 0);
}
