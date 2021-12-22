const page_title = `X - Documentations`;
const navigation_avtive_color = 'rgb(200, 116, 221)';
const prev_page =
`
<button onclick="prev_page_click()" style="float: left;">
  <x class="arrow left" style="margin-top: 5px; margin-left: 5px;"></x>
</button>
`;
const next_page =
`
<button onclick="next_page_click()" style="float: right;">
  <x class="arrow right" style="margin-top: 5px; margin-right: 5px;"></x>
</button>
`;

const the_xlangHTML =
`
<div class="title">The <x style="color: rgb(180, 52, 235);">X</x> Programming Language</div>
<br>
<div class="text" style="font-weight: normal; font-style: italic;">by Mertcan Davulcu with contributors from community</div>
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
  The fact that it evolves directly to C++ and compiles from C++ means an environment familiar to C/C++ developers.
  <br><br>
  X is also a good choice for the simpler way to write C++.
  At the developer's request, X can be translated or compiled into C++.
  This choice is the developer's.
</div>
`;

const forewordHTML =
`
<div class="title" style="margin-bottom: 20px;">Foreword</div>
<div class="text">
  The X programming language facilitates C++ development in general.
  In addition, this language is actually more than an interface.
  Although it acts as a bridge between two languages, it is designed as a language itself.
  <br><br>
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
  <br>
  Welcome to X community!
  <br><br>
  - Mertcan Davulcu
</div>
`;

const introductionHTML =
`
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
  X is suitable both for learning programming and for learning C++.
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
  The X code is then converted to stable and safe C++ code.
  Everything happens much more easily and comfortably.

  <div class="title-seperator"></div>
  <div class="sub-title">Source Code</div>
  The source code files is accessable from <a href="https://github.com/the-xlang/website">GitHub</a> website repository.
</div>
`;

const getting_startedHTML =
`
<div class="title" style="margin-bottom: 20px;">Getting Started</div>
<div class="text">
  You are about to start X.
  Fasten the belts.
  Maybe a popcorn.
</div>
`;

const getting_started_downloadsHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Downloads</div>
<div class="text">
  <div class="sub-title">Releases</div>
  You can see X compiler in easy setup form at <a target="_blank" href="https://github.com/the-xlang/x/releases">releases</a>.

  <div class="title-seperator"></div>
  <div class="sub-title">Source Code</div>
  You can download source code of the X compiler at <a target="_blank" href="https://github.com/the-xlang/x">repository</a>.
</div>
`;

const getting_started_install_from_sourceHTML =
`
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
  <div class="code">PS @DIR> go build -o x.exe -v cmd/x/main.go</div>

  <div class="title-seperator"></div>
  <div class="sub-sub-title">Linux</div>
  Using example for Bash;
  <div class="code">$ go build -o x.out -v cmd/x/main.go</div>
</div>
`;

const compilerHTML =
`
<div class="title" style="margin-bottom: 20px;">Compiler</div>
<div class="text">
  In this part of the documentation you will explore the compiler and understand how to compile X code.
  After this section, you will learn and use compiler commands.
  You will also be able to customize your settings file to configure your projects.
</div>
`;

const compiler_basic_commandsHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Basic Commands</div>
<div class="text">
The basics of compiler commands.

<div class="title-seperator"></div>
<div class="sub-title">help</div>
Shows help about of commands.
<div class="code">$ x help</div>

<div class="title-seperator"></div>
<div class="sub-title">version</div>
Shows version of the X compiler.
<div class="code">$ x version</div>

<div class="title-seperator"></div>
<div class="sub-title">init</div>
Initialize new project in working directory.
<div class="code">$ x init</div>

</div>
`;

const compiler_config_filesHTML =
`
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
    <td>Directory of C++ transpile file.</td>
  </tr>
  <tr>
    <td style="text-align: center; font-family: 'Code';">cxx_out_name</td>
    <td>Name of C++ transpile file.</td>
  </tr>
</table>
</div>
`;

const compiler_compilingHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Compiling</div>
<div class="text">
Let's start with a simple hello world program and learn compiling from this program.
<br><br>
We have a <x class="inline_code">main.xx</x> file:
<div class="code">main() {
  outln("Hello, World!");
}</div>

We will use already created settings file with <x class="inline_code">x init</x> command.
<br>
<br>
For compile X code, we just give filename to compiler:
<div class="code">x main.xx</div>
And compiler is transpile our X code to C++ code. <br>
Result is created by settings file and compile if mode setted as <x class="inline_code">compile</x>.
<br><br>
As result we have a executable machine code or C++ result of our program.
</div>
`;

const projectHTML =
`
<div class="title" style="margin-bottom: 20px;">Project</div>
<div class="text">
In this chapter you understand the proposed project layout, their names and the purpose of the directories.
Then you will be able to develop your projects by following this order.
These are recommendations and are not obligatory to follow.
</div>
`;

const project_directory_orderHTML =
`
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

