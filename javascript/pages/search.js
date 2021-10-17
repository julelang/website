// Search engine.

const root_path = location.href.substr(0,
  location.href.indexOf('website')+'website'.length);

const url = new URL(window.location.href);
const searched = url.searchParams.get('searched').toLowerCase();

const body_div = document.getElementById('body-div');

if (searched == null) {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title">You don't search anything!</div>
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
  <div class="title">Searching contents...</div>
</center>
`;

const contents = [
  // [[Keyword(s)], "Result Title", "Description Text", "URL"]
  [["home", "main"],                                                                  "Home Page",                                                       "Go to home page.",                                                          `${root_path}/index.html`],
  [["license", "copyright"],                                                          "License",                                                         "Open source license text of project.",                                      `${root_path}/pages/license.html`],
  [["code of conduct", "rule", "community", "git"],                                   "Code of Conduct",                                                 "Code of conduct for contributors and community.",                           `${root_path}/pages/code_of_conduct.html`],
  [["git", "community", "stack overflow", "stackoverflow"],                           "Community",                                                       "Community, help, report and more.",                                         `${root_path}/pages/community.html`],
  [["contribute", "contributing", "guide", "fork"],                                   "Contributing",                                                    "Contribution guidelines for contributing to the X programming language.",   `${root_path}/pages/contributing.html`],
  [["guide", "doc", "info", "learn"],                                                 "Documentations",                                                  "Documentations of the X programming language for every developer.",         `${root_path}/pages/docs.html`],
  [["doc", "info", "guide", "learn", "lang", "programming"],                          "Documentations - The X Programming Language",                     "About of the X programming language.",                                      `${root_path}/pages/docs.html?page=the-xlang`],
  [["doc", "info", "guide", "learn", "foreword"],                                     "Documentations - Foreword",                                       "Foreword of documentations.",                                               `${root_path}/pages/docs.html?page=foreword`],
  [["doc", "info", "guide", "learn", "intro"],                                        "Documentations - Introduction",                                   "Introduction of documentations.",                                           `${root_path}/pages/docs.html?page=introduction`],
  [["doc", "info", "guide", "learn", "getting", "start"],                             "Documentations - <strong>1.</strong> Getting Started",            "Getting Started topic of documentations.",                                  `${root_path}/pages/docs.html?page=getting-started`],
  [["doc", "info", "guide", "learn", "download", "get", "install"],                   "Documentations - <strong>1.1.</strong> Downloads",                "Downloads sub-topic of Getting Started topic of documentations.",           `${root_path}/pages/docs.html?page=getting-started-downloads`],
  [["doc", "info", "guide", "learn", "get", "install"],                               "Documentations - <strong>1.2.</strong> Install from Source",      "Install from Source sub-topic of Getting Started topic of documentations.", `${root_path}/pages/docs.html?page=getting-started-install-from-source`],
  [["doc", "info", "guide", "learn", "compile", "transpile"],                         "Documentations - <strong>2.</strong> Compiler",                   "Compiler topic of documentations.",                                         `${root_path}/pages/docs.html?page=compiler`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "basic", "command"],     "Documentations - <strong>2.1.</strong> Basic Commands",           "Basic Commands sub-topic of Compiler topic of documentations.",             `${root_path}/pages/docs.html?page=compiler-basic-commands`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "cfg", "config", "set"], "Documentations - <strong>2.2.</strong> Config Files",             "Config Files sub-topic of Compiler topic of documentations.",               `${root_path}/pages/docs.html?page=compiler-config-files`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "compiling"],            "Documentations - <strong>2.3.</strong> Compiling",                "Compiling sub-topic of Compiler topic of documentations.",                  `${root_path}/pages/docs.html?page=compiler-compiling`],
  [["doc", "info", "guide", "learn", "project", "work"],                              "Documentations - <strong>3.</strong> Project",                    "Project topic of documentations.",                                          `${root_path}/pages/docs.html?page=project`],
  [["doc", "info", "guide", "learn", "project", "work", "order", "dir"],              "Documentations - <strong>3.1.</strong> Directory Order",          "Directory Order sub-topic of Project topic of documentations.",             `${root_path}/pages/docs.html?page=project-directory-order`],
  [["doc", "info", "guide", "learn", "project", "work", "naming"],                    "Documentations - <strong>3.2.</strong> Naming",                   "Naming sub-topic of Project topic of documentations.",                      `${root_path}/pages/docs.html?page=project-naming`],
  [["doc", "info", "guide", "learn", "basic"],                                        "Documentations - <strong>4.</strong> Basics",                     "Basics topic of documentations.",                                           `${root_path}/pages/docs.html?page=basics`],
  [["doc", "info", "guide", "learn", "basic", "comment"],                             "Documentations - <strong>4.1.</strong> Comments",                 "Comments sub-topic of Basics topic of documentations.",                     `${root_path}/pages/docs.html?page=basics-comments`],
  [["doc", "info", "guide", "learn", "basic", "entry", "point", "main"],              "Documentations - <strong>4.2.</strong> Entry Point",              "Entry Point sub-topic of Basics topic of documentations.",                  `${root_path}/pages/docs.html?page=basics-entry-point`],
  [["doc", "info", "guide", "learn", "basic", "data", "type"],                        "Documentations - <strong>4.3.</strong> Data Types",               "Data Types sub-topic of Basics topic of documentations.",                   `${root_path}/pages/docs.html?page=basics-data-types`],
  [["doc", "info", "guide", "learn", "basic", "operator"],                            "Documentations - <strong>4.4.</strong> Operators",                "Operators sub-topic of Basics topic of documentations.",                    `${root_path}/pages/docs.html?page=basics-operators`],
  [["doc", "info", "guide", "learn", "basic", "attribute"],                           "Documentations - <strong>4.5.</strong> Attributes",               "Attributes sub-topic of Basics topic of documentations.",                   `${root_path}/pages/docs.html?page=basics-attributes`],
  [["doc", "info", "guide", "learn", "basic", "expression", "statatement", "as"],     "Documentations - <strong>4.6.</strong> Expressions as Statement", "Expressions as Statement sub-topic of Basics topic of documentations.",     `${root_path}/pages/docs.html?page=basics-expressions-as-statement`],
  [["doc", "info", "guide", "learn", "common", "concept"],                            "Documentations - <strong>5.</strong> Common Concepts",            "Common Concepts topic of documentations.",                                  `${root_path}/pages/docs.html?page=common-concepts`],
  [["doc", "info", "guide", "learn", "common", "concept", "variable"],                "Documentations - <strong>5.1.</strong> Variables",                "Variables sub-topic of Common Concepts topic of documentations.",           `${root_path}/pages/docs.html?page=common-concepts-variables`],
  [["doc", "info", "guide", "learn", "common", "concept", "func"],                    "Documentations - <strong>5.2.</strong> Functions",                "Functions sub-topic of Common Concepts topic of documentations.",           `${root_path}/pages/docs.html?page=common-concepts-functions`],
  [["doc", "info", "guide", "learn", "item"],                                         "Documentations - <strong>6.</strong> Items",                      "Items topic of documentations.",                                            `${root_path}/pages/docs.html?page=items`],
  [["doc", "info", "guide", "learn", "item", "type", "alias"],                        "Documentations - <strong>6.1.</strong> Type Aliases",             "Type Aliases sub-topic of Items topic of documentations.",                  `${root_path}/pages/docs.html?page=items-type-aliases`],
  [["doc", "info", "guide", "end"],                                                   "Documentations - End",                                            "End of documentations.",                                                    `${root_path}/pages/docs.html?page=end`],

  /* [["doc", "info", "guide", "learn"],                       "Documentations - <strong></strong> ", "",                                    `${root_path}/pages/docs.html?page=`], */
];

let results = "";
let result_count = 0;

contents.forEach((value) => {
  const keywords = value[0];
  for (let index = 0; index < keywords.length; index++) {
    if (searched.includes(keywords[index])) {
      results +=
`
<div class="search-result">
  <a href="${value[3]}">${value[1]}</a>
  <div style="margin-top: 5px;">${value[2]}</div>
<div>`;
      result_count++;
      break;
    }
  }
});

if (results == "") {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title">No result for: "${searched}"</div>
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
  <div class="title" style="margin-bottom: 150px;">${result_count} matched results for: "${searched}"</div>
</center>
<div style="margin-left: 20%; margin-right: 20%;">
${results}
</div>
`;
}
}
