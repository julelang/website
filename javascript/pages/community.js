const page_title = `X - Community`;

const online_titleHTML = `Online`;
const online_descriptionHTML =
`
Access the community, talk, discuss your questions and solve your problems.
Tell us your ideas and opinions.
`;
const github_titleHTML =
`
<a
  style="color: white;"
  href="https://github.com/the-xlang/x/issues/new/choose">GitHub</a>
`;
const github_descriptionHTML = `Found a bug, or want to give us constructive feedback?`;
const stackoverflow_titleHTML =
`
<a
  style="color: white;"
  href="https://stackoverflow.com/questions/tagged/x">Stack Overflow</a>
`;
const stackoverflow_descriptionHTML = `Engage with your peers and ask questions about X using the tag 'x'`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const online_title = document.getElementById('online-title');
const online_description = document.getElementById('online-description');
const github_title = document.getElementById('github-title');
const github_description = document.getElementById('github-description');
const stackoverflow_title = document.getElementById('stackoverflow-title');
const stackoverflow_description = document.getElementById('stackoverflow-description');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

online_title.innerHTML = online_titleHTML;
online_description.innerHTML = online_descriptionHTML;
github_title.innerHTML = github_titleHTML;
github_description.innerHTML = github_descriptionHTML;
stackoverflow_title.innerHTML = stackoverflow_titleHTML;
stackoverflow_description.innerHTML = stackoverflow_descriptionHTML;


//#endregion SET_CONTENT
