const page_title = `The X Programming Language`;

const startup_panel_contentHTML =
`
<div style="font-size: 40px; font-family: 'OpenSans-Bold'; font-weight: bold;">
  The X Programming Language
</div>
<div style="color: rebeccablue; margin-top: 10px; font-size: 25px;">
X is the <x style="font-family: 'OpenSans-Bold'; font-weight: bold;">simplified, strongly typed<br> and compiled</x> programming language.
</div>
`;
const entry_descriptionHTML =
`
<div style="margin-right: 40px; font-family: 'OpenSans'; font-size: 20px;">
  <div class="sub-title" style="margin-bottom: 30px;">C++ and More</div>
    <div class="text">
      The X source code <strong>transpiles to human readable C++</strong> code.
      A familiar environment for C++ developers, a comfortable start for new developers.
    </div>
  </div>
</div>
<div style="margin-right: 40px;">
  <div class="sub-title" style="margin-bottom: 30px;">Trust and Compliance</div>
  <div class="text">
    The generated C++ code is code that works everywhere and is compatible with all C++ stuff.
    <strong>Develop C++ in a simpler and more readable way.</strong>
  </div>
</div>
<div>
  <div class="sub-title" style="margin-bottom: 30px;">Simplicity</div>
  <div class="text">
    More modern, readable and comfortable than C++ syntax.
    <strong>Simple and maintainable code</strong>, simplicity and functionality.
  </div>
</div>
`;
const pretty_transpile_titleHTML = `Pretty Transpile`;
const pretty_transpile_contentHTML =
`
X produces C++ code that's great, readable, and pretty neat.<br>
You don't need to waste time editing the transpiled code.
<br><br>
<ul>
  <li>Adds information about the transpilation.</li>
  <li>Human readable.</li>
  <li>Splits the code into regions.</li>
  <li>Groups codes by rearranging them.</li>
  <li>Single output file.</li>
</ul>
`;


//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const startup_panel_content = document.getElementById('startup-panel-content');
const entry_description = document.getElementById('entry-description');
const pretty_transpile_title = document.getElementById('pretty-transpile-title');
const pretty_transpile_content = document.getElementById('pretty-transpile-content');

//#endregion GET_ELEMENTS

//#region SET_CONTENT

startup_panel_content.innerHTML = startup_panel_contentHTML;
entry_description.innerHTML = entry_descriptionHTML;
pretty_transpile_title.innerHTML = pretty_transpile_titleHTML;
pretty_transpile_content.innerHTML = pretty_transpile_contentHTML;

//#endregion SET_CONTENT

