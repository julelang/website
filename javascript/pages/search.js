// Copyright 2022 The Jule Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

// Search engine.

const root_path = location.href.substr(0,
  location.href.indexOf('website')+'website'.length);

const url = new URL(window.location.href);
let searched = url.searchParams.get('searched');

const body_div = document.getElementById('body-div');

const searchbox_html =
`
<div class="searchbox-page">
  <img
    class="searchbox-icon"
    src="./resources/magnifying_glass.png">
  <input id="searchbox-input" class="searchbox-input" type="text" placeholder="Type to Search"/>
</div>
`;

if (searched == null) {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
    ${searchbox_html}
</center>
`;
} else {
  searched = searched.toLowerCase();
body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title">Searching contents...</div>
</center>
`;

const contents = [
  // [[Keyword(s)], "Result Title", "Description Text", "URL"]
  [["home", "main"],                                                                                                    "Home Page",                                                       "Go to home page.",                                                           `${root_path}/index.html`],
  [["search", "filter", "find", "found"],                                                                               "Search Page",                                                     "Go to search page.",                                                         `${root_path}/search.html`],
  [["license", "copyright"],                                                                                            "License",                                                         "Open source license text of project.",                                       `${root_path}/pages/license.html`],
  [["code", "conduct", "rule", "community", "git"],                                                                     "Code of Conduct",                                                 "Code of conduct for contributors and community.",                            `${root_path}/pages/code_of_conduct.html`],
  [["git", "community", "stack overflow", "stackoverflow"],                                                             "Community",                                                       "Community, help, report and more.",                                          `${root_path}/pages/community.html`],
  [["manual", "guide", "learn", "doc", "contribute", "contributing", "guide", "fork"],                                  "Contributing",                                                    "Contribution guidelines for contributing to the Jule programming language.", `${root_path}/pages/contributing.html`],
  [["manual", "guide", "doc", "info", "learn"],                                                                         "Manual",                                                  "Documentations of the Jule programming language for every developer.",       `${root_path}/pages/manual.html`],
  [["manual", "doc", "info", "guide", "learn", "lang", "programming"],                                                  "Manual - The Jule Programming Language",                  "About of the Jule programming language.",                                    `${root_path}/pages/manual.html?page=jule-lang`],
  [["manual", "doc", "info", "guide", "learn", "foreword"],                                                             "Manual - Foreword",                                       "Foreword of manual.",                                                `${root_path}/pages/manual.html?page=foreword`],
  [["manual", "doc", "info", "guide", "learn", "intro"],                                                                "Manual - Introduction",                                   "Introduction of manual.",                                            `${root_path}/pages/manual.html?page=introduction`],
  [["manual", "doc", "info", "guide", "learn", "getting", "start"],                                                     "Manual - <strong>1.</strong> Getting Started",            "Getting Started topic of manual.",                                   `${root_path}/pages/manual.html?page=getting-started`],
  [["manual", "doc", "info", "guide", "learn", "download", "get", "install"],                                           "Manual - <strong>1.1.</strong> Downloads",                "Downloads sub-topic of Getting Started topic of manual.",            `${root_path}/pages/manual.html?page=getting-started-downloads`],
  [["manual", "doc", "info", "guide", "learn", "get", "install"],                                                       "Manual - <strong>1.2.</strong> Install from Source",      "Install from Source sub-topic of Getting Started topic of manual.",  `${root_path}/pages/manual.html?page=getting-started-install-from-source`],
  [["manual", "doc", "info", "guide", "learn", "compile", "transpile"],                                                 "Manual - <strong>2.</strong> Compiler",                   "Compiler topic of manual.",                                          `${root_path}/pages/manual.html?page=compiler`],
  [["manual", "doc", "info", "guide", "learn", "compile", "transpile", "platform", "support", "os", "sys", "arch"],     "Manual - <strong>2.1.</strong> Platform Support",         "Platform Support sub-topic of Compiler topic of manual.",            `${root_path}/pages/manual.html?page=compiler-platform-support`],
  [["manual", "doc", "info", "guide", "learn", "compile", "transpile", "basic", "command"],                             "Manual - <strong>2.2.</strong> Basic Commands",           "Basic Commands sub-topic of Compiler topic of manual.",              `${root_path}/pages/manual.html?page=compiler-basic-commands`],
  [["manual", "doc", "info", "guide", "learn", "compile", "transpile", "arg", "list", "cfg", "config", "option"],       "Manual - <strong>2.3.</strong> Compiler Options",         "Compiler Options sub-topic of Compiler topic of manual.",            `${root_path}/pages/manual.html?page=compiler-compiler-options`],
  [["manual", "doc", "info", "guide", "learn", "compile", "transpile", "compiling"],                                    "Manual - <strong>2.4.</strong> Compiling",                "Compiling sub-topic of Compiler topic of manual.",                   `${root_path}/pages/manual.html?page=compiler-compiling`],
  [["manual", "doc", "info", "guide", "learn", "project", "work"],                                                      "Manual - <strong>3.</strong> Project",                    "Project topic of manual.",                                           `${root_path}/pages/manual.html?page=project`],
  [["manual", "doc", "info", "guide", "learn", "project", "work", "order", "dir"],                                      "Manual - <strong>3.1.</strong> Directory Order",          "Directory Order sub-topic of Project topic of manual.",              `${root_path}/pages/manual.html?page=project-directory-order`],
  [["manual", "doc", "info", "guide", "learn", "project", "work", "naming"],                                            "Manual - <strong>3.2.</strong> Naming",                   "Naming sub-topic of Project topic of manual.",                       `${root_path}/pages/manual.html?page=project-naming`],
  [["manual", "doc", "info", "guide", "learn", "project", "work", "define", "declare"],                                 "Manual - <strong>3.3.</strong> Declarations",             "Declarations sub-topic of Project topic of manual.",                 `${root_path}/pages/manual.html?page=project-declarations`],
  [["manual", "doc", "info", "guide", "learn", "project", "work", "define"],                                            "Manual - <strong>3.4.</strong> Defines",                  "Defines sub-topic of Project topic of manual.",                      `${root_path}/pages/manual.html?page=project-defines`],
  [["manual", "doc", "info", "guide", "learn", "basic"],                                                                "Manual - <strong>4.</strong> Basics",                     "Basics topic of manual.",                                            `${root_path}/pages/manual.html?page=basics`],
  [["manual", "doc", "info", "guide", "learn", "basic", "comment"],                                                     "Manual - <strong>4.1.</strong> Comments",                 "Comments sub-topic of Basics topic of manual.",                      `${root_path}/pages/manual.html?page=basics-comments`],
  [["manual", "doc", "info", "guide", "learn", "basic", "reserved", "func", "entry", "point", "main", "init"],          "Manual - <strong>4.2.</strong> Reserved Functions",       "Reserved Functions sub-topic of Basics topic of manual.",            `${root_path}/pages/manual.html?page=basics-reserved-functions`],
  [["manual", "doc", "info", "guide", "learn", "basic", "data", "type"],                                                "Manual - <strong>4.3.</strong> Data Types",               "Data Types sub-topic of Basics topic of manual.",                    `${root_path}/pages/manual.html?page=basics-data-types`],
  [["manual", "doc", "info", "guide", "learn", "basic", "operator"],                                                    "Manual - <strong>4.4.</strong> Operators",                "Operators sub-topic of Basics topic of manual.",                     `${root_path}/pages/manual.html?page=basics-operators`],
  [["manual", "doc", "info", "guide", "learn", "basic", "attribute"],                                                   "Manual - <strong>4.5.</strong> Attributes",               "Attributes sub-topic of Basics topic of manual.",                    `${root_path}/pages/manual.html?page=basics-attributes`],
  [["manual", "doc", "info", "guide", "learn", "basic", "statatement"],                                                 "Manual - <strong>4.6.</strong> Statements",               "Statements sub-topic of Basics topic of manual.",                    `${root_path}/pages/manual.html?page=basics-statements`],
  [["manual", "doc", "info", "guide", "learn", "block", "scope"],                                                       "Manual - <strong>4.7</strong> Blocks",                    "Blocks sub-topic of Basics topic of manual.",                        `${root_path}/pages/manual.html?page=basics-blocks`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept"],                                                    "Manual - <strong>5.</strong> Common Concepts",            "Common Concepts topic of manual.",                                   `${root_path}/pages/manual.html?page=common-concepts`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "var", "const", "expr", "assign"],                  "Manual - <strong>5.1.</strong> Variables",                "Variables sub-topic of Common Concepts topic of manual.",            `${root_path}/pages/manual.html?page=common-concepts-variables`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "func", "const", "defer", "scope"],                 "Manual - <strong>5.2.</strong> Functions",                "Functions sub-topic of Common Concepts topic of manual.",            `${root_path}/pages/manual.html?page=common-concepts-functions`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "array"],                                           "Manual - <strong>5.3.</strong> Arrays",                   "Arrays sub-topic of Common Concepts topic of manual.",               `${root_path}/pages/manual.html?page=common-concepts-arrays`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "slice"],                                           "Manual - <strong>5.4.</strong> Slices",                   "Slices sub-topic of Common Concepts topic of manual.",               `${root_path}/pages/manual.html?page=common-concepts-slices`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "map", "hash", "key", "value"],                     "Manual - <strong>5.5.</strong> Maps",                     "Maps sub-topic of Common Concepts topic of manual.",                 `${root_path}/pages/manual.html?page=common-concepts-maps`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "control", "loop", "flow", "if", "else", "iter"],   "Manual - <strong>5.6.</strong> Control Flow",             "Control Flow sub-topic of Common Concepts topic of manual.",         `${root_path}/pages/manual.html?page=common-concepts-control-flow`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "enum", "const"],                                   "Manual - <strong>5.7.</strong> Enums",                    "Enums sub-topic of Common Concepts topic of manual.",                `${root_path}/pages/manual.html?page=common-concepts-enums`],
  [["manual", "doc", "info", "guide", "learn", "common", "concept", "struct", "field", "group", "stack", "oop", "obj"], "Manual - <strong>5.8.</strong> Structures",               "Structures sub-topic of Common Concepts topic of manual.",           `${root_path}/pages/manual.html?page=common-concepts-structures`],
  [["manual", "doc", "info", "guide", "learn", "trait", "interface", "shared", "behavior"],                             "Manual - <strong>6.</strong> Traits",                     "Traits topic of manual.",                                            `${root_path}/pages/manual.html?page=traits`],
  [["manual", "doc", "info", "guide", "learn", "trait", "interface", "shared", "behavior", "impl"],                     "Manual - <strong>6.1.</strong> Implementing",             "Implementing sub-topic of Traits topic of manual.",                  `${root_path}/pages/manual.html?page=traits-implementing`],
  [["manual", "doc", "info", "guide", "learn", "mem", "new", "alloc", "heap", "manage", "point", "ptr"],                "Manual - <strong>7.</strong> Memory",                     "Memory topic of manual.",                                            `${root_path}/pages/manual.html?page=memory`],
  [["manual", "doc", "info", "guide", "learn", "mem", "mut"],                                                           "Manual - <strong>7.1.</strong> Immutability",             "Immutability sub-topic of Memory topic of manual.",                  `${root_path}/pages/manual.html?page=memory-immutability`],
  [["manual", "doc", "info", "guide", "learn", "mem", "point", "ptr", "alloc", "heap", "stack"],                        "Manual - <strong>7.2.</strong> Pointers",                 "Pointers sub-topic of Memory topic of manual.",                      `${root_path}/pages/manual.html?page=memory-pointers`],
  [["manual", "doc", "info", "guide", "learn", "mem", "manage", "new", "alloc", "heap", "point", "free", "ptr"],        "Manual - <strong>7.3.</strong> Memory Management",        "Memory Management sub-topic of Memory topic of manual.",             `${root_path}/pages/manual.html?page=memory-memory-management`],
  [["manual", "doc", "info", "guide", "learn", "mem", "unsafe", "jule"],                                                "Manual - <strong>8.</strong> Unsafe Jule",                "Unsafe Jule topic of manual.",                                       `${root_path}/pages/manual.html?page=unsafe-jule`],
  [["manual", "doc", "info", "guide", "learn", "err", "panic", "abort", "hand", "exception", "throw"],                  "Manual - <strong>9.</strong> Error Handling",             "Error Handling topic of manual.",                                    `${root_path}/pages/manual.html?page=error-handling`],
  [["manual", "doc", "info", "guide", "learn", "err", "coding", "hand", "catch", "code", "enum", "const"],              "Manual - <strong>9.1.</strong> Error Coding",             "Error Coding sub-topic of Error Handling topic of manual.",          `${root_path}/pages/manual.html?page=error-handling-error-coding`],
  [["manual", "doc", "info", "guide", "learn", "err", "panic", "hand", "catch", "trait", "custom"],                     "Manual - <strong>9.2.</strong> Error Trait",              "Error Trait sub-topic of Error Handling topic of manual.",           `${root_path}/pages/manual.html?page=error-handling-error-trait`],
  [["manual", "doc", "info", "guide", "learn", "err", "panic", "abort", "exception", "throw"],                          "Manual - <strong>9.3.</strong> Panics",                   "Panics sub-topic of Error Handling topic of manual.",                `${root_path}/pages/manual.html?page=error-handling-panics`],
  [["manual", "doc", "info", "guide", "learn", "err", "panic", "hand", "exception", "throw", "recover"],                "Manual - <strong>9.4.</strong> Handling Panics",          "Handling Panics sub-topic of Error Handling topic of manual.",       `${root_path}/pages/manual.html?page=error-handling-handling-panics`],
  [["manual", "doc", "info", "guide", "learn", "type"],                                                                 "Manual - <strong>10.</strong> Types",                     "Types topic of manual.",                                             `${root_path}/pages/manual.html?page=types`],
  [["manual", "doc", "info", "guide", "learn", "type", "alias"],                                                        "Manual - <strong>10.1.</strong> Aliasing",                "Aliasing sub-topic of Types topic of manual.",                       `${root_path}/pages/manual.html?page=types-aliasing`],
  [["manual", "doc", "info", "guide", "learn", "type", "cast"],                                                         "Manual - <strong>10.2.</strong> Casting",                 "Casting sub-topic of Types topic of manual.",                        `${root_path}/pages/manual.html?page=types-casting`],
  [["manual", "doc", "info", "guide", "learn", "type", "generic"],                                                      "Manual - <strong>10.3.</strong> Generics",                "Generics sub-topic of Types topic of manual.",                       `${root_path}/pages/manual.html?page=types-generics`],
  [["manual", "doc", "info", "guide", "learn", "type", "str"],                                                          "Manual - <strong>10.4.</strong> str",                     "str sub-topic of Types topic of manual.",                            `${root_path}/pages/manual.html?page=types-str`],
  [["manual", "doc", "info", "guide", "learn", "type", "array"],                                                        "Manual - <strong>10.5.</strong> Arrays",                  "Arrays sub-topic of Types topic of manual.",                         `${root_path}/pages/manual.html?page=types-arrays`],
  [["manual", "doc", "info", "guide", "learn", "type", "slice"],                                                        "Manual - <strong>10.6.</strong> Slices",                  "Slices sub-topic of Types topic of manual.",                         `${root_path}/pages/manual.html?page=types-slices`],
  [["manual", "doc", "info", "guide", "learn", "type", "map", "hash"],                                                  "Manual - <strong>10.7.</strong> Maps",                    "Maps sub-topic of Types topic of manual.",                           `${root_path}/pages/manual.html?page=types-maps`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "global", "built"],                                    "Manual - <strong>11.</strong> Type Statics",              "Type Statics topic of manual.",                                      `${root_path}/pages/manual.html?page=type-statics`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "i8"],                                        "Manual - <strong>11.1.</strong> i8",                      "i8 sub-topic of Type Statics topic of manual.",                      `${root_path}/pages/manual.html?page=type-statics-i8`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "i16"],                                       "Manual - <strong>11.2.</strong> i16",                     "i16 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-i16`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "i32"],                                       "Manual - <strong>11.3.</strong> i32",                     "i32 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-i32`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "i64"],                                       "Manual - <strong>11.4.</strong> i64",                     "i64 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-i64`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "u8"],                                        "Manual - <strong>11.5.</strong> u8",                      "u8 sub-topic of Type Statics topic of manual.",                      `${root_path}/pages/manual.html?page=type-statics-u8`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "u16"],                                       "Manual - <strong>11.6.</strong> u16",                     "u16 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-u16`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "u32"],                                       "Manual - <strong>11.7.</strong> u32",                     "u32 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-u32`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "u64"],                                       "Manual - <strong>11.8.</strong> u64",                     "u64 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-u64`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "f32"],                                       "Manual - <strong>11.9.</strong> f32",                     "f32 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-f32`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "f64"],                                       "Manual - <strong>11.10.</strong> f64",                    "f64 sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-f64`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "int"],                                       "Manual - <strong>11.11.</strong> int",                    "int sub-topic of Type Statics topic of manual.",                     `${root_path}/pages/manual.html?page=type-statics-int`],
  [["manual", "doc", "info", "guide", "learn", "type", "static", "built", "uint"],                                      "Manual - <strong>11.11.</strong> int",                    "uint sub-topic of Type Statics topic of manual.",                    `${root_path}/pages/manual.html?page=type-statics-uint`],
  [["manual", "doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Manual - <strong>12.</strong> Cpp",                       "Cpp topic of manual.",                                               `${root_path}/pages/manual.html?page=cpp`],
  [["manual", "doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Manual - <strong>12.1.</strong> API",                     "API sub-topic of Cpp topic of manual.",                              `${root_path}/pages/manual.html?page=cpp-api`],
  [["manual", "doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Manual - <strong>12.2.</strong> Interoperability",        "Interoperability sub-topic of Cpp topic of manual.",                 `${root_path}/pages/manual.html?page=cpp-interoperability`],
  [["manual", "doc", "info", "guide", "learn", "use", "decl", "pkg", "pack"],                                           "Manual - <strong>13</strong> Use Declarations",           "Use Declarations topic of manual.",                                  `${root_path}/pages/manual.html?page=use-declarations`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib"],                                               "Manual - <strong>14</strong> Standard Library",           "Standard Library topic of manual.",                                  `${root_path}/pages/manual.html?page=stdlib`],
  [["manual", "doc", "info", "guide", "end"],                                                                           "Manual - End",                                            "End of manual.",                                                     `${root_path}/pages/manual.html?page=end`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "built"],                                      "Manual - <strong>stdlib:</strong> builtin",               "The builtin library manual.",                                        `${root_path}/pages/stdlib/builtin.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "conv", "parse", "str", "fmt", "format"],      "Manual - <strong>stdlib:</strong> std::conv",             "The std::conv stdlib manual.",                                       `${root_path}/pages/stdlib/conv.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "debug", "assert"],                            "Manual - <strong>stdlib:</strong> std::debug",            "The std::debug stdlib manual.",                                      `${root_path}/pages/stdlib/debug.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "debug", "assert"],                            "Manual - <strong>stdlib:</strong> std::debug::assert",    "The std::debug::assert stdlib manual.",                              `${root_path}/pages/stdlib/debug_assert.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "err"],                                        "Manual - <strong>stdlib:</strong> std::errors",           "The std::errors stdlib manual.",                                     `${root_path}/pages/stdlib/errors.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "fs", "file", "dir", "sys"],                   "Manual - <strong>stdlib:</strong> std::fs",               "The std::fs stdlib manual.",                                         `${root_path}/pages/stdlib/fs.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "io"],                                         "Manual - <strong>stdlib:</strong> std::io",               "The std::io stdlib manual.",                                         `${root_path}/pages/stdlib/io.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "math"],                                       "Manual - <strong>stdlib:</strong> std::math",             "The std::math stdlib manual.",                                       `${root_path}/pages/stdlib/math.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "math", "bits"],                               "Manual - <strong>stdlib:</strong> std::math::bits",       "The std::math::bits stdlib manual.",                                 `${root_path}/pages/stdlib/math_bits.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "mem"],                                        "Manual - <strong>stdlib:</strong> std::mem",              "The std::mem stdlib manual.",                                        `${root_path}/pages/stdlib/mem.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "mem", "c", "man"],                            "Manual - <strong>stdlib:</strong> std::mem::c",           "The std::mem::c stdlib manual.",                                     `${root_path}/pages/stdlib/mem_c.html`],  
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "os"],                                         "Manual - <strong>stdlib:</strong> std::os",               "The std::os stdlib manual.",                                         `${root_path}/pages/stdlib/os.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "reflect"],                                    "Manual - <strong>stdlib:</strong> std::reflect",          "The std::reflect stdlib manual.",                                    `${root_path}/pages/stdlib/reflect.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "run", "time"],                                "Manual - <strong>stdlib:</strong> std::runtime",          "The std::runtime stdlib manual.",                                    `${root_path}/pages/stdlib/runtime.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "sync"],                                       "Manual - <strong>stdlib:</strong> std::sync",             "The std::sync stdlib manual.",                                       `${root_path}/pages/stdlib/sync.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "sync", "atomic"],                             "Manual - <strong>stdlib:</strong> std::sync::atomic",     "The std::sync::atomic stdlib manual.",                               `${root_path}/pages/stdlib/sync_atomic.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "sys", "api", "kernel"],                       "Manual - <strong>stdlib:</strong> std::sys",              "The std::sys stdlib manual.",                                        `${root_path}/pages/stdlib/sys.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Manual - <strong>stdlib:</strong> std::unicode",          "The std::unicode stdlib manual.",                                    `${root_path}/pages/stdlib/unicode.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Manual - <strong>stdlib:</strong> std::unicode::utf16",   "The std::unicode::utf16 stdlib manual.",                             `${root_path}/pages/stdlib/unicode_utf16.html`],
  [["manual", "doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Manual - <strong>stdlib:</strong> std::unicode::utf8",    "The std::unicode::utf8 stdlib manual.",                              `${root_path}/pages/stdlib/unicode_utf8.html`],

  /* [["doc", "info", "guide", "learn"],                       "Documentations - <strong></strong> ", "",                                    `${root_path}/pages/manual.html?page=`], */
];

