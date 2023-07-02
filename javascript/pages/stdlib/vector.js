const functionsHTML = `
<div class="code">fn new_vector[T](cap: int): Vector[T]</div>
Allocate new vector.

`;

const structsHTML = `
<div class="code">struct Vector[T]</div>
Wrapper for dynamic array. <br>
Uses capacity for performance.
Grows capacity if necessary. <br>
But always allocates more for future pushes.
<br><br>
Does not deallocates itself. <br>
Use the dealloc() method for deallocate.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn len(self): int</div> <br>
Returns length.

<div class="title-separator"></div>
<div class="inline_code">fn cap(self): int</div> <br>
Returns capacity.

<div class="title-separator"></div>
<div class="inline_code">set_len(mut self, n: int)</div> <br>
Sets length. <br>
Sets length to zero if n < 0. <br>
Don't set length if n >= length of vector.

<div class="title-separator"></div>
<div class="inline_code">fn at(mut self, i: int): T</div> <br>
Returns item by index.

<div class="title-separator"></div>
<div class="inline_code">fn dealloc(mut self)</div> <br>
Deallocates heap.

<div class="title-separator"></div>
<div class="inline_code">fn push(mut self, mut items: ...T)</div> <br>
Push items.

<div class="title-separator"></div>
<div class="inline_code">fn push_front(mut self, mut items: ...T)</div> <br>
PUsh items to front of heap.

`;

const functions = document.getElementById("functions");
const structs = document.getElementById("structs");

const nav = new SideNavigator();
nav.navigations = [
    [functions, functionsHTML],
    [structs, structsHTML],
];

nav.set_events();
nav.set_content_url();