const project_namingHTML =
`
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
</div>
`;

const basicsHTML =
`
<div class="title" style="margin-bottom: 20px;">Basics</div>
<div class="text">
  The basics of the X programming language. <br>
  Comments, operators and more. Knowledge for next steps.
</div>
`;

const basics_commentsHTML =
`
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

const basics_entry_pointHTML =
`
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

const basics_data_typesHTML =
`
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
      <td style="text-align: center; font-family: 'Code';">int8</td>
      <td style="text-align: center;">1byte</td>
      <td>-127 to 127</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int16</td>
      <td style="text-align: center;">2bytes</td>
    <td>-32768 to 32767</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int32</td>
      <td style="text-align: center;">4bytes</td>
      <td>-2147483648 to 2147483647</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int64</td>
      <td style="text-align: center;">8bytes</td>
      <td>-9223372036854775808 to 9223372036854775807</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint8</td>
      <td style="text-align: center;">1byte</td>
      <td>0 to 255</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint16</td>
      <td style="text-align: center;">2bytes</td>
      <td>0 to 65535</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint32</td>
      <td style="text-align: center;">4bytes</td>
      <td>0 to 4294967295</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint64</td>
      <td style="text-align: center;">8bytes</td>
      <td>0 to 18446744073709551615</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">float32</td>
      <td style="text-align: center;">4bytes</td>
    <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">float64</td>
      <td style="text-align: center;">8bytes</td>
      <td></td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td style="text-align: center;">1bytes</td>
      <td>true or false</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">rune</td>
      <td style="text-align: center;">4bytes</td>
      <td>Single UTF-8 character.</td>
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
      <td style="text-align: center; font-family: 'Code';">int8</td>
      <td>int8, int16, int32, int64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int16</td>
      <td>int16, int32, int64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int32</td>
      <td>int32, int64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">int64</td>
      <td>int64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint8</td>
      <td>uint8, uint16, uint32, uint64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint16</td>
      <td>uin16, uint32, uint64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint32</td>
      <td>uint32, uint64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">uint64</td>
      <td>uint64, float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">float32</td>
      <td>float32, float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">float64</td>
      <td>float64</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">bool</td>
      <td>bool</td>
    </tr>
    <tr>
      <td style="text-align: center; font-family: 'Code';">rune</td>
      <td>rune</td>
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
  <div class="sub-title">Nil</div>
  Zero value for pointers and function data typed defines.
  <div class="code">nil</div>
</div>
`;

const basics_operatorsHTML =
`
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

const basics_attributesHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Attributes</div>
<div class="text">
Attributes are used to mark definitions for specific reasons and to report them to the compiler.
Each attribute is defined with <x class="inline_code">@</x>, the attribute itself must come immediately after this operator.
<br><br>
For example:
<div class="code">@attribute_a
cube(s int32) {
  ret s*s*s;
}</div>
</div>
<br><br>
If you are giving more than one attribute, you should write each one in the same format.
Note that an attribute cannot be given repeatedly.
<br><br>
For example:
<div class="code">@attribute_a @attribute_b
cube(s int32) {
  ret s*s*s;
}</div>
<div class="warn">
Not all attributes can be applied to all definitions.
Each definition has valid attributes for it.
</div>
`;

const basics_expressions_as_statementHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Expressions as Statement</div>
<div class="text">
You may want to write an expression as a statement for several reasons.
It is possible.
Instead of presenting it directly, X has adopted it to be written between parentheses in order to contribute to readability.
An expression must be surrounded by parentheses to be used as a statement.
<br><br>
For example;
<div class="code">main() {
  (100);
}</div>
</div>
`;

const common_conceptsHTML =
`
<div class="title" style="margin-bottom: 20px;">Common Concepts</div>
<div class="text">
  Common programming concepts. <br>
  Approaches that be found in every code. <br>
  Variables, functions...