function string_diff(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
}

let results      = "";
let result_count = 0;
let predictions  = [];

searched = searched
          .replace('\t', ' ')
          .replace('\v', ' ')
          .replace('\n', '')
          .replace('\r', '');
const words = searched.split(' ');

contents.forEach((value) => {
  const keywords = value[0];
  for (let index = 0; index < keywords.length; index++) {
    const keyword = keywords[index];
    if (words.filter(word => word.startsWith(keyword)).length > 0) {
      results +=
      `
      <div class="search-result">
      <a href="${value[3]}">${value[1]}</a>
      <div style="margin-top: 5px;">${value[2]}</div>
      <div>`;
      result_count++;
      break;
    }
    if (words.filter(word => string_diff(word, keyword) >= 0.5 ||
        word.includes(keyword)).length > 0) {
      if (!predictions.includes(keyword)) {
        predictions.push(keyword);
      }
    }
  }
});

let prediction_links = "";
predictions.forEach((value) => {
  prediction_links += `<a href="${root_path}/search.html?searched=${value}">"${value}"</a>,`;
});
if (prediction_links != "") {
  prediction_links = prediction_links.substring(0, prediction_links.length-1);
}

let predictionsHTML =
`
<div class="search-predictions">
  <div class="sub-title">May helpful:</div>
  <div>${prediction_links}</div>
</div>
`;

if (results == "") {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title" style="word-wrap: break-word;">No result for: "${searched}"</div>
  ${prediction_links == "" ? "" : predictionsHTML}
  <div style="margin-bottom: 50px;"></div>
  ${searchbox_html}
</center>
`;
} else {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title" style="word-wrap: break-word; margin-bottom: 50px;">${result_count} matched results for: "${searched}"</div>
  ${searchbox_html}
</center>
<div style="margin-left: 20%; margin-right: 20%;">
${results}
</div>
`;
}
}
