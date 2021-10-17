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
  [["home", "main"],                                               "Home Page",       "Go to home page.",                                                        `${root_path}/index.html`],
  [["license", "copyright"],                                       "License",         "Open source license text of project.",                                    `${root_path}/pages/license.html`],
  [["code of conduct", "rule", "community", "git"],                "Code of Conduct", "Code of conduct for contributors and community.",                         `${root_path}/pages/code_of_conduct.html`],
  [["git", "community", "stack overflow", "stackoverflow"],        "Community",       "Community, help, report and more.",                                       `${root_path}/pages/community.html`],
  [["contribute", "contributing", "guide", "fork"],                "Contributing",    "Contribution guidelines for contributing to the X programming language.", `${root_path}/pages/contributing.html`],
  [["guide", "doc", "document", "info", "documentation", "learn"], "Documentations",  "Documentations of the X programming language for every developer.",       `${root_path}/pages/docs.html`],
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