</div>
`;

const common_concepts_variablesHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Variables</div>
<div class="text">
There is more than one way in X to define a variable.
We can call it multi-paradigm.
<br><br>
X is not use any keyword for declaring variable.
X uses the <x class="inline_code">:</x> operator.
When you just use <x class="inline_code">:</x> you report you want the data type to be detect automatically.
The data type is set by the X compiler based on the data.
<br><br>
For example;
<div class="code">age: = 18;</div>
The data type of the above variable is defaulted to <x class="inline_code">int32</x>.
<div class="warn">
In this method, the variable must be given a value, otherwise the X compiler will show an error.
</div>

<div class="title-seperator"></div>
<div class="sub-title">Manuel Data Type Specification</div>
You may want to specify the data type, it is possible.
It also brings you advantages.
<br><br>
For example;
<div class="code">age:int32 = 18;</div>
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
<div class="sub-title">Updating Value</div>
The values of the variables can be changed later.
The value given must be the same as the data type of the variable.
<br><br>
For example;
<div class="code">example() {
  a:int32 = 10; // Value is 10.
  a = 200;      // New value is 200.
}</div>

<div class="title-seperator"></div>
<div class="sub-title">Constants</div>
Constant variables are declared same method, the only difference being that the keyword <x class="inline_code">const</x> is used when defining them.
<br><br>
For example;
<div class="code">const age: = 18;</div>
<div class="code">const age:int32 = 18;</div>
<div class="warn">
No matter which method the constant variables are defined by, a value must be given.
</div>

<div class="title-seperator"></div>
<div class="sub-sub-title">Differences Between Variables and Constants</div>
The value of the variables can change, then they can be updated with a different value to match the data type.
Constants take a single value and never change again.

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
<div class="code">a: = 100;

my_func(a bool) {
  outln(a);
}
</div>
In the code above, the function's parameter is the same as the name of a global definition.
In this case, the parameter name is valid and the global definition is shaded.
<br><br>
Well, we said that a definition that is already defined or shadowed in the block and sub-blocks cannot be shadowed again.
What exactly does this mean?
<br><br>
For example;
<div class="code">a: = 100;

my_func(a bool) {
  a: = 0.10;
  outln(a);
}
</div>
Let's go over the previous example. In the block, the parameter <x class="inline_code">a</x> was taken with shadowing.
It is no longer a definition that can be shaded, but is assumed to be defined within the block.
So this code will result in compiler error.
</div>
`;

const common_concepts_functionsHTML =
`
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
The curly braces indicate the block of the function.
<br><br>
So how can we call this function? <br>
For Example;
<div class="code">example();</div>
The name of the function comes first and then the parentheses again.

<div class="title-seperator"></div>
<div class="sub-title">Function Parameters</div>
Functions can have parameters.
These parameters must be specified with arguments at the time the function is called.
<br><br>
For example;
<div class="code">main() {
  print_int(50);
}

print_int(i int32) {
  outln(i);
}</div>
It is similar to normal function definition.
Parameters are written between parentheses
If there is more than one parameter, they are separated by commas.
The name of the parameter is written first, followed by the data type.
<br><br>
When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas.
The given arguments must be compatible with the data type of the corresponding parameters.

<div class="title-seperator"></div>
<div class="sub-title">Functions with Return Values</div>
Functions can return values.
<br><br>
For example;
<div class="code">main() {
  outln(div(10, 2));
}

div(a float64, b float64) float64 {
  ret a / b;
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
<div class="code">div(a float64, b float64) float64 {
  < a / b;
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
<div class="code">my_function:(int32, int32) int32;</div>
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
    < "Hello " + name + "!";
  };
  outln(make_hello("X"));
}</div>

<div class="topic-seperator"></div>
Anonymous functions can access the definitions of the block in which they are defined.
<br><br>
For example;
<div class="code">main() {
  message: = "Hello, World!";
  func: = () {
    outln(message);
  };
  func();
}</div>
The anonymous function defined in the example above uses the <x class="inline_code">message</x> variable belonging to the block it is defined in.
Definitions used from outer blocks can be shadowed within the anonymous function.
</div>
`;

