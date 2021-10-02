const page_title = `X - Code of Conduct`;

const content_titleHTML = `Contributor Covenant Code of Conduct`;
const pledge_titleHTML = `Our Pledge`;
const pledge_contentHTML =
`
In the interest of fostering an open and welcoming environment,
we as contributors and maintainers pledge to making participation in our project and our
community a harassment-free experience for everyone, regardless of age, body size, disability,
ethnicity, sex characteristics, gender identity and expression, level of experience, education,
socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
`;
const standards_titleHTML = `Our Standards`;
const standards_contentHTML =
`
Examples of behavior that contributes to creating a positive environment include:
<ul>
  <li>Using welcoming and inclusive language</li>
  <li>Being respectful of differing viewpoints and experiences</li>
  <li>Gracefully accepting constructive criticism</li>
  <li>Focusing on what is best for the community</li>
</ul>
Showing empathy towards other community members Examples of unacceptable behavior by participants include:
<ul>
    <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
    <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
    <li>Public or private harassment</li>
    <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
    <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
</ul>
`;
const responsibilities_titleHTML = `Our Responsibilities`;
const responsibilities_contentHTML =
`
Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take
appropriate and fair corrective action in response to any instances of unacceptable behavior.
<br><br>
Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits,
issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any
contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.
`;
const enforcement_titleHTML = `Enforcement`;
const enforcement_contentHTML =
`
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at.
All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate
to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.
<br><br>
Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent
repercussions as determined by other members of the project's leadership.
`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const content_title = document.getElementById('content-title');
const pledge_title = document.getElementById('pledge-title');
const pledge_content = document.getElementById('pledge-content');
const standards_title = document.getElementById('standards-title');
const standards_content = document.getElementById('standards-content');
const responsibilities_title = document.getElementById('responsibilities-title');
const responsibilities_content = document.getElementById('responsibilities-content');
const enforcement_title = document.getElementById('enforcement-title');
const enforcement_content = document.getElementById('enforcement-content');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

content_title.innerHTML = content_titleHTML;
pledge_title.innerHTML = pledge_titleHTML;
pledge_content.innerHTML = pledge_contentHTML;
standards_title.innerHTML = standards_titleHTML;
standards_content.innerHTML = standards_contentHTML;
responsibilities_title.innerHTML = responsibilities_titleHTML;
responsibilities_content.innerHTML = responsibilities_contentHTML;
enforcement_title.innerHTML = enforcement_titleHTML;
enforcement_content.innerHTML = enforcement_contentHTML;

//#endregion SET_CONTENT

