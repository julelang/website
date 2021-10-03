const page_title = `X - 404`;

const codeHTML = `404`;
const titleHTML = `Page Not Found`;
const messageHTML = `
This page is not exist. Please check your URL.
<br>
If you sure this URL is exist before, this page maybe moved or deleted.
`;
const home_buttonHTML = `<a href="index.html" style="color: white; text-decoration: none;">Home</a>`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const code = document.getElementById('code');
const title = document.getElementById('title');
const message = document.getElementById('message');
const home_button = document.getElementById('home-button');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

code.innerHTML = codeHTML;
title.innerHTML = titleHTML;
message.innerHTML = messageHTML;
home_button.innerHTML = home_buttonHTML;

//#endregion SET_CONTENT