const common_concepts_arraysHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Arrays</div>
<div class="text">
Arrays is a heap allocated memory fields.
Arrays can store multiple values.
<br><br>
Example to arrays;
<div class="code">main() {
  my_array:[]str;
  my_array = []str{"Hello", "X", "arrays!"};
  outln(my_array);
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
  my_array: = []str{"Hello", "arrays", "indexes"};
  outln(my_array[0]);
  my_array[0] = "Hi";
  outln(my_array);
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
<div class="sub-title">Nested Arrays</div>
Nested arrays is array storing arrays.
<br>
For example;
<div class="code">main() {
  my_array: = [][]str{
    []str{"Apple", "Banana"},
    []str{"Bred", "Cheese"},
  };
  outln(my_array);
}</div>
<br>
Output of program;
<div class="code">[[Apple, Banana], [Bred, Cheese]]</div>
`;

const itemsHTML =
`
<div class="title" style="margin-bottom: 20px;">Items</div>
<div class="text">
  Definable and usable elements of X.
</div>
`;

const items_type_aliasesHTML =
`
<div class="page-title" style="margin-bottom: 20px;">Type Aliases</div>
<div class="text">
Type aliases is an alias for existing types defined by developer.
When these aliases are used, they qualify the types they represent.
<br>
For example;
<div class="code">type i32 int32;

main() {
  my_int:i32 = 100;
  outln(my_int);
}</div>
As seen in the example above, there is an alias definition of <x class="inline_code">i32</x> for the <x class="inline_code">int32</x> data type.
The keyword <x class="inline_code">type</x> comes first to define an alias.
Then comes the name you want to give and which type it will represent.
This alias will now represent <x class="inline_code">int32</x> when used.
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

const endHTML =
`
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

</div>
`;

//#region SET_PAGE

document.title = page_title;

document.body.style.paddingBottom = "0px";
const navigation = document.getElementById('navigation');
navigation.remove();

//#endregion SET_PAGE

//#region GET_ELEMENTS

// Navigation.
const NAV_the_xlang = document.getElementById('the-xlang');
const NAV_foreword = document.getElementById('foreword');
const NAV_introduction = document.getElementById('introduction');
const NAV_getting_started = document.getElementById('getting-started');
const NAV_getting_started_downloads = document.getElementById('getting-started-downloads');
const NAV_getting_started_install_from_source = document.getElementById('getting-started-install-from-source');
const NAV_compiler = document.getElementById('compiler');
const NAV_compiler_basic_commands = document.getElementById('compiler-basic-commands');
const NAV_compiler_config_files = document.getElementById('compiler-config-files');
const NAV_compiler_compiling = document.getElementById('compiler-compiling');
const NAV_project = document.getElementById('project');
const NAV_project_directory_order = document.getElementById('project-directory-order');
const NAV_project_naming = document.getElementById('project-naming');
const NAV_basics = document.getElementById('basics');
const NAV_basics_comments = document.getElementById('basics-comments');
const NAV_basics_entry_point = document.getElementById('basics-entry-point');
const NAV_basics_data_types = document.getElementById('basics-data-types');
const NAV_basics_operators = document.getElementById('basics-operators');
const NAV_basics_attributes = document.getElementById('basics-attributes');
const NAV_basics_expressions_as_statement = document.getElementById('basics-expressions-as-statement');
const NAV_common_concepts = document.getElementById('common-concepts');
const NAV_common_concepts_variables = document.getElementById('common-concepts-variables');
const NAV_common_concepts_functions = document.getElementById('common-concepts-functions');
const NAV_common_concepts_arrays = document.getElementById('common-concepts-arrays');
const NAV_items = document.getElementById('items');
const NAV_items_type_aliases = document.getElementById('items-type-aliases');
const NAV_end = document.getElementById('end');

const side_navigation = document.getElementById('side-navigation');
const content_body = document.getElementById('side-navigation-content-body');

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
  [NAV_basics,                              basicsHTML],
  [NAV_basics_comments,                     basics_commentsHTML],
  [NAV_basics_entry_point,                  basics_entry_pointHTML],
  [NAV_basics_data_types,                   basics_data_typesHTML],
  [NAV_basics_operators,                    basics_operatorsHTML],
  [NAV_basics_attributes,                   basics_attributesHTML],
  [NAV_basics_expressions_as_statement,     basics_expressions_as_statementHTML],
  [NAV_common_concepts,                     common_conceptsHTML],
  [NAV_common_concepts_variables,           common_concepts_variablesHTML],
  [NAV_common_concepts_functions,           common_concepts_functionsHTML],
  [NAV_common_concepts_arrays,              common_concepts_arraysHTML],
  [NAV_items,                               itemsHTML],
  [NAV_items_type_aliases,                  items_type_aliasesHTML],
  [NAV_end,                                 endHTML],
];

//#region EVENTS

function next_page_click() {
  select_topic_index(navigation_index+1);
}

function prev_page_click() {
  select_topic_index(navigation_index-1);
}

navigations.forEach((element, index) => {
  element[0].addEventListener('click', () => {
    select_topic_index(index);
  });
});

//#endregion EVENTS

//#region SET_CONTENT

//#region SET_CONTENT QUERIES
const url = new URL(window.location.href);
const query_page = url.searchParams.get('page');
if (query_page != null) {
  const selected_page = document.getElementById(query_page);
  if (selected_page != null) {
    selected_page.click();
  } else {
    select_topic_index(0);
  }
} else {
  select_topic_index(0);
}
//#endregion SET_CONTENT QUERIES

//#endregion SET_CONTENT

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
  navigations[navigation_index][0].style = nav.style;
  nav.style.color = navigation_avtive_color;
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
  url.searchParams.set('page', nav.id);
  window.history.replaceState(null, null, "?" +url.searchParams.toString());
  nav.scrollIntoView();
  window.scrollTo(0, 0);
}
