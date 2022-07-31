const stdlib_slice_functionsHTML = `
<div class="code">type[Item]
pub append(src []Item, ...items Item) []Item</div>
Creates new required sized slice. Copies all components
of given source slice and appends given components to end of new slice.
Returns new slice, not changes given source slice.
If you want append components to source slice, assign returned slice.

<div class="topic-separator"></div>
<div class="code">type[Item]
pub copy(dest, src []Item)</div>
Copies components of source slice to destination slice.
<br><br>
Special cases are: <br>
<li><x class="inline_code">copy[Item](dest, src) = doesn't nothing if src.empty()</x></li>
<li><x class="inline_code">copy[Item](dest, src) = doesn't nothing if dest.empty()</x></li>
<li><x class="inline_code">copy[Item](dest, src) = length accepts as src.len if dest.len > src.len</x></li>
<li><x class="inline_code">copy[Item](dest, src) = length accepts as dest.len if src.len > dest.len</x></li>

<div class="topic-separator"></div>
<div class="code">@inline
type[Item]
pub make(n int) []Item</div>
Allocated new n sized slice for given data type.
<br><br>
Special cases are: <br>
<li><x class="inline_code">make[Item](n) = nil if n < 0</x></li>
`;

const NAV_stdlib_slice_functions = document.getElementById("functions");

const stdlib_slice_nav = new SideNavigator();
stdlib_slice_nav.navigations = [
    [NAV_stdlib_slice_functions, stdlib_slice_functionsHTML],
];

stdlib_slice_nav.set_events();
stdlib_slice_nav.set_content_url();
