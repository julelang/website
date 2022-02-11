const page_title = `X - License`;

const content_titleHTML = `LICENSE`;
const license_textHTML =
`
Copyright (c) ${new Date().getFullYear()}, The X Programming Language
All rights reserved.
<br><br>
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
<br><br>
1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
<br><br>
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
<br><br>
3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.
<br><br>
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const contentTitle = document.getElementById('content-title');
const licenseText = document.getElementById('license-text');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

contentTitle.innerHTML = content_titleHTML;
licenseText.innerHTML = license_textHTML;

//#endregion SET_CONTENT
