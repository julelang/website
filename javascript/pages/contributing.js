const page_title = `X - Contributing`;

const content_titleHTML = `Contributing`;
const rules_titleHTML = `Rules`;
const rules_contentHTML =
`
<ul>
  <li>It is important that the code is written and properly formatted.</li>
  <li>Description lines should be legible and meaningful.</li>
  <li>The code must be properly documented.</li>
  <li>Commit messages should be understandable and expressive.</li>
</ul>
`;
const getfork_titleHTML = `Get Fork`;
const getfork_contentHTML =
`
<a href="https://github.com/the-xlang/x/fork" target="_blank"><button>Fork</button></a>
<br><br>

Once you have your fork, you can work directly. But to make things easier, you can open a branch in your own name.
After making the changes in the fork you want to work with, you can throw a pull request.
<ul>
  <li>Very large changes are difficult to control and understand. Therefore, avoid excessively large PR requests as much as possible.</li>
  <li>Try not to make multiple changes within a single PR, a PR request should only serve one change.</li>
</ul>
`;
const send_pr_titleHTML = `Send Pull Request`;
const send_pr_contentHTML =
`
After making the contribution you want to make, you have reached the stage of sending it as a PR request.
<br>
<br>
Before send a PR;
<ul>
  <li>Be sure to document the necessary places in the code.</li>
  <li>Make sure the code is readable.</li>
</ul>
There are some points to be considered for an understandable PR;
<ul>
  <li>The PR title should be short and concise and give information about the PR.</li>
  <li>Changes should be noted in the PR statement, reviewers should understand the purpose of PR.</li>
  <li>If there are, possible errors and conflicts that may occur in the case of combining the PR should be mentioned.</li>
</ul>
`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const content_title = document.getElementById('content-title');
const rules_title = document.getElementById('rules-title');
const rules_content = document.getElementById('rules-content');
const getfork_title = document.getElementById('getfork-title');
const getfork_content = document.getElementById('getfork-content');
const send_pr_title = document.getElementById('send-pr-title');
const send_pr_content = document.getElementById('send-pr-content');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

content_title.innerHTML = content_titleHTML;
rules_title.innerHTML = rules_titleHTML;
rules_content.innerHTML = rules_contentHTML;
getfork_title.innerHTML = getfork_titleHTML;
getfork_content.innerHTML = getfork_contentHTML;
send_pr_title.innerHTML = send_pr_titleHTML;
send_pr_content.innerHTML = send_pr_contentHTML;

//#endregion SET_CONTENT
