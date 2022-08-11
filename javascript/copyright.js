// This script for set copyright text.

// Start year: 2021-2022

const copyrightHTML =
`
<div style="font-family: 'OpenSans'">
  The Jule Programming Language
  <br>
  Copyright 2021-${new Date().getFullYear()}
</div>
`;

const copyright = document.getElementById('copyright');

copyright.innerHTML = copyrightHTML;
