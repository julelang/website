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
  [["home", "main"],                                                                  "Home Page",                                                       "Go to home page.",                                                          `${root_path}/index.html`],
  [["search", "filter", "find", "found"],                                             "Search Page",                                                     "Go to search page.",                                                        `${root_path}/search.html`],
  [["license", "copyright"],                                                          "License",                                                         "Open source license text of project.",                                      `${root_path}/pages/license.html`],
  [["code", "conduct", "rule", "community", "git"],                                   "Code of Conduct",                                                 "Code of conduct for contributors and community.",                           `${root_path}/pages/code_of_conduct.html`],
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
  [["doc", "info", "guide", "learn", "basic", "expression", "statatement", "as"],     "Documentations - <strong>4.6.</strong> Statements",               "Statements sub-topic of Basics topic of documentations.",                   `${root_path}/pages/docs.html?page=basics-statements`],
  [["doc", "info", "guide", "learn", "common", "concept"],                            "Documentations - <strong>5.</strong> Common Concepts",            "Common Concepts topic of documentations.",                                  `${root_path}/pages/docs.html?page=common-concepts`],
  [["doc", "info", "guide", "learn", "common", "concept", "variable"],                "Documentations - <strong>5.1.</strong> Variables",                "Variables sub-topic of Common Concepts topic of documentations.",           `${root_path}/pages/docs.html?page=common-concepts-variables`],
  [["doc", "info", "guide", "learn", "common", "concept", "func"],                    "Documentations - <strong>5.2.</strong> Functions",                "Functions sub-topic of Common Concepts topic of documentations.",           `${root_path}/pages/docs.html?page=common-concepts-functions`],
  [["doc", "info", "guide", "learn", "common", "concept", "array", "slice"],          "Documentations - <strong>5.3.</strong> Arrays",                   "Arrays sub-topic of Common Concepts topic of documentations.",              `${root_path}/pages/docs.html?page=common-concepts-arrays`],
  [["doc", "info", "guide", "learn", "new", "alloc", "heap", "memory", "manage"],     "Documentations - <strong>6.</strong> Memory Managment",           "Memory Management topic of documentations.",                                `${root_path}/pages/docs.html?page=memory-management`],
  [["doc", "info", "guide", "learn", "item"],                                         "Documentations - <strong>7.</strong> Items",                      "Items topic of documentations.",                                            `${root_path}/pages/docs.html?page=items`],
  [["doc", "info", "guide", "learn", "item", "type", "alias"],                        "Documentations - <strong>7.1.</strong> Type Aliases",             "Type Aliases sub-topic of Items topic of documentations.",                  `${root_path}/pages/docs.html?page=items-type-aliases`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib"],                       "Documentations - <strong>8</strong> Standard Library",            "Standard Library topic of documentations.",                                 `${root_path}/pages/docs.html?page=standard-library`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "built"],              "Documentations - <strong>8.1</strong> Built-In",                  "Standard Library sub topic of Standard Library topic of documentations.",   `${root_path}/pages/docs.html?page=standard-library-builtin`],
  [["doc", "info", "guide", "end"],                                                   "Documentations - End",                                            "End of documentations.",                                                    `${root_path}/pages/docs.html?page=end`],

  /* [["doc", "info", "guide", "learn"],                       "Documentations - <strong></strong> ", "",                                    `${root_path}/pages/docs.html?page=`], */
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
